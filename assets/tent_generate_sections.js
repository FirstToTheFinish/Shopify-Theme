const pickrInstances = {};
const pickrInstances2 = {};
const pickrInstances3 = {};
function generateSections(sectionsConfig) {
    const container = document.getElementById('sections-container');
    container.innerHTML = ''; // Clear the container before generating sections
        sectionsConfig.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.id = section.id;
        sectionDiv.classList.add('section');
        if (index !== 0) {
            sectionDiv.style.display = 'none';
        }

        sectionDiv.innerHTML = `
            <div class="itemBuywrapper">
                <div class="" style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>1</span>
                    </span>
                    <span class="fws_ftaquiB ftcolG2 fs16">
                        CURRENT SECTION: <span id="current-section">${section.title}</span>
                    </span>
                    ${section.title === 'Back Peak' ? '<br><br><button id="copy-back-peak" class="copy-button" onclick="copyOppositeSection(\'back-peak\')">Copy Front Peak</button>' : ''}
                    ${section.title === 'Back Valance' ? '<br><br><button id="copy-back-valance" class="copy-button" onclick="copyOppositeSection(\'back-valance\')">Copy Front Valance</button>' : ''}
                    ${section.title === 'Left Peak' ? '<br><br><button id="copy-left-peak" class="copy-button" onclick="copyOppositeSection(\'left-peak\')">Copy Right Peak</button>' : ''}
                    ${section.title === 'Left Valance' ? '<br><br><button id="copy-left-valance" class="copy-button" onclick="copyOppositeSection(\'left-valance\')">Copy Right Valance</button>' : ''}
                    ${section.title === 'Left Wall' ? '<br><br><button id="copy-left-wall" class="copy-button" onclick="copyOppositeSection(\'left-wall\')">Copy Right Wall</button>' : ''}
                    <br><br>
                </div>
                <div class="" style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>2</span>
                    </span>
                    <span class="fws_ftaquiB ftcolG2 fs16">
                        CHOOSE COLOR: <span id="selected-color-${section.id}">White</span>
                    </span>
                    <div style="position: relative;">
                        ${section.colorOptions.map(color => `
                            <input type="radio" id="${section.id}-${color.toLowerCase().replace(' ', '-')}" name="color-${section.id}" value="${color}" class="color-radio" ${color === 'White' ? 'checked' : ''}>
                            <label for="${section.id}-${color.toLowerCase().replace(' ', '-')}">
                                <div class="color-swatch2 ${color.toLowerCase().replace(' ', '-')}">
                                    <div class="hover-box">
                                        <img src="${window.shopifyAssetPaths.tentColors[color]}" alt="${color}">
                                        <span>${color}</span>
                                    </div>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                    <div style="margin-top: 10px; margin-left: 10px">
                        <span class="fws_ftaquiB ftcolG2 fs16">Custom Color:</span>
                        <div id="color-picker-${section.id}" class="color-picker"></div>
                    </div>
                </div>
                <div class="" style="min-height:35px; padding-top:10px;">
                    <span class="itemStep inblock valignM">
                        <span>3</span>
                    </span>
                    <span class="fws_ftaquiB ftcolG2 fs16" style="padding-left:2px">
                        ADD TEXT:
                        <textarea id="text-input-${section.id}" class="text-input placeholder-grey" style="width:196px; border-radius:3px; border: 1px solid #838383; height: auto; overflow:hidden; resize:none; vertical-align: middle;" placeholder="Enter text here" oninput='updateCanvasText(${JSON.stringify(section)})'></textarea>
                    </span>
                    <div style="margin-top:10px; padding-left:16px; display:none">
                        <label class="fws_ftaquiB ftcolG1 fs14" for="font-style-${section.id}">Font Style:</label>
                        <div class="custom-dropdown" style="">
                            <button class="custom-dropdown-button" style="width:202px" onclick="toggleDropdown('font-style-${section.id}')">Select a font style</button>
                            <div id="font-style-${section.id}" class="custom-dropdown-content">
                            <div style="font-family: benguiat-bk" onclick="selectDropdownOption('font-style-${section.id}', 'Benguiat BK', '${section.id}')">Benguiat BK</div>
                            <div style="font-family: cityd-bold" onclick="selectDropdownOption('font-style-${section.id}', 'Cityd Bold', '${section.id}')">Cityd Bold</div>
                            <div style="font-family: Deadknight" onclick="selectDropdownOption('font-style-${section.id}', 'Deadknight', '${section.id}')">Deadknight</div>
                            <div style="font-family: demonized" onclick="selectDropdownOption('font-style-${section.id}', 'Demonized', '${section.id}')">Demonized</div>
                            <div style="font-family: eurostile" onclick="selectDropdownOption('font-style-${section.id}', 'Eurostile', '${section.id}')">Eurostile</div>
                            <div style="font-family: evogria" onclick="selectDropdownOption('font-style-${section.id}', 'Evogria', '${section.id}')">Evogria</div>
                            <div style="font-family: evogria-italic" onclick="selectDropdownOption('font-style-${section.id}', 'Evogria Italic', '${section.id}')">Evogria Italic</div>
                            <div style="font-family: Famous-College" onclick="selectDropdownOption('font-style-${section.id}', 'Famous College', '${section.id}')">Famous College</div>
                            <div style="font-family: Keylock-Fighter" onclick="selectDropdownOption('font-style-${section.id}', 'Keylock Fighter', '${section.id}')">Keylock Fighter</div>
                            <div style="font-family: magnolia-script" onclick="selectDropdownOption('font-style-${section.id}', 'Magnolia Script', '${section.id}')">Magnolia Script</div>
                            <div style="font-family: Rock-Road" onclick="selectDropdownOption('font-style-${section.id}', 'Rock Road', '${section.id}')">Rock Road</div>
                            <div style="font-family: srabi-script" onclick="selectDropdownOption('font-style-${section.id}', 'Srabi Script', '${section.id}')">Srabi Script</div>
                            <div style="font-family: Steel-City" onclick="selectDropdownOption('font-style-${section.id}', 'Steel City', '${section.id}')">Steel City</div>
                            <div style="font-family: superstar-m54" onclick="selectDropdownOption('font-style-${section.id}', 'Superstar', '${section.id}')">Superstar</div>
                            <div style="font-family: swzconbi" onclick="selectDropdownOption('font-style-${section.id}', 'SwitzerlandCond Italic', '${section.id}')">SwitzerlandCond Italic</div>
                            <div style="font-family: swzconbn" onclick="selectDropdownOption('font-style-${section.id}', 'SwitzerlandCond', '${section.id}')">SwitzerlandCond</div>
                            </div>
                        </div>
                        <span id="font-style-required-${section.id}" style="color: red; display: none; padding-left:8px;">*Required</span>
                    </div>
                    <div id="font-color-div-${section.id}" style="padding-left:14px; display:none">
                        <label class="fws_ftaquiB ftcolG1 fs14" for="font-color-${section.id}">Font Color:</label>
                        <div class="custom-dropdown">
                            <input type="color" id="font-color-picker-${section.id}" style="margin-left: 10px;" onchange="selectColorPickerOption('font-color-${section.id}', this.value, '${section.id}')" />
                        </div>
                        <label class="fws_ftaquiB ftcolG1 fs14" id="font-color-${section.id}" style="margin-left: -168px;" value="">Black</label>
                    </div>
                    <div id="outline-color-div-${section.id}" style="display:none">
                        <label class="fws_ftaquiB ftcolG1 fs14" for="outline-color-${section.id}">Outline Color:</label>
                        <div class="custom-dropdown">
                            <input type="color" id="outline-color-picker-${section.id}" style="margin-left: 10px;" />
                        </div>
                        <label class="fws_ftaquiB ftcolG1 fs14" id="outline-color-${section.id}" style="margin-left: -175px;"value="">None</label>
                    </div>
                </div>
                <div class="" style="min-height:35px; padding-top:7px;">
                    <div style="display: flex; align-items: center;">
                        <span class="itemStep inblock valignM">
                            <span>4</span>
                        </span>
                        <span class="fws_ftaquiB ftcolG2 fs16" style="padding-left:6px">
                            ADD YOUR ART:
                        </span>
                        <!-- Drag and Drop Area -->
                        <div class="drop-zone" id="drop-zone-${section.id}" 
                            style="min-height: 50px; padding-right: 50px; margin-left: 10px; border: 2px dashed #aaa; text-align: center; cursor: pointer; display: flex; align-items: center; justify-content: center;"
                            ondragover="event.preventDefault();"
                            ondrop="handleFileDrop(event, '${section.id}', '${section.title}');">

                            <!-- Upload Label -->
                            <label class="add-art-button" for="upload-${section.id}" style="font-size:10px; color:#575757; display: flex; align-items: center;">
                                <img alt="Upload Icon" style="width: 30px; height: 30px; margin-right: 5px;">
                                UPLOAD YOUR ART
                            </label>

                            <!-- Hidden File Input -->
                            <input type="file" id="upload-${section.id}" class="file-input" 
                                accept=".jpg,.jpeg,.png,.svg" 
                                onchange="validateFileInput(event, '${section.id}'); addArt('${section.id}', '${section.title}');"
                                style="display: none;">
                        </div>
                    </div>
                </div>
                <div id="art-preview-${section.id}" class="art-preview" style="padding-top: 8px; padding-bottom: 25px; display: flex; flex-wrap: wrap;"></div>
                <div class="" style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>5</span>
                    </span>
                    <span class="fws_ftaquiB ftcolG2 fs16" style="padding-left:2px">
                        NOTES:
                    </span>
                    <div>
                        <textarea id="notes-${section.id}" maxlength="200" class="notes-textarea placeholder-grey" style="width:75%; height:100px; margin-top: 10px; border-radius:3px; border: 1px solid #838383; overflow: auto; resize: none;" placeholder="Enter any notes about this section"></textarea>
                        <div><span id="char-count-${section.id}">200 characters remaining</span></div>
                    </div>
                </div>
                <div class="arrow-container">
                    <button id="prevButton-${section.id}" class="arrow-button2" onclick="prevSection()">
                        <div class="arrow"></div>
                        Prev
                    </button>
                    <button id="nextButton-${section.id}" class="arrow-button" onclick="nextSection()">
                        Next
                        <div class="arrow"></div>
                    </button>
                </div>
            </div>
        `;

        container.appendChild(sectionDiv);

        // Attach event listeners for color radios in this section
        const colorRadios = sectionDiv.querySelectorAll('.color-radio');
        const selectedColorSpan = sectionDiv.querySelector(`#selected-color-${section.id}`);

        const colorClassMap = {
            'None': 'none',
            'White': 'rgb(255, 255, 255)',
            'Black': 'rgb(6, 8, 8)',
            'Silver': 'rgb(194, 194, 194)',
            'Grey': 'rgb(141, 140, 140)',
            'Vegas Gold': 'rgb(192, 196, 148)',
            'Maroon': 'rgb(85, 33, 50)',
            'Cardinal': 'rgb(134, 40, 56)',
            'Red': 'rgb(197, 44, 44)',
            'Orange': 'rgb(218, 75, 18)',
            'Yellow Gold': 'rgb(255, 189, 13)',
            'Yellow': 'rgb(252, 230, 13)',
            'Kelly Green': 'rgb(68, 177, 92)',
            'Forest Green': 'rgb(52, 78, 48)',
            'Navy Blue': 'rgb(27, 35, 75)',
            'Royal Blue': 'rgb(47, 95, 167)',
            'Columbia Blue': 'rgb(143, 169, 221)',
            'Purple': 'rgb(115, 81, 158)',
        };

         // Initialize Pickr for color picking for each section
         const pickr = Pickr.create({
            el: `#color-picker-${section.id}`,
            theme: 'classic',
            lockOpacity: true,
            comparison: true,
            default: '#000000',
            swatches: null,
            closeWithKey: 'Escape',

            components: {
                // Main components
                preview: true,
                opacity: false,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    cancel: true,
                    clear: false,
                    save: true
                }
            }
        });

        // Store the Pickr instance for this section
        pickrInstances[section.name] = pickr;

        // Add the event listener for the 'Enter' key on the color input
        pickr.on('init', instance => {
            const el = instance.getRoot();

            el.button.addEventListener('keydown', e => {
                if (e.key === 'Enter' && instance === pickrInstances[currentSection]) {
                    e.preventDefault(); // Prevent default enter key behavior
                    instance.applyColor(); // "Saves" the color
                    instance.hide(); // Hides the modal
                    const selectedColor = instance.getColor().toHEXA().toString();
                    selectedColorSpan.textContent = selectedColor; // Update selected color display
                    updateCanvasColor(selectedColor); // Update the canvas color if needed
                }
            }, {capture: true});
            // Access the .pcr-interaction element
            const interactionElement = el.interaction.result.parentElement;
            
            if (interactionElement) {
                // Create the eyedropper button with an icon
                const eyeDropperButton = document.createElement('button');
                eyeDropperButton.classList.add('eye-dropper-button');
                eyeDropperButton.innerHTML = `<img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;" alt="Pick Color" />`;

                // Append the eyedropper button to the .pcr-interaction element
                interactionElement.appendChild(eyeDropperButton);

                // Eyedropper API integration
                if ('EyeDropper' in window) {
                    const eyeDropper = new EyeDropper();

                    eyeDropperButton.addEventListener('click', async () => {
                        try {
                            const result = await eyeDropper.open();
                            instance.setColor(result.sRGBHex);
                        } catch (err) {
                            console.error('Eyedropper failed: ', err);
                        }
                    });
                } else {
                    console.warn('EyeDropper API is not supported in this browser.');
                    eyeDropperButton.disabled = true;
                }
            } else {
                console.error('Interaction element not found');
            }
        });

        // Add the event listener for the 'save' event on the Pickr instance
        pickr.on('save',(color, instance) => {
            if (instance == pickrInstances[currentSection]) {
                const selectedColor = color.toHEXA().toString();
                selectedColorSpan.textContent = selectedColor; // Update selected color display
                updateCanvasColor(selectedColor); // Update the canvas color if needed
                instance.hide();
            }
        });

        // Initialize Pickr for color picking for each section
        const pickr2 = Pickr.create({
            el: `#font-color-picker-${section.id}`,
            theme: 'classic',
            lockOpacity: true,
            comparison: true,
            default: '#000000',
            swatches: null,
            closeWithKey: 'Escape',

            components: {
                // Main components
                preview: true,
                opacity: false,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    cancel: true,
                    clear: false,
                    save: true
                }
            }
        });

        pickrInstances2[section.name] = pickr2

        // Add the event listener for the 'Enter' key on the color input
        pickr2.on('init', instance => {
            const el = instance.getRoot();

            el.button.addEventListener('keydown', e => {
                if (e.key === 'Enter' && instance === pickrInstances2[currentSection]) {
                    e.preventDefault();
                    instance.applyColor();
                    instance.hide();
                    const selectedColor = instance.getColor().toHEXA().toString();
                    selectColorPickerOption(`font-color-${section.id}`, selectedColor, `${section.id}`);
                }
            }); 

            const interactionElement = el.interaction.result.parentElement;
            
            if (interactionElement) {
                // Create the eyedropper button with an icon
                const eyeDropperButton = document.createElement('button');
                eyeDropperButton.classList.add('eye-dropper-button');
                eyeDropperButton.innerHTML = `<img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;" alt="Pick Color" />`;;

                // Append the eyedropper button to the .pcr-interaction element
                interactionElement.appendChild(eyeDropperButton);

                // Eyedropper API integration
                if ('EyeDropper' in window) {
                    const eyeDropper = new EyeDropper();

                    eyeDropperButton.addEventListener('click', async () => {
                        try {
                            const result = await eyeDropper.open();
                            instance.setColor(result.sRGBHex);
                        } catch (err) {
                            console.error('Eyedropper failed: ', err);
                        }
                    });
                } else {
                    console.warn('EyeDropper API is not supported in this browser.');
                    eyeDropperButton.disabled = true;
                }
            } else {
                console.error('Interaction element not found');
            }
        });

        // Add the event listener for the 'save' event on the Pickr instance
        pickr2.on('save',(color, instance) => {
            if (instance == pickrInstances2[currentSection]) {
                const selectedColor = color.toHEXA().toString();
                selectColorPickerOption(`font-color-${section.id}`, selectedColor, `${section.id}`);
                instance.hide();
            }
        });

        // Initialize Pickr for color picking for each section
        const pickr3 = Pickr.create({
            el: `#outline-color-picker-${section.id}`,
            theme: 'classic',
            lockOpacity: true,
            comparison: true,
            default: null,
            swatches: null,
            closeWithKey: 'Escape',

            components: {
                // Main components
                preview: true,
                opacity: false,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    cancel: true,
                    clear: true,
                    save: true
                }
            }
        });

        pickrInstances3[section.name] = pickr3

        // Add the event listener for the 'Enter' key on the color input
        pickr3.on('init', instance => {
            const el = instance.getRoot();

            el.button.addEventListener('keydown', e => {
                if (e.key === 'Enter' && instance === pickrInstances3[currentSection]) {
                    e.preventDefault();
                    instance.applyColor();
                    instance.hide();
                    const selectedColor = instance.getColor().toHEXA().toString();
                    selectColorPickerOption(`outline-color-${section.id}`, selectedColor, `${section.id}`);
                }
            });            

            const interactionElement = el.interaction.result.parentElement;
            
            if (interactionElement) {
                // Create the eyedropper button with an icon
                const eyeDropperButton = document.createElement('button');
                eyeDropperButton.classList.add('eye-dropper-button');
                eyeDropperButton.innerHTML = `<img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;" alt="Pick Color" />`;;

                // Append the eyedropper button to the .pcr-interaction element
                interactionElement.appendChild(eyeDropperButton);

                // Eyedropper API integration
                if ('EyeDropper' in window) {
                    const eyeDropper = new EyeDropper();

                    eyeDropperButton.addEventListener('click', async () => {
                        try {
                            const result = await eyeDropper.open();
                            instance.setColor(result.sRGBHex);
                        } catch (err) {
                            console.error('Eyedropper failed: ', err);
                        }
                    });
                } else {
                    console.warn('EyeDropper API is not supported in this browser.');
                    eyeDropperButton.disabled = true;
                }
            } else {
                console.error('Interaction element not found');
            }
        });

        // Add the event listener for the 'save' event on the Pickr instance
        pickr3.on('save',(color, instance) => {
            if (instance == pickrInstances3[currentSection]) {
                if(color !== null){
                    const selectedColor = color.toHEXA().toString();
                    selectColorPickerOption(`outline-color-${section.id}`, selectedColor, `${section.id}`);
                }
                else{
                    selectColorPickerOption(`outline-color-${section.id}`,  null, `${section.id}`);
                }
                instance.hide();
            }
        });

        function updateSelectedColor() {
            const selectedRadio = sectionDiv.querySelector('.color-radio:checked');
            const textInput = document.getElementById(`text-input-${section.id}`);
            if (selectedRadio) {
                selectedColorSpan.textContent = selectedRadio.value;
                const canvas = document.getElementById(section.title.replace(' ', '') + 'Canvas');
                if (canvas) {
                    const context = canvas.getContext('2d');
                    context.fillStyle = colorClassMap[selectedRadio.value];
                    context.fill();
                    context.strokeStyle = '#000000';
                    context.stroke();
                    if (section.title === "Front Valance") {
                        updateValanceLogo(selectedRadio.value);
                    }
                    if (textInput.value !== '') {
                        updateCanvasText(section);
                    }
                }
            }
        }
        
