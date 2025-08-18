let isResizingOrDragging = false;
let resizeTimeout = null;

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
        case 'Steel City':
            canvasText.style.paddingLeft = 10 + 'px';
            break;
        
        case 'Cityd Bold':
        case 'Eurostile':
        case 'Evogria':
        case 'Superstar':
        case 'SwitzerlandCond':
            break;

        case 'Evogria Italic':
                case 'SwitzerlandCond Italic':
        case 'Rock Road':
            canvasText.style.paddingLeft = 12.5 + 'px';
            canvasText.style.paddingRight = 10 + 'px';
            break;

        case 'Magnolia Script':
        case 'Srabi Script':
            canvasText.style.paddingLeft = 25 + 'px';
            canvasText.style.paddingRight = 18 + 'px';
            canvasText.style.paddingTop = 5 + 'px';
            canvasText.style.paddingBottom = 10 + 'px';
            break;

        case 'Demonized':
        case 'Keylock Fighter':
            canvasText.style.paddingLeft = 10 + 'px';
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
    if(outlineColor){
        if(outlineColor.includes("px")){
            canvasText.style.textShadow = outlineColor;
        }
        else{
        canvasText.style.textShadow = outlineColor === null ? 'none' : `-1px -1px 0 ${outlineColor}, 1px -1px 0 ${outlineColor}, -1px 1px 0 ${outlineColor}, 1px 1px 0 ${outlineColor}`;
    }
    }
    
}

function updateFontEffect(canvasText, fontEffect) {
    if(fontEffect === 'Vertical Arch'){
        applyVerticalArchEffect(canvasText);
    }
    else if(fontEffect ==='Reverse Vertical Arch'){
        applyReverseVerticalArchEffect(canvasText);
    }
    else if(fontEffect === 'Stacked'){
        applyVerticalEffect(canvasText);
    }
    else{
        return;
    }
}

