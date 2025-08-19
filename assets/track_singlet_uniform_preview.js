let isFinished = false;
const fontPath = '/css/fonts.css';

async function generatePreviewURL(template){
    function embedImageInCanvas(canvas) {
        const context = canvas.getContext('2d');

        let needsOutline = false;
        if(itDescript.toUpperCase().includes("COMPRESSION")){
            if(template.includes("2") || template.includes("5") || template.includes("6")){
                needsOutline = true;
            }
        }
        else{
            if(template.includes("4") || template.includes("5") || template.includes("8")){
                needsOutline = true;
            }
        }
            
        // Get the hiddenNordLogo image element
        const NordLogo = document.getElementById('NordLogo');
        let hiddenNordLogo = document.getElementById("hiddenNordLogo");
        if(NordLogo.src.includes("Norditalia_Runner_White") && needsOutline){
            hiddenNordLogo = document.getElementById("hiddenNordLogo4");
        }
        else if(NordLogo.src.includes("Norditalia_Runner_White")){
            hiddenNordLogo = document.getElementById("hiddenNordLogo2");
        }
        else if(NordLogo.src.includes("Norditalia_Runner_Black") && needsOutline){
            hiddenNordLogo = document.getElementById("hiddenNordLogo3");
        }
        else{
            hiddenNordLogo = document.getElementById("hiddenNordLogo");
        }

        // Get the computed styles of the image
        const styles = window.getComputedStyle(NordLogo);
    
        // Extract dimensions and positions
        const imgHeight = parseFloat(styles.height.replace('px', '')) || NordLogo.naturalHeight;
        const imgWidth = parseFloat(styles.width.replace('px', '')) || NordLogo.naturalHeight;
    
        // Draw the image onto the canvas
        if(itDescript.toUpperCase().includes("TANK")){
            context.drawImage(hiddenNordLogo, 405, 200, imgWidth, imgHeight);
        }
        else if(itDescript.toUpperCase().includes("COMPRESSION")){
            context.drawImage(hiddenNordLogo, 385, 270, imgWidth, imgHeight);
        }
        else{
            context.drawImage(hiddenNordLogo, 411, 240, imgWidth, imgHeight);
        }
        
    }

    function embedFontForSvg(svg, fontFamily) {
        return new Promise((resolve, reject) => {
            const cssPath = "css/fonts.css"; // Update path as needed
    
            fetch(cssPath)
                .then(response => response.text())
                .then(async (css) => {
                    const fontFaceRegex = new RegExp(`@font-face\\s*{[^}]*font-family:\\s*['"]${fontFamily}['"][^}]*}`, "gi");
                    const fontFaceRules = css.match(fontFaceRegex);
    
                    if (!fontFaceRules || fontFaceRules.length === 0) {
                        console.error(`No @font-face rules found for font-family: ${fontFamily}`);
                        return reject(`Font-family ${fontFamily} not found in CSS.`);
                    }
    
                    let fontFaceCss = fontFaceRules[0];
                    const urlRegex = /url\(['"]?(.*?)['"]?\)/i;
                    const urlMatch = fontFaceCss.match(urlRegex);
    
                    if (urlMatch && urlMatch[1]) {
                        const fontUrl = urlMatch[1];
    
                        try {
                            const base64Font = await fetchFontAsBase64(fontUrl);
                            fontFaceCss = fontFaceCss.replace(urlRegex, `url('${base64Font}')`);
                        } catch (error) {
                            console.error(`Failed to fetch font as Base64: ${error}`);
                            return reject(error);
                        }
                    }
    
                    const styleElement = document.createElement("style");
                    styleElement.textContent = fontFaceCss;
                    svg.prepend(styleElement);
                    resolve();
                })
                .catch(error => reject(`Failed to load CSS from ${cssPath}: ${error}`));
        });
    }
    
    function fetchFontAsBase64(fontUrl) {
        return fetch(fontUrl)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            }));
    }
    
    

    async function addDivToCanvas(divId, context, x, y) {
        const element = document.getElementById(divId);
    
        if (!element) {
            console.error(`Element with ID ${divId} not found`);
            return;
        }
    
        const internalElements = element.querySelectorAll('*:not(.center-line)');
    
        for (const internalElement of internalElements) {
            if (internalElement.querySelector('svg')) {
                await embedFontForSvg(internalElement.querySelector('svg'), internalElement.style.fontFamily);
            }
        }
    
        return html2canvas(element, {
            backgroundColor: null,
            scale: 1, // Maintain original size
            logging: true, // Enable logging for debug purposes
            width: element.clientWidth,
            height: element.clientHeight,
        }).then(canvas => {
            // Apply clipPath logic (same as original)
            const overlay = element;
            if (overlay) {
                let clipPath = divId.includes("Front") ? frontOverlayPath : backOverlayPath;
    
                if (clipPath) {
                    const tempCanvas = document.createElement('canvas');
                    tempCanvas.width = canvas.width;
                    tempCanvas.height = canvas.height;
                    const tempCtx = tempCanvas.getContext('2d');
    
                    // Parse and draw the clip path
                    const pathCommands = clipPath.split(/(?=[MLQZC])/);
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
                            case 'C':
                                tempCtx.bezierCurveTo(params[0], params[1], params[2], params[3], params[4], params[5]);
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
                    context.drawImage(tempCanvas, x, y);
                } else {
                    context.drawImage(canvas, x, y);
                }
            } else {
                context.drawImage(canvas, x, y);
            }
        }).catch(err => {
            console.error(`Error capturing element ${divId}:`, err);
            return null;
        });
    }
    
    
    
    

    // Create a composite canvas to combine all layers
    const compositeCanvas = document.createElement("canvas");
    compositeCanvas.width = templateCanvas1.width;
    compositeCanvas.height = templateCanvas1.height;
    const compositeContext = compositeCanvas.getContext("2d");
    
    
    compositeContext.drawImage(TankTopCanvas, 0, 0);                  // z-index 1
    compositeContext.drawImage(TankTopBackCanvas, 0, 0);              // z-index 1
    compositeContext.drawImage(TankTopTemplateColor1Canvas, 0, 0);    // z-index 2
    compositeContext.drawImage(TankTopTemplateColor2Canvas, 0, 0);    // z-index 2
    compositeContext.drawImage(TankTopTemplateColor3Canvas, 0, 0);    // z-index 2
    compositeContext.drawImage(TankTopInternalFrontCanvas, 0, 0);     // z-index 4
    compositeContext.drawImage(TankTopBackHolesCanvas, 0, 0);         // z-index 4
    compositeContext.drawImage(TankTopFrontOutlineCanvas, 0, 0);      // z-index 4
    compositeContext.drawImage(TankTopInternalBackCanvas, 0, 0);      // z-index 4
    compositeContext.drawImage(TankTopCuffCanvas, 0, 0);              // z-index 5
    compositeContext.drawImage(TankTopBackCuffCanvas, 0, 0);          // z-index 5
    compositeContext.drawImage(TankTopBackRacerCuffCanvas, 0, 0);     // z-index 5
    await addDivToCanvas("FrontOverlayCanvas", compositeContext, 0, 0);
    await addDivToCanvas("BackOverlayCanvas", compositeContext, 500, 0);
    
    
    embedImageInCanvas(compositeCanvas);

     // Define crop coordinates and dimensions
     const cropX = 40;       // Adjust as needed
     const cropY = 0;       // Adjust as needed
     const cropWidth = compositeCanvas.width;   // Adjust as needed
     const cropHeight = compositeCanvas.height;  // Adjust as needed

     // Create a cropped canvas to hold the cropped image
     const croppedCanvas = document.createElement("canvas");
     croppedCanvas.width = cropWidth;
     croppedCanvas.height = cropHeight;
     const croppedContext = croppedCanvas.getContext("2d");

     // Draw the cropped area from the composite canvas onto the cropped canvas
     croppedContext.drawImage(
         compositeCanvas,
         cropX, cropY,            // Source x, y
         cropWidth, cropHeight,   // Source width, height
         0, 0,                    // Destination x, y
         cropWidth, cropHeight    // Destination width, height
     );

    return croppedCanvas.toDataURL("image/png");
}