function updateCanvasColor(color) {
            const canvas = document.getElementById(section.title.replace(' ', '') + 'Canvas');
            const textInput = document.getElementById(`text-input-${section.id}`);
            if (canvas) {
                const context = canvas.getContext('2d');
                context.fillStyle = color;
                context.fill();
                context.strokeStyle = '#000000';
                context.stroke();
                if (section.title === "Front Valance") {
                    updateValanceLogo(color);
                }
                if (textInput.value !== '') {
                    updateCanvasText(section);
                }
            }

            // Uncheck radio buttons in the current section
            const allRadios = document.querySelectorAll('.color-radio');
            allRadios.forEach(radio => {
                if (radio.id.includes(currentSection) && currentSection == section.name) {
                    radio.checked = false;
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
        
        function updateValanceLogo(color){
            const logo = document.getElementById('ValanceLogo');
            switch (color){
                // Black Logo is used
                case 'White':
                case 'Silver':
                case 'Vegas Gold':
                case 'Yellow Gold':
                case 'Yellow':
                     logo.src = `${window.shopifyAssetPaths.logos.blackValance}`;
                     break;

                // White Logo is used
                case 'Black':
                case 'Grey':
                case 'Maroon':
                case 'Cardinal':
                case 'Red':
                case 'Orange':
                case 'Forest Green':
                case 'Navy Blue':
                case 'Purple':
                case 'Royal Blue':
                case 'Kelly Green':
                case 'Columbia Blue':
                    logo.src = `${window.shopifyAssetPaths.logos.whiteValance}`;
                    break;
            }
            if(color.includes("#")){
                const rgb = hexToRgb(color);

                // Calculate brightness (perceived brightness)
                const brightness = Math.sqrt(
                    0.299 * (rgb.r * rgb.r) +
                    0.587 * (rgb.g * rgb.g) +
                    0.114 * (rgb.b * rgb.b)
                );

                // Choose logo based on brightness
                if (brightness > 150) { // Adjust this threshold as needed
                    logo.src = `${window.shopifyAssetPaths.logos.blackValance}`;
                } else {
                    logo.src = `${window.shopifyAssetPaths.logos.whiteValance}`;
                }
            }
        }

        colorRadios.forEach(radio => {
            radio.addEventListener('change', updateSelectedColor);
        });

        // Initialize the selected color on page load
        updateSelectedColor();
    });


    // Add the new "Preview Now" section
    const previewSection = document.createElement('div');
    previewSection.id = 'preview-section';
    previewSection.classList.add('section');
    previewSection.style.display = 'none'; // Initially hidden

    previewSection.innerHTML = `
    <div class="itemBuywrapper">
        <div class="preview-container">
            <form id="contactForm">
                <div style="min-height:35px; padding-top:5px;">
                    <span class="itemStep inblock valignM">
                        <span>1</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="email">Email Address:</label>
                    <input type="email" id="email" name="email" class="text-input placeholder-grey" style="width:250px; border-radius:3px; border: 1px solid #838383; height: auto;" required placeholder="Ex. customer_service@fttf.com" oninput="validateEmail()">
                    <span id="email-error" style="color: red; display: none;">Emails do not match</span>
                </div>
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>2</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="confirmEmail">Confirm Email:</label>
                    <input type="email" id="confirmEmail" name="confirmEmail" class="text-input placeholder-grey" style="width:250px; border-radius:3px; border: 1px solid #838383; height: auto;" required placeholder="Retype email address" oninput="validateEmail()">
                    <span id="email-error" style="color: red; display: none;">Emails do not match</span>
                </div>
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>3</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="name">Customer Name:</label>
                    <input type="text" id="userName" name="name" class="text-input placeholder-grey" style="width:194px; border-radius:3px; border: 1px solid #838383; height: auto;" required placeholder="Ex. John Doe">
                </div>
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>4</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" class="text-input placeholder-grey" style="width:202px; border-radius:3px; border: 1px solid #838383; height: auto;" required placeholder="Ex. (800) 747-9013" oninput="formatPhoneNumber(this)">
                    <span id="phone-error" style="color: red; display: none;">Please enter a valid 10-digit phone number.</span>
                </div>
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>5</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="schoolClub">School/Club:</label>
                    <input type="text" id="schoolClub" name="schoolClub" class="text-input placeholder-grey" style="width:212px; border-radius:3px; border: 1px solid #838383; height: auto;" placeholder="Optional">
                </div>
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>6</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="street">Street Address:</label>
                    <input type="text" id="street" name="street" class="text-input placeholder-grey" style="width:196px; border-radius:3px; border: 1px solid #838383; height: auto;" required placeholder="Ex. 2341 Plum St.">
                </div>
                <div class="input-row">
                <div style="min-height:35px; margin-right: 10px;">
                    <label class="fws_ftaquiB ftcolG2 fs16" for="city">City:</label>
                    <input type="text" id="city" name="city" class="text-input placeholder-grey" style="width:125px; border-radius:3px; border: 1px solid #838383; height: 21px;" required placeholder="Ex. Edwardsville">
                </div>
                <div style="min-height:35px; margin-right: 10px;">
                    <label class="fws_ftaquiB ftcolG2 fs16" for="state">State:</label>
                    <div class="custom-dropdown">
                        <button type="button" id="state-dropdown-button" class="custom-dropdown-button placeholder-grey" onclick="toggleDropdown2('state-dropdown')" style="width: 60px;">Ex.</button>
                        <div id="state-dropdown" class="custom-dropdown-content" style="width: 50px;">
                            <div onclick="selectDropdownOption2('state-dropdown', 'AL', 'state')">AL</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'AK', 'state')">AK</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'AZ', 'state')">AZ</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'AR', 'state')">AR</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'CA', 'state')">CA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'CO', 'state')">CO</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'CT', 'state')">CT</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'DE', 'state')">DE</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'FL', 'state')">FL</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'GA', 'state')">GA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'HI', 'state')">HI</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'ID', 'state')">ID</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'IL', 'state')">IL</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'IN', 'state')">IN</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'IA', 'state')">IA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'KS', 'state')">KS</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'KY', 'state')">KY</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'LA', 'state')">LA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'ME', 'state')">ME</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MD', 'state')">MD</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MA', 'state')">MA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MI', 'state')">MI</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MN', 'state')">MN</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MS', 'state')">MS</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MO', 'state')">MO</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'MT', 'state')">MT</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NE', 'state')">NE</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NV', 'state')">NV</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NH', 'state')">NH</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NJ', 'state')">NJ</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NM', 'state')">NM</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NY', 'state')">NY</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'NC', 'state')">NC</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'ND', 'state')">ND</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'OH', 'state')">OH</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'OK', 'state')">OK</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'OR', 'state')">OR</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'PA', 'state')">PA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'RI', 'state')">RI</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'SC', 'state')">SC</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'SD', 'state')">SD</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'TN', 'state')">TN</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'TX', 'state')">TX</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'UT', 'state')">UT</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'VT', 'state')">VT</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'VA', 'state')">VA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'WA', 'state')">WA</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'WV', 'state')">WV</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'WI', 'state')">WI</div>
                            <div onclick="selectDropdownOption2('state-dropdown', 'WY', 'state')">WY</div>
                        </div>
                        <input type="hidden" id="state" name="state" required>
                    </div>
                </div>
                <div style="min-height:35px;">
                    <label class="fws_ftaquiB ftcolG2 fs16" for="zip">Zip Code:</label>
                    <input type="text" id="zip" name="zip" class="text-input placeholder-grey" style="width:110px; border-radius:3px; border: 1px solid #838383; height: 21px;" required placeholder="Ex. 62025-1234" oninput="formatZipCode(this)">                
                    <span id="zip-error" style="color: red; display: none;">Please enter a valid zip code.</span>
                </div>
            </div>
            
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>7</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="priority">Ready to order:</label>
                    <div class="custom-dropdown">
                        <button type="button" id="priority-dropdown-button" class="custom-dropdown-button placeholder-grey" onclick="toggleDropdown2('priority-dropdown')">Select a choice</button>
                        <div id="priority-dropdown" class="custom-dropdown-content">
                            <div onclick="selectDropdownOption2('priority-dropdown', 'No, I am just browsing.', 'priority')">No, I am just browsing for now.</div>
                            <div onclick="selectDropdownOption2('priority-dropdown', 'Yes, but I want some help.', 'priority')">Yes, but I am wanting some help with my design.</div>
                            <div onclick="selectDropdownOption2('priority-dropdown', 'Yes, I am ready to order!', 'priority')">Yes, I am ready to order!</div>
                        </div>
                        <input type="hidden" id="priority" name="priority" required>
                    </div>
                </div>
                <div style="min-height:35px;">
                    <span class="itemStep inblock valignM">
                        <span>8</span>
                    </span>
                    <label class="fws_ftaquiB ftcolG2 fs16" for="name">Design Name:</label>
                    <input type="text" id="Tent-Name" name="design" class="text-input placeholder-grey" style="width:194px; border-radius:3px; border: 1px solid #838383; height: auto;" required placeholder="Ex. Design 1">
                </div>
                <div class="arrow-container" style="padding-top:20px;">
                    <button type="button" class="arrow-button2" onclick="goBackToSections()">
                        <div class="arrow"></div>
                        Back to Editing
                    </button>
                    <button type="submit" id="submit-button" class="arrow-button" onclick="submitForm()">
                        Submit
                        <div class="arrow"></div>
                    </button>
                </div>
            </form>
        </div>
    </div>
    `;

    container.appendChild(previewSection);

    // Function to handle input color change
    function handleInputColorChange() {
        const inputs = document.querySelectorAll('.text-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value === '') {
                    input.classList.add('placeholder-grey'); // Add grey color class for placeholder
                    input.classList.remove('input-black'); // Remove black color class for input text
                } else {
                    input.classList.remove('placeholder-grey'); // Remove grey color class
                    input.classList.add('input-black'); // Add black color class
                }
            });
            // Initial check
            if (input.value === '') {
                input.classList.add('placeholder-grey');
                input.classList.remove('input-black');
            } else {
                input.classList.remove('placeholder-grey');
                input.classList.add('input-black');
            }
        });
    }

    // Call the function to add event listeners to inputs
    handleInputColorChange();
}

