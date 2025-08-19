function addArt(sectionId, sectionTitle) {
    const fileInput = document.getElementById(`upload-${sectionId}`);
    const file = fileInput.files[0];

    const combinedOverlayId = `${sectionTitle}OverlayCanvas`;
    const combinedOverlay = document.getElementById(combinedOverlayId);
    let uniformCanvas;
    if(sectionTitle === "Front"){
       uniformCanvas = document.getElementById(`TankTopCanvas`);
    }
    else{
        uniformCanvas = document.getElementById(`TankTop${sectionTitle}Canvas`);
    }

        // Ensure center lines are present
        if (!combinedOverlay.querySelector('.center-line.horizontal')) {
            if(itDescript.toUpperCase().includes("COMPRESSION")){
                combinedOverlay.innerHTML += `
                <div class="center-line vertical" style="top: 100px; left: 317px; height: 800px; width: 1px;"></div>
                <div class="center-line horizontal"style="left: 0px; top: 300px; width: 600px; height: 1px;"></div>`;
            }
            else{
                combinedOverlay.innerHTML += `
                <div class="center-line vertical" style="top: 100px; left: 340px; height: 800px; width: 1px;"></div>
                <div class="center-line horizontal"style="left: 0px; top: 300px; width: 600px; height: 1px;"></div>`;
            }
        }

    // Update the combined overlay's position and size
    combinedOverlay.style.position = 'absolute';
    
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
                const imageId = `image-${sectionId}-${Date.now()}`;

                // Display image in the preview area
                previewElement = `
                    <div class="art-container resizable" id="${imageId}-preview" style="position: relative; display: inline-block; margin: 5px;" draggable="true" ondragstart="onDragStart(event)" ondragover="onDragOver(event)"  ondragleave="onDragLeave(event)" ondrop="onDrop(event)" ondragend="onDragEnd(event)">
                        <img src="${e.target.result}" alt="Art Preview" style="max-width: 115px; height: auto;">
                        <button class="remove-art" onclick="removeArt('${imageId}')">&times;</button>
                        <div class="custom-dropdown2">
                            <button type="button" id="selected-image-size-${imageId}" class="custom-dropdown-button" onclick="toggleDropdown('image-size-${imageId}')">
                                Choose Size
                                <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                        <div class="custom-dropdown-content" id="image-size-${imageId}" style="">
                                <div onclick="selectImageSizeOption('${imageId}', 'valance-3-4', '3/4 Valance Image')">3/4 Valance Image</div>
                                <div onclick="selectImageSizeOption('${imageId}', 'valance-full', 'Full Valance Image')">Full Valance Image</div>
                                <div onclick="selectImageSizeOption('${imageId}', 'peak-partial', 'Partial Peak Image')">Partial Peak Image</div>
                                <div onclick="selectImageSizeOption('${imageId}', 'peak-full', 'Full Peak Image')">Full Peak Image</div>
                        <div onclick="selectImageSizeOption('${imageId}', 'wall', 'Wall Image')">Wall Image</div>
                            </div>
                        </div>
                    </div>`;

                // Create a container div for the image
                const imageContainer = document.createElement('div');
                imageContainer.id = imageId; // Assign the unique ID to the image container
                imageContainer.setAttribute('data-id', imageId); // Add data-id attribute
                imageContainer.className = 'editable-art resizable';
                imageContainer.style.position = 'absolute';
                imageContainer.style.cursor = 'move';

                imageContainer.addEventListener('pointerdown', () => {
                    const onPointerUp = () => {
                        document.removeEventListener('pointerup', onPointerUp);
        
                        document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                            el.classList.remove('selected');
                            el.classList.remove('selected2');
                        });
        
                        if(currentTab !== 'text-art'){
                            switchTab('text-art');
                        } 
        
                        if(imageContainer.id.includes('section1')){
                            currentSection = 1;
                        }
                        else{
                            currentSection = 2;
                        }
        
                        showSection(currentSection);
                        textBoxColor(combinedOverlay, imageContainer);
                    };
                
                    document.addEventListener('pointerup', onPointerUp);
                });
                
                // Create the image element
                const img = new Image();
                img.onload = function() {
                    const aspectRatio = img.naturalHeight / img.naturalWidth;
                    const newWidth = Math.min(img.naturalWidth, 206)
                    const newHeight = newWidth * aspectRatio;

                    imageContainer.style.width = newWidth + 'px';
                    imageContainer.style.height = newHeight + 'px';

                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.position = 'absolute';
                    imageContainer.appendChild(img);

                    if(itDescript.toUpperCase().includes("COMPRESSION")){
                        imageContainer.style.left = `${(317 - newWidth / 2)}px`
                    }
                    else{
                        imageContainer.style.left = `${(340 - newWidth / 2)}px`
                    }
                    
                    imageContainer.style.top = `${350 - newHeight / 2}px`;

                    combinedOverlay.appendChild(imageContainer);


                    makeElementDraggable(imageContainer, combinedOverlay);
                    makeElementResizable(imageContainer, uniformCanvas);
                };
                img.src = e.target.result;


            } else {
                previewElement = `<p>Preview not available for this file type.</p>`;
            }

            artPreview.insertAdjacentHTML('afterbegin', previewElement);
            const artOrderLabel = document.getElementById(`art-order-label-${sectionId}`);
            if (artOrderLabel && artPreview.children.length > 0) {
                artOrderLabel.style.display = 'block';
            }

            // Reset the file input value to allow re-uploading the same file
            fileInput.value = '';
        };
        reader.readAsDataURL(file);
    }
}

