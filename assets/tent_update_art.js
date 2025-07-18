function addArt(sectionId, sectionTitle) {
    const fileInput = document.getElementById(`upload-${sectionId}`);
    const file = fileInput.files[0];

    const combinedOverlayId = `${sectionTitle.replace(' ', '')}TextOverlay`;
    const combinedOverlay = document.getElementById(combinedOverlayId);
    const tentCanvas = document.getElementById(`${sectionTitle.replace(' ', '')}Canvas`);

    // Ensure center lines are present
    if (!combinedOverlay.querySelector('.center-line.horizontal')) {
        combinedOverlay.innerHTML += `
            <div class="center-line horizontal"></div>
            <div class="center-line vertical"></div>`;
    }

    // Update the combined overlay's position and size
    combinedOverlay.style.position = 'absolute';
    combinedOverlay.style.left = tentCanvas.offsetLeft + 'px';
    combinedOverlay.style.top = tentCanvas.offsetTop + 'px';
    combinedOverlay.style.width = tentCanvas.offsetWidth + 'px';
    combinedOverlay.style.height = tentCanvas.offsetHeight + 'px';
    
    combinedOverlay.style.display = 'flex';
    combinedOverlay.style.alignItems = 'center';
    combinedOverlay.style.justifyContent = 'center';

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const artPreview = document.getElementById(`art-preview-${sectionId}`);
            const fileExtension = file.name.split('.').pop().toLowerCase();
            let previewElement;

            if (['jpg', 'jpeg', 'png', 'svg'].includes(fileExtension)) {
                // Create a unique ID for the image container
                const imageId = `image-${Date.now()}`;

                // Display image in the preview area
                previewElement = `
                    <div class="art-container resizable" id="${imageId}-preview" style="position: relative; display: inline-block; margin: 5px;">
                        <img src="${e.target.result}" alt="Art Preview" style="max-width: 115px; height: auto;" onload="this.nextElementSibling.nextElementSibling.style.marginTop = this.offsetHeight + 5 + 'px';">
                        <button class="remove-art" onclick="removeArt('${imageId}')" style="position: absolute; top: 0px; right: 0px; background: red; color: white; cursor: pointer; border: none; border-radius: 3px; font-size: 14px;">&times;</button>
                        <select class="image-size-dropdown" onchange="resizeImage('${imageId}', this.value)" style="width: 100px; font-size: 12px; right: 0px; position: absolute;">
                            <option value="default">Choose Size</option>
                            <option value="valance-3-4">3/4 Valance Image</option>
                            <option value="valance-full">Full Valance Image</option>
                            <option value="peak-partial">Partial Peak Image</option>
                            <option value="peak-full">Full Peak Image</option>
                            <option value="wall">Wall Image</option>
                        </select>
                    </div>`;

                // Create a container div for the image
                const imageContainer = document.createElement('div');
                imageContainer.id = imageId; // Assign the unique ID to the image container
                imageContainer.setAttribute('data-id', imageId); // Add data-id attribute
                imageContainer.className = 'editable-art resizable';
                imageContainer.style.position = 'absolute';
                imageContainer.style.cursor = 'move';
                
                // Create the image element
                const img = new Image();
                img.onload = function() {
                    const aspectRatio = img.naturalHeight / img.naturalWidth;
                    const newWidth = 100;
                    const newHeight = newWidth * aspectRatio;

                    // Set the width to 50px and adjust the height to maintain aspect ratio
                    imageContainer.style.width = newWidth + 'px';
                    imageContainer.style.height = newHeight + 'px';

                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.position = 'absolute';
                    imageContainer.appendChild(img);

                    combinedOverlay.appendChild(imageContainer);

                    // Center the image container within the combinedOverlay
                    const overlayRect = combinedOverlay.getBoundingClientRect();
                    const containerRect = imageContainer.getBoundingClientRect();
                    imageContainer.style.left = (overlayRect.width / 2 - containerRect.width / 2) + 'px';
                    imageContainer.style.top = (overlayRect.height / 2 - containerRect.height / 2) + 'px';

                    makeElementDraggable(imageContainer, combinedOverlay);
                    makeElementResizable(imageContainer, tentCanvas);
                };
                img.src = e.target.result;

            } else {
                previewElement = `<p>Preview not available for this file type.</p>`;
            }

            artPreview.insertAdjacentHTML('beforeend', previewElement);

            // Reset the file input value to allow re-uploading the same file
            fileInput.value = '';
        };
        reader.readAsDataURL(file);

        // Add event listener for selection to the new overlay
        addSelectionListener(combinedOverlay);
    }
}

