let isFinished = false;

function goBackToSections() {
    if(isFinished){
        // Hide the preview section and show the sections container
        document.getElementById('preview-section').style.display = 'none';
        document.getElementById('sections-container').style.display = 'block';
        document.getElementById('loadingOverlay').style.display = 'none';
        document.getElementById('ValanceLogo2').style.display = 'none';
        document.getElementById('toggleSnapGrid').style.visibility = 'visible'; 
        const previewer = document.getElementById('tentPreviewCanvas');
        const previewImage = document.getElementById('tentPreviewImage');
        document.getElementById('infoTitle').textContent = 'Select Options';
        previewer.style.display = 'none';
        previewImage.style.display = 'none';
        showSection(currentSection);
        isFinished = false;
    }
}

function gatherSectionInformation(sectionsConfig) {
    const sectionData = sectionsConfig.map(section => {
        const selectedColor = document.getElementById(`selected-color-${section.id}`).textContent;
        const text = document.getElementById(`text-input-${section.id}`).value.trim();
        const fontStyle = document.querySelector(`#font-style-${section.id}`).previousElementSibling.textContent.trim();
        const fontColor = document.getElementById(`font-color-${section.id}`).textContent.trim();
        const outlineColor = document.getElementById(`outline-color-${section.id}`).textContent.trim();
        const images = Array.from(document.querySelectorAll(`#art-preview-${section.id} img`)).map(img => img.src);
        const notes = document.getElementById(`notes-${section.id}`).value.trim();

        return {
            sectionId: section.id,
            sectionTitle: section.title,
            selectedColor,
            text,
            fontStyle,
            fontColor,
            outlineColor,
            images,
            notes
        };
    });

    // Gather contact information
    const contactInformation = {
        email: document.getElementById('email').value.trim(),
        userName: document.getElementById('userName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        schoolClub: document.getElementById('schoolClub').value.trim(),
        street: document.getElementById('street').value.trim(),
        city: document.getElementById('city').value.trim(),
        state: document.getElementById('state').value.trim(),
        zip: document.getElementById('zip').value.trim(),
        priority: document.getElementById('priority').value.trim(),
        tentName: document.getElementById('Tent-Name').value.trim()
    };

    const previewURL = document.getElementById('tentPreviewImage').src;

    return { sectionData, contactInformation, previewURL };
}

async function submitForm() {
    let pdfFinished = false;
    if (validateForm()) {
        const { sectionData, contactInformation, previewURL } = gatherSectionInformation(sectionsConfig);
        document.getElementById('loadingOverlay2').style.display = 'block';
        document.body.style.cursor = 'progress';

        pdfFinished = await createPdf(sectionData, contactInformation, previewURL);
        if(pdfFinished){
            if(contactInformation.priority.includes("Yes")){
                alert("Design has successfully submitted. A customer service representative will reach out to you within 1-2 business days. Thank you!");
            }
            else{
                alert("Tent customization is complete. Feel free to send the pdf to customer_service@fttf.com whenever you are ready with your order. Thank you!");
            }
            window.location.href = 'index.asp';
        }
    }
}

// === Helper Functions ===
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

// === DOMContentLoaded Initialization ===
document.addEventListener('DOMContentLoaded', () => {
    const sections = ['FrontPeak', 'FrontValance'];
    sections.forEach(section => updateOverlayPositionAndSize(section));
});

// === Main Preview Function ===
async function previewNow() {
    document.getElementById('loadingOverlay').style.display = 'block';
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById('preview-section').style.display = 'block';
    document.getElementById('toggleSnapGrid').style.visibility = 'hidden';

    // Hide left canvases
    ['LeftPeakCanvas', 'LeftValanceCanvas', 'LeftWallCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay', 'LeftWallTextOverlay']
        .forEach(id => document.getElementById(id).style.display = 'none');

    const previewer = document.getElementById('tentPreviewCanvas');
    const previewImage = document.getElementById('tentPreviewImage');
    document.getElementById('infoTitle').textContent = 'Contact Information';

    previewer.style.display = 'none';
    previewImage.style.display = 'none';
    previewImage.src = '';

    document.body.style.cursor = 'progress';
    await delay(100);

    const canvas = document.getElementById('tentPreviewCanvas');
    const ctx = canvas.getContext('2d');
    let imgScale = hasWalls ? 0.5 : 0.75;

    const sides = getSidesConfiguration(hasWalls, size);

    const promises = sides.map(async (side) => {
        const combinedImage = await captureAndCombineSide(side);
        if (!combinedImage) return;

        const img = await loadImage(combinedImage);
        ctx.save();
        ctx.translate(side.x + img.width * imgScale / 2, side.y + img.height * imgScale / 2);
        ctx.rotate(side.rotation);
        ctx.drawImage(img, -img.width * imgScale / 2, -img.height * imgScale / 2, img.width * imgScale, img.height * imgScale);
        ctx.restore();
    });

    await Promise.all(promises);

    previewImage.src = canvas.toDataURL("image/png");
    previewImage.style.display = 'block';
    document.getElementById('loadingOverlay').style.display = 'none';
    isFinished = true;
    document.body.style.cursor = 'default';
}

// === Capture Element ===
function captureElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return Promise.resolve(null);

    const originalDisplay = element.style.display;
    element.style.display = elementId.includes('Text') ? 'flex' : 'block';

    const internalElements = element.querySelectorAll('*:not(.center-line)');
    const originalDisplayStyles = Array.from(internalElements).map(el => el.style.display);

    return html2canvas(element, {
        backgroundColor: null,
        scale: 1,
        logging: false,
        width: element.clientWidth,
        height: element.clientHeight
    }).then(canvas => {
        // Restore styles
        element.style.display = originalDisplay;
        internalElements.forEach((el, i) => el.style.display = originalDisplayStyles[i]);

        // Clip if necessary
        const overlay = document.getElementById(elementId.replace('Canvas', 'TextOverlay'));
        if (overlay && overlay.style.clipPath && elementId.includes('Text')) {
            try {
                const clipPath = overlay.style.clipPath.replace('path("', '').replace('")', '');
                const pathCommands = clipPath.split(/(?=[MLQZ])/);

                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                const tempCtx = tempCanvas.getContext('2d');

                tempCtx.beginPath();
                for (let cmd of pathCommands) {
                    const parts = cmd.trim().split(/[ ,]+/);
                    const command = parts[0];
                    const params = parts.slice(1).map(parseFloat);
                    switch (command) {
                        case 'M': tempCtx.moveTo(...params); break;
                        case 'L': tempCtx.lineTo(...params); break;
                        case 'Q': tempCtx.quadraticCurveTo(...params); break;
                        case 'Z': tempCtx.closePath(); break;
                        default: console.error(`Unsupported path: ${command}`);
                    }
                }
                tempCtx.clip();
                tempCtx.drawImage(canvas, 0, 0);
                return tempCanvas.toDataURL("image/png");
            } catch (err) {
                console.error(`clipPath error for ${elementId}:`, err);
                return canvas.toDataURL("image/png");
            }
        } else {
            return canvas.toDataURL("image/png");
        }
    }).catch(err => {
        element.style.display = originalDisplay;
        internalElements.forEach((el, i) => el.style.display = originalDisplayStyles[i]);
        console.error(`Error capturing ${elementId}:`, err);
        return null;
    });
}

