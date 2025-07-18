// Functions to update text box properties
function updateFontStyle(canvasText, fontStyle) {

    // Map custom font names to their CSS classes
    const fontClassMap = {
        'Benguiat BK': 'benguiat-bk',
        'Cityd Bold': 'cityd-bold',
        'Demonized': 'demonized',
        'Deadknight': 'Deadknight',
        'Eurostile': 'eurostile',
        'Evogria': 'evogria',
        'Evogria Italic': 'evogria-italic',
        'Famous College': 'Famous-College',
        'Keylock Fighter': 'Keylock-Fighter',
        'Magnolia Script': 'magnolia-script',
        'Rock Road': 'Rock-Road',
        'Srabi Script': 'srabi-script',
        'Steel City': 'Steel-City',
        'Superstar': 'superstar-m54',
        'SwitzerlandCond Italic': 'swzconbi',
        'SwitzerlandCond': 'swzconbn',
    };
    canvasText.style.fontFamily = fontClassMap[fontStyle];

    switch(fontStyle){
        case 'Benguiat BK':
        case 'Cityd Bold':
        case 'Eurostile':
        case 'Evogria':
        case 'Superstar':
        case 'SwitzerlandCond':
            break;

        case 'Evogria Italic':
        case 'Magnolia Script':
        case 'SwitzerlandCond Italic':
        case 'Rock Road':
            canvasText.style.paddingLeft = 5 + 'px';
            canvasText.style.paddingRight = 10 + 'px';
            break;


        case 'Srabi Script':
        case 'Demonized':
        case 'Keylock Fighter':
            canvasText.style.paddingLeft = 5 + 'px';
            canvasText.style.paddingRight = 18 + 'px';
            canvasText.style.paddingTop = 5 + 'px';
            canvasText.style.paddingBottom = 7.5 + 'px';
            break;
    }
}

function updateFontColor(canvasText, fontColor) {
    canvasText.style.color = fontColor;
}

function updateOutlineColor(canvasText, outlineColor) {
    canvasText.style.textShadow = outlineColor === null ? 'none' : `-1px -1px 0 ${outlineColor}, 1px -1px 0 ${outlineColor}, -1px 1px 0 ${outlineColor}, 1px 1px 0 ${outlineColor}`;
}

function validateTextInput(sectionId) {
    const textInput = document.getElementById(`text-input-${sectionId}`).value.trim();
    const fontStyleButton = document.querySelector(`#font-style-${sectionId}`).previousElementSibling;
    const fontColorPicker = document.querySelector(`#font-color-div-${sectionId}`);
    const outlineColorPicker = document.querySelector(`#outline-color-div-${sectionId}`);

    const fontStyleLabel = document.getElementById(`font-style-required-${sectionId}`);
    
    // Reset styles and labels
    fontStyleButton.style.borderColor = '';
        fontStyleLabel.style.display = 'none';
    
    let isValid = true;

    if (textInput !== '') {
        if (fontStyleButton.textContent === 'Select a font style') {
            fontStyleButton.style.borderColor = 'red';
            fontStyleLabel.style.display = 'inline';
            isValid = false;
        }

        
        // Show the controls
        fontStyleButton.parentElement.parentElement.style.display = 'block';
        fontColorPicker.style.display = 'block';
        outlineColorPicker.style.display = 'block';
        toggleCenterButtons(true);
    } else {
        // Hide the controls if no text is entered
        fontStyleButton.parentElement.parentElement.style.display = 'none';
        fontColorPicker.style.display = 'none';
        outlineColorPicker.style.display = 'none';
        toggleCenterButtons(false);
    }

    return isValid;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete') {
        const selectedTextBox = document.querySelector('.editable-text.selected, .editable-text.selected2');
        if (selectedTextBox) {
            const sectionId = selectedTextBox.id.replace('editable-text-', '');
            selectedTextBox.remove();

            // Clear the text input box
            const textInput = document.getElementById(`text-input-${sectionId}`);
            textInput.value = '';

            // Reset the font style, font color, and outline color to default values
            const fontStyleButton = document.querySelector(`#font-style-${sectionId}`).previousElementSibling;
            const fontColorPicker = document.querySelector(`#font-color-div-${sectionId}`);
            const outlineColorPicker = document.querySelector(`#outline-color-div-${sectionId}`);

            fontStyleButton.textContent = 'Select a font style';
            
            fontStyleButton.style.fontFamily = '';
            
            fontStyleButton.parentElement.parentElement.style.display = 'none';
            fontColorPicker.style.display = 'none';
            outlineColorPicker.style.display = 'none';
        }
    }
});

    // Function to show/hide center buttons
