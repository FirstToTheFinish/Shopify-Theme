let isFinished = false;

function captureElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        return Promise.resolve(null);
    }

    // Temporarily make the element and its internal elements visible if they are hidden
    const originalDisplay = element.style.display;
    if (elementId.includes('Text')) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'block';
    }

    const internalElements = element.querySelectorAll('*:not(.center-line)');
    const originalDisplayStyles = [];
    internalElements.forEach(internalElement => {
        originalDisplayStyles.push(internalElement.style.display);
    });

    return html2canvas(element, {
        backgroundColor: null,
        scale: 1, // Maintain the original size without scaling
        logging: true, // Enable logging for debug purposes
        width: element.clientWidth,
        height: element.clientHeight
    }).then(canvas => {
        // Restore original display styles
        element.style.display = originalDisplay;
        internalElements.forEach((internalElement, index) => {
            internalElement.style.display = originalDisplayStyles[index];
        });

        // Apply clipPath to the captured canvas
        const overlay = document.getElementById(elementId.replace('Canvas', 'TextOverlay'));
        if (overlay && overlay.style.clipPath && elementId.includes('Text')) {
            const clipPath = overlay.style.clipPath.replace('path("', '').replace('")', '');

            try {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                const tempCtx = tempCanvas.getContext('2d');

                // Parse the clip path into a series of drawing commands
                const pathCommands = clipPath.split(/(?=[MLQZ])/);
                tempCtx.beginPath();
                for (let cmd of pathCommands) {
                    const parts = cmd.trim().split(/[ ,]+/);
                    const command = parts[0];
                    const params = parts.slice(1).map(parseFloat);
                    switch (command) {
                        case 'M':
                            tempCtx.moveTo(params[0], params[1]);
                            break;
                        case 'L':
                            tempCtx.lineTo(params[0], params[1]);
                            break;
                        case 'Q':
                            tempCtx.quadraticCurveTo(params[0], params[1], params[2], params[3]);
                            break;
                        case 'Z':
                            tempCtx.closePath();
                            break;
                        default:
                            console.error(`Unsupported path command: ${command}`);
                    }
                }
                tempCtx.clip();

                tempCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

                return tempCanvas.toDataURL("image/png");
            } catch (error) {
                console.error(`Error applying clipPath to ${elementId}:`, error);
                return canvas.toDataURL("image/png");
            }
        } else {
            return canvas.toDataURL("image/png");
        }
    }).catch(err => {
        // Restore original display styles in case of error
        element.style.display = originalDisplay;
        internalElements.forEach((internalElement, index) => {
            internalElement.style.display = originalDisplayStyles[index];
        });
        console.error(`Error capturing element ${elementId}:`, err);
        return null;
    });
}

