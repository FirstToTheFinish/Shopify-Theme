let currentSection = 1;
const totalSections = sectionsConfig.length; // Use the length of the sectionsConfig array
let capturedImages = {}; // Store captured image data
const blockedCharsRegex = /[&<>"'/`();]/g;

function showSection(section) {
    for (let i = 0; i < totalSections; i++) {
        document.getElementById(sectionsConfig[i].id).style.display = 'none';
    }

    document.getElementById(sectionsConfig[section - 1].id).style.display = 'block';
    updateCurrentSectionText(section);
    updateButtonVisibility(section);
    currentSection = section;

    const allCanvases = document.querySelectorAll('#tent-canvases .canvas2');
    const allTextCanvases = document.querySelectorAll('#tent-canvases .text-overlay');
    const overlayImage = document.getElementById('ValanceLogo');
    const previewer = document.getElementById('tentPreviewCanvas');
    const previewImage = document.getElementById('tentPreviewImage');

    allCanvases.forEach(canvas => {
        canvas.style.display = 'none';
    });

    allTextCanvases.forEach(canvas => {
        canvas.style.display = 'none';
    });

    overlayImage.style.display = 'none';
    previewer.style.display = 'none';
    previewImage.style.display = 'none';

    // Remove any existing overlays
    document.querySelectorAll('.canvas-overlay').forEach(overlay => overlay.remove());

    const sectionTitle = sectionsConfig[section - 1].title;
    if(hasWalls){
        switch (sectionTitle) {
            case "Front Peak":
                showCanvasWithOverlay('FrontPeakCanvas', 'FrontValanceCanvas', 'FrontPeakTextOverlay', 'FrontValanceTextOverlay');
                overlayImage.style.display = 'block';
                break;
            case "Front Valance":
                showCanvasWithOverlay('FrontValanceCanvas', 'FrontPeakCanvas', 'FrontPeakTextOverlay', 'FrontValanceTextOverlay');
                overlayImage.style.display = 'block';
                break;
            case "Back Peak":
                showCanvasWithOverlay('BackPeakCanvas', 'BackValanceCanvas', 'BackWallCanvas', 'BackPeakTextOverlay', 'BackValanceTextOverlay', 'BackWallTextOverlay');
                break;
            case "Back Valance":
                showCanvasWithOverlay('BackValanceCanvas', 'BackPeakCanvas', 'BackWallCanvas', 'BackPeakTextOverlay', 'BackValanceTextOverlay', 'BackWallTextOverlay');
                break;
            case "Back Wall":
                showCanvasWithOverlay('BackWallCanvas', 'BackPeakCanvas', 'BackValanceCanvas', 'BackPeakTextOverlay', 'BackValanceTextOverlay', 'BackWallTextOverlay');
                break;
            case "Right Peak":
                showCanvasWithOverlay('RightPeakCanvas', 'RightValanceCanvas', 'RightWallCanvas', 'RightPeakTextOverlay', 'RightValanceTextOverlay', 'RightWallTextOverlay');
                break;
            case "Right Valance":
                showCanvasWithOverlay('RightValanceCanvas', 'RightPeakCanvas', 'RightWallCanvas', 'RightPeakTextOverlay', 'RightValanceTextOverlay', 'RightWallTextOverlay');
                break;
            case "Right Wall":
                showCanvasWithOverlay('RightWallCanvas', 'RightPeakCanvas', 'RightValanceCanvas', 'RightPeakTextOverlay', 'RightValanceTextOverlay', 'RightWallTextOverlay');
                break;
            case "Left Peak":
                showCanvasWithOverlay('LeftPeakCanvas', 'LeftValanceCanvas', 'LeftWallCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay', 'LeftWallTextOverlay');
                break;
            case "Left Valance":
                showCanvasWithOverlay('LeftValanceCanvas', 'LeftPeakCanvas', 'LeftWallCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay', 'LeftWallTextOverlay');
                break;
            case "Left Wall":
                showCanvasWithOverlay('LeftWallCanvas', 'LeftPeakCanvas', 'LeftValanceCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay', 'LeftWallTextOverlay');
                break;
        }
    }
    else{
        switch (sectionTitle) {
            case "Front Peak":
                showCanvasWithOverlay('FrontPeakCanvas', 'FrontValanceCanvas', 'FrontPeakTextOverlay', 'FrontValanceTextOverlay');
                overlayImage.style.display = 'block';
                break;
            case "Front Valance":
                showCanvasWithOverlay('FrontValanceCanvas', 'FrontPeakCanvas', 'FrontPeakTextOverlay', 'FrontValanceTextOverlay');
                overlayImage.style.display = 'block';
                break;
            case "Back Peak":
                showCanvasWithOverlay('BackPeakCanvas', 'BackValanceCanvas', 'BackPeakTextOverlay', 'BackValanceTextOverlay');
                break;
            case "Back Valance":
                showCanvasWithOverlay('BackValanceCanvas', 'BackPeakCanvas', 'BackPeakTextOverlay', 'BackValanceTextOverlay');
                break;
            case "Right Peak":
                showCanvasWithOverlay('RightPeakCanvas', 'RightValanceCanvas', 'RightPeakTextOverlay', 'RightValanceTextOverlay');
                break;
            case "Right Valance":
                showCanvasWithOverlay('RightValanceCanvas', 'RightPeakCanvas', 'RightPeakTextOverlay', 'RightValanceTextOverlay');
                break;
            case "Left Peak":
                showCanvasWithOverlay('LeftPeakCanvas', 'LeftValanceCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay');
                break;
            case "Left Valance":
                showCanvasWithOverlay('LeftValanceCanvas', 'LeftPeakCanvas', 'LeftPeakTextOverlay', 'LeftValanceTextOverlay');
                break;
        }
    }
}

function nextSection() {
    const currentSectionId = sectionsConfig[currentSection - 1].id;

    // Validate the current section's input
    if (!validateTextInput(currentSectionId)) {
        showRequiredFieldsModal();
        return; // Prevent moving to the next section if validation fails
    }

    if (currentSection < totalSections) {
        currentSection++;
        showSection(currentSection);
        updateOverlayPositionAndSize(sectionsConfig[currentSection-1].title);
    } else {
        previewNow();
    }
}

function prevSection() {
    if (currentSection > 1) {
        currentSection--;
        showSection(currentSection);
    }
}

function updateCurrentSectionText(section) {
    const currentSectionSpan = document.getElementById('current-section');
    const sectionTitle = sectionsConfig[section - 1].title; // Get the title from the config
    currentSectionSpan.textContent = sectionTitle;
}

function updateButtonVisibility(section) {
    sectionsConfig.forEach((_, index) => {
        const prevButton = document.getElementById(`prevButton-${sectionsConfig[index].id}`);
        const nextButton = document.getElementById(`nextButton-${sectionsConfig[index].id}`);
        
        if (index + 1 === section) {
            if (section === 1) {
                prevButton.style.visibility = 'hidden';
            } else {
                prevButton.style.visibility = 'visible';
            }
    
            if (section === totalSections) {
                nextButton.style.visibility = 'visible';
                nextButton.textContent = 'Preview Now!'
            } else {
                nextButton.style.visibility = 'visible';
            }
        } else {
            prevButton.style.visibility = 'hidden';
            nextButton.style.visibility = 'hidden';
        }
    });
}

// Custom dropdown functions
function toggleDropdown(id) {
    // Close any open dropdowns
    const dropdowns = document.getElementsByClassName("custom-dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== id && dropdowns[i].classList.contains('show')) {
            dropdowns[i].classList.remove('show');
        }
    }
    // Toggle the clicked dropdown
    document.getElementById(id).classList.toggle("show");
}