function toggleCenterButtons(show) {
    const horizontalButton = document.getElementById("horizontalCenter");
    const verticalButton = document.getElementById("verticalCenter");
    horizontalButton.classList.remove('hidden');
    verticalButton.classList.remove('hidden');
    if (show) {
        horizontalButton.classList.remove('hidden');
        verticalButton.classList.remove('hidden');
    } else {
        horizontalButton.classList.add('hidden');
        verticalButton.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const snapButton = document.getElementById('toggleSnapGrid');
    const horizButton = document.getElementById('horizontalCenter');
    const vertButton = document.getElementById('verticalCenter');

    let hoverTimeout;

    function showDescription(button) {
        const description = button.querySelector('.description');
        description.style.visibility = 'visible';
        description.style.opacity = '1';
    }

    function hideDescription(button) {
        const description = button.querySelector('.description');
        description.style.visibility = 'hidden';
        description.style.opacity = '0';
    }

    function handleMouseOver(button) {
        button.addEventListener('mouseover', function() {
            const img = this.querySelector('img');
            if (button.id === 'toggleSnapGrid') {
                img.src = `${window.shopifyAssetPaths.grid.snapGridWhite}`;
            } else if (button.id === 'horizontalCenter') {
                img.src = `${window.shopifyAssetPaths.grid.horizontalCenterWhite}`;
            } else if (button.id === 'verticalCenter') {
                img.src = `${window.shopifyAssetPaths.grid.verticalCenterWhite}`;
            }
            hoverTimeout = setTimeout(() => showDescription(button), 1000);
        });

        button.addEventListener('mouseout', function() {
            const img = this.querySelector('img');
            clearTimeout(hoverTimeout);
            hideDescription(button);
            if (button.id === 'toggleSnapGrid') {
                if (this.classList.contains('active')) {
                    img.src = `${window.shopifyAssetPaths.grid.snapGridWhite}`;
                } else {
                    img.src = `${window.shopifyAssetPaths.grid.snapGrid}`;
                }
            } else if (button.id === 'horizontalCenter') {
                img.src = `${window.shopifyAssetPaths.grid.horizontalCenter}`;
            } else if (button.id === 'verticalCenter') {
                img.src = `${window.shopifyAssetPaths.grid.verticalCenter}`;
            }
        });
    }

    handleMouseOver(snapButton, 'Toggle Snap Grid');
    handleMouseOver(horizButton, 'Horizontal Center');
    handleMouseOver(vertButton, 'Vertical Center');

    snapButton.addEventListener('click', function() {
        this.classList.toggle('active');
        const img = this.querySelector('img');
        if (this.classList.contains('active')) {
            img.src = `${window.shopifyAssetPaths.grid.snapGridWhite}`;
        } else {
            img.src = `${window.shopifyAssetPaths.grid.snapGrid}`;
        }
    });

    // Add a document-wide event listener only once for deselection
    document.addEventListener('click', (e) => {
        const buttons = ['snapGrid', 'horizCenter', 'vertCenter'];
        if (!buttons.includes(e.target.id)) {
            let itemSelected = false;
            document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                if (!el.contains(e.target)) {
                    el.classList.remove('selected');
                    el.classList.remove('selected2');
                } else {
                    itemSelected = true;
                }
            });
            toggleCenterButtons(itemSelected);
        }
    });

    // Add a document-wide event listener only once for selection
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('editable-text') || e.target.classList.contains('editable-art')) {
            e.stopPropagation(); // Prevent event from bubbling up
            document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                el.classList.remove('selected');
                el.classList.remove('selected2');
            });

            const textOverlay = e.target.closest('.text-overlay');
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
                            e.target.classList.add('selected');
                            flag = 1;
                            toggleCenterButtons(true);
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
                            e.target.classList.add('selected2');
                            flag = 1;
                            toggleCenterButtons(true);
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
                            e.target.classList.add('selected');
                        } else {
                            e.target.classList.add('selected2');
                        }
                    }
                    toggleCenterButtons(true); // Show center buttons when an item is selected
                }
            }
        }
    });

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
    });