function selectImageSizeOption(imageId, value, label) {
    // Update label
    document.getElementById(`selected-image-size-${imageId}`).innerHTML = label + `<svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>`;
  
    // Close dropdown
    document.getElementById(`image-size-${imageId}`).classList.remove('show');
  
    // Call your original resizing logic
    resizeImage(imageId, value);
}
  

let draggedElement = null;
let dropIndicator = null;

function syncOverlayOrder(previewContainer) {
    const overlay = document.getElementById(`${sectionsConfig[currentSection - 1].title.replace(' ', '')}TextOverlay`);
    if (!overlay) return;

    // Step 1: Cache all overlay art elements by data-id
    const overlayArtMap = new Map();
    const existingOverlayArts = Array.from(overlay.querySelectorAll('.editable-art.resizable'));
    existingOverlayArts.forEach(el => {
        const id = el.getAttribute('data-id');
        if (id) overlayArtMap.set(id, el);
    });

    // Step 2: Remove all from DOM
    existingOverlayArts.forEach(el => overlay.removeChild(el));

    // Step 3: Determine order based on preview
    const orderedPreviewIds = Array.from(previewContainer.children)
        .filter(child => child.id.endsWith('-preview'))
        .map(child => child.id.replace('-preview', ''));

    // Step 4: Re-add to overlay in reverse to match correct stacking order
    for (let i = orderedPreviewIds.length - 1; i >= 0; i--) {
        const id = orderedPreviewIds[i];
        const overlayEl = overlayArtMap.get(id);
        if (overlayEl) {
            overlay.appendChild(overlayEl);
        }
    }
}

function onDragStart(event) {
    draggedElement = event.currentTarget;
    draggedElement.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', '');

    // Clone for ghost image
    const clone = draggedElement.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.top = '-1000px';
    clone.style.left = '-1000px';
    clone.style.width = getComputedStyle(draggedElement).width;
    document.body.appendChild(clone);

    event.dataTransfer.setDragImage(clone, 0, 0);

    // Remove clone after it's used
    setTimeout(() => document.body.removeChild(clone), 0);
}

function onDragOver(event) {
    event.preventDefault();
    const target = event.target.closest('.art-container');
    if (!target || target === draggedElement) return;

    const previewContainer = target.parentElement;
    const children = Array.from(previewContainer.children);
    const draggedIndex = children.indexOf(draggedElement);
    const targetIndex = children.indexOf(target);

    if (draggedIndex < 0 || targetIndex < 0) return;

    // Animate the move
    animateSwap(draggedElement, target);

    // Reorder DOM
    if (draggedIndex < targetIndex) {
        previewContainer.insertBefore(draggedElement, target.nextSibling);
    } else {
        previewContainer.insertBefore(draggedElement, target);
    }
}


