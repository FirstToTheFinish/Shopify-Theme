let isUpdating = false;
let currentSection = 1;
let currentTab = 'design';
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
}

function nextSection() {
    const currentSectionId = sectionsConfig[currentSection - 1].id;

    // Validate the current section's input
    if (!validateTextInput(currentSectionId)) {
        showRequiredFieldsModal();
        return; // Prevent moving to the next section if validation fails
    }

    if (currentSection < totalSections && currentTab === "text-art") {
        currentSection++;
        showSection(currentSection);
    }
    else if (currentTab === "design"){
        currentSection = 1;
        showSection(currentSection);
        switchTab("text-art");
        
    }
    else if (currentTab === "sizing"){
        switchTab("submit-design");
    }
    else {
        switchTab('sizing');
    }
}

function prevSection() {
    const currentSectionId = sectionsConfig[currentSection - 1].id;

    // Validate the current section's input
    if (!validateTextInput(currentSectionId)) {
        showRequiredFieldsModal();
        return; // Prevent moving to the next section if validation fails
    }
    if (currentSection > 1 && currentTab === "text-art") {
        currentSection--;
        showSection(currentSection);
    }
    else if (currentTab === "sizing"){
        currentSection = 2;
        showSection(currentSection);
        switchTab("text-art");
        
    }
    else if (currentTab === "submit-design"){
        switchTab("sizing");
    }
    else{
        switchTab('design');
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
                prevButton.style.visibility = 'visible';
            } else {
                prevButton.style.visibility = 'visible';
            }
    
            if (section === totalSections) {
                nextButton.style.visibility = 'visible';
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
    button.value = value;
    button.style.color = 'black'; // Set the text color of the button to black when a selection is made

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

    if (dropdownId.includes('font-style') && value != '') {
        button.style.fontFamily = fontClassMap[value]; // Set the font family of the button text to match the chosen font style
    }
    else{
        button.style.fontFamily = 'Arial';
        if(value == ''){
            value = 'Select a Font Style'
        }
    }

    if (dropdownId.includes('font-style') && value != '') {
    }
    else{
        if(value == ''){
            value = 'Select a Font Effect'
        }
    }

    
    button.innerHTML = `${value} <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;

    document.getElementById(dropdownId).classList.remove("show");

    // Update the canvas text when an option is selected
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
        const textOverlay = selectedTextBox.parentElement;
        if (textOverlay) {
            if(itDescript.toUpperCase().includes("COMPRESSION")){
                selectedTextBox.style.left = `${(317 - selectedTextBox.offsetWidth / 2)}px`;
            }
            else{
                selectedTextBox.style.left = `${(340 - selectedTextBox.offsetWidth / 2)}px`;
            }
            
        }
    }
});

document.getElementById('verticalCenter').addEventListener('click', () => {
    const selectedTextBox = document.querySelector('.editable-text.selected, .editable-text.selected2, .editable-art.selected, .editable-art.selected2');
    if (selectedTextBox) {
        const textOverlay = selectedTextBox.parentElement;
        if (textOverlay) {
            selectedTextBox.style.top = `${300 - selectedTextBox.offsetHeight / 2}px`;
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
    document.getElementById("builder-controls").style.visibility = "visible";

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

        const fontEffectDropdown = document.querySelector(`#font-effect-${section.id}`).parentElement;
        fontEffectDropdown.addEventListener('click', () => validateTextInput(section.id));

        const slider = document.getElementById(`rotationSlider-${section.id}`);
        const sliderValueLabel = document.getElementById(`sliderValue-${section.id}`);
        const track = document.getElementById('notches');
    
        // Add click listener to the track
        track.addEventListener('click', (e) => {
            const trackRect = track.getBoundingClientRect();
            const clickX = e.clientX - trackRect.left; // Click position relative to the track
            const trackWidth = trackRect.width;
            
            // Calculate the new slider value
            const min = parseFloat(slider.min);
            const max = parseFloat(slider.max);
            const step = parseFloat(slider.step);
            
            const percentage = clickX / trackWidth;
            let newValue = min + percentage * (max - min);
            
            // Snap to the nearest step
            newValue = Math.round(newValue / step) * step;
            
            // Update the slider value
            slider.value = newValue;
    
            // Trigger input event on the slider to handle updates
            slider.dispatchEvent(new Event('input'));
        });

        document.getElementById(`rotateLeftBtn-${section.id}`).addEventListener("focus", () => {
            slider.classList.add('active');
        });
        document.getElementById(`rotateRightBtn-${section.id}`).addEventListener("focus", () => {
            slider.classList.add('active');
        });
        document.getElementById(`rotateLeftBtn-${section.id}`).addEventListener("blur", () => {
            slider.classList.remove('active');
        });
        document.getElementById(`rotateRightBtn-${section.id}`).addEventListener("blur", () => {
            slider.classList.remove('active');
        });

        let holdInterval; // Variable to store the interval ID

        document.getElementById(`rotateLeftBtn-${section.id}`).addEventListener("mousedown", () => {
            slider.classList.add('active');
            slider.value--;
            updateRotateValue(sliderValueLabel);

            // Start the interval to continue decreasing the value while holding the button
            holdInterval = setInterval(() => {
                slider.value--;
                updateRotateValue(sliderValueLabel);
            }, 100); // Adjust the interval time (milliseconds) as needed
        });

        document.getElementById(`rotateRightBtn-${section.id}`).addEventListener("mousedown", () => {
            slider.classList.add('active');
            slider.value++;
            updateRotateValue(sliderValueLabel);

            // Start the interval to continue increasing the value while holding the button
            holdInterval = setInterval(() => {
                slider.value++;
                updateRotateValue(sliderValueLabel);
            }, 100); // Adjust the interval time (milliseconds) as needed
        });

        document.getElementById(`rotateLeftBtn-${section.id}`).addEventListener("mouseup", () => {
            slider.classList.remove('active');
            clearInterval(holdInterval); // Clear the interval when the button is released
        });

        document.getElementById(`rotateRightBtn-${section.id}`).addEventListener("mouseup", () => {
            slider.classList.remove('active');
            clearInterval(holdInterval); // Clear the interval when the button is released
        });

        // Optional: Clear the interval if the mouse leaves the button area while holding
        document.getElementById(`rotateLeftBtn-${section.id}`).addEventListener("mouseleave", () => {
            clearInterval(holdInterval);
        });
        document.getElementById(`rotateRightBtn-${section.id}`).addEventListener("mouseleave", () => {
            clearInterval(holdInterval);
        });
    
        // Add listener to handle slider input changes
        slider.addEventListener('input', () => {
            // Function to update the value display
            updateRotateValue(sliderValueLabel);
        });

        // Add 'active' class when slider gains focus or is clicked
        slider.addEventListener('focus', () => {
            slider.classList.add('active');
        });

        // Remove 'active' class when slider loses focus
        slider.addEventListener('blur', () => {
            slider.classList.remove('active');
        });

        // Optional: Add 'active' class on mouse down and remove it on mouse up
        slider.addEventListener('mousedown', () => {
            slider.classList.add('active');
        });

        slider.addEventListener('mouseup', () => {
            slider.classList.remove('active');
        });

        function updateRotateValue(sliderValueLabel){
            let sliderValue = `${slider.value}\u00B0`;
            if(sliderValue.includes('-')){
                sliderValue = sliderValue.replace("-", "");
                sliderValue += " Left";
            }
            else if(sliderValue === "0\u00B0"){
            }
            else{
                sliderValue += " Right";
            }
            sliderValueLabel.textContent = sliderValue; // Append degree symbol
            const textDiv = document.getElementById(`editable-text-${section.id}`);
            if (textDiv) {
                textDiv.style.transform = `rotate(${slider.value}deg)`;
            }

        }

        const notesInput = document.getElementById(`notes-${section.id}`);
                notesInput.addEventListener('input', (event) =>{
          cleanInput(notesInput, blockedCharsRegex);
          enforceCharacterLimit(event, maxLength);  
        });
    });

    const shortNotesInput = document.getElementById(`shortDesign-notes`);
    shortNotesInput.addEventListener('keydown', (event) => blockInvalidChars(event, blockedCharsRegex));
    shortNotesInput.addEventListener('input', (event) =>{
        cleanInput(shortNotesInput, blockedCharsRegex);
        enforceCharacterLimit(event, maxLength);  
    });

    const emailAddr = document.getElementById('email');
        emailAddr.addEventListener('input', () => cleanInput(emailAddr, blockedCharsRegex));

    const emailConfirmAddr = document.getElementById('confirmEmail');
        emailConfirmAddr.addEventListener('input', () => cleanInput(emailConfirmAddr, blockedCharsRegex));

    const userName = document.getElementById('userName');
        userName.addEventListener('input', () => cleanInput(userName, blockedCharsRegex));

    const schoolClub = document.getElementById('schoolClub');
        schoolClub.addEventListener('input', () => cleanInput(schoolClub, blockedCharsRegex));

