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

async function createFrontPage(pdfDoc, pageTitle, imageLogoUrl, imagePreviewURL, customerInformation, dateCreated, tentName) {
  const { rgb, StandardFonts, PDFName, PDFString } = PDFLib;
  const page = pdfDoc.addPage([612, 792]); // Standard Letter size in points

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
    const imageLogoBytes = await fetchWithTimeout(imageLogoUrl, 10000).then(res => res.arrayBuffer());
    pngLogoImage = await pdfDoc.embedPng(imageLogoBytes);
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

  // Draw a gradient rectangle
  const gradientHeight = 110;
  const gradientWidth = 612;
  const gradientX = 0;
  const gradientY = page.getHeight() - 110;
  const gradientSteps = 500;
  const startGray = 0.7; // Light gray
  const endGray = 0.3; // Dark gray
  for (let i = 0; i < gradientSteps; i++) {
    const colorFactor = startGray - ((startGray - endGray) * i) / gradientSteps;
    page.drawRectangle({
      x: gradientX + (i * gradientWidth) / gradientSteps,
      y: gradientY,
      width: gradientWidth / gradientSteps,
      height: gradientHeight,
      color: rgb(colorFactor, colorFactor, colorFactor),
    });
  }

  // Draw a gradient rectangle
  const gradient2Height = 340;
  const gradient2Width = 612;
  const gradientX2 = 0;
  const gradientY2 = page.getHeight() - 792;
  const start2Gray = 0.7;
  const end2Gray = 0.3;
  for (let i = 0; i < gradientSteps; i++) {
    const colorFactor = start2Gray - ((start2Gray - end2Gray) * i) / gradientSteps;
    page.drawRectangle({
      x: gradientX2 + (i * gradient2Width) / gradientSteps,
      y: gradientY2,
      width: gradient2Width / gradientSteps,
      height: gradient2Height,
      color: rgb(colorFactor, colorFactor, colorFactor),
    });
  }

  // Draw box for header
  page.drawRectangle({
    x: 6,
    y: page.getHeight() - 70,
    width: 600,
    height: 2,
    color: rgb(0, 0, 0),
  });

  // Draw box for header
  page.drawRectangle({
    x: 0,
    y: page.getHeight() - 110,
    width: 612,
    height: 2,
    color: rgb(0, 0, 0),
  });

  // Draw box for description
  page.drawRectangle({
    x: 0,
    y: page.getHeight() - 453,
    width: 612,
    height: 3,
    color: rgb(0, 0, 0),
  });

  // Add the image to the PDF
  const pngDims = pngLogoImage.scale(0.1); // Adjust the scale as needed
  page.drawImage(pngLogoImage, {
    x: 10,
    y: page.getHeight() - pngDims.height - 20, // Adjust positioning as needed
    width: pngDims.width,
    height: pngDims.height,
  });

  const pngPreviewDims = pngPreviewImage.scale(.8); // Adjust the scale as needed
  const pageWidth = page.getWidth(); // Get the width of the page
  const imageWidth = pngPreviewDims.width; // Get the width of the image
  const xPosition = (pageWidth - imageWidth) / 2; // Calculate the x position to center the image

  page.drawImage(pngPreviewImage, {
    x: xPosition + 10,
    y: page.getHeight() - pngPreviewDims.height - 150, // Adjust positioning as needed
    width: pngPreviewDims.width,
    height: pngPreviewDims.height,
  });

  // Add the header text
  const linkX = 550;
  const linkY = page.getHeight() - 25;
  const linkWidth = 52;
  const linkHeight = 14;
  page.drawText('fttf.com', {
    x: linkX,
    y: linkY,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawLine({
    start: { x: linkX, y: linkY - 2 },
    end: { x: linkX + linkWidth, y: linkY - 2 },
    thickness: 1,
    color: rgb(1, 1, 1),
  });

  // Add a link annotation
  const createPageLinkAnnotation = (page, uri) =>
    page.doc.context.register(
      page.doc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [linkX, linkY, linkX + 40, linkY + 20],
        Border: [0, 0, 0],
        C: [0, 0, 0, 0],
        A: {
          Type: 'Action',
          S: 'URI',
          URI: PDFString.of(uri),
        },
      })
    );

  const link = createPageLinkAnnotation(page, 'https://firsttothefinish.com');
  page.node.set(PDFName.of('Annots'), pdfDoc.context.obj([link]));

  page.drawText(` Tent Name:`, {
    x: 200,
    y: page.getHeight() - 25,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText('Created On:', {
    x: 200,
    y: page.getHeight() - 50,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(tentName, {
    x: 280,
    y: page.getHeight() - 25,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(dateCreated, {
    x: 280,
    y: page.getHeight() - 50,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  // Draw the section header
  page.drawText(`${pageTitle}:`, {
    x: 10,
    y: page.getHeight() - 140,
    size: 30,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  // Draw the item description
  page.drawText(`${itDescript}`, {
    x: 15,
    y: page.getHeight() - 100,
    size: 20,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  // Draw the item price
  page.drawText(`Price:`, {
    x: 425,
    y: page.getHeight() - 100,
    size: 20,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  // Draw the item price
  page.drawText(`${higherPrice}`, {
    x: 480,
    y: page.getHeight() - 100,
    size: 20,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  // Draw the item description
  page.drawText(`Customer Information`, {
    x: 15,
    y: page.getHeight() - 480,
    size: 25,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawLine({
    start: { x: 15, y: page.getHeight() - 482},
    end: { x: 275, y: page.getHeight() - 482},
    thickness: 1,
    color: rgb(1, 1, 1),
  });

  const customerInfo = [
    { label: 'Email:', value: 'N/A', start: 80, end: 780 },
    { label: 'Customer Name:', value: 'N/A', start: 180, end: 780 },
    { label: 'Phone Number:', value: 'N/A', start: 168, end: 780 },
    { label: 'School/Club:', value: 'N/A', start: 143, end: 780 },
    { label: 'Street Address:', value: 'N/A', start: 168, end: 780 },
    { label: 'City:', value: 'N/A', start: 64, end: 780 },
    { label: 'State:', value: 'N/A', start: 76, end: 780 },
    { label: 'Zip Code:', value: 'N/A', start: 112, end: 780 },
    { label: 'Ready to Order:', value: 'N/A', start: 170, end: 780 },
  ];

  if (customerInformation) {
    customerInfo.forEach(detail => {
        const mapping = {
            'Email:': 'email',
            'Customer Name:': 'userName',
            'Phone Number:': 'phone',
            'School/Club:': 'schoolClub',
            'Street Address:': 'street',
            'City:': 'city',
            'State:': 'state',
            'Zip Code:': 'zip',
            'Ready to Order:': 'priority'
        };
        const infoKey = mapping[detail.label];
        if (infoKey && customerInformation[infoKey]) {
            detail.value = customerInformation[infoKey] || detail.value;
        }
    });
  }

  yPos = page.getHeight() - 500;
  customerInfo.forEach(detail => {
    page.drawText(detail.label, {
      x: 20,
      y: yPos - 10,
      size: 20,
      font: helveticaBoldFont,
      color: rgb(1, 1, 1),
    });
    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 12);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start,
        y: yPos - 10,
        size: 18,
        font: helveticaFont,
        color: rgb(1, 1, 1),
      });
      yPos -= 25; // Adjust line height as needed
    });
    yPos -= 5; // Additional space between entries
  });

}

async function createPage(pdfDoc, pageTitle, imageLogoUrl, imagePreviewURL, sectionData,  dateCreated, tentName) {
  const { rgb, StandardFonts, PDFName, PDFString } = PDFLib;
  const page = pdfDoc.addPage([612, 792]); // Standard Letter size in points

  const peakInfo = sectionData.filter(section => section.sectionTitle.includes("Peak"));
  const valanceInfo = sectionData.filter(section => section.sectionTitle.includes("Valance"));
  const wallInfo = sectionData.filter(section => section.sectionTitle.includes("Wall"));

  // Load fonts
  let helveticaFont, helveticaBoldFont;
  try {
    helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  } catch (error) {
    console.error('Error embedding fonts:', error);
    throw error;
  }

  // Load and embed the logo image with error handling and timeout
  let pngLogoImage;
  try {
    const imageLogoBytes = await fetchWithTimeout(imageLogoUrl, 10000).then(res => res.arrayBuffer());
    pngLogoImage = await pdfDoc.embedPng(imageLogoBytes);
  } catch (error) {
    console.error('Error embedding logo image:', error);
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

  // Draw a gradient rectangle
  const gradientHeight = 70;
  const gradientWidth = 612;
  const gradientX = 0;
  const gradientY = page.getHeight() - 70;
  const gradientSteps = 500;
  const startGray = 0.7; // Light gray
  const endGray = 0.3; // Dark gray
  for (let i = 0; i < gradientSteps; i++) {
    const colorFactor = startGray - ((startGray - endGray) * i) / gradientSteps;
    page.drawRectangle({
      x: gradientX + (i * gradientWidth) / gradientSteps,
      y: gradientY,
      width: gradientWidth / gradientSteps,
      height: gradientHeight,
      color: rgb(colorFactor, colorFactor, colorFactor),
    });
  }

  // Draw a gradient rectangle
  const gradient2Height = 340;
  const gradient2Width = 612;
  const gradientX2 = 0;
  const gradientY2 = page.getHeight() - 792;
  const start2Gray = 0.7;
  const end2Gray = 0.3;
  for (let i = 0; i < gradientSteps; i++) {
    const colorFactor = start2Gray - ((start2Gray - end2Gray) * i) / gradientSteps;
    page.drawRectangle({
      x: gradientX2 + (i * gradient2Width) / gradientSteps,
      y: gradientY2,
      width: gradient2Width / gradientSteps,
      height: gradient2Height,
      color: rgb(colorFactor, colorFactor, colorFactor),
    });
  }

  // Draw box for header
  page.drawRectangle({
    x: 0,
    y: page.getHeight() - 70,
    width: 612,
    height: 2,
    color: rgb(0, 0, 0),
  });

  // Draw box for description
  page.drawRectangle({
    x: 0,
    y: page.getHeight() - 453,
    width: 612,
    height: 3,
    color: rgb(0, 0, 0),
  });

  page.drawRectangle({
    x: 200,
    y: 0,
    width: 2,
    height: 340,
    color: rgb(0, 0, 0),
  });

  page.drawRectangle({
    x: 400,
    y: 0,
    width: 2,
    height: 340,
    color: rgb(0, 0, 0),
  });

  // Add the image to the PDF
  const pngDims = pngLogoImage.scale(0.1); // Adjust the scale as needed
  page.drawImage(pngLogoImage, {
    x: 10,
    y: page.getHeight() - pngDims.height - 20, // Adjust positioning as needed
    width: pngDims.width,
    height: pngDims.height,
  });

  const pngPreviewDims = pngPreviewImage.scale(0.75); // Adjust the scale as needed
  const pageWidth = page.getWidth(); // Get the width of the page
  const imageWidth = pngPreviewDims.width; // Get the width of the image
  const xPosition = (pageWidth - imageWidth) / 2; // Calculate the x position to center the image

  page.drawImage(pngPreviewImage, {
    x: xPosition,
    y: page.getHeight() - pngPreviewDims.height - 95, // Adjust positioning as needed
    width: pngPreviewDims.width,
    height: pngPreviewDims.height,
  });

  // Add the header text
  const linkX = 550;
  const linkY = page.getHeight() - 25;
  const linkWidth = 52;
  const linkHeight = 14;
  page.drawText('fttf.com', {
    x: linkX,
    y: linkY,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawLine({
    start: { x: linkX, y: linkY - 2 },
    end: { x: linkX + linkWidth, y: linkY - 2 },
    thickness: 1,
    color: rgb(1, 1, 1),
  });

  // Add a link annotation
  const createPageLinkAnnotation = (page, uri) =>
    page.doc.context.register(
      page.doc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [linkX, linkY, linkX + 40, linkY + 20],
        Border: [0, 0, 0],
        C: [0, 0, 0, 0],
        A: {
          Type: 'Action',
          S: 'URI',
          URI: PDFString.of(uri),
        },
      })
    );

  const link = createPageLinkAnnotation(page, 'https://firsttothefinish.com');
  page.node.set(PDFName.of('Annots'), pdfDoc.context.obj([link]));

  page.drawText(` Tent Name:`, {
    x: 200,
    y: page.getHeight() - 25,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText('Created On:', {
    x: 200,
    y: page.getHeight() - 50,
    size: 14,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(tentName, {
    x: 280,
    y: page.getHeight() - 25,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(dateCreated, {
    x: 280,
    y: page.getHeight() - 50,
    size: 14,
    font: helveticaFont,
    color: rgb(1, 1, 1),
  });

  // Draw the section header
  page.drawText(`${pageTitle}:`, {
    x: 30,
    y: page.getHeight() - 110,
    size: 30,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  });

  // Placement of the description
  page.drawText('Peak', {
    x: 10,
    y: page.getHeight() - 480,
    size: 18,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawLine({
    start: { x: 10, y: page.getHeight() - 483 },
    end: { x: 10 + 43, y: page.getHeight() - 483 },
    thickness: 1,
    color: rgb(1, 1, 1),
  });

  const peakDetails = [ 
    { label: 'Color:', value: 'N/A', start: 62, end: 138 },
    { label: 'Text:', value: 'N/A', start: 55, end: 145 },
    { label: '  Font:', value: 'N/A', start: 64, end: 136 },
    { label: '  Color:', value: 'N/A', start: 70, end: 130 },
    { label: '  Outline:', value: 'N/A', start: 82, end: 118 },
    { label: 'Notes:', value: 'N/A', start: 64, end: 136 },
  ];

  if (peakInfo.length > 0) {
    const peak = peakInfo[0]; // Assuming you want the first matching section
    peakDetails.forEach(detail => {
        if (detail.label === 'Color:') {
            detail.value = peak.selectedColor || detail.value;
        } else if (detail.label === 'Notes:') {
            detail.value = peak.notes || detail.value;
        } else if (peak.text !== '') {
            const mapping = {
                'Text:': 'text',
                '  Font:': 'fontStyle',
                '  Color:': 'fontColor',
                '  Outline:': 'outlineColor'
            };
            const infoKey = mapping[detail.label];
            if (infoKey) {
                detail.value = peak[infoKey] || detail.value;
            }
        }
    });
  }

  let yPos = page.getHeight() - 500;
  peakDetails.forEach(detail => {
    page.drawText(detail.label, {
      x: 20,
      y: yPos,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(1, 1, 1),
    });
    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 12);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start,
        y: yPos,
        size: 12,
        font: helveticaFont,
        color: rgb(1, 1, 1),
      });
      yPos -= 16; // Adjust line height as needed
    });
    yPos -= 4; // Additional space between entries
  });

  page.drawText('Valance', {
    x: 210,
    y: page.getHeight() - 480,
    size: 18,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawLine({
    start: { x: 210, y: page.getHeight() - 483 },
    end: { x: 210 + 68, y: page.getHeight() - 483 },
    thickness: 1,
    color: rgb(1, 1, 1),
  });

  const valanceDetails = [
    { label: 'Color:', value: 'N/A', start: 262, end: 138 },
    { label: 'Text:', value: 'N/A', start: 255, end: 145 },
    { label: '  Font:', value: 'N/A', start: 264, end: 136 },
    { label: '  Color:', value: 'N/A', start: 270, end: 130 },
    { label: '  Outline:', value: 'N/A', start: 282, end: 118 },
    { label: 'Notes:', value: 'N/A', start: 264, end: 136 },
  ];

  if (valanceInfo.length > 0) {
    const valance = valanceInfo[0]; // Assuming you want the first matching section
    valanceDetails.forEach(detail => {
        if (detail.label === 'Color:') {
            detail.value = valance.selectedColor || detail.value;
        } else if (detail.label === 'Notes:') {
            detail.value = valance.notes || detail.value;
        } else if (valance.text !== '') {
            const mapping = {
                'Text:': 'text',
                '  Font:': 'fontStyle',
                '  Color:': 'fontColor',
                '  Outline:': 'outlineColor'
            };
            const infoKey = mapping[detail.label];
            if (infoKey) {
                detail.value = valance[infoKey] || detail.value;
            }
        }
    });
  }

  yPos = page.getHeight() - 500;
  valanceDetails.forEach(detail => {
    page.drawText(detail.label, {
      x: 220,
      y: yPos,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(1, 1, 1),
    });
    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 12);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start,
        y: yPos,
        size: 12,
        font: helveticaFont,
        color: rgb(1, 1, 1),
      });
      yPos -= 16; // Adjust line height as needed
    });
    yPos -= 4; // Additional space between entries
  });

  page.drawText('Wall', {
    x: 410,
    y: page.getHeight() - 480,
    size: 18,
    font: helveticaBoldFont,
    color: rgb(1, 1, 1),
  });

  page.drawLine({
    start: { x: 410, y: page.getHeight() - 483 },
    end: { x: 410 + 38, y: page.getHeight() - 483 },
    thickness: 1,
    color: rgb(1, 1, 1),
  });

  const wallDetails = [
    { label: 'Color:', value: 'N/A', start: 462, end: 138 },
    { label: 'Text:', value: 'N/A', start: 455, end: 145 },
    { label: '  Font:', value: 'N/A', start: 464, end: 136 },
    { label: '  Color:', value: 'N/A', start: 470, end: 130 },
    { label: '  Outline:', value: 'N/A', start: 482, end: 118 },
    { label: 'Notes:', value: 'N/A', start: 464, end: 136 },
  ];

  if (wallInfo.length > 0) {
    const wall = wallInfo[0]; // Assuming you want the first matching section
    wallDetails.forEach(detail => {
        if (detail.label === 'Color:') {
            detail.value = wall.selectedColor || detail.value;
        } else if (detail.label === 'Notes:') {
            detail.value = wall.notes || detail.value;
        } else if (wall.text !== '') {
            const mapping = {
                'Text:': 'text',
                '  Font:': 'fontStyle',
                '  Color:': 'fontColor',
                '  Outline:': 'outlineColor'
            };
            const infoKey = mapping[detail.label];
            if (infoKey) {
                detail.value = wall[infoKey] || detail.value;
            }
        }
    });
  }

  yPos = page.getHeight() - 500;
  wallDetails.forEach(detail => {
    page.drawText(detail.label, {
      x: 420,
      y: yPos,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(1, 1, 1),
    });
    const lines = splitOutLines(`${detail.value}`, detail.end, helveticaFont, 12);
    lines.forEach(line => {
      page.drawText(line, {
        x: detail.start,
        y: yPos,
        size: 12,
        font: helveticaFont,
        color: rgb(1, 1, 1),
      });
      yPos -= 16; // Adjust line height as needed
    });
    yPos -= 4; // Additional space between entries
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
  page.drawText(`${pageTitle} Tent Image(s)`, {
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

          page.drawText(`${pageTitle} Tent Image(s)`, {
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

async function createPdf(sectionData, contactInformation, previewURL) {
  const loadingMessage = document.getElementById('loading-message2');
  loadingMessage.innerText = 'Sorting sections...';
  await delay(100); // Small delay to force DOM update
  const pdfDoc = await PDFLib.PDFDocument.create();
  let pdfFinished = false;

  const frontSectionData = [];
  const backSectionData = [];
  const leftSectionData = [];
  const rightSectionData = [];

  // Sort sections into corresponding arrays
  sectionData.forEach(section => {
    if (section.sectionTitle.includes('Front')) {
        frontSectionData.push(section);
    } else if (section.sectionTitle.includes('Back')) {
        backSectionData.push(section);
    } else if (section.sectionTitle.includes('Left')) {
        leftSectionData.push(section);
    } else if (section.sectionTitle.includes('Right')) {
        rightSectionData.push(section);
    }
  });

  // Initialize image arrays
  const frontImages = frontSectionData.flatMap(section => section.images);
  const backImages = backSectionData.flatMap(section => section.images);
  const leftImages = leftSectionData.flatMap(section => section.images);
  const rightImages = rightSectionData.flatMap(section => section.images);
  const tentName = contactInformation.tentName;
  const dateCreated = getCurrentDate();

  let sides = [];
  if(hasWalls){
    sides = [
      { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, title: 'Front', sectionData: frontSectionData, sectionImages: frontImages },
      { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: 'BackWallCanvas', peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: 'BackWallTextOverlay', title: 'Back', sectionData: backSectionData, sectionImages: backImages },
      { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: 'RightWallCanvas', peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: 'RightWallTextOverlay', title: 'Right', sectionData: rightSectionData, sectionImages: rightImages },
      { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: 'LeftWallCanvas', peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: 'LeftWallTextOverlay', title: 'Left', sectionData: leftSectionData, sectionImages: leftImages }
    ];  
  }
  else{
    sides = [
      { peakId: 'FrontPeakCanvas', valanceId: 'FrontValanceCanvas', wallId: null, peakOverlayId: 'FrontPeakTextOverlay', valanceOverlayId: 'FrontValanceTextOverlay', wallOverlayId: null, title: 'Front', sectionData: frontSectionData, sectionImages: frontImages },
      { peakId: 'BackPeakCanvas', valanceId: 'BackValanceCanvas', wallId: null, peakOverlayId: 'BackPeakTextOverlay', valanceOverlayId: 'BackValanceTextOverlay', wallOverlayId: null, title: 'Back', sectionData: backSectionData, sectionImages: backImages },
      { peakId: 'RightPeakCanvas', valanceId: 'RightValanceCanvas', wallId: null, peakOverlayId: 'RightPeakTextOverlay', valanceOverlayId: 'RightValanceTextOverlay', wallOverlayId: null, title: 'Right', sectionData: rightSectionData, sectionImages: rightImages },
      { peakId: 'LeftPeakCanvas', valanceId: 'LeftValanceCanvas', wallId: null, peakOverlayId: 'LeftPeakTextOverlay', valanceOverlayId: 'LeftValanceTextOverlay', wallOverlayId: null, title: 'Left', sectionData: leftSectionData, sectionImages: leftImages }
    ]; 
  }
  
  loadingMessage.innerText = 'Loading images and fonts...';
  await delay(100); // Small delay to force DOM update
  await createFrontPage(pdfDoc, 'Tent Mockup', 'imgs/Tent Images/fttf black  logo for valnce TENT.png', previewURL, contactInformation, dateCreated, tentName);
  for (const side of sides) {
    loadingMessage.innerText = `Processing ${side.title} side...`;
    await delay(100); // Small delay to force DOM update
    const sideImage = await captureAndCombineSide(side);
    await createPage(pdfDoc, side.title, 'imgs/Tent Images/fttf black  logo for valnce TENT.png', sideImage, side.sectionData, dateCreated, tentName);
    await createImagePage(pdfDoc, side.title, side.sectionImages);
  }

  loadingMessage.innerText = 'Saving PDF...';
  await delay(100); // Small delay to force DOM update
  const pdfBytes = await pdfDoc.save();

  loadingMessage.innerText = 'Preparing download...';
  await delay(100); // Small delay to force DOM update
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tent_customization.pdf';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
  }, 0);

  const subjectLine = encodeURIComponent(`${contactInformation.userName}'s Custom Tent`);
  const recipientEmail = encodeURIComponent(contactInformation.email);
  const bccEmail = encodeURIComponent('customer_service@fttf.com'); // Set the BCC email here
  //if(contactInformation.priority.includes("Yes")){
      // Part 2: Send the Blob to the server to generate an email
      loadingMessage.innerText = 'Sending email...';
      await delay(100); // Small delay to force DOM update
      await fetch(`save-pdf.asp?subject=${subjectLine}&recipientEmail=${recipientEmail}&bccEmail=${bccEmail}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/pdf'
        },
        body: blob
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
  //}
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