function toggleDropdown2(id) {
    document.getElementById(id).classList.toggle("show");
}

function selectDropdownOption2(dropdownId, value, inputId) {
    const button = document.getElementById(`${dropdownId}-button`);
    button.textContent = value;
    button.style.color = '#000000'; // Change text color to black
    const input = document.getElementById(inputId);
    input.value = value;
    toggleDropdown2(dropdownId);
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const emailError = document.getElementById('email-error');
    
    if (email === confirmEmail) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }
}

function formatPhoneNumber(input) {
    // Remove non-numeric characters
    let phone = input.value.replace(/\D/g, '');

    // Limit to 10 digits
    phone = phone.substring(0, 10);

    // Format the phone number
    let formattedPhone = '';
    if (phone.length > 6) {
        formattedPhone = `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6, 10)}`;
    } else if (phone.length > 3) {
        formattedPhone = `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}`;
    } else if (phone.length > 0) {
        formattedPhone = `(${phone.substring(0, 3)}`;
    }

    // Update the input value
    input.value = formattedPhone;
}

function formatZipCode(input) {
    let zip = input.value.replace(/\D/g, '').substring(0, 9); // Remove non-digits and limit to 9 characters
    const first = zip.substring(0, 5);
    const last = zip.substring(5, 9);

    if (zip.length > 5) {
        input.value = `${first}-${last}`;
    } else {
        input.value = first;
    }
}