function onDrop(event) {
    event.preventDefault();

    const container = event.currentTarget.parentNode;

    if (dropIndicator && draggedElement) {
        container.insertBefore(draggedElement, dropIndicator);
    }

    removeDropIndicator();
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
        draggedElement = null;
    }
}

function onDragLeave(event) {
    removeDropIndicator();
}

function onDragEnd(event) {
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
        draggedElement = null;
    }
}

// Add this helper function for smooth animation
function animateSwap(fromEl, toEl) {
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const deltaX = fromRect.left - toRect.left;
    const deltaY = fromRect.top - toRect.top;

    // Apply transition style
    toEl.style.transition = 'transform 200ms ease';
    toEl.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    requestAnimationFrame(() => {
        toEl.style.transform = 'translate(0, 0)';
    });

    // Cleanup after transition ends
    toEl.addEventListener('transitionend', function handleTransitionEnd() {
        toEl.style.transition = '';
        toEl.style.transform = '';
        toEl.removeEventListener('transitionend', handleTransitionEnd);
    });
}

function removeDropIndicator() {
    if (dropIndicator && dropIndicator.parentNode) {
        dropIndicator.parentNode.removeChild(dropIndicator);
        dropIndicator = null;
    }

    const container = event.currentTarget.parentNode;
    syncOverlayOrder(container); 
    console.log("reorder complete");
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

        if (animationFrame) cancelAnimationFrame(animationFrame);

        // Allow the mouse jump to influence the size without restricting it too much
        animationFrame = requestAnimationFrame(() => {
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
        });
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
        if (animationFrame) cancelAnimationFrame(animationFrame);
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

        // Calculate the element's center
        const elementCenterX = newX + element.offsetWidth / 2;
        const elementCenterY = newY + element.offsetHeight / 2;

        if (snapGridEnabled) {
            if(itDescript.toUpperCase().includes("COMPRESSION")){
                isSnappedX = Math.abs(elementCenterX - 317) < snapThreshold;
            }
            else{
                isSnappedX = Math.abs(elementCenterX - 340) < snapThreshold;
            }
            isSnappedY = Math.abs(elementCenterY - 300) < snapThreshold;

            if (isSnappedX) {
                showCenterLine(container, 'vertical');
                if(itDescript.toUpperCase().includes("COMPRESSION")){
                    newX = 317 - element.offsetWidth / 2;
                }
                else{
                    newX = 340 - element.offsetWidth / 2;
                }
                
            } else {
                hideCenterLine(container, 'vertical');
            }

            if (isSnappedY) {
                showCenterLine(container, 'horizontal');
                newY = 300 - element.offsetHeight / 2;
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
    const artPreview = document.getElementById(`art-preview-${sectionsConfig[currentSection-1].id}`);
    const artOrderLabel = document.getElementById(`art-order-label-${sectionsConfig[currentSection-1].id}`);
    if (artOrderLabel && artPreview.children.length == 0 ) {
        artOrderLabel.style.display = 'none';
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
            const combinedOverlay = document.getElementById(`${sectionTitle}OverlayCanvas`);
            let uniformCanvas;
            if(sectionTitle === "Front"){
               uniformCanvas = document.getElementById(`TankTopCanvas`);
            }
            else{
                uniformCanvas = document.getElementById(`TankTop${sectionTitle}Canvas`);
            }
    
            if (combinedOverlay && copiedArt) {
                const newArt = copiedArt.cloneNode(true); // Create a new copy of the art
    
                // Set a new ID for the pasted art
                const newId = `image-${sectionId}-${Date.now()}`;
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
                makeElementResizable(newArt, uniformCanvas);

                newArt.addEventListener('pointerdown', () => {
                    const onPointerUp = () => {
                        document.removeEventListener('pointerup', onPointerUp);
        
                        document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                            el.classList.remove('selected');
                            el.classList.remove('selected2');
                        });
        
                        if(currentTab !== 'text-art'){
                            switchTab('text-art');
                        } 
        
                        if(newArt.id.includes('section1')){
                            currentSection = 1;
                        }
                        else{
                            currentSection = 2;
                        }
        
                        showSection(currentSection);
                        textBoxColor(combinedOverlay, newArt);
                    };
                
                    document.addEventListener('pointerup', onPointerUp);
                });
    
                // Add the new art to the preview section
                const artPreview = document.getElementById(`art-preview-${sectionId}`);
                if (artPreview) {
                    const previewElement = `
                        <div class="art-container resizable" id="${imageId}-preview" style="position: relative; display: inline-block; margin: 5px;" draggable="true" ondragstart="onDragStart(event)" ondragover="onDragOver(event)"  ondragleave="onDragLeave(event)" ondrop="onDrop(event)" ondragend="onDragEnd(event)">
                        <img src="${e.target.result}" alt="Art Preview" style="max-width: 115px; height: auto;">
                        <button class="remove-art" onclick="removeArt('${imageId}')">&times;</button>
                        <div class="custom-dropdown2">
                            <button type="button" id="selected-image-size-${imageId}" class="custom-dropdown-button" onclick="toggleDropdown('image-size-${imageId}')">
                                Choose Size
                                <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <div class="custom-dropdown-content" id="image-size-${imageId}" style="">
                                <div onclick="selectImageSizeOption('${imageId}', 'valance-3-4', '3/4 Valance Image')">3/4 Valance Image</div>
                                <div onclick="selectImageSizeOption('${imageId}', 'valance-full', 'Full Valance Image')">Full Valance Image</div>
                                <div onclick="selectImageSizeOption('${imageId}', 'peak-partial', 'Partial Peak Image')">Partial Peak Image</div>
                                <div onclick="selectImageSizeOption('${imageId}', 'peak-full', 'Full Peak Image')">Full Peak Image</div>
                            <div onclick="selectImageSizeOption('${imageId}', 'wall', 'Wall Image')">Wall Image</div>
                            </div>
                        </div>
                        </div>`;
                    artPreview.insertAdjacentHTML('afterbegin', previewElement);
                }
    
                console.log('Art pasted:', newArt); // For debugging purposes
            }
        }
    });

});