// === Capture and Combine Side ===
async function captureAndCombineSide(sideConfig) {
    const { peakId, valanceId, wallId, peakOverlayId, valanceOverlayId, wallOverlayId, title } = sideConfig;

    const [peakImage, valanceImage, wallImage] = await Promise.all([
        captureElement(peakId),
        captureElement(valanceId),
        wallId ? captureElement(wallId) : null
    ]);

    const [peakOverlayImage, valanceOverlayImage, wallOverlayImage] = await Promise.all([
        captureElement(peakOverlayId),
        captureElement(valanceOverlayId),
        wallOverlayId ? captureElement(wallOverlayId) : null
    ]);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    const imgScale = 1;
    let yOffset = 0;
    const images = [
        { image: peakImage, overlay: peakOverlayImage, type: 'peak' },
        { image: valanceImage, overlay: valanceOverlayImage, type: 'valance' },
        { image: wallImage, overlay: wallOverlayImage, type: 'wall' }
    ];

    for (const { image, overlay, type } of images) {
        if (!image) continue;

        const img = await loadImage(image);
        const xPos = (canvas.width - img.width * imgScale) / 2;
        const yPos = yOffset;

        ctx.drawImage(img, xPos, yOffset, img.width * imgScale, img.height * imgScale);
        yOffset += img.height * imgScale;

        if (overlay) {
            const overlayImg = await loadImage(overlay);
            ctx.drawImage(overlayImg, xPos, yPos, overlayImg.width * imgScale, overlayImg.height * imgScale);
        }

        if (title.includes('Front') && type === 'valance') {
            const logoElement = document.getElementById('ValanceLogo');
            if (logoElement && logoElement.complete && logoElement.naturalWidth > 0) {
                const logoImg = await loadImage(logoElement.src);
                const logoWidth = 25;
                const logoHeight = logoWidth * (logoImg.height / logoImg.width);
                ctx.drawImage(logoImg, xPos + img.width * imgScale - logoWidth - 5, yPos + 5, logoWidth, logoHeight);
            }
        }
    }

    return canvas.toDataURL("image/png");
}