const salesRep = document.getElementById('salesRep');
    salesRep.addEventListener('input', () => cleanInput(schoolClub, blockedCharsRegex));

    const street = document.getElementById('street');
        street.addEventListener('input', () => cleanInput(street, blockedCharsRegex));

    const city = document.getElementById('city');
        city.addEventListener('input', () => cleanInput(city, blockedCharsRegex));

    const tentName = document.getElementById('Tent-Name');
    tentName.addEventListener('input', () => cleanInput(tentName, blockedCharsRegex));

    // Add event listener to form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sanitizeFormInputs);
    }

    // Event listeners to update color display when the user inputs row and column values
    document.getElementById('rowNumber1').addEventListener('input', function() {
        updateDisplayedColor('rowNumber1', 'columnNumber1', 'colorDisplayBox1', 'colorText1', 'selectedColor1');
    });

    document.getElementById('columnNumber1').addEventListener('input', function() {
        updateDisplayedColor('rowNumber1', 'columnNumber1', 'colorDisplayBox1', 'colorText1', 'selectedColor1');
    });

    document.getElementById('rowNumber2').addEventListener('input', function() {
        updateDisplayedColor('rowNumber2', 'columnNumber2', 'colorDisplayBox2', 'colorText2', 'selectedColor2');
    });

    document.getElementById('columnNumber2').addEventListener('input', function() {
        updateDisplayedColor('rowNumber2', 'columnNumber2', 'colorDisplayBox2', 'colorText2', 'selectedColor2');
    });

    document.getElementById('rowNumber3').addEventListener('input', function() {
        updateDisplayedColor('rowNumber3', 'columnNumber3', 'colorDisplayBox3', 'colorText3', 'selectedColor3');
    });

    document.getElementById('columnNumber3').addEventListener('input', function() {
        updateDisplayedColor('rowNumber3', 'columnNumber3', 'colorDisplayBox3', 'colorText3', 'selectedColor3');
    });

    document.getElementById('rowNumber4').addEventListener('input', function() {
        updateDisplayedColor('rowNumber4', 'columnNumber4', 'colorDisplayBox4', 'colorText4', 'selectedColor4');
    });

    document.getElementById('columnNumber4').addEventListener('input', function() {
        updateDisplayedColor('rowNumber4', 'columnNumber4', 'colorDisplayBox4', 'colorText4', 'selectedColor4');
    });

    document.getElementById('rowNumber5').addEventListener('input', function() {
        updateDisplayedColor('rowNumber5', 'columnNumber5', 'colorDisplayBox5', 'colorText5', 'selectedColor5');
    });

    document.getElementById('columnNumber5').addEventListener('input', function() {
        updateDisplayedColor('rowNumber5', 'columnNumber5', 'colorDisplayBox5', 'colorText5', 'selectedColor5');
    });

    document.getElementById('rowNumber6').addEventListener('input', function() {
        updateDisplayedColor('rowNumber6', 'columnNumber6', 'colorDisplayBox6', 'colorText6', 'selectedColor6');
    });

    document.getElementById('columnNumber6').addEventListener('input', function() {
        updateDisplayedColor('rowNumber6', 'columnNumber6', 'colorDisplayBox6', 'colorText6', 'selectedColor6');
    });

    document.addEventListener('input', function(event) {
        const target = event.target;
    
        // Check if the input matches the desired pattern for rows
        if (target.matches('[id^="rowNumber7-"]')) {
            const suffix = target.id.split('-')[1]; // Get 'Front' or 'Back'
            updateDisplayedColor(
                `rowNumber7-${suffix}`,
                `columnNumber7-${suffix}`,
                `colorDisplayBox7-${suffix}`,
                `colorText7-${suffix}`,
                `selectedColor7-${suffix}`
            );
        }
    
        // Check if the input matches the desired pattern for columns
        if (target.matches('[id^="columnNumber7-"]')) {
            const suffix = target.id.split('-')[1]; // Get 'Front' or 'Back'
            updateDisplayedColor(
                `rowNumber7-${suffix}`,
                `columnNumber7-${suffix}`,
                `colorDisplayBox7-${suffix}`,
                `colorText7-${suffix}`,
                `selectedColor7-${suffix}`
            );
        }
    });
    

    document.addEventListener('input', function(event) {
        const target = event.target;
    
        // Check if the input matches the desired pattern for rows
        if (target.matches('[id^="rowNumber8-"]')) {
            const suffix = target.id.split('-')[1]; // Get 'Front' or 'Back'
            updateDisplayedColor(
                `rowNumber8-${suffix}`,
                `columnNumber8-${suffix}`,
                `colorDisplayBox8-${suffix}`,
                `colorText8-${suffix}`,
                `selectedColor8-${suffix}`
            );
        }
    
        // Check if the input matches the desired pattern for columns
        if (target.matches('[id^="columnNumber8-"]')) {
            const suffix = target.id.split('-')[1]; // Get 'Front' or 'Back'
            updateDisplayedColor(
                `rowNumber8-${suffix}`,
                `columnNumber8-${suffix}`,
                `colorDisplayBox8-${suffix}`,
                `colorText8-${suffix}`,
                `selectedColor8-${suffix}`
            );
        }
    });
    

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        // Check if there is an open dropdown and the click is outside the dropdown or the selected color box
        if (currentOpenDropdown && !currentOpenDropdown.contains(event.target) && !currentSelectedColorDiv.contains(event.target)) {
            currentOpenDropdown.style.display = 'none';
            currentSelectedColorDiv.classList.remove('active'); // Remove active class when closing via outside click
            currentOpenDropdown = null;
            currentSelectedColorDiv = null;
        }
    });

    // Close dropdown when Escape key is pressed
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && currentOpenDropdown) {
            currentOpenDropdown.style.display = 'none';
            currentSelectedColorDiv.classList.remove('active'); // Remove active class when closing via Escape
            currentOpenDropdown = null;
            currentSelectedColorDiv = null;
        }
    });

    // Close dropdown if user clicks outside of it
    document.addEventListener("click", function(event) {
        const dropdown = document.getElementById("templateOptions");
        const previewContainer = document.getElementById("templatePreview");
        if (!dropdown.contains(event.target) && !previewContainer.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });

    // Close dropdown when Escape key is pressed
    document.addEventListener("keydown", function(event) {
        const dropdown = document.getElementById("templateOptions");
        if (event.key === "Escape" && dropdown.style.display === "grid") {
            dropdown.style.display = "none";
        }
    });

    document.querySelectorAll("input[type='number']").forEach(input => {
        // Prevent typing decimal points, plus, or minus
        input.addEventListener("keypress", function (e) {
            if (e.key === "." || e.key === "-" || e.key === "+") {
                e.preventDefault();
            }
        });
    
        // Prevent pasting non-numeric values
        input.addEventListener("paste", function (e) {
            const pastedText = (e.clipboardData || window.clipboardData).getData("text");
            if (!/^\d+$/.test(pastedText)) {
                e.preventDefault();
            }
        });
    
        // Prevent entering negative values programmatically
        input.addEventListener("input", function () {
            if (this.value.includes(".") || this.value.includes("-") || this.value.includes("+")) {
                this.value = this.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            }
        });
    });
    

    showCanvases();
    selectColor('#B4AFA5', 'selectedColor1', 'colorDropdown1');
    selectColor('#7D7873', 'selectedColor2', 'colorDropdown2');
    selectColor('#FFFFFF', 'selectedColor3', 'colorDropdown3');
    selectColor('#CDA55F', 'selectedColor4', 'colorDropdown4');
    selectColor('#9B4B00', 'selectedColor5', 'colorDropdown5');
    selectColor('#000000', 'selectedColor6', 'colorDropdown6');
    populateTemplateDropdown();
    populateEffectDropdown();
    
    // Create a "No Design" template object to generate the initial default thumbnail
    const noDesignTemplate = { name: "No Design" };
    const templatePreviewImage = document.getElementById("templatePreviewImage");
    
    // Generate and set the "No Design" thumbnail as the default preview image
    generateThumbnail(noDesignTemplate, templatePreviewImage);
    // Assuming you have an element with the ID 'FrontOverlayCanvas' to apply the clip path
    document.getElementById('FrontOverlayCanvas').style.clipPath = "url(#tankTopClipPath)";
    document.getElementById('BackOverlayCanvas').style.clipPath = "url(#tankTopBackClipPath)";

});