function updateCanvasText(section) {
    const textInput = document.getElementById(`text-input-${section.id}`).value.trim();
    const combinedOverlay = document.getElementById(`${section.title.replace(' ', '')}TextOverlay`);
    const tentCanvas = document.getElementById(`${section.title.replace(' ', '')}Canvas`);

    // Check if there's an existing editable text element
    let editableText = combinedOverlay.querySelector('.editable-text');
    let currentLeft = editableText ? editableText.style.left : null;
    let currentTop = editableText ? editableText.style.top : null;
    let currentWidth = editableText ? editableText.offsetWidth : null;
    let currentHeight = editableText ? editableText.offsetHeight : null;
    let currentFontSize = editableText ? editableText.style.fontSize : null;

    // Remove existing editable text element if it exists
    if (editableText) {
        editableText.remove();
    }

    // Create a new editable text element
    const newEditableText = document.createElement('div');
    newEditableText.id = `editable-text-${section.id}`;
    newEditableText.className = `editable-text`;
    newEditableText.draggable = true;

    newEditableText.style.whiteSpace = 'nowrap'; // Prevent wrapping
    newEditableText.style.overflow = 'hidden';  // Hide any overflow text
    newEditableText.style.textOverflow = 'ellipsis'; // Ensure text is not altered but cut off
    newEditableText.style.wordBreak = 'keep-all';  // Prevent word break in Chrome


    newEditableText.innerHTML = textInput.toUpperCase().replace(/\n/g, '<br>');

    // Apply previous styles to the new text element
    if (currentLeft !== null){
       newEditableText.style.left = currentLeft; 
    } 
    if (currentTop !== null){
        newEditableText.style.top = currentTop;
    }
    newEditableText.style.width = 'auto';
    newEditableText.style.height = 'auto';
    newEditableText.style.fontSize = currentFontSize || '16px'; // default font size if not set

    // Apply text styling
    const fontStyle = document.querySelector(`#font-style-${section.id}`).previousElementSibling.textContent.trim() || 'Arial';
    const fontColor = document.getElementById(`font-color-${section.id}`).textContent.trim() || 'Black';
    const outlineColor = document.getElementById(`outline-color-${section.id}`).textContent.trim() || null;

    updateFontStyle(newEditableText, fontStyle);
    updateFontColor(newEditableText, fontColor);
    updateOutlineColor(newEditableText, outlineColor);

    // Append the new editable text to the combined overlay
    combinedOverlay.appendChild(newEditableText);

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

    if (textInput === '') {
        newEditableText.style.border = '0px';
        newEditableText.style.resize = 'none';
    }

    makeTextDraggable(newEditableText, combinedOverlay);

    adjustTextboxPosition(newEditableText, combinedOverlay, currentWidth, currentHeight);
    autoResizeTextarea(document.getElementById(`text-input-${section.id}`));

    reapplyDraggableResizable(combinedOverlay);
}

function reapplyDraggableResizable(container) {
    container.querySelectorAll('.editable-art').forEach(img => {
        makeElementDraggable(img, container);
        makeElementResizable(img);
    });
}

function adjustTextboxPosition(textElement, overlay, previousWidth, previousHeight) {
    const newWidth = textElement.offsetWidth;
    const newHeight = textElement.offsetHeight;

    const currentLeft = parseFloat(textElement.style.left);
    const currentTop = parseFloat(textElement.style.top);

    const deltaX = (newWidth - previousWidth) / 2;
    const deltaY = (newHeight - previousHeight) / 2;

    textElement.style.left = `${currentLeft - deltaX}px`;
    textElement.style.top = `${currentTop - deltaY}px`;
}


function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

let snapGridEnabled = false;

