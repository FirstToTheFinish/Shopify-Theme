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

// === Get Side Configs ===
function getSidesConfiguration(hasWalls, size) {
    const scaleUp = 1.5; // this will increase image size in preview
    const base = (id, x, y, rotation, title) => ({
        id, x, y, rotation, scale: scaleUp, title
    });

    if (hasWalls) {
        return [
            base('FrontPeakCanvas',     600, 200, 0,           'Front'),
            base('FrontValanceCanvas',  600, 300, 0,           'Front'),
            base('BackPeakCanvas',      600, 700, Math.PI,     'Back'),
            base('BackValanceCanvas',   600, 800, Math.PI,     'Back'),
            base('BackWallCanvas',      600, 900, Math.PI,     'Back'),

            base('RightPeakCanvas',     950, 500, -Math.PI/2,  'Right'),
            base('RightValanceCanvas',  1000, 500, -Math.PI/2, 'Right'),
            base('RightWallCanvas',     1050, 500, -Math.PI/2, 'Right'),

            base('LeftPeakCanvas',      250, 500, Math.PI/2,   'Left'),
            base('LeftValanceCanvas',   200, 500, Math.PI/2,   'Left'),
            base('LeftWallCanvas',      150, 500, Math.PI/2,   'Left')
        ];
    } else {
        return [
            base('FrontPeakCanvas',     600, 250, 0,           'Front'),
            base('FrontValanceCanvas',  600, 350, 0,           'Front'),
            base('BackPeakCanvas',      600, 750, Math.PI,     'Back'),
            base('BackValanceCanvas',   600, 850, Math.PI,     'Back'),

            base('RightPeakCanvas',     950, 500, -Math.PI/2,  'Right'),
            base('RightValanceCanvas',  1000, 500, -Math.PI/2, 'Right'),

            base('LeftPeakCanvas',      250, 500, Math.PI/2,   'Left'),
            base('LeftValanceCanvas',   200, 500, Math.PI/2,   'Left')
        ];
    }
}

async function previewNow() {
    document.getElementById('loadingOverlay').style.display = 'block';
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById('preview-section').style.display = 'block';
    document.getElementById('toggleSnapGrid').style.visibility = 'hidden';

    // Hide the left side canvases
    document.getElementById('LeftPeakCanvas').style.display = 'none';
    document.getElementById('LeftValanceCanvas').style.display = 'none';
    document.getElementById('LeftWallCanvas').style.display = 'none';
    document.getElementById('LeftPeakTextOverlay').style.display = 'none';
    document.getElementById('LeftValanceTextOverlay').style.display = 'none';
    document.getElementById('LeftWallTextOverlay').style.display = 'none';

    const previewCanvas = document.getElementById('tentPreviewCanvas');
    const previewImage = document.getElementById('tentPreviewImage');
    const ctx = previewCanvas.getContext('2d');
    previewCanvas.width = 1200;
    previewCanvas.height = 900;
    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    document.getElementById('infoTitle').textContent = 'Contact Information';
    previewCanvas.style.display = 'none';
    previewImage.style.display = 'none';
    previewImage.src = '';

    await delay(100);

    const sides = getSidesConfiguration(hasWalls, size);
    const imgScale = 0.75;

    for (const side of sides) {
        const { peakId, valanceId, wallId, peakOverlayId, valanceOverlayId, wallOverlayId, x, y, rotation, title } = side;
    
        const layers = [
            { id: peakId, overlayId: peakOverlayId },
            { id: valanceId, overlayId: valanceOverlayId },
            wallId ? { id: wallId, overlayId: wallOverlayId } : null
        ].filter(Boolean);
    
        for (const { id, overlayId } of layers) {
            const sourceCanvas = document.getElementById(id);
            if (!sourceCanvas || sourceCanvas.width === 0 || sourceCanvas.height === 0) {
                console.warn(`Skipping ${id}: canvas is empty or not ready.`);
                continue;
            }
    
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = sourceCanvas.width;
            tempCanvas.height = sourceCanvas.height;
            const tempCtx = tempCanvas.getContext('2d');
    
            // Draw base canvas
            tempCtx.drawImage(sourceCanvas, 0, 0);
    
            // Draw overlay if visible and sized
            const overlayEl = document.getElementById(overlayId);
            if (overlayEl && overlayEl.offsetWidth > 0 && overlayEl.offsetHeight > 0) {
                const overlayClone = overlayEl.cloneNode(true);
                overlayClone.style.display = 'block';
                overlayClone.style.position = 'absolute';
                overlayClone.style.top = '0px';
                overlayClone.style.left = '0px';
                overlayClone.style.pointerEvents = 'none';
                document.body.appendChild(overlayClone);
    
                try {
                    const overlayCanvas = await html2canvas(overlayClone, {
                        backgroundColor: null,
                        scale: 1,
                        logging: false,
                        width: overlayEl.clientWidth,
                        height: overlayEl.clientHeight
                    });
    
                    if (overlayCanvas.width > 0 && overlayCanvas.height > 0) {
                        tempCtx.drawImage(overlayCanvas, 0, 0);
                    } else {
                        console.warn(`Overlay canvas for ${overlayId} had zero width/height`);
                    }
                } catch (err) {
                    console.error(`Failed to capture overlay ${overlayId}:`, err);
                } finally {
                    document.body.removeChild(overlayClone);
                }
            }
    
            // Safely draw to the main preview
            try {
                const img = await loadImage(tempCanvas.toDataURL("image/png"));

                // Determine adjusted coordinates for center-based drawing
                const centerX = x + (img.width * imgScale) / 2;
                const centerY = y + (img.height * imgScale) / 2;

                // Draw canvas content with rotation and scaling
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(rotation);
                ctx.drawImage(
                    img,
                    -(img.width * imgScale) / 2,
                    -(img.height * imgScale) / 2,
                    img.width * imgScale,
                    img.height * imgScale
                );
                ctx.restore();

                // === Logo Layer (Front Valance Only) ===
                if (title === 'Front' && id.includes('Valance')) {
                    const logo = document.getElementById('ValanceLogo');
                    if (logo && logo.complete && logo.naturalWidth > 0) {
                        const logoImg = await loadImage(logo.src);
                        const logoWidth = 25;
                        const logoHeight = logoWidth * (logoImg.height / logoImg.width);

                        // Offset logo relative to drawn image (already rotated)
                        const logoX = centerX - (logoWidth / 2);
                        const logoY = centerY - (img.height * imgScale) / 2 + 10;

                        ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
                    }
                }
            } catch (err) {
                console.error(`Error drawing image for ${id}:`, err);
            }
        }    
    }

    previewImage.src = previewCanvas.toDataURL("image/png");
    previewImage.style.display = 'block';
    document.getElementById('loadingOverlay').style.display = 'none';
    isFinished = true;
    document.body.style.cursor = 'default';
}