function selectDropdownOption(dropdownId, value, sectionId) {
    const button = document.querySelector(`#${dropdownId}`).previousElementSibling;
    button.textContent = value;
    button.style.color = 'black'; // Set the text color of the button to black when a selection is made

    // Map custom font names to their CSS classes
    const fontClassMap = {
        'Benguiat BK': 'benguiat-bk',
        'Cityd Bold': 'cityd-bold',
        'Demonized': 'demonized',
        'Eurostile': 'eurostile',
        'Evogria': 'evogria',
        'Evogria Italic': 'evogria-italic',
        'Magnolia Script': 'magnolia-script',
        'Srabi Script': 'srabi-script',
        'Superstar': 'superstar-m54',
        'SwitzerlandCond Italic': 'swzconbi',
        'SwitzerlandCond': 'swzconbn',
    };

    if (dropdownId.includes('font-style')) {
        button.style.fontFamily = fontClassMap[value]; // Set the font family of the button text to match the chosen font style
        }

    document.getElementById(dropdownId).classList.remove("show");

    // Update the canvas text when an option is selected
    const section = sectionsConfig.find(section => section.id === sectionId);
    updateCanvasText(section);
}

function selectColorPickerOption(labelId, colorValue, sectionId) {
    const label = document.getElementById(labelId);
    if (colorValue == null){
        label.textContent = "None";
    }
    else{
        label.textContent = colorValue;  
    }

    const section = sectionsConfig.find(section => section.id === sectionId);
    updateCanvasText(section);
}