async function previewNow() {
    // Show loading overlay
    document.getElementById('loadingOverlay').style.display = 'block';

    // Hide all other sections and show the preview section
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('preview-section').style.display = 'block';

    document.getElementById('toggleSnapGrid').style.visibility = 'hidden';

    // Hide the left side canvases
    document.getElementById('LeftPeakCanvas').style.display = 'none';
    document.getElementById('LeftValanceCanvas').style.display = 'none';
    document.getElementById('LeftWallCanvas').style.display = 'none';
    document.getElementById('LeftPeakTextOverlay').style.display = 'none';
    document.getElementById('LeftValanceTextOverlay').style.display = 'none';
    document.getElementById('LeftWallTextOverlay').style.display = 'none';

    const previewer = document.getElementById('tentPreviewCanvas');
    const previewImage = document.getElementById('tentPreviewImage');
    document.getElementById('infoTitle').textContent = 'Contact Information';
    
    previewer.style.display = 'none';
    previewImage.style.display = 'none';
    previewImage.src = '';

    document.body.style.cursor = 'progress';

    await delay(100);

    // Initialize the canvas context
        const canvas = document.getElementById('tentPreviewCanvas');
        const ctx = canvas.getContext('2d');
        let imgScale = 0.5; // Adjust scaling as needed
    
        // Define the sides and overlays using the logic from combineSnapshots
        let sides = [];
        let overlays = [];

    if (hasWalls) {
        if (size == 20) {
            sides = [
                { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, x: 110, y: 250, rotation: 0, title: 'Front' },
                { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: 'BackWallCanvas', peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: 'BackWallTextOverlay', x: 110, y: -50, rotation: Math.PI, title: 'Back' },
                { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: 'RightWallCanvas', peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: 'RightWallTextOverlay', x: 340, y: 100, rotation: -Math.PI / 2, title: 'Right' },
                { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: 'LeftWallCanvas', peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: 'LeftWallTextOverlay', x: -120, y: 100, rotation: Math.PI / 2, title: 'Left' }
            ];
        } else if (size == 15) {
            sides = [
                { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, x: 110, y: 250, rotation: 0, title: 'Front' },
                { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: 'BackWallCanvas', peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: 'BackWallTextOverlay', x: 110, y: -50, rotation: Math.PI, title: 'Back' },
                { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: 'RightWallCanvas', peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: 'RightWallTextOverlay', x: 305, y: 100, rotation: -Math.PI / 2, title: 'Right' },
                { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: 'LeftWallCanvas', peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: 'LeftWallTextOverlay', x: -85, y: 100, rotation: Math.PI / 2, title: 'Left' }
            ];
        } else {
            sides = [
                { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, x: 110, y: 250, rotation: 0, title: 'Front' },
                { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: 'BackWallCanvas', peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: 'BackWallTextOverlay', x: 110, y: -50, rotation: Math.PI, title: 'Back' },
                { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: 'RightWallCanvas', peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: 'RightWallTextOverlay', x: 260, y: 100, rotation: -Math.PI / 2, title: 'Right' },
                { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: 'LeftWallCanvas', peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: 'LeftWallTextOverlay', x: -40, y: 100, rotation: Math.PI / 2, title: 'Left' }
            ];
        }
    } else {
        imgScale = 0.75;
        if (size == 20) {
            sides = [
                { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, x: 0, y: 200, rotation: 0, title: 'Front' },
                { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: null, peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: null, x: 0, y: -250, rotation: Math.PI, title: 'Back' },
                { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: null, peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: null, x: 344, y: -25, rotation: -Math.PI / 2, title: 'Right' },
                { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: null, peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: null, x: -344, y: -25, rotation: Math.PI / 2, title: 'Left' }
            ];
        } else if (size == 15) {
            sides = [
                { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, x: 0, y: 200, rotation: 0, title: 'Front' },
                { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: null, peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: null, x: 0, y: -250, rotation: Math.PI, title: 'Back' },
                { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: null, peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: null, x: 294, y: -25, rotation: -Math.PI / 2, title: 'Right' },
                { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: null, peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: null, x: -294, y: -25, rotation: Math.PI / 2, title: 'Left' }
            ];
        } else {
            sides = [
                { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, x: 0, y: 200, rotation: 0, title: 'Front' },
                { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: null, peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: null, x: 0, y: -250, rotation: Math.PI, title: 'Back' },
                { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: null, peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: null, x: 226, y: -25, rotation: -Math.PI / 2, title: 'Right' },
                { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: null, peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: null, x: -226, y: -25, rotation: Math.PI / 2, title: 'Left' }
            ];
        }
    }

    const promises = sides.map(async (side) => {
        const combinedImage = await captureAndCombineSide(side);
        if (combinedImage) {
            const img = new Image();
            img.src = combinedImage;
            return new Promise(resolve => {
                img.onload = () => {
                    ctx.save();
                    ctx.translate(side.x + img.width * imgScale / 2, side.y + img.height * imgScale / 2);
                    ctx.rotate(side.rotation);
                    ctx.drawImage(img, -img.width * imgScale / 2, -img.height * imgScale / 2, img.width * imgScale, img.height * imgScale);
                    ctx.restore();
                    resolve();
                };
            });
        }
    });

    // Wait for all sides to be processed
    Promise.all(promises).then(() => {
        const dataUrl = canvas.toDataURL("image/png");
        const imgElement = document.getElementById('tentPreviewImage');
        imgElement.src = dataUrl;
        imgElement.style.display = 'block';
        document.getElementById('loadingOverlay').style.display = 'none';
        isFinished = true; 
        document.body.style.cursor = 'default';
    }).catch(err => {
        console.error('Error combining snapshots:', err);
    });
}


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