document.getElementById('toggleSnapGrid').addEventListener('click', function() {
    snapGridEnabled = !snapGridEnabled;
    if (snapGridEnabled) {
        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
});

function makeTextDraggable(textElement, container) {
    let offsetX = 0, offsetY = 0;
    let isSnappedX = false, isSnappedY = false; // Track snapping state
    const snapThreshold = 10; // Distance within which snapping occurs

    let initialFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    let initialWidth = textElement.offsetWidth;
    let initialHeight = textElement.offsetHeight;

    function updateInitialValues() {
        initialFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
        initialWidth = textElement.offsetWidth;
        initialHeight = textElement.offsetHeight;
    }

    textElement.addEventListener('dragstart', (e) => {
        const rect = textElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        textElement.style.cursor = 'move';
        e.dataTransfer.setDragImage(new Image(), 0, 0); // Hide the default drag image
        e.dataTransfer.effectAllowed = 'move'; // Explicitly show the move cursor
    });

    textElement.addEventListener('drag', (e) => {
        if (e.clientX === 0 && e.clientY === 0) return; // Prevent cursor flickering issue
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Ensure the text stays within the container
        const containerRect = container.getBoundingClientRect();
        newX = newX - containerRect.left;
        newY = newY - containerRect.top;

        textElement.style.left = `${newX}px`;
        textElement.style.top = `${newY}px`;

        // Check if the text is near the center lines
        const containerCenterX = containerRect.width / 2;
        const containerCenterY = containerRect.height / 2;

        const textCenterX = newX + textElement.offsetWidth / 2;
        const textCenterY = newY + textElement.offsetHeight / 2;

        if (snapGridEnabled) {
            isSnappedX = Math.abs(textCenterX - containerCenterX) < snapThreshold;
            isSnappedY = Math.abs(textCenterY - containerCenterY) < snapThreshold;

            if (isSnappedX) {
                showCenterLine(container, 'vertical');
                textElement.style.left = `${containerCenterX - textElement.offsetWidth / 2}px`;
            } else {
                hideCenterLine(container, 'vertical');
            }

            if (isSnappedY) {
                showCenterLine(container, 'horizontal');
                textElement.style.top = `${containerCenterY - textElement.offsetHeight / 2}px`;
            } else {
                hideCenterLine(container, 'horizontal');
            }
        }
        updateInitialValues();
    });

    textElement.addEventListener('dragend', (e) => {
        if (snapGridEnabled) {
            hideCenterLines(container);

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            // Ensure the text stays within the container
            const containerRect = container.getBoundingClientRect();
            newX = newX - containerRect.left;
            newY = newY - containerRect.top;

            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;

            // Snap to center lines if within snap threshold
            if (isSnappedX) {
                newX = containerCenterX - textElement.offsetWidth / 2;
            }

            if (isSnappedY) {
                newY = containerCenterY - textElement.offsetHeight / 2;
            }

            textElement.style.left = `${newX}px`;
            textElement.style.top = `${newY}px`;
            textElement.style.pointerEvents = 'auto'; // Enable interaction with the text
            textElement.style.cursor = 'move';
        }
    });

    container.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow the drop
        e.dataTransfer.dropEffect = 'move'; // Explicitly show the move cursor
    });

    container.addEventListener('dragleave', (e) => {
        e.preventDefault(); // Prevent default behavior
        e.dataTransfer.dropEffect = 'move'; // Explicitly show the move cursor
    });

    const resizeObserver = new ResizeObserver(() => {
        const widthScale = textElement.offsetWidth / initialWidth;
        const heightScale = textElement.offsetHeight / initialHeight;
        const scale = Math.min(widthScale, heightScale);

        let newFontSize = initialFontSize * scale;
        if (newFontSize <= 0) {
            newFontSize = initialFontSize; // Prevent font size from being set to zero
        }
        textElement.style.fontSize = `${newFontSize}px`;
    });

    resizeObserver.observe(textElement);

    textElement.addEventListener('mouseup', () => {
        updateInitialValues();
    });
}

function showCenterLine(container, direction) {
    container.querySelector(`.center-line.${direction}`).classList.add('visible');
}

function hideCenterLine(container, direction) {
    container.querySelector(`.center-line.${direction}`).classList.remove('visible');
}

function hideCenterLines(container) {
    container.querySelectorAll('.center-line').forEach(line => line.classList.remove('visible'));
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.custom-dropdown-button')) {
        const dropdowns = document.getElementsByClassName("custom-dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