function validateTextInput(sectionId) {
    const textInput = document.getElementById(`text-input-${sectionId}`).value.trim();
    const fontStyleButton = document.querySelector(`#font-style-${sectionId}`).previousElementSibling;
    const fontColorPicker = document.querySelector(`#font-color-div-${sectionId}`);
    const outlineColorPicker = document.querySelector(`#outline-color-div-${sectionId}`);
    const fontEffectButton = document.querySelector(`#font-effect-${sectionId}`).previousElementSibling;
    const textRotationSlider = document.querySelector(`#rotationSlider-${sectionId}`);

    const fontStyleLabel = document.getElementById(`font-style-required-${sectionId}`);
    const fontEffectLabel = document.getElementById(`font-effect-required-${sectionId}`);
    
    // Reset styles and labels
    fontStyleButton.style.borderColor = '';
    fontStyleLabel.style.display = 'none';

    fontEffectButton.style.borderColor = '';
    fontEffectLabel.style.display = 'none';
    
    let isValid = true;

    if (textInput !== '') {
        if (fontStyleButton.textContent.includes('Select a Font Style')) {
            fontStyleButton.style.borderColor = 'red';
            fontStyleLabel.style.display = 'inline';
            isValid = false;
        }
        if (fontEffectButton.textContent.includes('Select a Font Effect')) {
            fontEffectButton.style.borderColor = 'red';
            fontEffectLabel.style.display = 'inline';
            isValid = false;
        }

        
        // Show the controls
        fontStyleButton.parentElement.parentElement.parentElement.style.display = 'flex';
        fontEffectButton.parentElement.parentElement.style.display = 'block';
        fontColorPicker.style.display = 'block';
        outlineColorPicker.style.display = 'block';
        textRotationSlider.parentElement.parentElement.style.display = 'block';
        toggleCenterButtons(true);
    } else {
        // Hide the controls if no text is entered
        fontStyleButton.parentElement.parentElement.parentElement.style.display = 'none';
        fontEffectButton.parentElement.parentElement.style.display = 'none';
        fontColorPicker.style.display = 'none';
        outlineColorPicker.style.display = 'none';
        textRotationSlider.parentElement.parentElement.style.display = 'none';
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
            const fontEffectButton = document.querySelector(`#font-effect-${sectionId}`).previousElementSibling;
            const textRotationSlider = document.querySelector(`#rotationSlider-${sectionId}`);
            const fontColorPicker = document.querySelector(`#selectedColor7-${sectionId}`);
            const outlineColorPicker = document.querySelector(`#selectedColor8-${sectionId}`);

            fontStyleButton.innerHTML = `Select a Font Style <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
            fontStyleButton.value = '';
            fontStyleButton.style.fontFamily = '';

            fontEffectButton.innerHTML = `Select a Font Effect <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
            fontEffectButton.value = '';
            
            fontEffectButton.parentElement.parentElement.style.display = 'none';
            
            fontStyleButton.parentElement.parentElement.parentElement.style.display = 'none';

            textRotationSlider.value = 0;

            fontColorPicker.style.backgroundColor = 'Black';
            let colorText = fontColorPicker.id.replace("selectedColor", "colorText") + ".5";
            document.getElementById(colorText).textContent = "Black";

            outlineColorPicker.style.backgroundColor = '';
            let outlineText = outlineColorPicker.id.replace("selectedColor", "colorText") + ".5";
            document.getElementById(outlineText).textContent = "None";
            
            fontStyleButton.parentElement.parentElement.parentElement.style.display = 'none';
            fontEffectButton.parentElement.parentElement.style.display = 'none';
            textRotationSlider.parentElement.parentElement.style.display = 'none';
            fontColorPicker.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
            outlineColorPicker.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
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
        // Check if the clicked element is .editable-text, .editable-art, or a child of .editable-text
        const editableElement = e.target.closest('.editable-text') || e.target.closest('.editable-art');
        
        if (editableElement) {
            e.stopPropagation(); // Prevent event from bubbling up
        }
    });

    });

    function updateCanvasText(section) {
        const textInput = document.getElementById(`text-input-${section.id}`).value.trim();
        const combinedOverlay = document.getElementById(`${section.title}OverlayCanvas`);
    
        // Check if there's an existing editable text element
        let editableText = combinedOverlay.querySelector('.editable-text');
        let currentLeft = editableText ? editableText.style.left : null;
        let currentTop = editableText ? editableText.style.top : null;
        let currentWidth = editableText ? editableText.offsetWidth : null;
        let currentHeight = editableText ? editableText.offsetHeight : null;
        let currentFontSize = editableText ? editableText.style.fontSize : null;
        let currentFontColor = editableText ? editableText.style.color : null;
        let currentOutlineColor = editableText ? editableText.style.textShadow : null;
    
        // Remove existing editable text element
        if (editableText) {
            editableText.remove();
        }
    
        // Create a new editable text element
        const newEditableText = document.createElement('div');
        newEditableText.id = `editable-text-${section.id}`;
        newEditableText.className = `editable-text selected`; // Add class but not selected initially
        newEditableText.draggable = true;

        textBoxColor(combinedOverlay, newEditableText);
        
    
        newEditableText.style.whiteSpace = 'nowrap'; // Prevent wrapping
        newEditableText.style.overflow = 'hidden';  // Hide any overflow text
        newEditableText.style.textOverflow = 'ellipsis'; // Ensure text is not altered but cut off
        newEditableText.style.wordBreak = 'keep-all';  // Prevent word break in Chrome
    
        newEditableText.innerHTML = textInput.toUpperCase().replace(/\n/g, '<br>');
    
        // Set initial position if not defined
        if (currentLeft !== null && currentTop !== null) {
            newEditableText.style.left = currentLeft;
            newEditableText.style.top = currentTop;
        } else {
            if(itDescript.toUpperCase().includes("COMPRESSION")){
                newEditableText.style.left = '317px';
            }
            else{
                newEditableText.style.left = '330px';
            }
            
            newEditableText.style.top = '290px';
        }
        newEditableText.style.width = `${currentWidth}` || 'auto';
        newEditableText.style.height = `${currentHeight}` || 'auto';
        newEditableText.style.fontSize = currentFontSize || '16px'; // Default font size if not set
    
        // Apply text styling
        const fontStyle = document.querySelector(`#font-style-${section.id}`).previousElementSibling.value.trim() || 'Arial';
        const fontEffect = document.querySelector(`#font-effect-${section.id}`).previousElementSibling.value.trim() || 'Straight';
        const fontColor =  currentFontColor || 'Black';
        const outlineColor = currentOutlineColor || null;
        const rotateAngle = document.querySelector(`#rotationSlider-${section.id}`).value || 0;


        if(textInput === ""){
            newEditableText.classList.remove("selected");
            newEditableText.classList.remove("selected2");
        }
    
        updateFontStyle(newEditableText, fontStyle);
        updateFontColor(newEditableText, fontColor);
        updateOutlineColor(newEditableText, outlineColor);
    
        // Append the editable text to the combined overlay
        combinedOverlay.appendChild(newEditableText);
        updateFontEffect(newEditableText, fontEffect);
        newEditableText.style.transform = `rotate(${rotateAngle}deg)`;

        newEditableText.addEventListener('pointerdown', () => {
            const onPointerUp = () => {
                document.removeEventListener('pointerup', onPointerUp);

                document.querySelectorAll('.editable-text, .editable-art').forEach(el => {
                    el.classList.remove('selected');
                    el.classList.remove('selected2');
                });

                if(currentTab !== 'text-art'){
                    switchTab('text-art');
                } 

                if(newEditableText.id.includes('1')){
                    currentSection = 1;
                }
                else{
                    currentSection = 2;
                }

                showSection(currentSection);
                updateCanvasText(sectionsConfig[currentSection - 1]);
            };
        
            document.addEventListener('pointerup', onPointerUp);
        });
        
        
    
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
    
        combinedOverlay.style.position = 'absolute';
        combinedOverlay.style.display = 'flex';
        combinedOverlay.style.alignItems = 'center';
        combinedOverlay.style.justifyContent = 'center';
        toggleCenterButtons(true);
    
        makeTextDraggable(newEditableText, combinedOverlay);
    
        adjustTextboxPosition(newEditableText, combinedOverlay, currentWidth, currentHeight);
        autoResizeTextarea(document.getElementById(newEditableText.id.replace("editable-text","text-input")));
    
        reapplyDraggableResizable(combinedOverlay);
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

    function textBoxColor(textOverlay, editableElement){
        if (textOverlay) {
            let canvasId;
            if (textOverlay.id === "FrontOverlayCanvas") {
                canvasId = "TankTopCanvas"; 
            } else {
                canvasId = "TankTopBackCanvas"; 
            }

            const canvas = document.getElementById(canvasId);
            if (canvas) {
                const context = canvas.getContext('2d');
                const canvasColor = context.fillStyle;
                let flag = 0;

                // Custom Color for Canvas
                if (flag === 0) {
                    const rgb = hexToRgb(canvasColor);

                    // Calculate brightness (perceived brightness)
                    const brightness = Math.sqrt(
                        0.299 * (rgb.r * rgb.r) +
                        0.587 * (rgb.g * rgb.g) +
                        0.114 * (rgb.b * rgb.b)
                    );

                    // Choose class based on brightness
                    if (brightness > 150) { // Adjust this threshold as needed
                        editableElement.classList.add('selected');
                    } else {
                        editableElement.classList.add('selected2');
                    }
                }
            }
        }
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
    if(textarea.scrollHeight != 0){
        textarea.style.height = (textarea.scrollHeight) + 'px';
    }
    else{
        textarea.style.height = '40px';
    }
    
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
    let resizeTimeout = null;

    let initialFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    let initialWidth = textElement.offsetWidth;
    let initialHeight = textElement.offsetHeight;

    function updateInitialValues() {
        initialFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
        initialWidth = textElement.offsetWidth;
        initialHeight = textElement.offsetHeight;
    }

    textElement.addEventListener('dragstart', (e) => {
        isResizingOrDragging = true;
    
        const rect = textElement.getBoundingClientRect();
        const transform = window.getComputedStyle(textElement).transform;
        const transformValues = transform !== 'none' ? transform.match(/matrix\(([^)]+)\)/)[1].split(', ').map(Number) : null;
    
        if (transformValues) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            offsetX = e.clientX - centerX;
            offsetY = e.clientY - centerY;
        } else {
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        }
    
        textElement.style.cursor = 'move';
        e.dataTransfer.setDragImage(new Image(), 0, 0); // Hide the default drag image
        e.dataTransfer.effectAllowed = 'move'; // Explicitly show the move cursor
    });
    

    textElement.addEventListener('drag', (e) => {
        if (e.clientX === 0 && e.clientY === 0) return;
    
        const containerRect = container.getBoundingClientRect();
        const transform = window.getComputedStyle(textElement).transform;
        const transformValues = transform !== 'none' ? transform.match(/matrix\(([^)]+)\)/)[1].split(', ').map(Number) : null;
    
        let newX, newY;
        if (transformValues) {
            const centerX = e.clientX - offsetX;
            const centerY = e.clientY - offsetY;
            newX = centerX - textElement.offsetWidth / 2 - containerRect.left;
            newY = centerY - textElement.offsetHeight / 2 - containerRect.top;
        } else {
            newX = e.clientX - offsetX - containerRect.left;
            newY = e.clientY - offsetY - containerRect.top;
        }
    
        textElement.style.left = `${newX}px`;
        textElement.style.top = `${newY}px`;
    
        // Snapping logic remains unchanged
        const containerCenterX = containerRect.width / 2;
        const containerCenterY = containerRect.height / 2;
    
        const textCenterX = newX + textElement.offsetWidth / 2;
        const textCenterY = newY + textElement.offsetHeight / 2;
    
        if (snapGridEnabled) {
            if(itDescript.toUpperCase().includes("COMPRESSION")){
                isSnappedX = Math.abs(textCenterX - 317) < snapThreshold;
            }
            else{
                isSnappedX = Math.abs(textCenterX - 340) < snapThreshold;
            }
            isSnappedY = Math.abs(textCenterY - 300) < snapThreshold;
    
            if (isSnappedX) {
                showCenterLine(container, 'vertical');
                if(itDescript.toUpperCase().includes("COMPRESSION")){
                    textElement.style.left = `${317 - textElement.offsetWidth / 2}px`;
                }
                else{
                    textElement.style.left = `${340 - textElement.offsetWidth / 2}px`;
                }
            } else {
                hideCenterLine(container, 'vertical');
            }
    
            if (isSnappedY) {
                showCenterLine(container, 'horizontal');
                textElement.style.top = `${300 - textElement.offsetHeight / 2}px`;
            } else {
                hideCenterLine(container, 'horizontal');
            }
        }
        updateInitialValues();
    });
    

    textElement.addEventListener('dragend', (e) => {
        if (snapGridEnabled) {
            hideCenterLines(container);
        }
        isResizingOrDragging = false;
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
        isResizingOrDragging = true;
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
}

function showCenterLine(container, direction) {
    const centerLine = container.querySelector(`.center-line.${direction}`);
    centerLine.classList.add('visible');
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

function applyVerticalArchEffect(div) {
    const inputText = div.textContent.trim(); // Get the text inside the div
    const fontSize = parseFloat(div.style.fontSize) || 16; // Convert font size to a number
    const textColor = div.style.color || "black"; // Get the div's text color
    const font = div.style.fontFamily;
    let widthPadding = Math.max((parseFloat(div.style.paddingLeft) + parseFloat(div.style.paddingRight)) || 15, 15);

    // Ensure the div has dimensions before proceeding
    const rect = div.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
        return;
    }

    if(fontSize > 70){
        widthPadding = 30;
    }

    const radius = (rect.width + widthPadding) / 2.25; // Radius of the circular arc
    const centerX = (rect.width + widthPadding) / 2; // Center of the arc horizontally
    const archOffsetY = 60; // Amount to shift the entire arch downward
    const centerY = rect.height / 2 + radius + archOffsetY; // Center of the arc vertically, with offset

    // Create an SVG element
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("viewBox", `0 0 ${rect.width + widthPadding} ${rect.height + centerX + archOffsetY}`);
    svg.setAttribute("width", `${rect.width + widthPadding}`);
    svg.setAttribute("height", `${rect.height + centerX + archOffsetY}`);

    // Create a path element for the circular arc
    const path = document.createElementNS(svgNamespace, "path");
    path.setAttribute("id", "archPath");
    path.setAttribute(
        "d",
        `M0,${centerY} 
         A${radius},${radius} 0 0,1 
         ${centerX * 2},${centerY}`
    );
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "transparent"); // Path is invisible

    // Append the path to the SVG
    svg.appendChild(path);




    // Create a text element
    const text = document.createElementNS(svgNamespace, "text");
    text.setAttribute("fill", textColor);
    text.setAttribute("font-size", fontSize);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-family", font);

    // Create a textPath element and link it to the arch
    const textPath = document.createElementNS(svgNamespace, "textPath");
    textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#archPath");
    textPath.setAttribute("startOffset", "50%"); // Center the text along the arch
    textPath.textContent = inputText;

    // Append the textPath to the text element
    text.appendChild(textPath);

    // Append the text to the SVG
    svg.appendChild(text);

    // Clear the div and append the SVG
    div.innerHTML = "";
    div.appendChild(svg);

    // Attach a MutationObserver to dynamically update the SVG
    const observer = new MutationObserver(() => {
        const updatedFontSize = parseFloat(div.style.fontSize) || 16;
        const updatedColor = div.style.color || "black";

        text.setAttribute("font-size", updatedFontSize);
        text.setAttribute("fill", updatedColor);
        // Debounced SVG update logic
        if (resizeTimeout) clearTimeout(resizeTimeout); // Clear the previous timeout
        resizeTimeout = setTimeout(() => {
            if(isResizingOrDragging === false){
                updateCanvasText(sectionsConfig[currentSection - 1]);
            }
            else{
                clearTimeout(resizeTimeout);
            }
        }, 0); // Debounce duration in milliseconds
    });

    observer.observe(div, {
        attributes: true, // Observe attribute changes
        attributeFilter: ["style"], // Only watch the `style` attribute
    });

}

