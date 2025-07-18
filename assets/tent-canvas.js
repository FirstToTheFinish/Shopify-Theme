let size = 0;
let hasWalls = true;
function initializeAllCanvases() {
    if(itType){
        if(`${itDescript}`.includes('10x20')){
            initialize10x20PeakCanvas("FrontPeakCanvas", document.getElementById('FrontPeakCanvas').getContext('2d'));
            initialize10x20ValanceCanvas(document.getElementById('FrontValanceCanvas').getContext('2d'));
        
            initialize10x20PeakCanvas("BackPeakCanvas", document.getElementById('BackPeakCanvas').getContext('2d'));
            initialize10x20ValanceCanvas(document.getElementById('BackValanceCanvas').getContext('2d'));
            initialize10x20WallCanvas(document.getElementById('BackWallCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("RightPeakCanvas", document.getElementById('RightPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('RightValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('RightWallCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("LeftPeakCanvas", document.getElementById('LeftPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('LeftValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('LeftWallCanvas').getContext('2d'));

            document.getElementById('FrontPeakCanvas').style.marginLeft = '-60px';
            document.getElementById('FrontValanceCanvas').style.marginLeft = '-60px';
            document.getElementById('BackPeakCanvas').style.marginLeft = '-60px';
            document.getElementById('BackValanceCanvas').style.marginLeft = '-60px';
            document.getElementById('BackWallCanvas').style.marginLeft = '-60px';
            document.getElementById('ValanceLogo').style.right = '-75px';
            size = 20;
            
        }
        else if(`${itDescript}`.includes('10x15')){
            initialize10x15PeakCanvas("FrontPeakCanvas", document.getElementById('FrontPeakCanvas').getContext('2d'));
            initialize10x15ValanceCanvas(document.getElementById('FrontValanceCanvas').getContext('2d'));
        
            initialize10x15PeakCanvas("BackPeakCanvas", document.getElementById('BackPeakCanvas').getContext('2d'));
            initialize10x15ValanceCanvas(document.getElementById('BackValanceCanvas').getContext('2d'));
            initialize10x15WallCanvas(document.getElementById('BackWallCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("RightPeakCanvas", document.getElementById('RightPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('RightValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('RightWallCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("LeftPeakCanvas", document.getElementById('LeftPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('LeftValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('LeftWallCanvas').getContext('2d'));

            document.getElementById('FrontPeakCanvas').style.marginLeft = '15px';
            document.getElementById('FrontValanceCanvas').style.marginLeft = '15px';
            document.getElementById('BackPeakCanvas').style.marginLeft = '15px';
            document.getElementById('BackValanceCanvas').style.marginLeft = '15px';
            document.getElementById('BackWallCanvas').style.marginLeft = '15px';
            document.getElementById('ValanceLogo').style.right = '10px';
            size = 15;
        }
        else{
            initialize10x10PeakCanvas("FrontPeakCanvas", document.getElementById('FrontPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('FrontValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("BackPeakCanvas", document.getElementById('BackPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('BackValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('BackWallCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("RightPeakCanvas", document.getElementById('RightPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('RightValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('RightWallCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("LeftPeakCanvas", document.getElementById('LeftPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('LeftValanceCanvas').getContext('2d'));
            initialize10x10WallCanvas(document.getElementById('LeftWallCanvas').getContext('2d'));

            document.getElementById('FrontPeakCanvas').style.marginLeft = '90px';
            document.getElementById('FrontValanceCanvas').style.marginLeft = '90px';
            document.getElementById('BackPeakCanvas').style.marginLeft = '90px';
            document.getElementById('BackValanceCanvas').style.marginLeft = '90px';
            document.getElementById('BackWallCanvas').style.marginLeft = '90px';
            document.getElementById('ValanceLogo').style.right = '75px';
            size = 10;
        }
    }
    else{
        if(`${itDescript}`.includes('10x20')){
            initialize10x20PeakCanvas("FrontPeakCanvas", document.getElementById('FrontPeakCanvas').getContext('2d'));
            initialize10x20ValanceCanvas(document.getElementById('FrontValanceCanvas').getContext('2d'));
        
            initialize10x20PeakCanvas("BackPeakCanvas", document.getElementById('BackPeakCanvas').getContext('2d'));
            initialize10x20ValanceCanvas(document.getElementById('BackValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("RightPeakCanvas", document.getElementById('RightPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('RightValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("LeftPeakCanvas", document.getElementById('LeftPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('LeftValanceCanvas').getContext('2d'));

            document.getElementById('FrontPeakCanvas').style.marginLeft = '-60px';
            document.getElementById('FrontValanceCanvas').style.marginLeft = '-60px';
            document.getElementById('BackPeakCanvas').style.marginLeft = '-60px';
            document.getElementById('BackValanceCanvas').style.marginLeft = '-60px';
            document.getElementById('ValanceLogo').style.right = '-75px';
            size = 20;
            
        }
        else if(`${itDescript}`.includes('10x15')){
            initialize10x15PeakCanvas("FrontPeakCanvas", document.getElementById('FrontPeakCanvas').getContext('2d'));
            initialize10x15ValanceCanvas(document.getElementById('FrontValanceCanvas').getContext('2d'));
        
            initialize10x15PeakCanvas("BackPeakCanvas", document.getElementById('BackPeakCanvas').getContext('2d'));
            initialize10x15ValanceCanvas(document.getElementById('BackValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("RightPeakCanvas", document.getElementById('RightPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('RightValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("LeftPeakCanvas", document.getElementById('LeftPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('LeftValanceCanvas').getContext('2d'));

            document.getElementById('FrontPeakCanvas').style.marginLeft = '15px';
            document.getElementById('FrontValanceCanvas').style.marginLeft = '15px';
            document.getElementById('BackPeakCanvas').style.marginLeft = '15px';
            document.getElementById('BackValanceCanvas').style.marginLeft = '15px';
            document.getElementById('ValanceLogo').style.right = '10px';
            size = 15;
        }
        else{
            initialize10x10PeakCanvas("FrontPeakCanvas", document.getElementById('FrontPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('FrontValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("BackPeakCanvas", document.getElementById('BackPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('BackValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("RightPeakCanvas", document.getElementById('RightPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('RightValanceCanvas').getContext('2d'));
        
            initialize10x10PeakCanvas("LeftPeakCanvas", document.getElementById('LeftPeakCanvas').getContext('2d'));
            initialize10x10ValanceCanvas(document.getElementById('LeftValanceCanvas').getContext('2d'));

            document.getElementById('FrontPeakCanvas').style.marginLeft = '90px';
            document.getElementById('FrontValanceCanvas').style.marginLeft = '90px';
            document.getElementById('BackPeakCanvas').style.marginLeft = '90px';
            document.getElementById('BackValanceCanvas').style.marginLeft = '90px';
            document.getElementById('ValanceLogo').style.right = '75px';
            size = 10;
        }
        hasWalls = false;
    }
}

function initialize10x20PeakCanvas(canvasId, context) {
    const tentScaleFactor1 = 0.225;
    const peakTopWidth1 = 372; // mm
    const peakBottomWidth1 = 755; // mm
    const peakHeight1 = 227; // mm
    const mmToPx = 3.7795275591;
    const peakTopWidthPx1 = peakTopWidth1 * mmToPx * tentScaleFactor1;
    const peakBottomWidthPx1 = peakBottomWidth1 * mmToPx * tentScaleFactor1;
    const peakHeightPx1 = peakHeight1 * mmToPx * tentScaleFactor1;
    context.canvas.width = peakBottomWidthPx1;
    context.canvas.height = peakHeightPx1;
    const peakControlOffset1 = -105;

    context.beginPath();
    context.moveTo((context.canvas.width - peakTopWidthPx1) / 2, 0);
    context.lineTo((context.canvas.width + peakTopWidthPx1) / 2, 0);
    context.quadraticCurveTo(context.canvas.width + peakControlOffset1, peakHeightPx1 / 2, context.canvas.width, peakHeightPx1);
    context.lineTo(0, peakHeightPx1);
    context.quadraticCurveTo(-peakControlOffset1, peakHeightPx1 / 2, (context.canvas.width - peakTopWidthPx1) / 2, 0);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor1;
    context.strokeStyle = "#D0D0D0";
    context.stroke();

    const overlayId = canvasId.replace('Canvas', 'TextOverlay');
    const overlay = document.getElementById(overlayId);

    const clipPath = `M ${(context.canvas.width - peakTopWidthPx1) / 2},0 L ${(context.canvas.width + peakTopWidthPx1) / 2},0 Q ${context.canvas.width + peakControlOffset1},${peakHeightPx1 / 2} ${context.canvas.width},${peakHeightPx1} L 0,${peakHeightPx1} Q ${-peakControlOffset1},${peakHeightPx1 / 2} ${(context.canvas.width - peakTopWidthPx1) / 2},0 Z`;
    
    overlay.style.clipPath = `path('${clipPath}')`;
}

function initialize10x20ValanceCanvas(context) {
    const tentScaleFactor1 = 0.225;
    const valanceHeight = 45;
    const mmToPx = 3.7795275591;
    const valanceHeightPx = valanceHeight * mmToPx * tentScaleFactor1;
    const peakBottomWidth1 = 755; // mm
    const peakBottomWidthPx1 = peakBottomWidth1 * mmToPx * tentScaleFactor1;
    context.canvas.width = peakBottomWidthPx1;
    context.canvas.height = valanceHeightPx;

    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor1;
    context.strokeStyle = "#D0D0D0";
    context.stroke();
}

function initialize10x20WallCanvas(context) {
    const tentScaleFactor1 = 0.225;
    const wallHeight1 = 265; // mm
    const mmToPx = 3.7795275591;
    const wallHeightPx1 = wallHeight1 * mmToPx * tentScaleFactor1;
    const peakBottomWidth1 = 755; // mm
    const peakBottomWidthPx1 = peakBottomWidth1 * mmToPx * tentScaleFactor1;
    context.canvas.width = peakBottomWidthPx1;
    context.canvas.height = wallHeightPx1;

    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor1;
    context.strokeStyle = "#D0D0D0";
    context.stroke();
}

function initialize10x10PeakCanvas(canvasId, context) {
    const tentScaleFactor2 = 0.225;
    const triangleWidth = 400; // mm
    const triangleHeight = 227; // mm
    const mmToPx = 3.7795275591;
    const triangleWidthPx = triangleWidth * mmToPx * tentScaleFactor2;
    const triangleHeightPx = triangleHeight * mmToPx * tentScaleFactor2;
    context.canvas.width = triangleWidthPx;
    context.canvas.height = triangleHeightPx;
    const controlOffset = 65;

    context.beginPath();
    context.moveTo(context.canvas.width / 2, 0);
    context.quadraticCurveTo(context.canvas.width / 2 + controlOffset, triangleHeightPx / 2, context.canvas.width, triangleHeightPx);
    context.lineTo(0, triangleHeightPx);
    context.quadraticCurveTo(context.canvas.width / 2 - controlOffset, triangleHeightPx / 2, context.canvas.width / 2, 0);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor2;
    context.strokeStyle = "#D0D0D0";
    context.stroke();

    const overlayId = canvasId.replace('Canvas', 'TextOverlay');
    const overlay = document.getElementById(overlayId);

    const clipPath = `M ${context.canvas.width / 2},0 Q ${context.canvas.width / 2 + controlOffset},${triangleHeightPx / 2} ${context.canvas.width},${triangleHeightPx} L 0,${triangleHeightPx} Q ${context.canvas.width / 2 - controlOffset},${triangleHeightPx / 2} ${context.canvas.width / 2},0 Z`;

    overlay.style.clipPath = `path('${clipPath}')`;
}

function initialize10x10ValanceCanvas(context) {
    const tentScaleFactor2 = 0.225;
    const valanceHeight = 45;
    const mmToPx = 3.7795275591;
    const valanceHeightPx = valanceHeight * mmToPx * tentScaleFactor2;
    const triangleWidth = 400; // mm
    const triangleWidthPx = triangleWidth * mmToPx * tentScaleFactor2;
    context.canvas.width = triangleWidthPx;
    context.canvas.height = valanceHeightPx;

    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor2;
    context.strokeStyle = "#D0D0D0";
    context.stroke();
}

function initialize10x10WallCanvas(context) {
    const tentScaleFactor2 = 0.225;
    const wallHeight2 = 250; // mm
    const mmToPx = 3.7795275591;
    const wallHeightPx2 = wallHeight2 * mmToPx * tentScaleFactor2;
    const triangleWidth = 400; // mm
    const triangleWidthPx = triangleWidth * mmToPx * tentScaleFactor2;
    context.canvas.width = triangleWidthPx;
    context.canvas.height = wallHeightPx2;

    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor2;
    context.strokeStyle = "#D0D0D0";
    context.stroke();
}

function initialize10x15PeakCanvas(canvasId, context) {
    const tentScaleFactor3 = 0.225;
    const peakTopWidth2 = 210; // mm
    const peakBottomWidth2 = 565; // mm
    const peakHeight2 = 227; // mm
    const mmToPx = 3.7795275591;
    const peakTopWidthPx2 = peakTopWidth2 * mmToPx * tentScaleFactor3;
    const peakBottomWidthPx2 = peakBottomWidth2 * mmToPx * tentScaleFactor3;
    const peakHeightPx2 = peakHeight2 * mmToPx * tentScaleFactor3;
    context.canvas.width = peakBottomWidthPx2;
    context.canvas.height = peakHeightPx2;
    const peakControlOffset3 = -100;

    context.beginPath();
    context.moveTo((context.canvas.width - peakTopWidthPx2) / 2, 0);
    context.lineTo((context.canvas.width + peakTopWidthPx2) / 2, 0);
    context.quadraticCurveTo(context.canvas.width + peakControlOffset3, peakHeightPx2 / 2, context.canvas.width, peakHeightPx2);
    context.lineTo(0, peakHeightPx2);
    context.quadraticCurveTo(-peakControlOffset3, peakHeightPx2 / 2, (context.canvas.width - peakTopWidthPx2) / 2, 0);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor3;
    context.strokeStyle = "#D0D0D0";
    context.stroke();

    const overlayId = canvasId.replace('Canvas', 'TextOverlay');
    const overlay = document.getElementById(overlayId);

    const clipPath = `M ${(context.canvas.width - peakTopWidthPx2) / 2},0 L ${(context.canvas.width + peakTopWidthPx2) / 2},0 Q ${context.canvas.width + peakControlOffset3},${peakHeightPx2 / 2} ${context.canvas.width},${peakHeightPx2} L 0,${peakHeightPx2} Q ${-peakControlOffset3},${peakHeightPx2 / 2} ${(context.canvas.width - peakTopWidthPx2) / 2},0 Z`;
    
    overlay.style.clipPath = `path('${clipPath}')`;
}


function initialize10x15ValanceCanvas(context) {
    const tentScaleFactor3 = 0.225;
    const valanceHeight = 45;
    const mmToPx = 3.7795275591;
    const valanceHeightPx3 = valanceHeight * mmToPx * tentScaleFactor3;
    const peakBottomWidth2 = 565; // mm
    const peakBottomWidthPx2 = peakBottomWidth2 * mmToPx * tentScaleFactor3;
    context.canvas.width = peakBottomWidthPx2;
    context.canvas.height = valanceHeightPx3;

    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor3;
    context.strokeStyle = "#D0D0D0";
    context.stroke();
}

function initialize10x15WallCanvas(context) {
    const tentScaleFactor3 = 0.225;
    const wallHeight3 = 265; // mm
    const mmToPx = 3.7795275591;
    const wallHeightPx3 = wallHeight3 * mmToPx * tentScaleFactor3;
    const peakBottomWidth2 = 565; // mm
    const peakBottomWidthPx2 = peakBottomWidth2 * mmToPx * tentScaleFactor3;
    context.canvas.width = peakBottomWidthPx2;
    context.canvas.height = wallHeightPx3;

    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1 * tentScaleFactor3;
    context.strokeStyle = "#D0D0D0";
    context.stroke();
}

function showCanvasWithOverlay(mainCanvasId, ...overlayCanvasIds) {
    const mainCanvas = document.getElementById(mainCanvasId);
    mainCanvas.style.display = 'block';

    overlayCanvasIds.forEach(canvasId => {
        const canvas = document.getElementById(canvasId);
        if (canvasId.includes('Text')){
            canvas.style.display = 'flex';
        }
        else{
            canvas.style.display = 'block';    
        }
        
    });
}

function updateOverlayPositionAndSize(sectionTitle) {
    const combinedOverlayId = `${sectionTitle.replace(' ', '')}TextOverlay`;
    const combinedOverlay = document.getElementById(combinedOverlayId);
    const tentCanvas = document.getElementById(`${sectionTitle.replace(' ', '')}Canvas`);

    if (!combinedOverlay || !tentCanvas) {
        console.error(`Overlay or canvas not found for section: ${sectionTitle}`);
        return;
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
}