function makeElementResizable(element, container) {
    let isResizing = false;
    let lastX = 0;
    let lastY = 0;
    let aspectRatio;

    const img = element.querySelector('img');
    if (img) {
        aspectRatio = img.naturalWidth / img.naturalHeight;
    } else {
        console.error('No image found inside the element.');
        return;
    }

    element.addEventListener('mousedown', onMouseDown);

    function onMouseDown(event) {
        if (!event.target.classList.contains('resizable')) return;

        isResizing = true;
        lastX = event.clientX;
        lastY = event.clientY;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(event) {
        if (!isResizing) return;

        const rect = element.getBoundingClientRect();
        const deltaX = event.clientX - lastX;
        const deltaY = event.clientY - lastY;

        let newWidth, newHeight;

        // Allow the mouse jump to influence the size without restricting it too much
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            newWidth = rect.width + deltaX;
            newHeight = newWidth / aspectRatio;
        } else {
            newHeight = rect.height + deltaY;
            newWidth = newHeight * aspectRatio;
        }

        // Update the dimensions directly without clamping
        if (newWidth > 0 && newHeight > 0) {
            element.style.width = `${newWidth}px`;
            element.style.height = `${newHeight}px`;

            lastX = event.clientX;
            lastY = event.clientY;
        }
    }

    function onMouseUp() {
        isResizing = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        const rect = element.getBoundingClientRect();
        let newWidth = rect.width;
        let newHeight = newWidth / aspectRatio;

        if (newWidth > 0 && newHeight > 0) {
            element.style.width = `${newWidth}px`;
            element.style.height = `${newHeight}px`;
        }
    }
}

function makeElementDraggable(element, container) {
    let offsetX = 0, offsetY = 0;
    let isSnappedX = false, isSnappedY = false; // Track snapping state
    const snapThreshold = 10; // Distance within which snapping occurs
    let rect = {};

    element.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('resizable')) {
            return; // Prevent dragging if resizing
        }
        e.preventDefault();
        rect = element.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        const containerRect = container.getBoundingClientRect();
        let newX = e.clientX - offsetX - containerRect.left;
        let newY = e.clientY - offsetY - containerRect.top;

        const containerCenterX = containerRect.width / 2;
        const containerCenterY = containerRect.height / 2;

        const elementCenterX = newX + rect.width / 2;
        const elementCenterY = newY + rect.height / 2;

        if (snapGridEnabled) {
            isSnappedX = Math.abs(elementCenterX - containerCenterX) < snapThreshold;
            isSnappedY = Math.abs(elementCenterY - containerCenterY) < snapThreshold;

            if (isSnappedX) {
                showCenterLine(container, 'vertical');
                newX = containerCenterX - rect.width / 2;
            } else {
                hideCenterLine(container, 'vertical');
            }

            if (isSnappedY) {
                showCenterLine(container, 'horizontal');
                newY = containerCenterY - rect.height / 2;
            } else {
                hideCenterLine(container, 'horizontal');
            }
        }

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    }

    function onMouseUp() {
        hideCenterLines(container);
        isSnappedX = false;
        isSnappedY = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}


function removeArt(imageId) {
    const previewElement = document.getElementById(`${imageId}-preview`);
    const canvasElement = document.getElementById(imageId);
    
    if (previewElement) {
        previewElement.remove();
    }
    
    if (canvasElement) {
        canvasElement.remove();
    }
}