function handleFileDrop(event, sectionId, sectionTitle) {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length > 0) {
        const fileInput = document.getElementById(`upload-${sectionId}`);

        // Create a new DataTransfer object to update the input files
        const dataTransfer = new DataTransfer();
        for (const file of files) {
            dataTransfer.items.add(file);
        }
        fileInput.files = dataTransfer.files;

        // Call the existing functions to process the files
        validateFileInput({ target: fileInput }, sectionId);
        addArt(sectionId, sectionTitle);
    }
}

function showUploadModal() {
    const modal = document.getElementById('file-upload-modal');
    modal.style.display = 'block';
}

function closeUploadModal() {
    const modal = document.getElementById('file-upload-modal');
    modal.style.display = 'none';
}

function showRequiredFieldsModal() {
    const modal = document.getElementById('required-fields-modal');
    modal.style.display = 'block';
}

function closeRequiredFieldsModal() {
    const modal = document.getElementById('required-fields-modal');
    modal.style.display = 'none';
}

document.getElementById('horizontalCenter').addEventListener('click', () => {
    const selectedTextBox = document.querySelector('.editable-text.selected, .editable-text.selected2, .editable-art.selected, .editable-art.selected2');
    if (selectedTextBox) {
        const textOverlay = selectedTextBox.closest('.text-overlay');
        if (textOverlay) {
            selectedTextBox.style.left = `${(textOverlay.offsetWidth - selectedTextBox.offsetWidth) / 2}px`;
        }
    }
});

