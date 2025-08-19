function generateSections(sectionsConfig) {
    const designTab = document.getElementById('design');
    designTab.innerHTML = '';
    designTab.innerHTML = `<div class="" style="min-height:35px;">
            <div id="uniformTemplateDropdown" class="template-dropdown">
                <div id="templatePreview" class="preview-container2" onclick="toggleTemplateDropdown()">
                    <img id="templatePreviewImage" src="" alt="Uniform Preview" style="width: 225px; align-items: center; max-width: 125%;" />
                </div>
                
                <div id="templateOptions" class="dropdown-content">
                    <!-- JavaScript will populate this with template options -->
                </div>
                <div id="templateLabel" class="template-label">Choose a Template</div>
            </div>            

            <h5 style="padding-top: 10px;">
                1. Singlet Colors:
            </h5>
            <div class="dropdown-wrapper">
                <div class="dropdown-title-wrapper">
                    <div class="dropdown-title">Front:</div>
                    <div class="dropdown-container">
                        <div class="selected-color" id="selectedColor1" onclick="toggleColorDropdown('colorDropdown1', 'selectedColor1')"></div>
                            <div class="dropdown-menu" id="colorDropdown1">
                            <div class="dropdown-header">
                                <h4>Choose Your Color</h4>
                            </div>
                            <div class="section-title">
                                <span class="badge">1</span>
                                <h5>Core Colors</h5>
                            </div>
                            <div class="color-option-grid">
                                <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor1', 'colorDropdown1')" style="background-color: #FFFFFF;"></div>
                                <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor1', 'colorDropdown1')" style="background-color: #000000;"></div>
                                <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor1', 'colorDropdown1')" style="background-color: #B4AFA5;"></div>
                                <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor1', 'colorDropdown1')" style="background-color: #7D7873;"></div>
                                <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor1', 'colorDropdown1')" style="background-color: #9B4B00;"></div>
                                <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor1', 'colorDropdown1')" style="background-color: #CDA55F;"></div>
                                <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor1', 'colorDropdown1')" style="background-color: #00233C;"></div>
                                <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor1', 'colorDropdown1')" style="background-color: #0041AF;"></div>
                                <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor1', 'colorDropdown1')" style="background-color: #009BD7;"></div>
                                <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor1', 'colorDropdown1')" style="background-color: #8CA5DC;"></div>
                                <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor1', 'colorDropdown1')" style="background-color: #28A523;"></div>
                                <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor1', 'colorDropdown1')" style="background-color: #00461E;"></div>
                                <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor1', 'colorDropdown1')" style="background-color: #E6F541;"></div>
                                <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor1', 'colorDropdown1')" style="background-color: #FAE100;"></div>
                                <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor1', 'colorDropdown1')" style="background-color: #FABE14;"></div>
                                <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor1', 'colorDropdown1')" style="background-color: #FFAF00;"></div>
                                <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor1', 'colorDropdown1')" style="background-color: #FF5A00;"></div>
                                <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor1', 'colorDropdown1')" style="background-color: #E6230F;"></div>
                                <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor1', 'colorDropdown1')" style="background-color: #500F0F;"></div>
                                <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor1', 'colorDropdown1')" style="background-color: #37144B;"></div>
                                <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor1', 'colorDropdown1')" style="background-color: #F5509B;"></div>
                            </div>
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">2</span>
                                <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                            </div>
                            <div class="input-container">
                                <label for="rowNumber1">Row:</label>
                                <input type="number" id="rowNumber1" class="input-field" placeholder="0" min="0" max="34">

                                <label for="columnNumber1">Column:</label>
                                <input type="number" id="columnNumber1" class="input-field" placeholder="0" min="0" max="34">
                                
                                <div style="display: inline-grid; margin-left: 25px;">
                                    <div class="color-display-box" id="colorDisplayBox1" onclick="selectColor(document.getElementById('colorDisplayBox1').style.backgroundColor, 'selectedColor1', 'colorDropdown1')"></div>
                                    <span id="colorText1" class="color-text">#FFFFFF</span>
                                </div>
                            </div>
                            <!-- Hexcode input field to find the closest color -->
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">3</span>
                                <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                            </div>
                            <div class="input-container">
                                <div style="margin-top: 10px;">
                                    <span style="font-weight: bold;">Your Color:</span>
                                </div>
                                <label for="hexInput1">Hex Code:</label>
                                <div style="display: inline-block;">
                                    <input type="text" id="hexInput1" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '1')">
                                    <div id="userColorPreview1" class="color-preview-box"></div>
                                    <!-- Eyedropper Button with Absolute Positioning -->
                                    <button onclick="useEyeDropper('1')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                        <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                    </button>
                                </div>
                                <div id="our-colors-1" style="margin-top: 20px; display: none;">
                                    <span style="font-weight: bold;">Our Colors:</span>

                                    <div class="match-row">
                                        <div id="colorPreview1.1" class="our-color-preview-box" onclick="useOurColorOption('colorPreview1.1','selectedColor1')"></div>
                                        <div id="closestColorInfo1.1" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview1.2" class="our-color-preview-box" onclick="useOurColorOption('colorPreview1.2','selectedColor1')"></div>
                                        <div id="closestColorInfo1.2" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview1.3" class="our-color-preview-box" onclick="useOurColorOption('colorPreview1.3','selectedColor1')"></div>
                                        <div id="closestColorInfo1.3" class="our-color-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="colorText1.5" class="color-text" style="margin-left: -15px;"></span>
                </div>
            </div>
            <div class="dropdown-wrapper" style="margin-left:3px;">
                <div class="dropdown-title-wrapper">
                    <div class="dropdown-title">Back: </div>
                    <div class="dropdown-container">
                            <div class="selected-color" id="selectedColor2" onclick="toggleColorDropdown('colorDropdown2', 'selectedColor2')"></div>
                                <div class="dropdown-menu" id="colorDropdown2">
                                <div class="dropdown-header">
                                    <h4>Choose Your Color</h4>
                                </div>
                                <div class="section-title">
                                    <span class="badge">1</span>
                                    <h5>Core Colors</h5>
                                </div>
                                <div class="color-option-grid">
                                    <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor2', 'colorDropdown2')" style="background-color: #FFFFFF;"></div>
                                    <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor2', 'colorDropdown2')" style="background-color: #000000;"></div>
                                    <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor2', 'colorDropdown2')" style="background-color: #B4AFA5;"></div>
                                    <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor2', 'colorDropdown2')" style="background-color: #7D7873;"></div>
                                    <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor2', 'colorDropdown2')" style="background-color: #9B4B00;"></div>
                                    <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor2', 'colorDropdown2')" style="background-color: #CDA55F;"></div>
                                    <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor2', 'colorDropdown2')" style="background-color: #00233C;"></div>
                                    <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor2', 'colorDropdown2')" style="background-color: #0041AF;"></div>
                                    <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor2', 'colorDropdown2')" style="background-color: #009BD7;"></div>
                                    <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor2', 'colorDropdown2')" style="background-color: #8CA5DC;"></div>
                                    <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor2', 'colorDropdown2')" style="background-color: #28A523;"></div>
                                    <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor2', 'colorDropdown2')" style="background-color: #00461E;"></div>
                                    <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor2', 'colorDropdown2')" style="background-color: #E6F541;"></div>
                                    <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor2', 'colorDropdown2')" style="background-color: #FAE100;"></div>
                                    <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor2', 'colorDropdown2')" style="background-color: #FABE14;"></div>
                                    <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor2', 'colorDropdown2')" style="background-color: #FFAF00;"></div>
                                    <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor2', 'colorDropdown2')" style="background-color: #FF5A00;"></div>
                                    <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor2', 'colorDropdown2')" style="background-color: #E6230F;"></div>
                                    <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor2', 'colorDropdown2')" style="background-color: #500F0F;"></div>
                                    <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor2', 'colorDropdown2')" style="background-color: #37144B;"></div>
                                    <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor2', 'colorDropdown2')" style="background-color: #F5509B;"></div>
                                </div>
                                <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                    <span class="badge" style="margin-top: 5px;">2</span>
                                    <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                                </div>
                                <div class="input-container">
                                    <label for="rowNumber2">Row:</label>
                                    <input type="number" id="rowNumber2" class="input-field" placeholder="0" min="0" max="34">

                                    <label for="columnNumber2">Column:</label>
                                    <input type="number" id="columnNumber2" class="input-field" placeholder="0" min="0" max="34">
                                    
                                    <div style="display: inline-grid; margin-left: 25px;">
                                        <div class="color-display-box" id="colorDisplayBox2" onclick="selectColor(document.getElementById('colorDisplayBox2').style.backgroundColor, 'selectedColor2', 'colorDropdown2')"></div>
                                        <span id="colorText2" class="color-text">#FFFFFF</span>
                                    </div>
                                </div>
                                <!-- Hexcode input field to find the closest color -->
                                <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                    <span class="badge" style="margin-top: 5px;">3</span>
                                    <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                                </div>
                                <div class="input-container">
                                    <div style="margin-top: 10px;">
                                        <span style="font-weight: bold;">Your Color:</span>
                                    </div>
                                    <label for="hexInput2">Hex Code:</label>
                                    <div style="display: inline-block;">
                                        <input type="text" id="hexInput2" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '2')">
                                        <div id="userColorPreview2" class="color-preview-box"></div>
                                        <!-- Eyedropper Button with Absolute Positioning -->
                                        <button onclick="useEyeDropper('2')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                            <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                        </button>
                                    </div>
                                    <div id="our-colors-2" style="margin-top: 20px; display: none;">
                                        <span style="font-weight: bold;">Our Colors:</span>

                                        <div class="match-row">
                                            <div id="colorPreview2.1" class="our-color-preview-box" onclick="useOurColorOption('colorPreview2.1','selectedColor2')"></div>
                                            <div id="closestColorInfo2.1" class="our-color-text"></div>
                                        </div>

                                        <div class="match-row">
                                            <div id="colorPreview2.2" class="our-color-preview-box" onclick="useOurColorOption('colorPreview2.2','selectedColor2')"></div>
                                            <div id="closestColorInfo2.2" class="our-color-text"></div>
                                        </div>

                                        <div class="match-row">
                                            <div id="colorPreview2.3" class="our-color-preview-box" onclick="useOurColorOption('colorPreview2.3','selectedColor2')"></div>
                                            <div id="closestColorInfo2.3" class="our-color-text"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <span id="colorText2.5" class="color-text" style="margin-left: -15px;"></span>
                </div>
            </div>
            <div class="dropdown-wrapper" style="margin-left:7px;">
                <div class="dropdown-title-wrapper">
                <div class="dropdown-title">Trim: </div>
                    <div class="dropdown-container">
                            <div class="selected-color" id="selectedColor3" onclick="toggleColorDropdown('colorDropdown3', 'selectedColor3')"></div>
                                <div class="dropdown-menu" id="colorDropdown3">
                                <div class="dropdown-header">
                                    <h4>Choose Your Color</h4>
                                </div>
                                <div class="section-title">
                                    <span class="badge">1</span>
                                    <h5>Core Colors</h5>
                                </div>
                                <div class="color-option-grid">
                                    <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor3', 'colorDropdown3')" style="background-color: #FFFFFF;"></div>
                                    <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor3', 'colorDropdown3')" style="background-color: #000000;"></div>
                                    <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor3', 'colorDropdown3')" style="background-color: #B4AFA5;"></div>
                                    <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor3', 'colorDropdown3')" style="background-color: #7D7873;"></div>
                                    <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor3', 'colorDropdown3')" style="background-color: #9B4B00;"></div>
                                    <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor3', 'colorDropdown3')" style="background-color: #CDA55F;"></div>
                                    <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor3', 'colorDropdown3')" style="background-color: #00233C;"></div>
                                    <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor3', 'colorDropdown3')" style="background-color: #0041AF;"></div>
                                    <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor3', 'colorDropdown3')" style="background-color: #009BD7;"></div>
                                    <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor3', 'colorDropdown3')" style="background-color: #8CA5DC;"></div>
                                    <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor3', 'colorDropdown3')" style="background-color: #28A523;"></div>
                                    <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor3', 'colorDropdown3')" style="background-color: #00461E;"></div>
                                    <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor3', 'colorDropdown3')" style="background-color: #E6F541;"></div>
                                    <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor3', 'colorDropdown3')" style="background-color: #FAE100;"></div>
                                    <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor3', 'colorDropdown3')" style="background-color: #FABE14;"></div>
                                    <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor3', 'colorDropdown3')" style="background-color: #FFAF00;"></div>
                                    <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor3', 'colorDropdown3')" style="background-color: #FF5A00;"></div>
                                    <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor3', 'colorDropdown3')" style="background-color: #E6230F;"></div>
                                    <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor3', 'colorDropdown3')" style="background-color: #500F0F;"></div>
                                    <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor3', 'colorDropdown3')" style="background-color: #37144B;"></div>
                                    <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor3', 'colorDropdown3')" style="background-color: #F5509B;"></div>
                                </div>
                                <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                    <span class="badge" style="margin-top: 5px;">2</span>
                                    <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                                </div>
                                <div class="input-container">
                                    <label for="rowNumber3">Row:</label>
                                    <input type="number" id="rowNumber3" class="input-field" placeholder="0" min="0" max="34">

                                    <label for="columnNumber3">Column:</label>
                                    <input type="number" id="columnNumber3" class="input-field" placeholder="0" min="0" max="34">
                                    
                                    <div style="display: inline-grid; margin-left: 25px;">
                                        <div class="color-display-box" id="colorDisplayBox3" onclick="selectColor(document.getElementById('colorDisplayBox3').style.backgroundColor, 'selectedColor3', 'colorDropdown3')"></div>
                                        <span id="colorText3" class="color-text">#FFFFFF</span>
                                    </div>
                                </div>
                                <!-- Hexcode input field to find the closest color -->
                                <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                    <span class="badge" style="margin-top: 5px;">3</span>
                                    <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                                </div>
                                <div class="input-container">
                                    <div style="margin-top: 10px;">
                                        <span style="font-weight: bold;">Your Color:</span>
                                    </div>
                                    <label for="hexInput3">Hex Code:</label>
                                    <div style="display: inline-block;">
                                        <input type="text" id="hexInput3" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '3')">
                                        <div id="userColorPreview3" class="color-preview-box"></div>
                                        <!-- Eyedropper Button with Absolute Positioning -->
                                        <button onclick="useEyeDropper('3')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                            <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                        </button>
                                    </div>
                                    <div id="our-colors-3" style="margin-top: 20px; display: none;">
                                        <span style="font-weight: bold;">Our Colors:</span>

                                        <div class="match-row">
                                            <div id="colorPreview3.1" class="our-color-preview-box" onclick="useOurColorOption('colorPreview3.1','selectedColor3')"></div>
                                            <div id="closestColorInfo3.1" class="our-color-text"></div>
                                        </div>

                                        <div class="match-row">
                                            <div id="colorPreview3.2" class="our-color-preview-box" onclick="useOurColorOption('colorPreview3.2','selectedColor3')"></div>
                                            <div id="closestColorInfo3.2" class="our-color-text"></div>
                                        </div>

                                        <div class="match-row">
                                            <div id="colorPreview3.3" class="our-color-preview-box" onclick="useOurColorOption('colorPreview3.3','selectedColor3')"></div>
                                            <div id="closestColorInfo3.3" class="our-color-text"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <span id="colorText3.5" class="color-text" style="margin-left: -15px;"></span>
                </div>
            </div>
            <br>
        </div>
        <div class="" style="min-height:35px;">
            <h5 style="padding-top: 10px;">
                2. Template Colors:
            </h5>
            </span><div class="dropdown-wrapper">
            <div class="dropdown-title-wrapper">
                <div class="dropdown-title" style="margin-left: 3px;">Color 1:</div>
                <div class="dropdown-container">
                        <div class="selected-color" id="selectedColor4" onclick="toggleColorDropdown('colorDropdown4', 'selectedColor4')"></div>
                            <div class="dropdown-menu" id="colorDropdown4">
                            <div class="dropdown-header">
                                <h4>Choose Your Color</h4>
                            </div>
                            <div class="section-title">
                                <span class="badge">1</span>
                                <h5>Core Colors</h5>
                            </div>
                            <div class="color-option-grid">
                                <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor4', 'colorDropdown4')" style="background-color: #FFFFFF;"></div>
                                <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor4', 'colorDropdown4')" style="background-color: #000000;"></div>
                                <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor4', 'colorDropdown4')" style="background-color: #B4AFA5;"></div>
                                <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor4', 'colorDropdown4')" style="background-color: #7D7873;"></div>
                                <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor4', 'colorDropdown4')" style="background-color: #9B4B00;"></div>
                                <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor4', 'colorDropdown4')" style="background-color: #CDA55F;"></div>
                                <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor4', 'colorDropdown4')" style="background-color: #00233C;"></div>
                                <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor4', 'colorDropdown4')" style="background-color: #0041AF;"></div>
                                <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor4', 'colorDropdown4')" style="background-color: #009BD7;"></div>
                                <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor4', 'colorDropdown4')" style="background-color: #8CA5DC;"></div>
                                <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor4', 'colorDropdown4')" style="background-color: #28A523;"></div>
                                <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor4', 'colorDropdown4')" style="background-color: #00461E;"></div>
                                <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor4', 'colorDropdown4')" style="background-color: #E6F541;"></div>
                                <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor4', 'colorDropdown4')" style="background-color: #FAE100;"></div>
                                <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor4', 'colorDropdown4')" style="background-color: #FABE14;"></div>
                                <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor4', 'colorDropdown4')" style="background-color: #FFAF00;"></div>
                                <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor4', 'colorDropdown4')" style="background-color: #FF5A00;"></div>
                                <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor4', 'colorDropdown4')" style="background-color: #E6230F;"></div>
                                <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor4', 'colorDropdown4')" style="background-color: #500F0F;"></div>
                                <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor4', 'colorDropdown4')" style="background-color: #37144B;"></div>
                                <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor4', 'colorDropdown4')" style="background-color: #F5509B;"></div>
                            </div>
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">2</span>
                                <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                            </div>
                            <div class="input-container">
                                <label for="rowNumber4">Row:</label>
                                <input type="number" id="rowNumber4" class="input-field" placeholder="0" min="0" max="34">

                                <label for="columnNumber4">Column:</label>
                                <input type="number" id="columnNumber4" class="input-field" placeholder="0" min="0" max="34">
                                
                                <div style="display: inline-grid; margin-left: 25px;">
                                    <div class="color-display-box" id="colorDisplayBox4" onclick="selectColor(document.getElementById('colorDisplayBox4').style.backgroundColor, 'selectedColor4', 'colorDropdown4')"></div>
                                    <span id="colorText4" class="color-text">#FFFFFF</span>
                                </div>
                            </div>
                            <!-- Hexcode input field to find the closest color -->
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">3</span>
                                <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                            </div>
                            <div class="input-container">
                                <div style="margin-top: 10px;">
                                    <span style="font-weight: bold;">Your Color:</span>
                                </div>
                                <label for="hexInput4">Hex Code:</label>
                                <div style="display: inline-block;">
                                    <input type="text" id="hexInput4" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '4')">
                                    <div id="userColorPreview4" class="color-preview-box"></div>
                                    <!-- Eyedropper Button with Absolute Positioning -->
                                    <button onclick="useEyeDropper('4')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                        <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                    </button>
                                </div>
                                <div id="our-colors-4" style="margin-top: 20px; display: none;">
                                    <span style="font-weight: bold;">Our Colors:</span>

                                    <div class="match-row">
                                        <div id="colorPreview4.1" class="our-color-preview-box" onclick="useOurColorOption('colorPreview4.1','selectedColor4')"></div>
                                        <div id="closestColorInfo4.1" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview4.2" class="our-color-preview-box" onclick="useOurColorOption('colorPreview4.2','selectedColor4')"></div>
                                        <div id="closestColorInfo4.2" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview4.3" class="our-color-preview-box" onclick="useOurColorOption('colorPreview4.3','selectedColor4')"></div>
                                        <div id="closestColorInfo4.3" class="our-color-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <span id="colorText4.5" class="color-text" style="margin-left: -15px;"></span>
            </div>
        </div>
        <div class="dropdown-wrapper">
            <div class="dropdown-title-wrapper">
                <div class="dropdown-title">Color 2: </div>
                <div class="dropdown-container">
                        <div class="selected-color" id="selectedColor5" onclick="toggleColorDropdown('colorDropdown5', 'selectedColor5')"></div>
                            <div class="dropdown-menu" id="colorDropdown5">
                            <div class="dropdown-header">
                                <h4>Choose Your Color</h4>
                            </div>
                            <div class="section-title">
                                <span class="badge">1</span>
                                <h5>Core Colors</h5>
                            </div>
                            <div class="color-option-grid">
                                <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor5', 'colorDropdown5')" style="background-color: #FFFFFF;"></div>
                                <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor5', 'colorDropdown5')" style="background-color: #000000;"></div>
                                <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor5', 'colorDropdown5')" style="background-color: #B4AFA5;"></div>
                                <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor5', 'colorDropdown5')" style="background-color: #7D7873;"></div>
                                <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor5', 'colorDropdown5')" style="background-color: #9B4B00;"></div>
                                <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor5', 'colorDropdown5')" style="background-color: #CDA55F;"></div>
                                <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor5', 'colorDropdown5')" style="background-color: #00233C;"></div>
                                <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor5', 'colorDropdown5')" style="background-color: #0041AF;"></div>
                                <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor5', 'colorDropdown5')" style="background-color: #009BD7;"></div>
                                <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor5', 'colorDropdown5')" style="background-color: #8CA5DC;"></div>
                                <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor5', 'colorDropdown5')" style="background-color: #28A523;"></div>
                                <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor5', 'colorDropdown5')" style="background-color: #00461E;"></div>
                                <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor5', 'colorDropdown5')" style="background-color: #E6F541;"></div>
                                <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor5', 'colorDropdown5')" style="background-color: #FAE100;"></div>
                                <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor5', 'colorDropdown5')" style="background-color: #FABE14;"></div>
                                <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor5', 'colorDropdown5')" style="background-color: #FFAF00;"></div>
                                <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor5', 'colorDropdown5')" style="background-color: #FF5A00;"></div>
                                <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor5', 'colorDropdown5')" style="background-color: #E6230F;"></div>
                                <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor5', 'colorDropdown5')" style="background-color: #500F0F;"></div>
                                <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor5', 'colorDropdown5')" style="background-color: #37144B;"></div>
                                <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor5', 'colorDropdown5')" style="background-color: #F5509B;"></div>
                            </div>
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">2</span>
                                <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                            </div>
                            <div class="input-container">
                                <label for="rowNumber5">Row:</label>
                                <input type="number" id="rowNumber5" class="input-field" placeholder="0" min="0" max="34">

                                <label for="columnNumber5">Column:</label>
                                <input type="number" id="columnNumber5" class="input-field" placeholder="0" min="0" max="34">
                                
                                <div style="display: inline-grid; margin-left: 25px;">
                                    <div class="color-display-box" id="colorDisplayBox5" onclick="selectColor(document.getElementById('colorDisplayBox5').style.backgroundColor, 'selectedColor5', 'colorDropdown5')"></div>
                                    <span id="colorText5" class="color-text">#FFFFFF</span>
                                </div>
                            </div>
                            <!-- Hexcode input field to find the closest color -->
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">3</span>
                                <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                            </div>
                            <div class="input-container">
                                <div style="margin-top: 10px;">
                                    <span style="font-weight: bold;">Your Color:</span>
                                </div>
                                <label for="hexInput5">Hex Code:</label>
                                <div style="display: inline-block;">
                                    <input type="text" id="hexInput5" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '5')">
                                    <div id="userColorPreview5" class="color-preview-box"></div>
                                    <!-- Eyedropper Button with Absolute Positioning -->
                                    <button onclick="useEyeDropper('5')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                        <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                    </button>
                                </div>
                                <div id="our-colors-5" style="margin-top: 20px; display: none;">
                                    <span style="font-weight: bold;">Our Colors:</span>

                                    <div class="match-row">
                                        <div id="colorPreview5.1" class="our-color-preview-box" onclick="useOurColorOption('colorPreview5.1','selectedColor5')"></div>
                                        <div id="closestColorInfo5.1" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview5.2" class="our-color-preview-box" onclick="useOurColorOption('colorPreview5.2','selectedColor5')"></div>
                                        <div id="closestColorInfo5.2" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview5.3" class="our-color-preview-box" onclick="useOurColorOption('colorPreview5.3','selectedColor5')"></div>
                                        <div id="closestColorInfo5.3" class="our-color-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <span id="colorText5.5" class="color-text" style="margin-left: -15px;"></span>
            </div>
        </div>
        <div class="dropdown-wrapper">
            <div class="dropdown-title-wrapper">
            <div class="dropdown-title">Color 3: </div>
            <div class="dropdown-container">
                        <div class="selected-color" id="selectedColor6" onclick="toggleColorDropdown('colorDropdown6', 'selectedColor6')"></div>
                            <div class="dropdown-menu" id="colorDropdown6">
                            <div class="dropdown-header">
                                <h4>Choose Your Color</h4>
                            </div>
                            <div class="section-title">
                                <span class="badge">1</span>
                                <h5>Core Colors</h5>
                            </div>
                            <div class="color-option-grid">
                                <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor6', 'colorDropdown6')" style="background-color: #FFFFFF;"></div>
                                <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor6', 'colorDropdown6')" style="background-color: #000000;"></div>
                                <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor6', 'colorDropdown6')" style="background-color: #B4AFA5;"></div>
                                <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor6', 'colorDropdown6')" style="background-color: #7D7873;"></div>
                                <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor6', 'colorDropdown6')" style="background-color: #9B4B00;"></div>
                                <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor6', 'colorDropdown6')" style="background-color: #CDA55F;"></div>
                                <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor6', 'colorDropdown6')" style="background-color: #00233C;"></div>
                                <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor6', 'colorDropdown6')" style="background-color: #0041AF;"></div>
                                <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor6', 'colorDropdown6')" style="background-color: #009BD7;"></div>
                                <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor6', 'colorDropdown6')" style="background-color: #8CA5DC;"></div>
                                <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor6', 'colorDropdown6')" style="background-color: #28A523;"></div>
                                <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor6', 'colorDropdown6')" style="background-color: #00461E;"></div>
                                <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor6', 'colorDropdown6')" style="background-color: #E6F541;"></div>
                                <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor6', 'colorDropdown6')" style="background-color: #FAE100;"></div>
                                <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor6', 'colorDropdown6')" style="background-color: #FABE14;"></div>
                                <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor6', 'colorDropdown6')" style="background-color: #FFAF00;"></div>
                                <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor6', 'colorDropdown6')" style="background-color: #FF5A00;"></div>
                                <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor6', 'colorDropdown6')" style="background-color: #E6230F;"></div>
                                <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor6', 'colorDropdown6')" style="background-color: #500F0F;"></div>
                                <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor6', 'colorDropdown6')" style="background-color: #37144B;"></div>
                                <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor6', 'colorDropdown6')" style="background-color: #F5509B;"></div>
                            </div>
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">2</span>
                                <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                            </div>
                            <div class="input-container">
                                <label for="rowNumber6">Row:</label>
                                <input type="number" id="rowNumber6" class="input-field" placeholder="0" min="0" max="34">

                                <label for="columnNumber6">Column:</label>
                                <input type="number" id="columnNumber6" class="input-field" placeholder="0" min="0" max="34">
                                
                                <div style="display: inline-grid; margin-left: 25px;">
                                    <div class="color-display-box" id="colorDisplayBox6" onclick="selectColor(document.getElementById('colorDisplayBox6').style.backgroundColor, 'selectedColor6', 'colorDropdown6')"></div>
                                    <span id="colorText6" class="color-text">#FFFFFF</span>
                                </div>
                            </div>
                            <!-- Hexcode input field to find the closest color -->
                            <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                <span class="badge" style="margin-top: 5px;">3</span>
                                <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                            </div>
                            <div class="input-container">
                                <div style="margin-top: 10px;">
                                    <span style="font-weight: bold;">Your Color:</span>
                                </div>
                                <label for="hexInput6">Hex Code:</label>
                                <div style="display: inline-block;">
                                    <input type="text" id="hexInput6" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '6')">
                                    <div id="userColorPreview6" class="color-preview-box"></div>
                                    <!-- Eyedropper Button with Absolute Positioning -->
                                    <button onclick="useEyeDropper('6')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                        <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                    </button>
                                </div>
                                <div id="our-colors-6" style="margin-top: 20px; display: none;">
                                    <span style="font-weight: bold;">Our Colors:</span>

                                    <div class="match-row">
                                        <div id="colorPreview6.1" class="our-color-preview-box" onclick="useOurColorOption('colorPreview6.1','selectedColor6')"></div>
                                        <div id="closestColorInfo6.1" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview6.2" class="our-color-preview-box" onclick="useOurColorOption('colorPreview6.2','selectedColor6')"></div>
                                        <div id="closestColorInfo6.2" class="our-color-text"></div>
                                    </div>

                                    <div class="match-row">
                                        <div id="colorPreview6.3" class="our-color-preview-box" onclick="useOurColorOption('colorPreview6.3','selectedColor6')"></div>
                                        <div id="closestColorInfo6.3" class="our-color-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <span id="colorText6.5" class="color-text" style="margin-left: -15px;"></span>
            </div>
        </div>
        <div class="arrow-container">
            <button id="prevDesignButton" class="arrow-button2" style="visibility: hidden;">
                <div class="arrow"></div>
                Back
            </button>
            <button id="nextDesignButton" class="arrow-button" onclick="nextSection()">
                Next
                <div class="arrow"></div>
            </button>
        </div>
        </div>`;
    const container = document.getElementById('text-art');
    container.innerHTML = ''; // Clear the container before generating sections
        sectionsConfig.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.id = section.id;
        if (index !== 0) {
            sectionDiv.style.display = 'none';
        }

        sectionDiv.innerHTML = `
                
                <div style="min-height:35px;">
                    <h5>
                        1. Current Section: <span id="current-section" style="font-weight:initial">${section.title}</span>
                    </h5>
                </div>
                <div style="min-height:35px; padding-top:10px;">
                    <h5>
                        2. Add Text:
                    </h5>
                    <textarea id="text-input-${section.id}" class="text-input placeholder-grey" style="width:75%; border-radius:3px; border: 1px solid #838383; height: 40px; overflow:hidden; resize:none; vertical-align: middle;" placeholder="Enter text here" ></textarea>
                    <div style="display: flex; gap: 20px; margin-top: 10px; display: none;" id="color-options-wrapper-${section.id}">
                        <div class="font-style-wrapper">
                            <label for="font-style-${section.id}" class="font-style-label">Font: <span id="font-style-required-${section.id}" style="color: red; display: none; padding-left:8px;">*Required</span></label>
                            <div class="custom-dropdown">
                                <button type="button" class="custom-dropdown-button" onclick="toggleDropdown('font-style-${section.id}')">
                                Select a Font Style
                                <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                                </button>
                                <div id="font-style-${section.id}" class="custom-dropdown-content">
                                    <!-- Font options -->
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
                        </div>
                        <div class="font-style-wrapper" style="display:none">
                            <label for="font-effect-${section.id}" class="font-style-label">Effect: <span id="font-effect-required-${section.id}" style="color: red; display: none; padding-left:8px;">*Required</span></label>
                            <div class="custom-dropdown" style="">
                                <button class="custom-dropdown-button" onclick="toggleDropdown('font-effect-${section.id}')">
                                Select a Font Effect
                                <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                                </button>
                                <div id="font-effect-${section.id}" class="custom-dropdown-content">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="font-color-div-${section.id}" style="display:none">
                        <div class="dropdown-wrapper">
                            <div class="dropdown-title-wrapper">
                                <label class="font-style-label" for="font-color-${section.id}">Font Color:</label>
                                <div class="dropdown-container" style="margin-left: 10px;">
                                    <div class="selected-color" id="selectedColor7-${section.id}" onclick="toggleColorDropdown('colorDropdown7-${section.id}', 'selectedColor7-${section.id}')" style="background-color: black"></div>
                                    <div class="dropdown-menu" id="colorDropdown7-${section.id}">
                                        <div class="dropdown-header">
                                            <h4>Choose Your Color</h4>
                                        </div>
                                        <div class="section-title">
                                            <span class="badge">1</span>
                                            <h5>Core Colors</h5>
                                        </div>
                                        <div class="color-option-grid">
                                            <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #FFFFFF;"></div>
                                            <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #000000;"></div>
                                            <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #B4AFA5;"></div>
                                            <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #7D7873;"></div>
                                            <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #9B4B00;"></div>
                                            <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #CDA55F;"></div>
                                            <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #00233C;"></div>
                                            <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #0041AF;"></div>
                                            <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #009BD7;"></div>
                                            <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #8CA5DC;"></div>
                                            <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #28A523;"></div>
                                            <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #00461E;"></div>
                                            <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #E6F541;"></div>
                                            <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #FAE100;"></div>
                                            <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #FABE14;"></div>
                                            <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #FFAF00;"></div>
                                            <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #FF5A00;"></div>
                                            <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #E6230F;"></div>
                                            <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #500F0F;"></div>
                                            <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #37144B;"></div>
                                            <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')" style="background-color: #F5509B;"></div>
                                        </div>
                                        <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                            <span class="badge" style="margin-top: 5px;">2</span>
                                            <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                                        </div>
                                        <div class="input-container">
                                            <label for="rowNumber7-${section.id}">Row:</label>
                                            <input type="number" id="rowNumber7-${section.id}" class="input-field" placeholder="0" min="0" max="34">
                        
                                            <label for="columnNumber7-${section.id}">Column:</label>
                                            <input type="number" id="columnNumber7-${section.id}" class="input-field" placeholder="0" min="0" max="34">
                        
                                            <!-- Color display box -->
                                            <div style="display: inline-grid; margin-left: 25px;">
                                                <div id="colorDisplayBox7-${section.id}" class="color-display-box" onclick="selectColor(document.getElementById('colorDisplayBox7-${section.id}').style.backgroundColor, 'selectedColor7-${section.id}', 'colorDropdown7-${section.id}')"></div>
                                                <span id="colorText7-${section.id}" class="color-text">#FFFFFF</span>
                                            </div>
                                        </div>
                                        <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                            <span class="badge" style="margin-top: 5px;">3</span>
                                            <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                                        </div>
                                        <div class="input-container">
                                            <div style="margin-top: 10px;">
                                                <span style="font-weight: bold;">Your Color:</span>
                                            </div>
                                            <label for="hexInput7">Hex Code:</label>
                                            <div style="display: inline-block;">
                                                <input type="text" id="hexInput7-${section.id}" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '7')">
                                                <div id="userColorPreview7-${section.id}" class="color-preview-box"></div>
                                                <!-- Eyedropper Button with Absolute Positioning -->
                                                <button onclick="useEyeDropper('7')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                                    <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                                </button>
                                            </div>

                                            <div class="input-container">
                                                <div id="our-colors-7-${section.id}" style="margin-top: 20px; display: none;">
                                                    <span style="font-weight: bold;">Our Colors:</span>
                
                                                    <div class="match-row">
                                                        <div id="colorPreview7.1-${section.id}" class="our-color-preview-box" onclick="useOurColorOption('colorPreview7.1-${section.id}','selectedColor7-${section.id}')"></div>
                                                        <div id="closestColorInfo7.1-${section.id}" class="our-color-text"></div>
                                                    </div>
                
                                                    <div class="match-row">
                                                        <div id="colorPreview7.2-${section.id}" class="our-color-preview-box" onclick="useOurColorOption('colorPreview7.2-${section.id}','selectedColor7-${section.id}')"></div>
                                                        <div id="closestColorInfo7.2-${section.id}" class="our-color-text"></div>
                                                    </div>
                
                                                    <div class="match-row">
                                                        <div id="colorPreview7.3-${section.id}" class="our-color-preview-box" onclick="useOurColorOption('colorPreview7.3-${section.id}','selectedColor7-${section.id}')"></div>
                                                        <div id="closestColorInfo7.3-${section.id}" class="our-color-text"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span id="colorText7-${section.id}.5" class="color-text" style="margin-left: -15px;">Black</span>
                            </div>
                        </div>
                    </div>
                    <div id="outline-color-div-${section.id}" style="display:none">
                        <div class="dropdown-wrapper">
                            <div class="dropdown-title-wrapper">
                            <label class="font-style-label" for="outline-color-${section.id}">Outline Color:</label>
                                <div class="dropdown-container" style="margin-left: 10px;">
                                    <div class="selected-color" id="selectedColor8-${section.id}" onclick="toggleColorDropdown('colorDropdown8-${section.id}', 'selectedColor8-${section.id}')"></div>
                                    <div class="dropdown-menu" id="colorDropdown8-${section.id}">
                                        <div class="dropdown-header">
                                            <h4>Choose Your Color</h4>
                                        </div>
                                        <div class="section-title">
                                            <span class="badge">1</span>
                                            <h5>Core Colors</h5>
                                        </div>
                                        <div class="color-option-grid">
                                            <div class="color-option" id="#FFFFFF" onclick="selectColor('#FFFFFF', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #FFFFFF;"></div>
                                            <div class="color-option" id="#000000" onclick="selectColor('#000000', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #000000;"></div>
                                            <div class="color-option" id="#B4AFA5" onclick="selectColor('#B4AFA5', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #B4AFA5;"></div>
                                            <div class="color-option" id="#7D7873" onclick="selectColor('#7D7873', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #7D7873;"></div>
                                            <div class="color-option" id="#9B4B00" onclick="selectColor('#9B4B00', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #9B4B00;"></div>
                                            <div class="color-option" id="#CDA55F" onclick="selectColor('#CDA55F', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #CDA55F;"></div>
                                            <div class="color-option" id="#00233C" onclick="selectColor('#00233C', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #00233C;"></div>
                                            <div class="color-option" id="#0041AF" onclick="selectColor('#0041AF', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #0041AF;"></div>
                                            <div class="color-option" id="#009BD7" onclick="selectColor('#009BD7', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #009BD7;"></div>
                                            <div class="color-option" id="#8CA5DC" onclick="selectColor('#8CA5DC', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #8CA5DC;"></div>
                                            <div class="color-option" id="#28A523" onclick="selectColor('#28A523', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #28A523;"></div>
                                            <div class="color-option" id="#00461E" onclick="selectColor('#00461E', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #00461E;"></div>
                                            <div class="color-option" id="#E6F541" onclick="selectColor('#E6F541', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #E6F541;"></div>
                                            <div class="color-option" id="#FAE100" onclick="selectColor('#FAE100', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #FAE100;"></div>
                                            <div class="color-option" id="#FABE14" onclick="selectColor('#FABE14', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #FABE14;"></div>
                                            <div class="color-option" id="#FFAF00" onclick="selectColor('#FFAF00', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #FFAF00;"></div>
                                            <div class="color-option" id="#FF5A00" onclick="selectColor('#FF5A00', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #FF5A00;"></div>
                                            <div class="color-option" id="#E6230F" onclick="selectColor('#E6230F', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #E6230F;"></div>
                                            <div class="color-option" id="#500F0F" onclick="selectColor('#500F0F', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #500F0F;"></div>
                                            <div class="color-option" id="#37144B" onclick="selectColor('#37144B', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #37144B;"></div>
                                            <div class="color-option" id="#F5509B" onclick="selectColor('#F5509B', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: #F5509B;"></div>
                                            <div class="color-option color-option--transparent" id="none" onclick="selectColor('transparent', 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')" style="background-color: transparent;"><div style="font-size: 40px; margin-top: -7px; margin-left: 1px;"></div></div>
                                        </div>
                                        <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                            <span class="badge" style="margin-top: 5px;">2</span>
                                            <h5 style="margin-top: 10px;">Custom Color<span> (<a href="https://cdn.shopify.com/s/files/1/0658/2409/6326/files/Color_Swatch.pdf?v=1755179910" class="color-grid-link" target="_blank" style="color: blue">click for more colors</a>)</span> </h5>
                                        </div>

                                        <div class="input-container">
                                            <label for="rowNumber8-${section.id}">Row:</label>
                                            <input type="number" id="rowNumber8-${section.id}" class="input-field" placeholder="0" min="0" max="34">
                        
                                            <label for="columnNumber8">Column:</label>
                                            <input type="number" id="columnNumber8-${section.id}" class="input-field" placeholder="0" min="0" max="34">
                        
                                            <!-- Color display box -->
                                            <div style="display: inline-grid; margin-left: 25px;">
                                                <div id="colorDisplayBox8-${section.id}" class="color-display-box" onclick="selectColor(document.getElementById('colorDisplayBox8-${section.id}').style.backgroundColor, 'selectedColor8-${section.id}', 'colorDropdown8-${section.id}')"></div>
                                                <span id="colorText8-${section.id}" class="color-text">#FFFFFF</span>
                                            </div>
                                        </div>
                                        <div class="section-title" style="border-top: 1px solid #e5e7eb;">
                                            <span class="badge" style="margin-top: 5px;">3</span>
                                            <h5 style="margin-top: 10px;">Find Your Top 3 Color Matches</h5>
                                        </div>
                                        <div class="input-container">
                                            <div style="margin-top: 10px;">
                                                <span style="font-weight: bold;">Your Color:</span>
                                            </div>
                                            <label for="hexInput8">Hex Code:</label>
                                            <div style="display: inline-block;">
                                                <input type="text" id="hexInput8-${section.id}" class="input-field" style="width: 100px;" placeholder="#FFFFFF" oninput="handleHexInput(this, '8')">
                                                <div id="userColorPreview8-${section.id}" class="color-preview-box"></div>
                                                <!-- Eyedropper Button with Absolute Positioning -->
                                                <button onclick="useEyeDropper('8')" title="Use Eyedropper" style="border: none; background: none; padding: 0; cursor: pointer;">
                                                    <img src="${window.shopifyAssetPaths.tools.eyeDropper}" style="width: 24px; height: 24px;">
                                                </button>
                                            </div>

                                            <div class="input-container">
                                                <div id="our-colors-8-${section.id}" style="margin-top: 20px; display: none;">
                                                    <span style="font-weight: bold;">Our Colors:</span>
                
                                                    <div class="match-row">
                                                        <div id="colorPreview8.1-${section.id}" class="our-color-preview-box" onclick="useOurColorOption('colorPreview8.1-${section.id}','selectedColor8-${section.id}')"></div>
                                                        <div id="closestColorInfo8.1-${section.id}" class="our-color-text"></div>
                                                    </div>
                
                                                    <div class="match-row">
                                                        <div id="colorPreview8.2-${section.id}" class="our-color-preview-box" onclick="useOurColorOption('colorPreview8.2-${section.id}','selectedColor8-${section.id}')"></div>
                                                        <div id="closestColorInfo8.2-${section.id}" class="our-color-text"></div>
                                                    </div>
                
                                                    <div class="match-row">
                                                        <div id="colorPreview8.3-${section.id}" class="our-color-preview-box" onclick="useOurColorOption('colorPreview8.3-${section.id}','selectedColor8-${section.id}')"></div>
                                                        <div id="closestColorInfo8.3-${section.id}" class="our-color-text"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span id="colorText8-${section.id}.5" class="color-text" style="margin-left: -15px;">None</span>
                            </div>
                        </div>
                    </div>
                    <div style="padding-top: 10px; display: none;">
                        <label for="rotationSlider-${section.id}" class="font-style-label">
                        Text Rotation: <span style="font-weight: 100;" id="sliderValue-${section.id}">0°</span>
                        </label>
                    
                        <div class="slider-container">
                            <!-- left button -->
                            <button id="rotateLeftBtn-${section.id}" class="rotation-btn rotate-left" title="Rotate left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M 18.285714285714285 182.85714285714286 Q 1.1428571428571428 181.71428571428572 0 164.57142857142858 L 0 18.285714285714285 L 0 18.285714285714285 Q 1.1428571428571428 1.1428571428571428 18.285714285714285 0 Q 35.42857142857143 1.1428571428571428 36.57142857142857 18.285714285714285 L 36.57142857142857 124.57142857142857 L 36.57142857142857 124.57142857142857 Q 70.85714285714286 67.42857142857143 128 34.285714285714285 Q 185.14285714285714 1.1428571428571428 256 0 Q 328 1.1428571428571428 385.14285714285717 35.42857142857143 Q 443.42857142857144 68.57142857142857 476.57142857142856 126.85714285714286 Q 510.85714285714283 184 512 256 Q 510.85714285714283 328 476.57142857142856 385.14285714285717 Q 443.42857142857144 443.42857142857144 385.14285714285717 476.57142857142856 Q 328 510.85714285714283 256 512 Q 186.28571428571428 510.85714285714283 130.28571428571428 478.85714285714283 Q 74.28571428571429 446.85714285714283 38.857142857142854 392 Q 34.285714285714285 382.85714285714283 38.857142857142854 374.85714285714283 Q 43.42857142857143 365.7142857142857 54.857142857142854 365.7142857142857 Q 65.14285714285714 365.7142857142857 72 374.85714285714283 Q 101.71428571428571 420.57142857142856 149.71428571428572 448 Q 197.71428571428572 474.2857142857143 256 475.42857142857144 Q 349.7142857142857 473.14285714285717 411.42857142857144 411.42857142857144 Q 473.14285714285717 349.7142857142857 475.42857142857144 256 Q 473.14285714285717 162.28571428571428 411.42857142857144 100.57142857142857 Q 349.7142857142857 38.857142857142854 256 36.57142857142857 Q 194.28571428571428 37.714285714285715 145.14285714285714 66.28571428571429 Q 94.85714285714286 96 66.28571428571429 146.28571428571428 L 164.57142857142858 146.28571428571428 L 164.57142857142858 146.28571428571428 Q 181.71428571428572 147.42857142857142 182.85714285714286 164.57142857142858 Q 181.71428571428572 181.71428571428572 164.57142857142858 182.85714285714286 L 18.285714285714285 182.85714285714286 L 18.285714285714285 182.85714285714286 Z"/>
                            </svg>
                            </button>
                        
                            <!-- slider -->
                            <input type="range" min="-90" max="90" value="0" step="1"
                                class="rotation-slider" id="rotationSlider-${section.id}" />
                        
                            <!-- right button -->
                            <button id="rotateRightBtn-${section.id}" class="rotation-btn rotate-right" title="Rotate right">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M 493.7142857142857 182.85714285714286 Q 510.85714285714283 181.71428571428572 512 164.57142857142858 L 512 18.285714285714285 L 512 18.285714285714285 Q 510.85714285714283 1.1428571428571428 493.7142857142857 0 Q 476.57142857142856 1.1428571428571428 475.42857142857144 18.285714285714285 L 475.42857142857144 124.57142857142857 L 475.42857142857144 124.57142857142857 Q 441.14285714285717 67.42857142857143 384 34.285714285714285 Q 326.85714285714283 1.1428571428571428 256 0 Q 184 1.1428571428571428 126.85714285714286 35.42857142857143 Q 68.57142857142857 68.57142857142857 35.42857142857143 126.85714285714286 Q 1.1428571428571428 184 0 256 Q 1.1428571428571428 328 35.42857142857143 385.14285714285717 Q 68.57142857142857 443.42857142857144 126.85714285714286 476.57142857142856 Q 184 510.85714285714283 256 512 Q 325.7142857142857 510.85714285714283 381.7142857142857 478.85714285714283 Q 437.7142857142857 446.85714285714283 473.14285714285717 392 Q 477.7142857142857 382.85714285714283 473.14285714285717 374.85714285714283 Q 468.57142857142856 365.7142857142857 457.14285714285717 365.7142857142857 Q 446.85714285714283 365.7142857142857 440 374.85714285714283 Q 410.2857142857143 420.57142857142856 362.2857142857143 448 Q 314.2857142857143 474.2857142857143 256 475.42857142857144 Q 162.28571428571428 473.14285714285717 100.57142857142857 411.42857142857144 Q 38.857142857142854 349.7142857142857 36.57142857142857 256 Q 38.857142857142854 162.28571428571428 100.57142857142857 100.57142857142857 Q 162.28571428571428 38.857142857142854 256 36.57142857142857 Q 317.7142857142857 37.714285714285715 366.85714285714283 66.28571428571429 Q 417.14285714285717 96 445.7142857142857 146.28571428571428 L 347.42857142857144 146.28571428571428 L 347.42857142857144 146.28571428571428 Q 330.2857142857143 147.42857142857142 329.14285714285717 164.57142857142858 Q 330.2857142857143 181.71428571428572 347.42857142857144 182.85714285714286 L 493.7142857142857 182.85714285714286 L 493.7142857142857 182.85714285714286 Z"/>
                            </svg>
                            </button>
                        
                            <!-- decorative rail + notches under the slider -->
                            <div class="track" id="rotationTrack">
                            <div class="notches" id="notches">
                                <span class="notch" style="left:0%;"></span>
                                <span class="notch" style="left:26%;"></span>
                                <span class="notch" style="left:50%;"></span>
                                <span class="notch" style="left:74%;"></span>
                                <span class="notch" style="left:100%;"></span>
                            </div>
                            </div>
                        
                            <!-- degree labels -->
                            <div class="labels">
                            <span class="label">90&deg;</span>
                            <span class="label" style="margin-left: 7px;">45&deg;</span>
                            <span class="label" style="margin-left: 16px;">0&deg;</span>
                            <span class="label" style="margin-left: 17px;">45&deg;</span>
                            <span class="label" style="margin-left: 22px;">90&deg;</span>
                            </div>
                        </div>              
                    </div>
                    </div>
                </div>                       
                <div style="min-height:35px; padding-top:15px;">
                    <div style="display: flex; align-items: center;">
                        <h5 style="padding-right: 20px;">
                           3. Add Art:
                        </h5>
                        <!-- Drag and Drop Area -->
                        <div class="drop-zone-inline" id="drop-zone-${section.id}"
                            ondragover="event.preventDefault(); this.classList.add('drag-over');"
                            ondragleave="this.classList.remove('drag-over');"
                            ondrop="handleFileDrop(event, '${section.id}', '${section.title}'); this.classList.remove('drag-over');"
                            onclick="document.getElementById('upload-${section.id}').click();">

                            <img src="${window.shopifyAssetPaths.tools.uploadIcon}" alt="Upload Icon" class="upload-icon-inline">

                            <div class="upload-instructions-inline">
                            <strong>Drag & Drop</strong> your file here<br>
                            or <span class="upload-link">click to upload</span>
                            </div>

                            <input type="file" id="upload-${section.id}" class="file-input"
                                accept=".jpg,.jpeg,.png,.svg"
                                onchange="validateFileInput(event, '${section.id}'); addArt('${section.id}', '${section.title}');"
                                style="display: none;">
                        </div>
                    </div>
                </div>
                <label id="art-order-label-${section.id}" class="font-style-label" style="display: none">Art Order: </label>
                <div id="art-preview-${section.id}" class="art-preview" style="padding-bottom: 25px; display: flex; flex-wrap: wrap;"></div>
                <div style="min-height:35px;">
                    <h5>
                        4. Notes to Artist:
                    </h5>
                    <div>
                        <textarea id="notes-${section.id}" maxlength="200" class="notes-textarea placeholder-grey" style="width:100%; height:auto; border: 1px solid #838383; overflow: auto; resize: none; font-size: 18px;" placeholder="Enter any notes here..."></textarea>
                        <div><span id="char-count-${section.id}">200 characters remaining</span></div>
                    </div>
                </div>
                <div class="arrow-container">
                    <button id="prevButton-${section.id}" class="arrow-button2" onclick="prevSection()">
                        <div class="arrow"></div>
                        Back
                    </button>
                    <button id="nextButton-${section.id}" class="arrow-button" onclick="nextSection()">
                        Next
                        <div class="arrow"></div>
                    </button>
                </div>
        `;

        container.appendChild(sectionDiv);

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

    const sizingTab = document.getElementById('sizing');
    sizingTab.innerHTML = '';
    if(itDescript.toUpperCase().includes("TANK")){
        sizingTab.innerHTML = `
        <div class="sizing-container">
            <!-- Section Titles -->
            <div class="sizing-steps">
                <div class="step">
                    <h5>1. Singlet Sizing:</h5>
                </div>
                <div class="step">
                    <h5>2. Short Sizing:</h5>
                </div>
            </div>

            <!-- Sizing Grid -->
            <div id="sizingContainer" class="sizing-grid">
                <div class="sizing-row">
                <label class="font-style-label" for="smallSingletInput">Total Small:</label>
                <input type="number" id="smallSingletInput" name="smallSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="smallShortInput">Total Small:</label>
                <input type="number" id="smallShortInput" name="smallShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="mediumSingletInput">Total Medium:</label>
                <input type="number" id="mediumSingletInput" name="mediumSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="mediumShortInput">Total Medium:</label>
                <input type="number" id="mediumShortInput" name="mediumShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="largeSingletInput">Total Large:</label>
                <input type="number" id="largeSingletInput" name="largeSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="largeShortInput" >Total Large:</label>
                <input type="number" id="largeShortInput" name="largeShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="xlSingletInput">Total X-Large:</label>
                <input type="number" id="xlSingletInput" name="xlSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="xlShortInput">Total X-Large:</label>
                <input type="number" id="xlShortInput" name="xlShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="2xlSingletInput">Total 2X-Large:</label>
                <input type="number" id="2xlSingletInput" name="2xlSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="2xlShortInput" >Total 2X-Large:</label>
                <input type="number" id="2xlShortInput" name="2xlShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="3xlSingletInput">Total 3X-Large:</label>
                <input type="number" id="3xlSingletInput" name="3xlSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="3xlShortInput">Total 3X-Large:</label>
                <input type="number" id="3xlShortInput" name="3xlShortInput" value="0" min="0" step="1" class="short-input">
                </div>
            </div>

            <!-- Shorts Checkbox -->
            <div class="shorts-toggle">
                <input type="checkbox" id="includeShortsCheckbox">
                <label for="includeShortsCheckbox">
                Would you like to include shorts in your quote for an additional charge per short? 
                <p class="note">*Charges may vary depending on style of short.</p>
                </label>
            </div>

            <!-- Notes -->
            <div id="shortDesignNotes" class="notes-container" style="display:none;">
                <h5>3. Short Design Notes:</h5>
                <textarea id="shortDesign-notes" maxlength="200" class="notes-textarea placeholder-grey" placeholder="Enter any notes here..."></textarea>
                <div><span id="char-count-notes">200 characters remaining</span></div>
            </div>

            <!-- Navigation Arrows -->
            <div class="arrow-container">
                <button id="prevSizingButton" class="arrow-button2" onclick="prevSection()">
                <div class="arrow"></div> Back
                </button>
                <button id="nextSizingButton" class="arrow-button" onclick="nextSection()">
                Next <div class="arrow"></div>
                </button>
            </div>
        </div>

        `;
    }
    else{
        sizingTab.innerHTML = `
        <div class="sizing-container">
            <!-- Section Titles -->
            <div class="sizing-steps">
                <div class="step">
                    <h5>1. Singlet Sizing:</h5>
                </div>
                <div class="step">
                    <h5>2. Short Sizing:</h5>
                </div>
            </div>

            <!-- Sizing Grid -->
            <div id="sizingContainer" class="sizing-grid">
                <div class="sizing-row">
                <label class="font-style-label" for="smallSingletInput">Total Small:</label>
                <input type="number" id="smallSingletInput" name="smallSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="smallShortInput">Total Small:</label>
                <input type="number" id="smallShortInput" name="smallShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="mediumSingletInput">Total Medium:</label>
                <input type="number" id="mediumSingletInput" name="mediumSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="mediumShortInput">Total Medium:</label>
                <input type="number" id="mediumShortInput" name="mediumShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="largeSingletInput">Total Large:</label>
                <input type="number" id="largeSingletInput" name="largeSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="largeShortInput" >Total Large:</label>
                <input type="number" id="largeShortInput" name="largeShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="xlSingletInput">Total X-Large:</label>
                <input type="number" id="xlSingletInput" name="xlSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="xlShortInput">Total X-Large:</label>
                <input type="number" id="xlShortInput" name="xlShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="2xlSingletInput">Total 2X-Large:</label>
                <input type="number" id="2xlSingletInput" name="2xlSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="2xlShortInput" >Total 2X-Large:</label>
                <input type="number" id="2xlShortInput" name="2xlShortInput" value="0" min="0" step="1" class="short-input">
                </div>

                <div class="sizing-row">
                <label class="font-style-label" for="3xlSingletInput">Total 3X-Large:</label>
                <input type="number" id="3xlSingletInput" name="3xlSingletInput" value="0" min="0" step="1">

                <label class="font-style-label short-label" for="3xlShortInput">Total 3X-Large:</label>
                <input type="number" id="3xlShortInput" name="3xlShortInput" value="0" min="0" step="1" class="short-input">
                </div>
            </div>

            <!-- Shorts Checkbox -->
            <div class="shorts-toggle">
                <input type="checkbox" id="includeShortsCheckbox">
                <label for="includeShortsCheckbox">
                Would you like to include shorts in your quote for an additional charge per short? 
                <p class="note">*Charges may vary depending on style of short.</p>
                </label>
            </div>

            <!-- Notes -->
            <div id="shortDesignNotes" class="notes-container" style="display:none;">
                <h5>3. Short Design Notes:</h5>
                <textarea id="shortDesign-notes" maxlength="200" class="notes-textarea placeholder-grey" placeholder="Enter any notes here..."></textarea>
                <div><span id="char-count-notes">200 characters remaining</span></div>
            </div>

            <!-- Navigation Arrows -->
            <div class="arrow-container">
                <button id="prevSizingButton" class="arrow-button2" onclick="prevSection()">
                <div class="arrow"></div> Back
                </button>
                <button id="nextSizingButton" class="arrow-button" onclick="nextSection()">
                Next <div class="arrow"></div>
                </button>
            </div>
        </div>
        `;
    }
    document.getElementById("includeShortsCheckbox").addEventListener("change", function() {
        let isChecked = this.checked;
        let shortInputs = document.querySelectorAll("#sizingContainer input");
        let shortLabels = document.querySelectorAll(".short-label");

        shortInputs.forEach(input => {
            if(input.classList.contains("short-input")){
                input.disabled = !isChecked;
                input.style.opacity = isChecked ? "1" : "0.5";
            }
        });

        shortLabels.forEach(label => {
            label.style.paddingLeft = '10px';
            label.style.opacity = isChecked ? "1" : "0.5";
        });
        
        if(isChecked){
            document.getElementById("shortDesignNotes").style.display = "block";
        }
        else{
            document.getElementById("shortDesignNotes").style.display = "none";
        }
    });

    // Initialize state on page load
    document.getElementById("includeShortsCheckbox").dispatchEvent(new Event("change"));

    const submitTab = document.getElementById('submit-design');
    submitTab.innerHTML = '';
    submitTab.innerHTML = `
        <div class="preview-container">
            <h5>Contact Information</h5>
            <form id="contactForm">
                <!-- Email + Confirm Email -->
                <div class="form-group-row">
                <div class="form-col" style="flex: 1;">
                    <label for="email" class="font-style-label">1. Email Address:</label>
                    <input type="email" id="email" name="email" class="text-input placeholder-grey" required placeholder="Ex. customer_service@fttf.com" oninput="validateEmail()">
                    <span id="email-error" style="color: red; display: none;">Emails do not match</span>
                </div>
                <div class="form-col" style="flex: 1;">
                    <label for="confirmEmail" class="font-style-label">2. Confirm Email:</label>
                    <input type="email" id="confirmEmail" name="confirmEmail" class="text-input placeholder-grey" required placeholder="Retype email address" oninput="validateEmail()">
                </div>
                </div>
                
                <!-- Name + Phone -->
                <div class="form-group-row">
                <div class="form-col" style="flex: 1; ">
                    <label for="userName" class="font-style-label">3. Customer Name:</label>
                    <input type="text" id="userName" name="name" class="text-input placeholder-grey" required placeholder="Ex. John Doe">
                </div>
                <div class="form-col" style="flex: 1; ">
                    <label for="phone" class="font-style-label">4. Phone Number:</label>
                    <input type="text" id="phone" name="phone" class="text-input placeholder-grey" required placeholder="Ex. (800) 747-9013" oninput="formatPhoneNumber(this)">
                    <span id="phone-error" style="color: red; display: none;">Please enter a valid 10-digit phone number.</span>
                </div>
                </div>
                
                <!-- School/Club + Sales Rep -->
                <div class="form-group-row">
                <div class="form-col" style="flex: 1;">
                    <label for="schoolClub" class="font-style-label">5. School/Club:</label>
                    <input type="text" id="schoolClub" name="schoolClub" class="text-input placeholder-grey" placeholder="Optional">
                </div>
                <div class="form-col" style="flex: 1;">
                    <label for="salesRep" class="font-style-label">6. Sales Rep (if known):</label>
                    <input type="text" id="salesRep" name="salesRep" class="text-input placeholder-grey" placeholder="Optional">
                </div>
                </div>
        
                <!-- Street Address -->
                <div class="form-row">
                    <label for="street" class="font-style-label">7. Street Address:</label>
                    <input type="text" id="street" name="street" class="text-input placeholder-grey" style="width: 450px;" required placeholder="Ex. 2341 Plum St.">
                </div>
        
                
                <!-- City + State + Zip -->
                <div class="form-group-row">
                <div class="form-col" style="flex: 1; min-width: 150px;">
                    <label for="city" class="font-style-label">City:</label>
                    <input type="text" id="city" name="city" class="text-input placeholder-grey" required placeholder="Ex. Edwardsville">
                </div>
                <div class="form-col" style="width: 80px;">
                    <label for="state" class="font-style-label">State:</label>
                    <div class="custom-dropdown" style="width: 70px;">
                    <button type="button" id="state-dropdown-button" class="custom-dropdown-button placeholder-grey" onclick="toggleDropdown2('state-dropdown')" style="width: 70px;">Ex.</button>
                    <div id="state-dropdown" class="custom-dropdown-content" style="width: 70px; max-height: 160px; overflow-y: auto;">
                        ${["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map(state => `<div onclick="selectDropdownOption2('state-dropdown', '${state}', 'state')">${state}</div>`).join('')}
                    </div>
                    <input type="hidden" id="state" name="state" required>
                    </div>
                </div>
                <div class="form-col" style="flex: 1; min-width: 120px;">
                    <label for="zip" class="font-style-label">Zip Code:</label>
                    <input type="text" id="zip" name="zip" class="text-input placeholder-grey" required placeholder="Ex. 62025-1234" oninput="formatZipCode(this)">
                    <span id="zip-error" style="color: red; display: none;">Please enter a valid zip code.</span>
                </div>
                </div>
                
                <!-- Ready to order + Design Name -->
                <div class="form-group-row">
                <!-- Ready to order dropdown -->
                <div class="form-col" style="flex: 1;">
                    <label for="priority" class="font-style-label">8. Ready to order:</label>
                    <div class="custom-dropdown">
                    <button type="button" id="priority-dropdown-button" class="custom-dropdown-button placeholder-grey" style="width: 220px;" onclick="toggleDropdown2('priority-dropdown')">Select a choice</button>
                    <div id="priority-dropdown" class="custom-dropdown-content" style="width: 220px;">
                        <div onclick="selectDropdownOption2('priority-dropdown', 'No, I am just browsing.', 'priority')">No, I am just browsing for now.</div>
                        <div onclick="selectDropdownOption2('priority-dropdown', 'Yes, but I want some help.', 'priority')">Yes, but I am wanting some help with my design.</div>
                        <div onclick="selectDropdownOption2('priority-dropdown', 'Yes, I am ready to order!', 'priority')">Yes, I am ready to order!</div>
                    </div>
                    <input type="hidden" id="priority" name="priority" required>
                    </div>
                </div>
        
                <!-- Design Name -->
                <div class="form-col" style="flex: 1;">
                    <label for="design-Name" class="font-style-label">9. Design Name:</label>
                    <input type="text" id="design-Name" name="design" class="text-input placeholder-grey" required placeholder="Ex. Design 1">
                </div>
                <div class="arrow-container" style="padding-top:20px;">
                    <button type="button" class="arrow-button2" onclick="prevSection()">
                        <div class="arrow"></div>
                        Back
                    </button>
                    <button type="submit" id="submit-button" class="arrow-button" onclick="submitForm();">
                        Submit
                        <div class="arrow"></div>
                    </button>
                </div>
            </form>
        </div>
    `;

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
    const cursorPosition = input.selectionStart;
    const originalLength = input.value.length;

    input.value = sanitizeInput(input.value);

    // Adjust the cursor position if necessary
    const newLength = input.value.length;
    const diff = newLength - originalLength;
    input.setSelectionRange(cursorPosition + diff, cursorPosition + diff);
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

