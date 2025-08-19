const splitOutLines = (input, maxWidth, font, fontSize) => {
  // Replace newline characters with spaces to avoid encoding issues
  input = input.replace(/\n/g, ' ');

  const lines = [];
  let lastWhitespaceIdx = input.length;

  while (lastWhitespaceIdx > 0) {
    const line = input.substring(0, lastWhitespaceIdx);
    const width = font.widthOfTextAtSize(line, fontSize);
    if (width < maxWidth) {
      lines.push(line);
      input = input.substring(lastWhitespaceIdx).trim();
      lastWhitespaceIdx = input.length;
    } else {
      lastWhitespaceIdx = line.lastIndexOf(' ');
    }
  }

  if (input.length > 0) {
    lines.push(input);
  }

  return lines;
};


function lastIndexOfWhitespace(str) {
  return str.search(/\s+$/);
}

function toTitleCase(text) {
  return text
    .split(' ') // Split the text into words by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter
    .join(' '); // Rejoin the words with spaces
}



function convertSvgToPng(svgContent) {
  return new Promise((resolve, reject) => {
    const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.crossOrigin = "anonymous"; // Handle CORS issues
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url); // Cleanup the temporary URL
      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = (error) => {
      URL.revokeObjectURL(url); // Cleanup the temporary URL
      reject(error);
    };

    img.src = url;
  });
}

function convertRgbStringToPdfLibColor(rgbString) {

  if(rgbString.includes('black')){
    rgbString = 'rgb(0, 0, 0)';
  }
  else if (rgbString.includes('white')){
    rgbString = 'rgb(255, 255, 255)';
  }

  // Extract numeric values using a regular expression
  const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    const [_, r, g, b] = match.map(Number); // Convert string matches to numbers
    return {
      red: r / 255,
      green: g / 255,
      blue: b / 255,
    };
  } else {
    throw new Error(`Invalid RGB string format: ${rgbString}`);
  }
}