document.getElementById('verticalCenter').addEventListener('click', () => {
    const selectedTextBox = document.querySelector('.editable-text.selected, .editable-text.selected2, .editable-art.selected, .editable-art.selected2');
    if (selectedTextBox) {
        const textOverlay = selectedTextBox.closest('.text-overlay');
        if (textOverlay) {
            selectedTextBox.style.top = `${(textOverlay.offsetHeight - selectedTextBox.offsetHeight) / 2}px`;
        }
    }
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('file-upload-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const snapButton = document.getElementById('toggleSnapGrid');
    const horizButton = document.getElementById('horizontalCenter');
    const vertButton = document.getElementById('verticalCenter');

    snapButton.addEventListener('mouseover', function() {
        this.querySelector('img').src = `${window.shopifyAssetPaths.grid.snapGridWhite}`;
    });

    snapButton.addEventListener('mouseout', function() {
        const img = this.querySelector('img');
        if (this.classList.contains('active')) {
            img.src = `${window.shopifyAssetPaths.grid.snapGridWhite}`;
        } else {
            img.src = `${window.shopifyAssetPaths.grid.snapGrid}`;
        }
    });

    horizButton.addEventListener('mouseover', function() {
        this.querySelector('img').src = `${window.shopifyAssetPaths.grid.horizontalCenterWhite}`;
    });
    horizButton.addEventListener('mouseout', function() {
        this.querySelector('img').src = `${window.shopifyAssetPaths.grid.horizontalCenter}`;
    });

    vertButton.addEventListener('mouseover', function() {
        this.querySelector('img').src = `${window.shopifyAssetPaths.grid.verticalCenterWhite}`;
    });
    vertButton.addEventListener('mouseout', function() {
        this.querySelector('img').src = `${window.shopifyAssetPaths.grid.verticalCenter}`;
    });

    snapButton.addEventListener('click', function() {
        this.classList.toggle('active');
        const img = this.querySelector('img');
        if (this.classList.contains('active')) {
            img.src = `${window.shopifyAssetPaths.grid.snapGridWhite}`;
        } else {
            img.src = `${window.shopifyAssetPaths.grid.snapGrid}`;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    generateSections(sectionsConfig);
    showSection(currentSection); // Ensure this is called
    initializeAllCanvases(); // Initialize all canvases

    const blockedCharsRegex = /[&<>"'/`();]/g;
    const maxLength = 200;

    sectionsConfig.forEach(section => {
        const textInput = document.getElementById(`text-input-${section.id}`);
        textInput.addEventListener('input', () => {
            cleanInput(textInput, blockedCharsRegex);
            validateTextInput(section.id);
            updateCanvasText(section);
        });
        textInput.addEventListener('paste', () => {
            cleanInput(textInput, blockedCharsRegex);
            updateCanvasText(section);
        });
        textInput.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
        

        const fontStyleDropdown = document.querySelector(`#font-style-${section.id}`).parentElement;
        fontStyleDropdown.addEventListener('click', () => validateTextInput(section.id));

        const notesInput = document.getElementById(`notes-${section.id}`);
        notesInput.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
        notesInput.addEventListener('input', (event) =>{
          cleanInput(notesInput, blockedCharsRegex);
          enforceCharacterLimit(event, maxLength);  
        });
    });

    const emailAddr = document.getElementById('email');
    emailAddr.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    emailAddr.addEventListener('input', () => cleanInput(emailAddr, blockedCharsRegex));

    const emailConfirmAddr = document.getElementById('confirmEmail');
    emailConfirmAddr.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    emailConfirmAddr.addEventListener('input', () => cleanInput(emailConfirmAddr, blockedCharsRegex));

    const userName = document.getElementById('userName');
    userName.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    userName.addEventListener('input', () => cleanInput(userName, blockedCharsRegex));

    const schoolClub = document.getElementById('schoolClub');
    schoolClub.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    schoolClub.addEventListener('input', () => cleanInput(schoolClub, blockedCharsRegex));

    const street = document.getElementById('street');
    street.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    street.addEventListener('input', () => cleanInput(street, blockedCharsRegex));

    const city = document.getElementById('city');
    city.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    city.addEventListener('input', () => cleanInput(city, blockedCharsRegex));

    const tentName = document.getElementById('Tent-Name');
    city.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    city.addEventListener('input', () => cleanInput(tentName, blockedCharsRegex));

    // Add event listener to form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sanitizeFormInputs);
    }
});

function copyOppositeSection(sectionId) {
    let sourceSection, targetSection;

    // Map the button clicked to the corresponding source and target sections
    switch(sectionId) {
        case 'back-peak':
            sourceSection = getSectionIdByTitle('Front Peak');
            targetSection = getSectionIdByTitle('Back Peak');
            break;
        case 'back-valance':
            sourceSection = getSectionIdByTitle('Front Valance');
            targetSection = getSectionIdByTitle('Back Valance');
            break;
        case 'left-peak':
            sourceSection = getSectionIdByTitle('Right Peak');
            targetSection = getSectionIdByTitle('Left Peak');
            break;
        case 'left-valance':
            sourceSection = getSectionIdByTitle('Right Valance');
            targetSection = getSectionIdByTitle('Left Valance');
            break;
        case 'left-wall':
            sourceSection = getSectionIdByTitle('Right Wall');
            targetSection = getSectionIdByTitle('Left Wall');
            break;
    }

    // Now, copy the relevant properties
    copyTentCanvasColor(sourceSection.title.replace(' ', ''), targetSection.title.replace(' ',''), sourceSection, targetSection);
    copyTextProperties(sourceSection, targetSection);
    copyArtElements(sourceSection, targetSection);
    copyNotes(sourceSection, targetSection);
}

// Copy the tent canvas color from the source to target section
function copyTentCanvasColor(sourceTitle, targetTitle, source, target) {
    document.getElementById(`selected-color-${target.id}`).innerText = document.getElementById(`selected-color-${source.id}`).innerText;

    const sourceCanvas = document.getElementById(`${sourceTitle}Canvas`);
    const targetCanvas = document.getElementById(`${targetTitle}Canvas`);
    const contextSrc = sourceCanvas.getContext('2d');
    const contextTarget = targetCanvas.getContext('2d');
    contextTarget.fillStyle = contextSrc.fillStyle;
    contextTarget.fill();
    contextTarget.strokeStyle = '#000000';
    contextTarget.stroke();

    // Find the selected radio button in the source section
    const sourceRadios = document.querySelectorAll(`input[name="color-${source.id}"]`);
    const selectedSourceRadio = Array.from(sourceRadios).find(radio => radio.checked);

    if (selectedSourceRadio) {
        // Copy Radio Button Color
        const targetRadios = document.querySelectorAll(`input[name="color-${target.id}"]`);
        targetRadios.forEach(radio => {
            radio.checked = radio.value === selectedSourceRadio.value;
        });
    }
    else{
        //Copy Custom Color
        const targetRadios = document.querySelectorAll(`input[name="color-${target.id}"]`);
        targetRadios.forEach(radio => {
            radio.checked = false;
        });

        const sourcePickr = pickrInstances[source.name];
        const targetPickr = pickrInstances[target.name];
        
        if (sourcePickr && targetPickr) {
            // Get the current color from the source Pickr instance
            const sourceColor = sourcePickr.getColor().toHEXA().toString();
            
            // Set the color in the target Pickr instance
            targetPickr.setColor(sourceColor);
        } else {
            console.error("Pickr instances not found for source or target sections.");
        }
    }
}

// Copy text properties (font, color, outline, size, and position)
function copyTextProperties(source, target) {
    const sourceText = document.getElementById(`text-input-${source.id}`).value;
    const targetTextElement = document.getElementById(`text-input-${target.id}`);
    
    // Copy text
    targetTextElement.value = sourceText;

    //Copy Font Style
    const srcStyle = document.getElementById(`font-style-${source.id}`).previousElementSibling.innerText;
    selectDropdownOption(`font-style-${target.id}`, srcStyle, `${target.id}`);

    //Copy Font Color
    const sourcePickr = pickrInstances2[source.name];
    const targetPickr = pickrInstances2[target.name];
    if (sourcePickr && targetPickr) {
        // Get the current color from the source Pickr instance
        const sourceColor = sourcePickr.getColor().toHEXA().toString();
            
        // Set the color in the target Pickr instance
        targetPickr.setColor(sourceColor);
    } else {
        console.error("Pickr instances not found for source or target sections.");
    }

    //Copy Outline Color
    const sourcePickr2 = pickrInstances3[source.name];
    const targetPickr2 = pickrInstances3[target.name];
        
    if (sourcePickr2 && targetPickr2) {
        // Get the current color from the source Pickr instance
        const sourceColor = sourcePickr2.getColor().toHEXA().toString();

        if(document.getElementById(`outline-color-${source.id}`).innerText === sourceColor){
            // Set the color in the target Pickr instance
            targetPickr2.setColor(sourceColor);
        }
        else{
            targetPickr2.setColor(null);
        }
    } else {
        console.error("Pickr instances not found for source or target sections.");
    }

    // Copy text positioning and size
    const sourceTextElement = document.querySelector(`#editable-text-${source.id}`);
    const targetTextContainer = document.querySelector(`#${target.title.replace(' ', '')}TextOverlay`);

    if (sourceTextElement && targetTextContainer) {
        const sourceStyles = window.getComputedStyle(sourceTextElement);
        const fontSize = sourceStyles.fontSize;

        const sourceContainer = sourceTextElement.parentElement;
        const targetContainer = targetTextContainer;

        // Match the sizes of the target container to the source container
        targetContainer.style.width = `${sourceContainer.offsetWidth}px`;
        targetContainer.style.height = `${sourceContainer.offsetHeight}px`;

        // Copy the text's position relative to the source container
        const left = sourceStyles.left;
        const top = sourceStyles.top;

        let newTargetTextElement = targetTextContainer.querySelector(`#editable-text-${target.id}`);
        if (!newTargetTextElement) {
            // Create new text element if it doesn't exist
            newTargetTextElement = document.createElement('div');
            newTargetTextElement.id = `editable-text-${target.id}`;
            newTargetTextElement.className = `editable-text`;
            targetTextContainer.appendChild(newTargetTextElement);
        }

        // Set the text properties in the target container
        newTargetTextElement.style.left = left;
        newTargetTextElement.style.top = top;
        newTargetTextElement.style.fontSize = fontSize;
        newTargetTextElement.style.width = sourceStyles.width;
        newTargetTextElement.style.height = sourceStyles.height;
        newTargetTextElement.style.padding = sourceStyles.padding;
        newTargetTextElement.style.border = sourceStyles.border;
        newTargetTextElement.style.position = 'absolute'; // Ensure absolute positioning
        newTargetTextElement.style.whiteSpace = 'nowrap'; // Prevent text wrapping
        newTargetTextElement.style.overflow = 'hidden'; // Ensure overflow is hidden
        newTargetTextElement.style.textOverflow = 'ellipsis'; // Ensure text is cut off, not wrapped

        newTargetTextElement.innerHTML = sourceText.toUpperCase().replace(/\n/g, '<br>');
    }

    validateTextInput(target.id);
    updateCanvasText(target);
}

// Copy art elements (placement, size, preview)
function copyArtElements(source, target) {
    const sourceArtPreview = document.getElementById(`art-preview-${source.id}`);
    const targetArtPreview = document.getElementById(`art-preview-${target.id}`);
    const artIds = {};
    let cnt = 0;
    
    // Clear the target art area first
    targetArtPreview.innerHTML = '';
    
    // Filter out non-element nodes and clone all art elements from the source and append them to the target
    [...sourceArtPreview.childNodes].filter(node => node.nodeType === 1).forEach(art => {
        const clonedArt = art.cloneNode(true); // Clone the art element

        // Generate a new unique ID for the cloned art element
        const newArtId = `image-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        artIds[cnt] = newArtId;
        
        // Update the ID for the cloned element and its related elements
        clonedArt.id = `${newArtId}-preview`; // Update the preview ID
        const removeButton = clonedArt.querySelector('.remove-art');
        const sizeDropdown = clonedArt.querySelector('.image-size-dropdown');
        const clonedImg = clonedArt.querySelector('img');

        if (removeButton) {
            removeButton.setAttribute('onclick', `removeArt('${newArtId}')`); // Update the remove button
        }

        if (sizeDropdown) {
            sizeDropdown.setAttribute('onchange', `resizeImage('${newArtId}', this.value)`); // Update size dropdown
        }

        if (clonedImg) {
            clonedImg.id = newArtId; // Update the image ID
        }

        // Append the cloned art to the target art preview section
        targetArtPreview.appendChild(clonedArt);
        ++cnt;
    });

    // Now handle the art on the canvas (TextOverlay)
    const sourceOverlay = document.getElementById(`${source.title.replace(' ', '')}TextOverlay`);
    const targetOverlay = document.getElementById(`${target.title.replace(' ', '')}TextOverlay`);
    cnt = 0;

    // Remove only art elements (with class 'editable-art') from the target overlay
    [...targetOverlay.childNodes].filter(node => 
        node.nodeType === 1 && node.classList.contains('editable-art')
    ).forEach(art => art.remove()); // Remove the art elements

    // Filter and clone only elements with the class 'editable-art' from the source overlay
    [...sourceOverlay.childNodes].filter(node => 
        node.nodeType === 1 && node.classList.contains('editable-art')
    ).forEach(art => {
        const clonedArt = art.cloneNode(true); // Clone the art element
        

        // Generate a new unique ID for the cloned art element
        const newArtId = artIds[cnt];

        // Update the ID for the cloned element
        clonedArt.id = `${newArtId}`; // Update the overlay ID
        clonedArt.setAttribute('data-id', newArtId); // Add data-id attribute for deletion

        // Set the cloned art's position and properties (like draggable/resizable) on the canvas
        clonedArt.style.left = `${parseFloat(art.style.left)}px`;
        clonedArt.style.top = `${parseFloat(art.style.top)}px`;
        clonedArt.style.position = 'absolute';
        clonedArt.style.cursor = 'move';

        // Append the new art to the target overlay (TextOverlay)
        targetOverlay.appendChild(clonedArt);

        // Make the new art draggable and resizable
        const tentCanvas = document.getElementById(`${target.title.replace(' ', '')}Canvas`);
        makeElementDraggable(clonedArt, targetOverlay);
        makeElementResizable(clonedArt, tentCanvas);
        addSelectionListener(targetOverlay);
        ++cnt;
    });
}


// Copy notes
function copyNotes(source, target) {
    const sourceNotes = document.getElementById(`notes-${source.id}`).value;
    const targetNotes = document.getElementById(`notes-${target.id}`);
    document.getElementById(`char-count-${target.id}`).innerText = document.getElementById(`char-count-${source.id}`).innerText;
    targetNotes.value = sourceNotes;
}

function getSectionIdByTitle(title) {
    // Use the find method to search for the section with the matching title
    const section = sectionsConfig.find(section => section.title === title);
    
    // If a matching section is found, return its id, otherwise return null or a message
    return section ? section : null;
}