document.addEventListener('DOMContentLoaded', () => {
    // Ensure all overlays are correctly positioned and sized initially
    const sections = ['FrontPeak', 'FrontValance'];
    sections.forEach(section => updateOverlayPositionAndSize(section));
});

async function captureAndCombineSide(sideConfig) {
    const { peakId, valanceId, wallId, peakOverlayId, valanceOverlayId, wallOverlayId, title } = sideConfig;

    const peakImage = await captureElement(peakId);
    const valanceImage = await captureElement(valanceId);
    const wallImage = wallId ? await captureElement(wallId) : null;

    const peakOverlayImage = await captureElement(peakOverlayId);
    const valanceOverlayImage = await captureElement(valanceOverlayId);
    const wallOverlayImage = wallOverlayId ? await captureElement(wallOverlayId) : null;

    // Create the canvas with desired dimensions
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800; // Adjust width as needed
    canvas.height = 600; // Adjust height as needed

    const imgScale = 1; // Adjust scaling as needed
    let yOffset = 0;

    const images = [
        { image: peakImage, overlay: peakOverlayImage, type: 'peak' },
        { image: valanceImage, overlay: valanceOverlayImage, type: 'valance' },
        { image: wallImage, overlay: wallOverlayImage, type: 'wall' }
    ];

    for (const { image, overlay, type } of images) {
        if (image) {
            let valXPos = 0;
            let valYPos = 0;
            const img = new Image();
            img.src = image;
            await new Promise(resolve => {
                img.onload = () => {
                    const xPosition = (canvas.width - img.width * imgScale) / 2;
                    ctx.drawImage(img, xPosition, yOffset, img.width * imgScale, img.height * imgScale);
                    yOffset += img.height * imgScale;
                    valXPos = xPosition;
                    valYPos = yOffset;
                    resolve();
                };
            });

            if (overlay) {
                const overlayImg = new Image();
                overlayImg.src = overlay;
                await new Promise(resolve => {
                    overlayImg.onload = () => {
                        const xPosition = (canvas.width - overlayImg.width * imgScale) / 2;
                        ctx.drawImage(overlayImg, xPosition, yOffset - img.height * imgScale, overlayImg.width * imgScale, overlayImg.height * imgScale);
                        resolve();
                    };
                });
            }

            // Draw the brand logo immediately after the valance is drawn
            if (title.includes('Front') && type === 'valance') {
                console.log("EMBEDING LOGO");
                const brandLogo = new Image();
                brandLogo.src = document.getElementById('ValanceLogo').src;
                brandLogo.width = 25; // Set the width to match the CSS
                brandLogo.height = brandLogo.width * (brandLogo.naturalHeight / brandLogo.naturalWidth); // Maintain aspect ratio

                await new Promise(resolve => {
                    brandLogo.onload = () => {
                        const logoXPosition = valXPos + img.width * imgScale - brandLogo.width - 5;
                        const logoYPosition = valYPos - img.height * imgScale + 5;
                        ctx.drawImage(brandLogo, logoXPosition, logoYPosition, brandLogo.width, brandLogo.height);
                        resolve();
                    };
                });
            }
        }
    }

    return canvas.toDataURL("image/png");
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}