async function gatherSectionInformation(sectionsConfig) {

    function getTemplateColorName(colorId){

        const color = document.getElementById(colorId).innerText.trim();

        const colorNames = {
            'True Navy': 'C10 R13',
            'True Royal': 'C32 R26',
            'Columbia Blue': 'C10 R5',
            'Carolina Blue': 'C9 R22',
            'Kelly Green': 'C33 R7',
            'Forest Green': 'C29 R29',
            'Yellow': 'C34 R2',
            'Yellow Gold': 'C1 R27',
            'Athletic Gold': 'C1 R26',
            'Vegas Gold': 'C17 R5',
            'Copper': 'C3 R5',
            'Orange': 'C3 R17',
            'Red': 'C4 R31',
            'Maroon': 'C18 R27',
            'Purple': 'C7 R33',
            'Pink': 'C5 R31',
            'Neon Yellow': 'C34 R2',
            'Cool Gray': 'C34 R7',
            'Slate Gray': 'C34 R3',
        };

        if(document.getElementById("templateLabel").innerText.trim() === "Choose a Template" || document.getElementById("templateLabel").innerText.trim() === "No Design"){
            return "N/A";
        }
        else if(colorNames[color]){
            return colorNames[color] + ` (${color})`;
        }
        else{
            return color;
        }
    }

    function getTemplateName(){
        if(document.getElementById('templateLabel').innerText.trim() === "Choose a Template"){
            return "No Design";
        }
        else{
            return document.getElementById('templateLabel').innerText.trim();
        }
    }

    function getUniformColorName(colorId){
        const color = document.getElementById(colorId).innerText.trim();

        const colorNames = {
            'True Navy': 'C10 R13',
            'True Royal': 'C32 R26',
            'Columbia Blue': 'C10 R5',
            'Carolina Blue': 'C9 R22',
            'Kelly Green': 'C33 R7',
            'Forest Green': 'C29 R29',
            'Yellow': 'C34 R2',
            'Yellow Gold': 'C1 R27',
            'Athletic Gold': 'C1 R26',
            'Vegas Gold': 'C17 R5',
            'Copper': 'C3 R5',
            'Orange': 'C3 R17',
            'Red': 'C4 R31',
            'Maroon': 'C18 R27',
            'Purple': 'C7 R33',
            'Pink': 'C5 R31',
            'Neon Yellow': 'C34 R2',
            'Cool Gray': 'C34 R7',
            'Slate Gray': 'C34 R3',
        };

        if(colorNames[color]){
            return colorNames[color] + ` (${color})`;
        }
        else{
            return color;
        }

    }

    function getTextColor(colorId){
        const color = document.getElementById(colorId).innerText.trim();

        const colorNames = {
            'True Navy': 'C10 R13',
            'True Royal': 'C32 R26',
            'Columbia Blue': 'C10 R5',
            'Carolina Blue': 'C9 R22',
            'Kelly Green': 'C33 R7',
            'Forest Green': 'C29 R29',
            'Yellow': 'C34 R2',
            'Yellow Gold': 'C1 R27',
            'Athletic Gold': 'C1 R26',
            'Vegas Gold': 'C17 R5',
            'Copper': 'C3 R5',
            'Orange': 'C3 R17',
            'Red': 'C4 R31',
            'Maroon': 'C18 R27',
            'Purple': 'C7 R33',
            'Pink': 'C5 R31',
            'Neon Yellow': 'C34 R2',
            'Cool Gray': 'C34 R7',
            'Slate Gray': 'C34 R3',
        };
        if(color === ''){
            return 'N/A';
        }
        else if(colorNames[color]){
            return colorNames[color] + ` (${color})`;
        }
        else{
            return color;
        }
    }

    const designData = {
        templateName: getTemplateName(),
        frontColor: document.getElementById('selectedColor1').style.backgroundColor.trim(),
        frontColorName: getUniformColorName('colorText1.5'),
        backColor: document.getElementById('selectedColor2').style.backgroundColor.trim(),
        backColorName: getUniformColorName('colorText2.5'),
        trimColor: document.getElementById('selectedColor3').style.backgroundColor.trim(),
        trimColorName: getUniformColorName('colorText3.5'),
        templateColor1: document.getElementById('selectedColor4').style.backgroundColor.trim(),
        templateColor1Name: getTemplateColorName('colorText4.5'),
        templateColor2: document.getElementById('selectedColor5').style.backgroundColor.trim(),
        templateColor2Name: getTemplateColorName('colorText5.5'),
        templateColor3: document.getElementById('selectedColor6').style.backgroundColor.trim(),
        templateColor3Name: getTemplateColorName('colorText6.5'),
        nordLogo: document.getElementById('NordLogo').src
    };


    const sectionData = sectionsConfig.map(section => {
        const text = document.getElementById(`text-input-${section.id}`).value.trim();
        const fontStyle = document.querySelector(`#font-style-${section.id}`).previousElementSibling.textContent.trim();
        const fontEffect = document.querySelector(`#font-effect-${section.id}`).previousElementSibling.textContent.trim();
        const fontColor = document.getElementById(`selectedColor7-${section.id}`).style.backgroundColor.trim();
        const fontColorName = getTextColor(`colorText7-${section.id}.5`);
        const outlineColor = document.getElementById(`selectedColor8-${section.id}`).style.backgroundColor.trim();
        const outlineColorName = getTextColor(`colorText8-${section.id}.5`);
        const images = Array.from(document.querySelectorAll(`#art-preview-${section.id} img`)).map(img => img.src);
        const notes = document.getElementById(`notes-${section.id}`).value.trim();

        return {
            sectionId: section.id,
            sectionTitle: section.title,
            text,
            fontStyle,
            fontEffect,
            fontColor,
            fontColorName,
            outlineColor,
            outlineColorName,
            images,
            notes
        };
    });
    let sizingData;
    if(itDescript.toUpperCase().includes("TANK")){
        sizingData = {
            singletSizes: {
                'small': parseInt(document.getElementById('smallSingletInput').value, 10) || 0,
                'medium': parseInt(document.getElementById('mediumSingletInput').value, 10) || 0,
                'large': parseInt(document.getElementById('largeSingletInput').value, 10) || 0,
                'xl': parseInt(document.getElementById('xlSingletInput').value, 10) || 0,
                '2xl': parseInt(document.getElementById('2xlSingletInput').value, 10) || 0,
                '3xl': parseInt(document.getElementById('3xlSingletInput').value, 10) || 0
            },
            shortSizes: {
                'small': parseInt(document.getElementById('smallShortInput').value, 10) || 0,
                'medium': parseInt(document.getElementById('mediumShortInput').value, 10) || 0,
                'large': parseInt(document.getElementById('largeShortInput').value, 10) || 0,
                'xl': parseInt(document.getElementById('xlShortInput').value, 10) || 0,
                '2xl': parseInt(document.getElementById('2xlShortInput').value, 10) || 0,
                '3xl': parseInt(document.getElementById('3xlShortInput').value, 10) || 0
            }
        };
    }
    else{
        sizingData = {
            singletSizes: {
                'small': parseInt(document.getElementById('smallSingletInput').value, 10) || 0,
                'medium': parseInt(document.getElementById('mediumSingletInput').value, 10) || 0,
                'large': parseInt(document.getElementById('largeSingletInput').value, 10) || 0,
                'xl': parseInt(document.getElementById('xlSingletInput').value, 10) || 0,
                '2xl': parseInt(document.getElementById('2xlSingletInput').value, 10) || 0,
                '3xl': parseInt(document.getElementById('3xlSingletInput').value, 10) || 0
            },
            shortSizes: {
                'small': parseInt(document.getElementById('smallShortInput').value, 10) || 0,
                'medium': parseInt(document.getElementById('mediumShortInput').value, 10) || 0,
                'large': parseInt(document.getElementById('largeShortInput').value, 10) || 0,
                'xl': parseInt(document.getElementById('xlShortInput').value, 10) || 0,
                '2xl': parseInt(document.getElementById('2xlShortInput').value, 10) || 0,
                '3xl': parseInt(document.getElementById('3xlShortInput').value, 10) || 0
            }
        };
    }
    console.log(sizingData);

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
        designName: document.getElementById('design-Name').value.trim()
    };

    const previewURL = await generatePreviewURL(getTemplateName());

    return {designData, sectionData, contactInformation, previewURL, sizingData };
}

async function submitForm() {
    let pdfFinished = false;
    if (validateForm()) {
        const { designData, sectionData, contactInformation, previewURL, sizingData } = await gatherSectionInformation(sectionsConfig);
        document.getElementById('loadingOverlay2').style.display = 'block';
        document.body.style.cursor = 'progress';

        await delay(100);

        pdfFinished = await createPdf(designData, sectionData, contactInformation, previewURL, sizingData);
        if(pdfFinished){
            if(contactInformation.priority.includes("Yes")){
                alert("Design has successfully submitted. A customer service representative will reach out to you within 1-2 business days. Thank you!");
            }
            else{
                alert("Uniform customization is complete. Feel free to send the pdf to customer_service@fttf.com whenever you are ready with your order. Thank you!");
            }
            window.location.reload(true);
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