function validateFileInput(event, sectionId) {
    const fileInput = event.target;
    const filePath = fileInput.value;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.svg)$/i;

    // Check if a file is selected
    if (filePath) {
        if (!allowedExtensions.exec(filePath)) {
            showUploadModal();
            fileInput.value = '';
            return false;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // Add event listener for deselection to the document
    document.addEventListener('click', (e) => {
        // Check if the clicked element is one of the three buttons
        const buttons = ['snapGrid', 'horizCenter', 'vertCenter'];
        if (!buttons.includes(e.target.id)) {
            let itemSelected = false;
            document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                if (!el.contains(e.target)) {
                    el.classList.remove('selected');
                    el.classList.remove('selected2');
                }
                else {
                    itemSelected = true;
                }
            });
            toggleCenterButtons(itemSelected);
        }
    });

    let copiedArt = null; // Global variable to store the copied art
     // Add event listener for keydown to delete selected art
     document.addEventListener('keydown', (e) => {
        if (e.key === 'Delete') {
            const selectedElement = document.querySelector('.editable-art.selected, .editable-art.selected2');
            if (selectedElement) {
                const imageId = selectedElement.getAttribute('data-id');
                removeArt(imageId);
            }
        }
    
        if ((e.key === 'c'|| e.key ==='C') && (e.ctrlKey || e.metaKey)) { // Detect Ctrl + C
            const selectedArt = document.querySelector('.editable-art.selected, .editable-art.selected2');
            if (selectedArt) {
                copiedArt = selectedArt.cloneNode(true); // Clone the selected art
                console.log('Art copied:', copiedArt); // For debugging purposes
            }
        }

        if ((e.key === 'v'|| e.key ==='V') && (e.ctrlKey || e.metaKey) && copiedArt) { // Detect Ctrl + V
            const sectionId = sectionsConfig[currentSection-1].id; // You may want to dynamically determine this
            const sectionTitle = sectionsConfig[currentSection-1].title; // Dynamically determine this based on your implementation
            const combinedOverlay = document.getElementById(`${sectionTitle.replace(' ', '')}TextOverlay`);
            const tentCanvas = document.getElementById(`${sectionTitle.replace(' ', '')}Canvas`);
    
            if (combinedOverlay && copiedArt) {
                const newArt = copiedArt.cloneNode(true); // Create a new copy of the art
    
                // Set a new ID for the pasted art
                const newId = `image-${Date.now()}`;
                newArt.id = newId;
                newArt.setAttribute('data-id', newId); // Add data-id attribute
                newArt.classList.add('editable-art', 'resizable');
                newArt.style.position = 'absolute';
                newArt.style.cursor = 'move';
    
                // Offset position slightly to avoid overlapping with the original
                newArt.style.left = `${parseInt(copiedArt.style.left)}px`; 
                newArt.style.top = `${parseInt(copiedArt.style.top)}px`;
    
                // Add the new art to the canvas
                combinedOverlay.appendChild(newArt);
    
                // Ensure it is draggable and resizable
                makeElementDraggable(newArt, combinedOverlay);
                makeElementResizable(newArt, tentCanvas);
                addSelectionListener(combinedOverlay);
    
                // Add the new art to the preview section
                const artPreview = document.getElementById(`art-preview-${sectionId}`);
                if (artPreview) {
                    const previewElement = `
                        <div class="art-container resizable" id="${newId}-preview" style="position: relative; display: inline-block; margin: 5px;">
                            <img src="${newArt.querySelector('img').src}" alt="Art Preview" style="max-width: 115px; height: auto;" onload="this.nextElementSibling.nextElementSibling.style.marginTop = this.offsetHeight + 5 + 'px';">
                            <button class="remove-art" onclick="removeArt('${newId}')" style="position: absolute; top: 0px; right: 0px; background: red; color: white; cursor: pointer; border: none; border-radius: 3px; font-size: 14px;">&times;</button>
                            <select class="image-size-dropdown" onchange="resizeImage('${newId}', this.value)" style="width: 100px; font-size: 12px; right: 0px; position: absolute;">
                                <option value="default">Choose Size</option>
                                <option value="valance-3-4">3/4 Valance Image</option>
                                <option value="valance-full">Full Valance Image</option>
                                <option value="peak-partial">Partial Peak Image</option>
                                <option value="peak-full">Full Peak Image</option>
                                <option value="wall">Wall Image</option>
                            </select>
                        </div>`;
                    artPreview.insertAdjacentHTML('beforeend', previewElement);
                }
    
                console.log('Art pasted:', newArt); // For debugging purposes
            }
        }
    });

});