async function createFrontPage(pdfDoc, pageTitle, imageLogoUrl, designData, imagePreviewURL, customerInformation, dateCreated, designName) {
  const { rgb, StandardFonts, PDFName, PDFString } = PDFLib;
  const page = pdfDoc.addPage([792, 612]); // Standard Letter size in points

  const frontColor = convertRgbStringToPdfLibColor(designData.frontColor);
  const trimColor = convertRgbStringToPdfLibColor(designData.trimColor);
  const backColor = convertRgbStringToPdfLibColor(designData.backColor);

  // Load fonts
  let helveticaFont, helveticaBoldFont;
  try {
    helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  } catch (error) {
    console.error('Error embedding fonts:', error);
    throw error;
  }

  // Load and embed the logo image
  let pngLogoImage;
  try {
    const svgImageBytes = await fetchWithTimeout(imageLogoUrl, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl = await convertSvgToPng(svgImageBytes);

    // Embed the PNG in the PDF
    const pngData = await fetch(pngDataUrl).then(res => res.arrayBuffer());
    pngLogoImage = await pdfDoc.embedPng(pngData);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Load and embed the logo image
  let pngFTTFLogoImage;
  try {
    const svgImageBytes2 = await fetchWithTimeout(`${window.shopifyAssetPaths.logos.whiteValance}`, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl2 = await convertSvgToPng(svgImageBytes2);

    // Embed the PNG in the PDF
    const pngData2 = await fetch(pngDataUrl2).then(res => res.arrayBuffer());
    pngFTTFLogoImage = await pdfDoc.embedPng(pngData2);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Load and embed the logo image
  let pngNordLogoImage;
  try {
    const svgImageBytes3 = await fetchWithTimeout(document.getElementById("NordLogo").src, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl3 = await convertSvgToPng(svgImageBytes3);

    // Embed the PNG in the PDF
    const pngData3 = await fetch(pngDataUrl3).then(res => res.arrayBuffer());
    pngNordLogoImage = await pdfDoc.embedPng(pngData3);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  let pngPreviewImage;
  try {
    const imagePreviewBytes = await fetchWithTimeout(imagePreviewURL, 10000).then(res => res.arrayBuffer());
    pngPreviewImage = await pdfDoc.embedPng(imagePreviewBytes);
  } catch (error) {
    console.error('Error embedding preview image:', error);
    throw error;
  }

  let pngRUNLogoImage;
  try {
    const imagePreviewBytes2 = await fetchWithTimeout(`${window.shopifyAssetPaths.logos.LegendLogo}`, 10000).then(res => res.arrayBuffer());
    pngRUNLogoImage = await pdfDoc.embedPng(imagePreviewBytes2);
  } catch (error) {
    console.error('Error embedding preview image:', error);
    throw error;
  }

  // Draw a gradient rectangle
  const gradientHeight = 110;
  const gradientWidth = 792;
  const gradientX = 0;
  const gradientY = page.getHeight() - 110;
  const gradientSteps = 1000;
  const startRed = 1; // Full red
  const startGreen = 0; // No green
  const startBlue = 0; // No blue

  const endRed = 0; // No red
  const endGreen = 0; // No green
  const endBlue = 0; // No blue (black)

  for (let i = 0; i < gradientSteps; i++) {
    // Calculate the interpolated red, green, and blue values
    const red = startRed - ((startRed - endRed) * i) / gradientSteps;
    const green = startGreen - ((startGreen - endGreen) * i) / gradientSteps;
    const blue = startBlue - ((startBlue - endBlue) * i) / gradientSteps;

    // Draw the rectangle with the interpolated color
    page.drawRectangle({
      x: gradientX + (i * gradientWidth) / gradientSteps,
      y: gradientY,
      width: gradientWidth / gradientSteps,
      height: gradientHeight,
      color: rgb(red, green, blue),
    });
  }

  page.drawRectangle({
    x: 140,
    y: page.getHeight() - 110,
    width: 2,
    height: 110,
    color: rgb(0, 0, 0),
  });

  page.drawRectangle({
    x: 2,
    y: page.getHeight() - 610,
    width: 140,
    height: 100,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
  });

  page.drawRectangle({
    x: 45,
    y: page.getHeight() - 485,
    width: 25,
    height: 25,
    borderColor: rgb(0, 0, 0),
    borderWidth: 0.5,
    color: rgb(trimColor.red, trimColor.green, trimColor.blue),
  });

  page.drawRectangle({
    x: 45,
    y: page.getHeight() - 450,
    width: 25,
    height: 25,
    borderColor: rgb(0, 0, 0),
    borderWidth: 0.5,
    color: rgb(backColor.red, backColor.green, backColor.blue),
  });

  page.drawRectangle({
    x: 45,
    y: page.getHeight() - 415,
    width: 25,
    height: 25,
    borderColor: rgb(0, 0, 0),
    borderWidth: 0.5,
    color: rgb(frontColor.red, frontColor.green, frontColor.blue),
  });

  // Add the image to the PDF
  const pngDims = pngLogoImage.scale(0.25); // Adjust the scale as needed
  page.drawImage(pngLogoImage, {
    x: 10,
    y: page.getHeight() - pngDims.height - 10, // Adjust positioning as needed
    width: pngDims.width,
    height: pngDims.height,
  });

  // Add the image to the PDF
  const pngDims2 = pngFTTFLogoImage.scale(.4); // Adjust the scale as needed
  page.drawImage(pngFTTFLogoImage, {
    x: 525,
    y: page.getHeight() - pngDims2.height - 20, // Adjust positioning as needed
    width: pngDims2.width,
    height: pngDims2.height,
  });

  // Function to create a link annotation
  function createImageLinkAnnotation(page, uri, rect) {
    // Create and register the annotation
    const annotation = page.doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: rect, // Position and size of the link area
      Border: [0, 0, 0], // No border
      A: {
        Type: 'Action',
        S: 'URI',
        URI: uri, // Target URL
      },
    });

    // Return the registered annotation
    return page.doc.context.register(annotation);
  }

  // Add a link annotation to the image area
  const linkForImage = createImageLinkAnnotation(
    page,
    'https://firsttothefinish.com',
    [525, page.getHeight() - pngDims2.height - 20, 525 + pngDims2.width, page.getHeight() - pngDims2.height - 20 + pngDims2.height]
  );

  // Attach the annotation to the page
  const existingImageAnnots = page.node.get(PDFName.of('Annots')) || page.doc.context.obj([]);
  const updatedImageAnnots = page.doc.context.obj([...existingImageAnnots.array, linkForImage]);
  page.node.set(PDFName.of('Annots'), updatedImageAnnots);

  // Add the image to the PDF
  const pngDims3 = pngRUNLogoImage.scale(0.035); // Adjust the scale as needed
  page.drawImage(pngRUNLogoImage, {
    x: 630,
    y: page.getHeight() - pngDims3.height - 530, // Adjust positioning as needed
    width: pngDims3.width,
    height: pngDims3.height,
  });

  const pngDims4 = pngNordLogoImage.scale(0.2); // Adjust the scale as needed
  page.drawImage(pngNordLogoImage, {
    x: 20,
    y: page.getHeight() - pngDims4.height - 530, // Adjust positioning as needed
    width: pngDims4.width,
    height: pngDims4.height,
  });

  const pngPreviewDims = pngPreviewImage.scale(.5); // Adjust the scale as needed
  const pageWidth = page.getWidth(); // Get the width of the page
  const imageWidth = pngPreviewDims.width; // Get the width of the image
  const xPosition = ((pageWidth - imageWidth) / 2) + 60; // Calculate the x position to center the image

  page.drawImage(pngPreviewImage, {
    x: xPosition + 10,
    y: page.getHeight() - pngPreviewDims.height - 120, // Adjust positioning as needed
    width: pngPreviewDims.width,
    height: pngPreviewDims.height,
  });

  page.drawText(`Customer:`, {
    x: 145,
    y: page.getHeight() - 15,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(`Email:`, {
    x: 145,
    y: page.getHeight() - 30,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(`Design Name:`, {
    x: 145,
    y: page.getHeight() - 45,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText('Created On:', {
    x: 145,
    y: page.getHeight() - 60,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(customerInformation.userName, {
    x: 215,
    y: page.getHeight() - 15,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(customerInformation.email, {
    x: 190,
    y: page.getHeight() - 30,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(designName, {
    x: 240,
    y: page.getHeight() - 45,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(dateCreated, {
    x: 227,
    y: page.getHeight() - 60,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  // Draw the section header
  page.drawText(`${pageTitle}`, {
    x: 10,
    y: page.getHeight() - 140,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  const formattedDescription = toTitleCase(itDescript);

  // Draw the item description
  page.drawText(formattedDescription, {
    x: 145,
    y: page.getHeight() - 100,
    size: 20,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(`FRONT`, {
    x: 317.5,
    y: page.getHeight() - 500,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`BACK`, {
    x: 572.5,
    y: page.getHeight() - 500,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`FRONT LEFT CHEST - 1.5" WIDE`, {
    x: 10,
    y: page.getHeight() - 520,
    size: 8,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`LOGO POSITION`, {
    x: 10,
    y: page.getHeight() - 508,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Trim`, {
    x: 10,
    y: page.getHeight() - 477.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Back`, {
    x: 10,
    y: page.getHeight() - 442.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Front`, {
    x: 10,
    y: page.getHeight() - 407.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`SINGLET COLORS:`, {
    x: 10,
    y: page.getHeight() - 385,
    size: 12,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(designData.trimColorName, {
    x: 75,
    y: page.getHeight() - 477.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(designData.backColorName, {
    x: 75,
    y: page.getHeight() - 442.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(designData.frontColorName, {
    x: 75,
    y: page.getHeight() - 407.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  if(designData.templateName === 'No Design'){
    page.drawText(`TEMPLATE:`, {
      x: 10,
      y: page.getHeight() - 370,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(designData.templateName, {
      x: 80,
      y: page.getHeight() - 370,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  }
  else{
    const color1 = convertRgbStringToPdfLibColor(designData.templateColor1);
    const color2 = convertRgbStringToPdfLibColor(designData.templateColor2);
    const color3 = convertRgbStringToPdfLibColor(designData.templateColor3);
    
    page.drawText(`Color 3`, {
      x: 10,
      y: page.getHeight() - 350,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(`Color 2`, {
      x: 10,
      y: page.getHeight() - 315,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(`Color 1`, {
      x: 10,
      y: page.getHeight() - 280,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(`TEMPLATE COLORS:`, {
      x: 10,
      y: page.getHeight() - 257.5,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(designData.templateColor1Name, {
      x: 85,
      y: page.getHeight() - 350,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(designData.templateColor2Name, {
      x: 85,
      y: page.getHeight() - 315,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(designData.templateColor3Name, {
      x: 85,
      y: page.getHeight() - 280,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    page.drawRectangle({
      x: 55,
      y: page.getHeight() - 357.5,
      width: 25,
      height: 25,
      borderColor: rgb(0, 0, 0),
      borderWidth: 0.5,
      color: rgb(color1.red, color1.green, color1.blue),
    });
  
    page.drawRectangle({
      x: 55,
      y: page.getHeight() - 322.5,
      width: 25,
      height: 25,
      borderColor: rgb(0, 0, 0),
      borderWidth: 0.5,
      color: rgb(color2.red, color2.green, color2.blue),
    });
  
    page.drawRectangle({
      x: 55,
      y: page.getHeight() - 287.5,
      width: 25,
      height: 25,
      borderColor: rgb(0, 0, 0),
      borderWidth: 0.5,
      color: rgb(color3.red, color3.green, color3.blue),
    });

    page.drawText(`TEMPLATE:`, {
      x: 10,
      y: page.getHeight() - 242.5,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(designData.templateName, {
      x: 80,
      y: page.getHeight() - 242.5,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  }

}

async function createPage(pdfDoc, frontSectionData, backSectionData, imageLogoUrl){
  const { rgb, StandardFonts, PDFName, PDFString } = PDFLib;
  const page = pdfDoc.addPage([792, 612]); // Standard Letter size in points

  // Load fonts
  let helveticaFont, helveticaBoldFont;
  try {
    helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  } catch (error) {
    console.error('Error embedding fonts:', error);
    throw error;
  }

  // Load and embed the logo image
  let pngLogoImage;
  try {
    const svgImageBytes = await fetchWithTimeout(imageLogoUrl, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl = await convertSvgToPng(svgImageBytes);

    // Embed the PNG in the PDF
    const pngData = await fetch(pngDataUrl).then(res => res.arrayBuffer());
    pngLogoImage = await pdfDoc.embedPng(pngData);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Load and embed the logo image
  let pngFTTFLogoImage;
  try {
    const svgImageBytes2 = await fetchWithTimeout(`${window.shopifyAssetPaths.logos.whiteValance}`, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl2 = await convertSvgToPng(svgImageBytes2);

    // Embed the PNG in the PDF
    const pngData2 = await fetch(pngDataUrl2).then(res => res.arrayBuffer());
    pngFTTFLogoImage = await pdfDoc.embedPng(pngData2);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Draw a gradient rectangle
  const gradientHeight = 110;
  const gradientWidth = 792;
  const gradientX = 0;
  const gradientY = page.getHeight() - 110;
  const gradientSteps = 1000;
  const startRed = 1; // Full red
  const startGreen = 0; // No green
  const startBlue = 0; // No blue

  const endRed = 0; // No red
  const endGreen = 0; // No green
  const endBlue = 0; // No blue (black)

  for (let i = 0; i < gradientSteps; i++) {
    // Calculate the interpolated red, green, and blue values
    const red = startRed - ((startRed - endRed) * i) / gradientSteps;
    const green = startGreen - ((startGreen - endGreen) * i) / gradientSteps;
    const blue = startBlue - ((startBlue - endBlue) * i) / gradientSteps;

    // Draw the rectangle with the interpolated color
    page.drawRectangle({
      x: gradientX + (i * gradientWidth) / gradientSteps,
      y: gradientY,
      width: gradientWidth / gradientSteps,
      height: gradientHeight,
      color: rgb(red, green, blue),
    });
  }

  page.drawRectangle({
    x: 140,
    y: page.getHeight() - 110,
    width: 2,
    height: 110,
    color: rgb(0, 0, 0),
  });

  // Add the image to the PDF
  const pngDims = pngLogoImage.scale(0.25); // Adjust the scale as needed
  page.drawImage(pngLogoImage, {
    x: 10,
    y: page.getHeight() - pngDims.height - 10, // Adjust positioning as needed
    width: pngDims.width,
    height: pngDims.height,
  });

  // Add the image to the PDF
  const pngDims2 = pngFTTFLogoImage.scale(.4); // Adjust the scale as needed
  page.drawImage(pngFTTFLogoImage, {
    x: 525,
    y: page.getHeight() - pngDims2.height - 20, // Adjust positioning as needed
    width: pngDims2.width,
    height: pngDims2.height,
  });

  // Function to create a link annotation
  function createImageLinkAnnotation(page, uri, rect) {
    // Create and register the annotation
    const annotation = page.doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: rect, // Position and size of the link area
      Border: [0, 0, 0], // No border
      A: {
        Type: 'Action',
        S: 'URI',
        URI: uri, // Target URL
      },
    });

    // Return the registered annotation
    return page.doc.context.register(annotation);
  }

  // Add a link annotation to the image area
  const linkForImage = createImageLinkAnnotation(
    page,
    'https://firsttothefinish.com',
    [525, page.getHeight() - pngDims2.height - 20, 525 + pngDims2.width, page.getHeight() - pngDims2.height - 20 + pngDims2.height]
  );

  // Attach the annotation to the page
  const existingImageAnnots = page.node.get(PDFName.of('Annots')) || page.doc.context.obj([]);
  const updatedImageAnnots = page.doc.context.obj([...existingImageAnnots.array, linkForImage]);
  page.node.set(PDFName.of('Annots'), updatedImageAnnots);

  page.drawText(`Design Details`, {
    x: 150,
    y: page.getHeight() - 70,
    size: 40,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  const frontDetails = [
    { label: 'Text:', value: 'N/A', start: 90, end: 300 },
    { label: 'Font:', value: 'N/A', start: 90, end: 300 },
    { label: 'Effect:', value: 'N/A', start: 100, end: 300 },
    { label: 'Color:', value: 'N/A', start: 97.5, end: 300 },
    { label: 'Outline:', value: 'N/A', start: 110, end: 300 },
    { label: 'Notes:', value: 'N/A', start: 100, end: 300 },
  ];

  let frontTextColor;
  let frontTextOutlineColor;
  
  const front = frontSectionData[0]; // Assuming you want the first matching section
  frontDetails.forEach(detail => {
  if (detail.label === 'Notes:') {
      detail.value = front.notes || detail.value;
    } else if (front.text !== '') {
      const mapping = {
        'Text:': 'text',
        'Font:': 'fontStyle',
        'Effect:': 'fontEffect',
        'Color:': 'fontColorName',
        'Outline:': 'outlineColorName'
      };
      const infoKey = mapping[detail.label];
      if (infoKey) {
        detail.value = front[infoKey] || detail.value;
      }

      frontTextColor = convertRgbStringToPdfLibColor(frontSectionData[0].fontColor);
      if(frontSectionData[0].outlineColor.includes('rgb')){
        frontTextOutlineColor = convertRgbStringToPdfLibColor(frontSectionData[0].outlineColor);
      }
    }
  });
  
  let yPos = page.getHeight() - 175; // Starting Y position
  frontDetails.forEach(detail => {
    page.drawText(detail.label, {
      x: 40,
      y: yPos,
      size: 18,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    // Conditionally draw the rectangle for 'Color' and 'Outline'
    if ((detail.label === 'Color:' && detail.value !== 'N/A') || (detail.label === 'Outline:' && detail.value !== 'N/A' && detail.value !== 'None')) {
      const colorKey = detail.label === 'Color:' ? frontTextColor : frontTextOutlineColor;
      const colorValue = colorKey;
      console.log(colorKey);

      page.drawRectangle({
        x: detail.start + 10, // Adjust the X position to the right of the value text
        y: yPos - 7.5, // Align with the text vertically
        width: 25,
        height: 25,
        borderColor: rgb(0, 0, 0),
        borderWidth: 0.5,
        color: rgb(colorValue.red, colorValue.green, colorValue.blue),
      });
      detail.start += 45;
      detail.end -= 45;
    }

    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 16);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start, // Adjusted X position for values
        y: yPos,
        size: 16,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      yPos -= 25; // Line height
    });

    yPos -= 5; // Additional space between entries
  });

  let backTextColor;
  let backTextOutlineColor;

  const backDetails = [
    { label: 'Text:', value: 'N/A', start: 470, end: 300 },
    { label: 'Font:', value: 'N/A', start: 470, end: 300 },
    { label: 'Effect:', value: 'N/A', start: 480, end: 300 },
    { label: 'Color:', value: 'N/A', start: 477.5, end: 300 },
    { label: 'Outline:', value: 'N/A', start: 490, end: 300 },
    { label: 'Notes:', value: 'N/A', start: 480, end: 300 },
  ];
  
  const back = backSectionData[0]; // Assuming you want the first matching section
  backDetails.forEach(detail => {
  if (detail.label === 'Notes:') {
      detail.value = back.notes || detail.value;
    } else if (back.text !== '') {
      const mapping = {
        'Text:': 'text',
        'Font:': 'fontStyle',
        'Effect:': 'fontEffect',
        'Color:': 'fontColorName',
        'Outline:': 'outlineColorName'
      };
      const infoKey = mapping[detail.label];
      if (infoKey) {
        detail.value = back[infoKey] || detail.value;
      }

      backTextColor = convertRgbStringToPdfLibColor(backSectionData[0].fontColor);
      if(backSectionData[0].outlineColor.includes('rgb')){
        backTextOutlineColor = convertRgbStringToPdfLibColor(backSectionData[0].outlineColor);
      }
    }
  });
  
  yPos = page.getHeight() - 175; // Starting Y position
  backDetails.forEach(detail => {
    page.drawText(detail.label, {
      x: 420,
      y: yPos,
      size: 18,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
  
    // Conditionally draw the rectangle for 'Color' and 'Outline'
    if ((detail.label === 'Color:' && detail.value !== 'N/A') || (detail.label === 'Outline:' && detail.value !== 'N/A' && detail.value !== 'None')) {
      const colorKey = detail.label === 'Color:' ? backTextColor : backTextOutlineColor;
      const colorValue = colorKey;
      console.log(colorKey);

      page.drawRectangle({
        x: detail.start + 10, // Adjust the X position to the right of the value text
        y: yPos - 7.5, // Align with the text vertically
        width: 25,
        height: 25,
        borderColor: rgb(0, 0, 0),
        borderWidth: 0.5,
        color: rgb(colorValue.red, colorValue.green, colorValue.blue),
      });
      detail.start += 45;
      detail.end -= 45;
    }

    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 16);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start, // Adjusted X position for values
        y: yPos,
        size: 16,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      yPos -= 25; // Line height
    });
    yPos -= 5; // Additional space between entries
  });
  

  page.drawText(`Front:`, {
    x: 20,
    y: page.getHeight() - 150,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Back:`, {
    x: 400,
    y: page.getHeight() - 150,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });
}

async function createImagePage(pdfDoc, pageTitle, images = []) {
  const { rgb, StandardFonts } = PDFLib;
  let page = pdfDoc.addPage([612, 792]); // Standard Letter size in points

  // Load fonts
  let helveticaBoldFont;
  try {
    helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  } catch (error) {
    console.error('Error embedding bold font:', error);
    throw error;
  }

  // Draw the header text
  page.drawText(`${pageTitle} Uniform Image(s)`, {
    x: 20,
    y: page.getHeight() - 40,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 20, y: page.getHeight() - 45 },
    end: { x: 590, y: page.getHeight() - 45 },
    thickness: 2,
    color: rgb(0, 0, 0),
  });

  // Draw the images
  let yPos = page.getHeight() - 70;
  let xPos = 20;
  const maxWidth = 150;
  const imageHeightLimit = 40; // Adjust spacing as needed
  const pageHeightLimit = 70; // Adjust for the bottom margin

  let currentRowMaxHeight = 0;

  for (const imageUrl of images) {
    let imageBytes, image;
    try {
      if (imageUrl.endsWith('.png') || imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg')) {
        imageBytes = await fetchWithTimeout(imageUrl, 10000).then(res => res.arrayBuffer());
        image = await pdfDoc.embedPng(imageBytes);
      } else {
        imageBytes = await convertImageToPNG(imageUrl);
        image = await pdfDoc.embedPng(imageBytes);
      }
    } catch (error) {
      console.error('Error embedding image:', error);
      continue; // Skip this image and continue with others
    }

    const originalWidth = image.width;
    const originalHeight = image.height;

    const aspectRatio = originalHeight / originalWidth;
    const imageWidth = maxWidth;
    const imageHeight = imageWidth * aspectRatio;

    // Check if the image fits in the current page, if not create a new page
    if (yPos - imageHeight - imageHeightLimit < pageHeightLimit) {
      page = pdfDoc.addPage([612, 792]);
      yPos = page.getHeight() - 70;
      xPos = 20;
      currentRowMaxHeight = 0;

      page.drawText(`${pageTitle} Uniform Image(s)`, {
        x: 20,
        y: page.getHeight() - 40,
        size: 24,
        font: helveticaBoldFont,
        color: rgb(0, 0, 0),
      });

      page.drawLine({
        start: { x: 20, y: page.getHeight() - 45 },
        end: { x: 590, y: page.getHeight() - 45 },
        thickness: 2,
        color: rgb(0, 0, 0),
      });
    }

    page.drawImage(image, {
      x: xPos,
      y: yPos - imageHeight - 20,
      width: imageWidth,
      height: imageHeight,
    });

    // Update the maximum height of the current row
    currentRowMaxHeight = Math.max(currentRowMaxHeight, imageHeight);

    if (xPos < 400) {
      xPos += 200;
    } else {
      xPos = 20;
      yPos -= currentRowMaxHeight + imageHeightLimit; // Adjust yPos based on the tallest image in the row
      currentRowMaxHeight = 0; // Reset for the next row
    }
  }

  return page;
}

async function createContactPage(pdfDoc, imageLogoUrl, contactInformation, dateCreated, designName){
  const { rgb, StandardFonts, PDFName, PDFString } = PDFLib;
  const page = pdfDoc.addPage([792, 612]); // Standard Letter size in points

  // Load fonts
  let helveticaFont, helveticaBoldFont;
  try {
    helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  } catch (error) {
    console.error('Error embedding fonts:', error);
    throw error;
  }

  // Load and embed the logo image
  let pngLogoImage;
  try {
    const svgImageBytes = await fetchWithTimeout(imageLogoUrl, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl = await convertSvgToPng(svgImageBytes);

    // Embed the PNG in the PDF
    const pngData = await fetch(pngDataUrl).then(res => res.arrayBuffer());
    pngLogoImage = await pdfDoc.embedPng(pngData);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Load and embed the logo image
  let pngFTTFLogoImage;
  try {
    const svgImageBytes2 = await fetchWithTimeout(`${window.shopifyAssetPaths.logos.whiteValance}`, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl2 = await convertSvgToPng(svgImageBytes2);

    // Embed the PNG in the PDF
    const pngData2 = await fetch(pngDataUrl2).then(res => res.arrayBuffer());
    pngFTTFLogoImage = await pdfDoc.embedPng(pngData2);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Draw a gradient rectangle
  const gradientHeight = 110;
  const gradientWidth = 792;
  const gradientX = 0;
  const gradientY = page.getHeight() - 110;
  const gradientSteps = 1000;
  const startRed = 1; // Full red
  const startGreen = 0; // No green
  const startBlue = 0; // No blue

  const endRed = 0; // No red
  const endGreen = 0; // No green
  const endBlue = 0; // No blue (black)

  for (let i = 0; i < gradientSteps; i++) {
    // Calculate the interpolated red, green, and blue values
    const red = startRed - ((startRed - endRed) * i) / gradientSteps;
    const green = startGreen - ((startGreen - endGreen) * i) / gradientSteps;
    const blue = startBlue - ((startBlue - endBlue) * i) / gradientSteps;

    // Draw the rectangle with the interpolated color
    page.drawRectangle({
      x: gradientX + (i * gradientWidth) / gradientSteps,
      y: gradientY,
      width: gradientWidth / gradientSteps,
      height: gradientHeight,
      color: rgb(red, green, blue),
    });
  }

  page.drawRectangle({
    x: 140,
    y: page.getHeight() - 110,
    width: 2,
    height: 110,
    color: rgb(0, 0, 0),
  });

  // Add the image to the PDF
  const pngDims = pngLogoImage.scale(0.25); // Adjust the scale as needed
  page.drawImage(pngLogoImage, {
    x: 10,
    y: page.getHeight() - pngDims.height - 10, // Adjust positioning as needed
    width: pngDims.width,
    height: pngDims.height,
  });

  // Add the image to the PDF
  const pngDims2 = pngFTTFLogoImage.scale(.4); // Adjust the scale as needed
  page.drawImage(pngFTTFLogoImage, {
    x: 525,
    y: page.getHeight() - pngDims2.height - 20, // Adjust positioning as needed
    width: pngDims2.width,
    height: pngDims2.height,
  });

  // Function to create a link annotation
  function createImageLinkAnnotation(page, uri, rect) {
    // Create and register the annotation
    const annotation = page.doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: rect, // Position and size of the link area
      Border: [0, 0, 0], // No border
      A: {
        Type: 'Action',
        S: 'URI',
        URI: uri, // Target URL
      },
    });

    // Return the registered annotation
    return page.doc.context.register(annotation);
  }

  // Add a link annotation to the image area
  const linkForImage = createImageLinkAnnotation(
    page,
    'https://firsttothefinish.com',
    [525, page.getHeight() - pngDims2.height - 20, 525 + pngDims2.width, page.getHeight() - pngDims2.height - 20 + pngDims2.height]
  );

  // Attach the annotation to the page
  const existingImageAnnots = page.node.get(PDFName.of('Annots')) || page.doc.context.obj([]);
  const updatedImageAnnots = page.doc.context.obj([...existingImageAnnots.array, linkForImage]);
  page.node.set(PDFName.of('Annots'), updatedImageAnnots);

  page.drawText(`Other Information`, {
    x: 150,
    y: page.getHeight() - 70,
    size: 40,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  const customerDetails = [
    { label: 'Name:', value: 'N/A', start: 95, end: 300 },
    { label: 'Email:', value: 'N/A', start: 95, end: 300 },
    { label: 'Phone:', value: 'N/A', start: 102, end: 300 },
    { label: 'School/Club:', value: 'N/A', start: 153, end: 250 },
    { label: 'Address:', value: 'N/A', start: 120, end: 250 },
    { label: 'Design Name:', value: 'N/A', start: 160, end: 230 },
    { label: 'Ready to Order:', value: 'N/A', start: 180, end: 200 },
  ];
  
  const customer = contactInformation; // Assuming you want the first matching section
  console.log(customer);
  customerDetails.forEach(detail => {
      const mapping = {
        'Name:': 'userName',
        'Email:': 'email',
        'Phone:': 'phone',
        'School/Club:': 'schoolClub',
        'Design Name:': 'designName',
        'Ready to Order:': 'priority',
      };
      const infoKey = mapping[detail.label];
      if (infoKey) {
        detail.value = customer[infoKey] || detail.value;
      }
  });

  const addressDetail = customerDetails.find(detail => detail.label === 'Address:');
  addressDetail.value = `${customer.street}, ${customer.city} ${customer.state}, ${customer.zip}`;
  
  let yPos = page.getHeight() - 175; // Starting Y position
  customerDetails.forEach(detail => {
    page.drawText(detail.label, {
      x: 40,
      y: yPos,
      size: 18,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 16);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start, // Adjusted X position for values
        y: yPos,
        size: 16,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      yPos -= 25; // Line height
    });

    yPos -= 5; // Additional space between entries
  });

  page.drawText(`Customer Information:`, {
    x: 20,
    y: page.getHeight() - 150,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Disclaimer:`, {
    x: 400,
    y: page.getHeight() - 150,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  const disclaimer = `Please note that the design builder used to create your custom uniform provides a preliminary representation of your design. Logo placements, sizes, and colors are approximate and are not considered final. All designs will undergo a professional review and rework by our design team to ensure proper alignment, proportion, and compliance with production standards. You will receive a final proof for your review and approval before the production process begins. By approving the final proof, you confirm that all details meet your expectations. If you have any questions or specific requirements, please contact us before approving the final proof.`;
  yPos = page.getHeight() - 175;
   const disLines = splitOutLines(`${disclaimer}`, 350, helveticaFont, 16);
   disLines.forEach(line => {
    page.drawText(line, {
      x: 420, // Adjusted X position for values
      y: yPos,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    yPos -= 25; // Line height
  });
}

async function createSizingPage(pdfDoc, imageLogoUrl, sizingData, dateCreated, designName){
  const { rgb, StandardFonts, PDFName, PDFString } = PDFLib;
  const page = pdfDoc.addPage([792, 612]); // Standard Letter size in points

  // Load fonts
  let helveticaFont, helveticaBoldFont;
  try {
    helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  } catch (error) {
    console.error('Error embedding fonts:', error);
    throw error;
  }

  // Load and embed the logo image
  let pngLogoImage;
  try {
    const svgImageBytes = await fetchWithTimeout(imageLogoUrl, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl = await convertSvgToPng(svgImageBytes);

    // Embed the PNG in the PDF
    const pngData = await fetch(pngDataUrl).then(res => res.arrayBuffer());
    pngLogoImage = await pdfDoc.embedPng(pngData);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Load and embed the logo image
  let pngFTTFLogoImage;
  try {
    const svgImageBytes2 = await fetchWithTimeout(`${window.shopifyAssetPaths.logos.whiteValance}`, 10000).then(res => res.text());

    // Convert the SVG to a PNG
    const pngDataUrl2 = await convertSvgToPng(svgImageBytes2);

    // Embed the PNG in the PDF
    const pngData2 = await fetch(pngDataUrl2).then(res => res.arrayBuffer());
    pngFTTFLogoImage = await pdfDoc.embedPng(pngData2);
  } catch (error) {
    console.error('Error embedding logo image:', error);
    // Optionally use a placeholder image or skip this part
    throw error;
  }

  // Draw a gradient rectangle
  const gradientHeight = 110;
  const gradientWidth = 792;
  const gradientX = 0;
  const gradientY = page.getHeight() - 110;
  const gradientSteps = 1000;
  const startRed = 1; // Full red
  const startGreen = 0; // No green
  const startBlue = 0; // No blue

  const endRed = 0; // No red
  const endGreen = 0; // No green
  const endBlue = 0; // No blue (black)

  for (let i = 0; i < gradientSteps; i++) {
    // Calculate the interpolated red, green, and blue values
    const red = startRed - ((startRed - endRed) * i) / gradientSteps;
    const green = startGreen - ((startGreen - endGreen) * i) / gradientSteps;
    const blue = startBlue - ((startBlue - endBlue) * i) / gradientSteps;

    // Draw the rectangle with the interpolated color
    page.drawRectangle({
      x: gradientX + (i * gradientWidth) / gradientSteps,
      y: gradientY,
      width: gradientWidth / gradientSteps,
      height: gradientHeight,
      color: rgb(red, green, blue),
    });
  }

  page.drawRectangle({
    x: 140,
    y: page.getHeight() - 110,
    width: 2,
    height: 110,
    color: rgb(0, 0, 0),
  });

  // Add the image to the PDF
  const pngDims = pngLogoImage.scale(0.25); // Adjust the scale as needed
  page.drawImage(pngLogoImage, {
    x: 10,
    y: page.getHeight() - pngDims.height - 10, // Adjust positioning as needed
    width: pngDims.width,
    height: pngDims.height,
  });

  // Add the image to the PDF
  const pngDims2 = pngFTTFLogoImage.scale(.4); // Adjust the scale as needed
  page.drawImage(pngFTTFLogoImage, {
    x: 525,
    y: page.getHeight() - pngDims2.height - 20, // Adjust positioning as needed
    width: pngDims2.width,
    height: pngDims2.height,
  });

  // Function to create a link annotation
  function createImageLinkAnnotation(page, uri, rect) {
    // Create and register the annotation
    const annotation = page.doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: rect, // Position and size of the link area
      Border: [0, 0, 0], // No border
      A: {
        Type: 'Action',
        S: 'URI',
        URI: uri, // Target URL
      },
    });

    // Return the registered annotation
    return page.doc.context.register(annotation);
  }

  // Add a link annotation to the image area
  const linkForImage = createImageLinkAnnotation(
    page,
    'https://firsttothefinish.com',
    [525, page.getHeight() - pngDims2.height - 20, 525 + pngDims2.width, page.getHeight() - pngDims2.height - 20 + pngDims2.height]
  );

  // Attach the annotation to the page
  const existingImageAnnots = page.node.get(PDFName.of('Annots')) || page.doc.context.obj([]);
  const updatedImageAnnots = page.doc.context.obj([...existingImageAnnots.array, linkForImage]);
  page.node.set(PDFName.of('Annots'), updatedImageAnnots);

  page.drawText(`Uniform Sizing`, {
    x: 150,
    y: page.getHeight() - 70,
    size: 40,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  let singletSizing;
  if(itDescript.toUpperCase().includes("TANK")){
    singletSizing = [
      { label: 'Total Small:', value: '0' },
      { label: 'Total Medium:', value: '0' },
      { label: 'Total Large:', value: '0' },
      { label: 'Total X-Large:', value: '0' },
      { label: 'Total 2X-Large:', value: '0' },
      { label: 'Total 3X-Large:', value: '0' },
    ];
  }
  else{
    singletSizing = [
      { label: 'Total X-Small:', value: '0' },
      { label: 'Total Small:', value: '0' },
      { label: 'Total Medium:', value: '0' },
      { label: 'Total Large:', value: '0' },
      { label: 'Total X-Large:', value: '0' },
      { label: 'Total 2X-Large:', value: '0' },
      { label: 'Total 3X-Large:', value: '0' },
    ];
  }

  const singlets = sizingData.singletSizes;

  // Map labels to corresponding data keys
  const mapping = {
      'Total X-Small:': 'xs',
      'Total Small:': 'small',
      'Total Medium:': 'medium',
      'Total Large:': 'large',
      'Total X-Large:': 'xl',
      'Total 2X-Large:': '2xl',
      'Total 3X-Large:': '3xl',
  };

  // Set fixed positions
  const valueStartX = 180; // Fixed X position for values
  const maxLabelWidth = 160; // Adjust based on the longest label
  const labelEndX = valueStartX - 10; // Right-aligned position for labels

  // Assign values from sizingData
  singletSizing.forEach(detail => {
      const infoKey = mapping[detail.label];
      if (infoKey) {
          detail.value = singlets[infoKey] || detail.value;
      }
  });

  let yPos = page.getHeight() - 175; // Starting Y position

  singletSizing.forEach(detail => {
      // Measure text width for right alignment
      const labelWidth = helveticaBoldFont.widthOfTextAtSize(detail.label, 18);
      const labelX = labelEndX - labelWidth; // Position label to be right-aligned

      // Draw the label
      page.drawText(detail.label, {
          x: labelX,
          y: yPos,
          size: 18,
          font: helveticaBoldFont,
          color: rgb(0, 0, 0),
      });

      // Draw the value at a fixed X position
      page.drawText(`${detail.value}`, {
          x: valueStartX,
          y: yPos,
          size: 16,
          font: helveticaFont,
          color: rgb(0, 0, 0),
      });

      yPos -= 30; // Adjust spacing
  });


    page.drawText(`Singlet Sizing:`, {
      x: 20,
      y: page.getHeight() - 150,
      size: 24,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });


    const shortSizing = [
      { label: 'Total Small:', value: '0' },
      { label: 'Total Medium:', value: '0' },
      { label: 'Total Large:', value: '0' },
      { label: 'Total X-Large:', value: '0' },
      { label: 'Total 2X-Large:', value: '0' },
      { label: 'Total 3X-Large:', value: '0' },
  ];

  const shorts = sizingData.shortSizes;

  // Set fixed positions
  const valueStartX2 = 540; // Fixed X position for values
  const labelEndX2 = valueStartX2 - 10; // Right-aligned position for labels

  // Assign values from sizingData
  shortSizing.forEach(detail => {
      const infoKey = mapping[detail.label];
      if (infoKey) {
          detail.value = shorts[infoKey] || detail.value;
      }
  });

  yPos = page.getHeight() - 175; // Starting Y position

  if(document.getElementById("includeShortsCheckbox").checked){
    shortSizing.forEach(detail => {
        // Measure text width for right alignment
        const labelWidth = helveticaBoldFont.widthOfTextAtSize(detail.label, 18);
        const labelX = labelEndX2 - labelWidth; // Position label to be right-aligned

        // Draw the label
        page.drawText(detail.label, {
            x: labelX,
            y: yPos,
            size: 18,
            font: helveticaBoldFont,
            color: rgb(0, 0, 0),
        });

        // Draw the value at a fixed X position
        page.drawText(`${detail.value}`, {
            x: valueStartX2,
            y: yPos,
            size: 16,
            font: helveticaFont,
            color: rgb(0, 0, 0),
        });

        yPos -= 30; // Adjust spacing
    });

    page.drawText(`Short Design:`, {
      x: 400,
      y: yPos - 30,
      size: 24,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    let shortDesign = document.getElementById("shortDesign-notes").value.trim();
    if(shortDesign === ''){
      shortDesign = 'N/A';
    }
    const disLines = splitOutLines(`${shortDesign}`, 350, helveticaFont, 16);
    disLines.forEach(line => {
      page.drawText(line, {
        x: 420, // Adjusted X position for values
        y: yPos - 50,
        size: 16,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      yPos -= 25; // Line height
    });

  }
  else{
    const disclaimer = `Customer has opted out of wanting shorts included with this uniform design.`;
    yPos = page.getHeight() - 175;
    const disLines = splitOutLines(`${disclaimer}`, 350, helveticaFont, 16);
    disLines.forEach(line => {
      page.drawText(line, {
        x: 420, // Adjusted X position for values
        y: yPos,
        size: 16,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      yPos -= 25; // Line height
    });
  }
  page.drawText(`Short Sizing:`, {
    x: 400,
    y: page.getHeight() - 150,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });
}

async function createPdf(designData, sectionData, contactInformation, previewURL, sizingData) {
  const loadingMessage = document.getElementById('loading-message2');
  loadingMessage.innerText = 'Sorting sections...';
  await delay(100); // Small delay to force DOM update
  const pdfDoc = await PDFLib.PDFDocument.create();
  let pdfFinished = false;

  const frontSectionData = [];
  const backSectionData = [];

  // Sort sections into corresponding arrays
  sectionData.forEach(section => {
    if (section.sectionTitle.includes('Front')) {
      frontSectionData.push(section);
    } else if (section.sectionTitle.includes('Back')) {
      backSectionData.push(section);
    }
  });

  // Initialize image arrays
  const frontImages = frontSectionData.flatMap(section => section.images);
  const backImages = backSectionData.flatMap(section => section.images);
  const designName = contactInformation.designName;
  const dateCreated = getCurrentDate();

  let sides = [
    { overlayId: 'FrontOverlayCanvas', title: 'Front', sectionData: frontSectionData, sectionImages: frontImages },
    { overlayId: 'BackOverlayCanvas', title: 'Back', sectionData: backSectionData, sectionImages: backImages },
  ];

  loadingMessage.innerText = 'Loading images and fonts...';
  await delay(100); // Small delay to force DOM update
  await createFrontPage(pdfDoc, 'NOT A FINAL PROOF', `${window.shopifyAssetPaths.logos.NordLogo3}`, designData, previewURL, contactInformation, dateCreated, designName);
  await createPage(pdfDoc, frontSectionData, backSectionData, `${window.shopifyAssetPaths.logos.NordLogo3}`);
  for (const side of sides) {
    loadingMessage.innerText = `Processing ${side.title} side...`;
    await delay(100); // Small delay to force DOM update
    await createImagePage(pdfDoc, side.title, side.sectionImages);
  }
  await createContactPage(pdfDoc, `${window.shopifyAssetPaths.logos.NordLogo3}`, contactInformation, dateCreated, designName);
  await createSizingPage(pdfDoc, `${window.shopifyAssetPaths.logos.NordLogo3}`, sizingData, dateCreated, designName);
 
  loadingMessage.innerText = 'Saving PDF...';
  await delay(100); // Small delay to force DOM update
  const pdfBytes = await pdfDoc.save();

  loadingMessage.innerText = 'Preparing download...';
  await delay(100); // Small delay to force DOM update
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'uniform_customization.pdf';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);

  const base64String = await blobToBase64(blob);
  
  try {
    await fetch('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-faa2a6c7-c827-459c-b1dc-dd056fa15f60/api/uniform_email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: contactInformation.email,
        userName: contactInformation.userName,
        bcc: 'jasonkattenbraker@gmail.com',
        filename: 'uniform_customization.pdf',
        pdfData: base64String
      })
    });
  } catch (error) {
    console.error('Email send failed:', error); // Optional: log error for devs
  }
  
  // Always continue regardless of fetch success
  loadingMessage.innerText = 'Sending email...';
  await delay(100);
  loadingMessage.innerText = 'Design submitted successfully!';
  await delay(100); // Small delay to force DOM update
  pdfFinished = true;
  return pdfFinished;

}

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);

  return response;
}

async function convertImageToPNG(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsArrayBuffer(blob);
      }, 'image/png');
    };
    img.onerror = error => reject(error);
    img.src = imageUrl;
  });
}

function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  return `${month}/${day}/${year}`;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Strip off the "data:application/pdf;base64," prefix
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}