function applyReverseVerticalArchEffect(div) {
    const inputText = div.textContent.trim(); // Get the text inside the div
    const fontSize = parseFloat(div.style.fontSize) || 16; // Convert font size to a number
    const font = div.style.fontFamily;
    let letterSpacing = fontSize / 4;
    const textColor = div.style.color || "black"; // Get the div's text color
    let widthPadding = Math.max((parseFloat(div.style.paddingLeft) + parseFloat(div.style.paddingRight)) || 15, 15);
    if(fontSize > 70){
        widthPadding = 30;
    }
    let offset = '51%';

    switch (font){
        case 'demonized':
            offset = '49%';
            letterSpacing = fontSize / 3;

        case 'evogria-italic':
            offset = '50%';
            letterSpacing = fontSize / 3;
        
        case 'evogria':
            letterSpacing = fontSize / 3;

        case 'magnolia-script':
        case 'swzconbi':
            offset = '50%';

        case 'srabi-script':
            offset = '50%';
            letterSpacing = fontSize / 3;
        
        case 'cityd-bold':
            letterSpacing = fontSize / 3;
        
        case 'eurostile':
            letterSpacing = fontSize / 3;

        case 'superstar-m54':
            letterSpacing = fontSize / 3;

        case 'swzconbn': 
            letterSpacing = fontSize / 3;
    }

    // Ensure the div has dimensions before proceeding
    const rect = div.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
        return;
    }

    const radius = (rect.width + widthPadding) / 2.25; // Radius of the circular arc
    const centerX = (rect.width + widthPadding) / 2; // Center of the arc horizontally
    const archOffsetY = 100; // Amount to shift the entire arch upward
    const centerY = rect.height / 2 - radius + archOffsetY; // Center of the arc vertically, shifted upward

    // Create an SVG element
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("viewBox", `0 0 ${rect.width + widthPadding} ${rect.height + centerX + archOffsetY}`);
    svg.setAttribute("width", `${rect.width + widthPadding}`);
    svg.setAttribute("height", `${rect.height + centerX + archOffsetY}`);

    // Create a path element for the circular arc
    const path = document.createElementNS(svgNamespace, "path");
    path.setAttribute("id", "archPath");
    path.setAttribute(
        "d",
        `M0,${centerY} 
         A${radius},${radius} 0 0,0 
         ${centerX * 2},${centerY}`
    ); // The last '0' flips the arc direction
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "transparent"); // Path is invisible

    // Append the path to the SVG
    svg.appendChild(path);

    // Create a text element
    const text = document.createElementNS(svgNamespace, "text");
    text.setAttribute("fill", textColor);
    text.setAttribute("font-size", fontSize);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("letter-spacing", `${letterSpacing}px`); // Add letter spacing here

    // Create a textPath element and link it to the arch
    const textPath = document.createElementNS(svgNamespace, "textPath");
    textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#archPath");
    textPath.setAttribute("startOffset", offset); // Center the text along the arch
    textPath.textContent = inputText;

    // Append the textPath to the text element
    text.appendChild(textPath);

    // Append the text to the SVG
    svg.appendChild(text);

    // Clear the div and append the SVG
    div.innerHTML = "";
    div.appendChild(svg);

    // Attach a MutationObserver to dynamically update the SVG
    const observer = new MutationObserver(() => {
        const updatedFontSize = parseFloat(div.style.fontSize) || 16;
        const updatedColor = div.style.color || "black";

        text.setAttribute("font-size", updatedFontSize);
        text.setAttribute("fill", updatedColor);

        // Debounced SVG update logic
        if (resizeTimeout) clearTimeout(resizeTimeout); // Clear the previous timeout
        resizeTimeout = setTimeout(() => {
            if (isResizingOrDragging === false) {
                updateCanvasText(sectionsConfig[currentSection - 1]);
            } else {
                clearTimeout(resizeTimeout);
            }
        }, 0); // Debounce duration in milliseconds
    });

    observer.observe(div, {
        attributes: true, // Observe attribute changes
        attributeFilter: ["style"], // Only watch the `style` attribute
    });
}