function sanitizeInput(value) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return value.replace(reg, (match) => (map[match]));
}

function sanitizeInputField(input) {
    input.value = sanitizeInput(input.value);
}

function blockInvalidChars(event, regex) {
    const invalidChars = regex.test(event.key);
    if (invalidChars) {
        event.preventDefault();
    }
}

function sanitizeFormInputs(event) {
    // Prevent form submission
    event.preventDefault();

    // Get all input fields
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(input => {
        input.value = sanitizeInput(input.value);
    });
}

function cleanInput(input, regex) {
    input.value = input.value.replace(regex, '');
}

function validateForm() {
    const priority = document.getElementById('priority').value.trim();
    const state = document.getElementById('state').value.trim();
    const requiredFields = document.querySelectorAll('#contactForm [required]');
    let isValid = true;

    // Check all required fields
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red'; // Highlight empty required fields
        } else {
            field.style.borderColor = ''; // Reset border color
        }
    });

    // Check priority field
    const priorityButton = document.getElementById('priority-dropdown-button');
    if (!priority) {
        isValid = false;
        priorityButton.style.borderColor = 'red';
    } else {
        priorityButton.style.borderColor = ''; // Reset border color if valid
    }

    // Check state field
    const stateButton = document.getElementById('state-dropdown-button');
    if (!state) {
        isValid = false;
        stateButton.style.borderColor = 'red';
    } else {
        stateButton.style.borderColor = ''; // Reset border color if valid
    }

    // Check phone number
    const phone = document.getElementById('phone').value.replace(/\D/g, '');
    const phoneError = document.getElementById('phone-error');
    if (phone.length !== 10) {
        isValid = false;
        document.getElementById('phone').style.borderColor = 'red';
        phoneError.style.display = 'block';
    } else {
        document.getElementById('phone').style.borderColor = ''; // Reset border color if valid
        phoneError.style.display = 'none';
    }

    // Check zip code
    const zip = document.getElementById('zip').value.replace(/\D/g, '');
    const zipError = document.getElementById('zip-error');
    if (zip.length !== 5 && zip.length !== 9) {
        isValid = false;
        document.getElementById('zip').style.borderColor = 'red';
        zipError.style.display = 'block';
    } else {
        document.getElementById('zip').style.borderColor = ''; // Reset border color if valid
        zipError.style.display = 'none';
    }

    return isValid;
}

function enforceCharacterLimit(event, maxLength) {
    const target = event.target;
    if (target.value.length > maxLength) {
        target.value = target.value.slice(0, maxLength);
        alert(`Maximum character limit of ${maxLength} reached`);
    }
    updateCharacterCounter(event, maxLength);
}

function updateCharacterCounter(event, maxLength) {
    const target = event.target;
    const charCountSpan = document.getElementById(`char-count-${target.id.split('-')[1]}`);
    const remainingChars = maxLength - target.value.length;
    charCountSpan.textContent = `${remainingChars} characters remaining`;
}