function resizeImage(imageId, selectedSize) {
    const imageContainer = document.getElementById(imageId); // Get the image container
    const img = imageContainer.querySelector('img'); // Get the image inside the container

    // Set default values for container's width and height based on the selected option
    let containerWidth;
    let top;
    let left;
    if(itDescript.toUpperCase().includes("TANK")){
        switch (selectedSize) {
            case 'lr-chest':
                containerWidth = 90; // Height in px
                left = 180;
                top = 184;
                break;
            case 'chest-full':
                containerWidth = 206;
                left = 317;
                top = 350;
                break;
            default:
                containerWidth = Math.min(img.naturalWidth, 206); // Default to original height if no selection
                left = 317;
                top = 350;
                break;
        }
    
    }
    else if(itDescript.toUpperCase().includes("COMPRESSION")){
        switch (selectedSize) {
            case 'lr-chest':
                containerWidth = 90; // Height in px
                left = 240;
                top = 290.5;
                break;
            case 'chest-full':
                containerWidth = 206;
                left = 317;
                top = 350;
                break;
            default:
                containerWidth = Math.min(img.naturalWidth, 206); // Default to original height if no selection
                left = 317;
                top = 350;
                break;
        }
    
    }
    else{
        switch (selectedSize) {
            case 'lr-chest':
                containerWidth = 90; // Height in px
                left = 240;
                top = 256.5;
                break;
            case 'chest-full':
                containerWidth = 206;
                left = 340;
                top = 350;
                break;
            default:
                containerWidth = Math.min(img.naturalWidth, 206); // Default to original height if no selection
                left = 340;
                top = 350;
                break;
        }    
    }
    
    // Adjust the container's height, width auto-adjusts based on aspect ratio
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const containerHeight = containerWidth / aspectRatio;

    imageContainer.style.height = `${containerHeight}px`;
    imageContainer.style.width = `${containerWidth}px`;
    
    // Apply centered position
    imageContainer.style.left = `${(left - imageContainer.offsetWidth / 2)}px`
    imageContainer.style.top = `${top - imageContainer.offsetHeight / 2}px`;

    

    console.log(`Container ${imageId} resized to height: ${containerHeight}px, width: ${containerWidth}px`);
}