function applyVerticalEffect(canvasText) {
    // Get the text content and computed styles of the element
    const textContent = canvasText.textContent.trim();
    const styles = window.getComputedStyle(canvasText);

    // Clear the original element content
    canvasText.innerHTML = "";

    // Calculate font size, padding, and shadow offset
    const fontSize = parseFloat(styles.fontSize);
    const verticalPadding = fontSize * 0.2; // Add 20% padding for safety
    const shadowPadding = 2; // Add extra space for textShadow (2px for each side)
    const topOffset = fontSize * 0.3 + shadowPadding; // Offset for the first letter, including shadow

    // Create an SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", fontSize * 2 + shadowPadding * 2); // Adjust width to accommodate shadow
    svg.setAttribute(
        "height",
        fontSize * textContent.length + verticalPadding * textContent.length + topOffset + "px"
    ); // Dynamic height with shadow padding
    svg.style.display = "block"; // Ensure SVG takes up the container space

    // Create a text element inside the SVG
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("fill", styles.color);
    textElement.setAttribute("font-size", fontSize);
    textElement.setAttribute("font-family", styles.fontFamily);
    textElement.setAttribute("text-anchor", "middle"); // Center alignment
    textElement.setAttribute("dominant-baseline", "hanging"); // Align text to the top of each row
    textElement.setAttribute("style", `filter: drop-shadow(${styles.textShadow || 'none'})`);

    // Add each character to the text element as a <tspan>
    for (let i = 0; i < textContent.length; i++) {
        const char = textContent[i];
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("x", "50%"); // Center each character horizontally
        tspan.setAttribute("y", topOffset + (fontSize + verticalPadding) * i); // Increment y-coordinate with padding
        tspan.textContent = char;
        textElement.appendChild(tspan);
    }

    // Append the text element to the SVG
    svg.appendChild(textElement);

    // Append the SVG to the original container
    canvasText.appendChild(svg);
    
    // Attach a MutationObserver to dynamically update the SVG
    const observer = new MutationObserver(() => {
        const updatedFontSize = parseFloat(canvasText.style.fontSize) || 16;
        const updatedColor = canvasText.style.color || "black";

        textElement.setAttribute("font-size", updatedFontSize);
        textElement.setAttribute("fill", updatedColor);

        // Debounced SVG update logic
        if (resizeTimeout) clearTimeout(resizeTimeout); // Clear the previous timeout
        resizeTimeout = setTimeout(() => {
            if (isResizingOrDragging === false) {
                updateCanvasText(sectionsConfig[currentSection - 1]);
            } else {
                clearTimeout(resizeTimeout);
            }
        }, 0); // Debounce duration in milliseconds
    });

    observer.observe(canvasText, {
        attributes: true, // Observe attribute changes
        attributeFilter: ["style"], // Only watch the `style` attribute
    });
}