// Function to add selection listener to an overlay
function addSelectionListener(overlay) {
    overlay.addEventListener('click', (e) => {
        let target = e.target;
        while (target !== overlay) {
            if (target.classList.contains('editable-art') || target.classList.contains('editable-text')) {
                e.stopPropagation(); // Prevent event from bubbling up
                document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                    el.classList.remove('selected');
                    el.classList.remove('selected2');
                });

                const textOverlay = target.closest('.text-overlay');
                if (textOverlay) {
                    const canvasId = textOverlay.id.replace('TextOverlay', 'Canvas');
                    const canvas = document.getElementById(canvasId);
                    if (canvas) {
                        const context = canvas.getContext('2d');
                        const canvasColor = context.fillStyle;
                        let flag = 0;

                        switch (canvasColor) {
                            case '#ffffff':
                            case '#c2c2c2':
                            case '#c0c494':
                            case '#ffbd0d':
                            case '#fce60d':
                                target.classList.add('selected');
                                toggleCenterButtons(true);
                                flag = 1;
                                break;
                            case '#060808':
                            case '#8d8c8c':
                            case '#552132':
                            case '#862838':
                            case '#c52c2c':
                            case '#da4b12':
                            case '#344e30':
                            case '#1b234b':
                            case '#73519e':
                            case '#2f5fa7':
                            case '#44b15c':
                            case '#8fa9dd':
                                target.classList.add('selected2');
                                toggleCenterButtons(true);
                                flag = 1;
                                break;
                        }

                        //Custom Color for Canvas
                        if(flag == 0){
                            const rgb = hexToRgb(canvasColor);

                            // Calculate brightness (perceived brightness)
                            const brightness = Math.sqrt(
                                0.299 * (rgb.r * rgb.r) +
                                0.587 * (rgb.g * rgb.g) +
                                0.114 * (rgb.b * rgb.b)
                            );

                            // Choose class based on brightness
                            if (brightness > 150) { // Adjust this threshold as needed
                                target.classList.add('selected');
                            } else {
                                target.classList.add('selected2');
                            }
                        }
                    }
                }

                toggleCenterButtons(true); // Show center buttons when an item is selected
                return;
            }
            target = target.parentElement;
        }
    });
}

function hexToRgb(hex) {
    // Remove the leading # if present
    hex = hex.replace(/^#/, '');

    // Convert 3-digit HEX to 6-digit HEX
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

function resizeImage(imageId, selectedSize) {
    const imageContainer = document.getElementById(imageId); // Get the image container
    const img = imageContainer.querySelector('img'); // Get the image inside the container
    const sectionTitle = sectionsConfig[currentSection-1].title;
    const combinedOverlayId = `${sectionTitle.replace(' ', '')}TextOverlay`;
    const combinedOverlay = document.getElementById(combinedOverlayId);

    // Set default values for container's width and height based on the selected option
    let containerHeight;
    switch (selectedSize) {
        case 'valance-3-4':
            containerHeight = 20; // Height in px
            break;
        case 'valance-full':
            containerHeight = 27;
            break;
        case 'peak-partial':
            containerHeight = 40;
            break;
        case 'peak-full':
            containerHeight = 70;
            break;
        case 'wall':
            containerHeight = 100;
            break;
        default:
            containerHeight = img.naturalHeight; // Default to original height if no selection
            break;
    }

    // Adjust the container's height, width auto-adjusts based on aspect ratio
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const containerWidth = containerHeight * aspectRatio;

    imageContainer.style.height = `${containerHeight}px`;
    imageContainer.style.width = `${containerWidth}px`;

    // Center the image on the canvas
    const overlayRect = combinedOverlay.getBoundingClientRect();
    const containerRect = imageContainer.getBoundingClientRect();
    
    // Calculate center position
    const centeredLeft = (overlayRect.width / 2) - (containerRect.width / 2);
    const centeredTop = (overlayRect.height / 2) - (containerRect.height / 2);
    
    // Apply centered position
    imageContainer.style.left = `${centeredLeft}px`;
    imageContainer.style.top = `${centeredTop}px`;

    console.log(`Container ${imageId} resized to height: ${containerHeight}px, width: ${containerWidth}px`);
}