function switchTab(tabId) {

    if(currentTab === 'text-art'){
        const currentSectionId = sectionsConfig[currentSection - 1].id;
        // Validate the current section's input
        if (!validateTextInput(currentSectionId)) {
            showRequiredFieldsModal();
            return; // Prevent moving to the next section if validation fails
        }
    }

    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Remove active class from all tabs and buttons
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and its content
    document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    currentTab = tabId;
}

function populateEffectDropdown(){
    for(i = 0; i < totalSections; ++i){
        let section = sectionsConfig[i];
        let fontEffectDropdown = document.getElementById(`font-effect-${section.id}`);
        if(i === 0){
            fontEffectDropdown.innerHTML = `<div onclick="selectDropdownOption('font-effect-${section.id}', 'Straight', '${section.id}')">
            <img src="${window.shopifyAssetPaths.tools.straightText}" style="object-fit: contain; width: 150px; height: auto;" />
        </div>
        <div onclick="selectDropdownOption('font-effect-${section.id}', 'Vertical Arch', '${section.id}')">
            <img src="${window.shopifyAssetPaths.tools.archText}" alt="Arch Effect" style="object-fit: contain; width: 150px; height: auto;" />
        </div>
        <div onclick="selectDropdownOption('font-effect-${section.id}', 'Reverse Vertical Arch', '${section.id}')">
            <img src="${window.shopifyAssetPaths.tools.revArchText}" alt="Reverse Arch Effect" style="object-fit: contain; width: 150px; height: auto;" />
        </div>
        <div onclick="selectDropdownOption('font-effect-${section.id}', 'Stacked', '${section.id}')">
            <img src="${window.shopifyAssetPaths.tools.verticalText}" style="object-fit: contain; width: 150px; height: auto;" />
        </div>`
        }
        else{
            fontEffectDropdown.innerHTML = `<div onclick="selectDropdownOption('font-effect-${section.id}', 'Straight', '${section.id}')">
            <img src="${window.shopifyAssetPaths.straightText}" alt="Straight Effect" style="object-fit: contain; width: 150px; height: auto;" />
        </div>
        <div onclick="selectDropdownOption('font-effect-${section.id}', 'Stacked', '${section.id}')">
            <img src="${window.shopifyAssetPaths.verticalText}" style="object-fit: contain; width: 150px; height: auto;" />
        </div>`
        }
    }
}