// === Get Side Configs ===
function getSidesConfiguration(hasWalls, size) {
    const base = (peak, val, wall, pO, vO, wO, x, y, r, title) => ({
        peakId: peak, valanceId: val, wallId: wall,
        peakOverlayId: pO, valanceOverlayId: vO, wallOverlayId: wO,
        x, y, rotation: r, title
    });

    if (hasWalls) {
        const config = size === 20 ? [110, -50, 340, -120] : size === 15 ? [110, -50, 305, -85] : [110, -50, 260, -40];
        return [
            base('FrontPeakCanvas', 'FrontValanceCanvas', null, 'FrontPeakTextOverlay', 'FrontValanceTextOverlay', null, config[0], 250, 0, 'Front'),
            base('BackPeakCanvas', 'BackValanceCanvas', 'BackWallCanvas', 'BackPeakTextOverlay', 'BackValanceTextOverlay', 'BackWallTextOverlay', config[1], -50, Math.PI, 'Back'),
            base('RightPeakCanvas', 'RightValanceCanvas', 'RightWallCanvas', 'RightPeakTextOverlay', 'RightValanceTextOverlay', 'RightWallTextOverlay', config[2], 100, -Math.PI / 2, 'Right'),
            base('LeftPeakCanvas', 'LeftValanceCanvas', 'LeftWallCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay', 'LeftWallTextOverlay', config[3], 100, Math.PI / 2, 'Left')
        ];
    } else {
        const config = size === 20 ? [344] : size === 15 ? [294] : [226];
        return [
            base('FrontPeakCanvas', 'FrontValanceCanvas', null, 'FrontPeakTextOverlay', 'FrontValanceTextOverlay', null, 0, 200, 0, 'Front'),
            base('BackPeakCanvas', 'BackValanceCanvas', null, 'BackPeakTextOverlay', 'BackValanceTextOverlay', null, 0, -250, Math.PI, 'Back'),
            base('RightPeakCanvas', 'RightValanceCanvas', null, 'RightPeakTextOverlay', 'RightValanceTextOverlay', null, config[0], -25, -Math.PI / 2, 'Right'),
            base('LeftPeakCanvas', 'LeftValanceCanvas', null, 'LeftPeakTextOverlay', 'LeftValanceTextOverlay', null, -config[0], -25, Math.PI / 2, 'Left')
        ];
    }
}
