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
            document.getElementById('ValanceLogo').style.right = '5px';
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
            document.getElementById('ValanceLogo').style.right = '5px';
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
            document.getElementById('ValanceLogo').style.right = '5px';
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
            document.getElementById('ValanceLogo').style.right = '5px';
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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
    context.strokeStyle = "#5A5A5A";
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

function toggleTentSettingsMenu() {
    const menu = document.getElementById('tent-settings-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    updateTentPricing();
  }
  
  function saveTentSettings() {
    const size = getSelectedTentSize();
    const frame = document.querySelector('input[name="frame-type"]:checked').value;
    const walls = document.querySelector('input[name="walls-present"]:checked').value;
    const total = document.getElementById("total-price").innerText;
    
  
    console.log({ size, frame, walls, total });
    itDescript = size;
    if(walls === 'yes'){
        itType = true;
    }else{
        itType = false;
    }

    document.getElementById("pricing").textContent = `Total Price: ${total}`;
    higherPrice = total;

    let inputValues = getSectionInputValues(sectionsConfig);
    console.log(inputValues);

    initializeAllCanvases();
    if(itType){
        sectionsConfig = [
            {
                id: 'section1',
                name:'1',
                title: 'Front Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section2',
                name:'2',
                title: 'Front Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section3',
                name:'3',
                title: 'Back Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section4',
                name:'4',
                title: 'Back Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section5',
                name:'5',
                title: 'Back Wall',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section6',
                name:'6',
                title: 'Right Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section7',
                name:'7',
                title: 'Right Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section8',
                name:'8',
                title: 'Right Wall',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section9',
                name:'9',
                title: 'Left Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section10',
                name:'10',
                title: 'Left Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section11',
                name:'11',
                title: 'Left Wall',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            }    
        ];
    }
    else{
        sectionsConfig = [
            {
                id: 'section1',
                name:'1',
                title: 'Front Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section2',
                name:'2',
                title: 'Front Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section3',
                name:'3',
                title: 'Back Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section4',
                name:'4',
                title: 'Back Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section5',
                name:'5',
                title: 'Right Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section6',
                name:'6',
                title: 'Right Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section8',
                name:'7',
                title: 'Left Peak',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },
            {
                id: 'section9',
                name:'8',
                title: 'Left Valance',
                colorOptions: ['White', 'Black', 'Silver', 'Grey', 'Vegas Gold', 'Maroon', 'Cardinal', 'Red', 'Orange', 'Yellow Gold', 'Yellow', 'Kelly Green', 'Forest Green', 'Navy Blue', 'Royal Blue', 'Columbia Blue', 'Purple']
            },  
        ];
    }
    currentSection = 2;
    totalSections = sectionsConfig.length;
    generateSections(sectionsConfig);
    prevSection();
    updateOverlayPositionAndSize(sectionsConfig[currentSection-1].title);
    bindSectionEventListeners();
  
    document.getElementById('tent-settings-menu').style.display = 'none';
  }

  function getSectionInputValues(sectionsConfig) {
    const data = {};

    sectionsConfig.forEach(section => {
        const id = section.id;

        // 1. Color
        const radio = document.querySelector(`input[name="color-${id}"]:checked`);
        const customColor = document.getElementById(`selected-color-${id}`)?.textContent?.trim();
        const selectedColor = radio ? radio.value : customColor;

        // 2. Text input
        const text = document.getElementById(`text-input-${id}`)?.value?.trim() || '';

        // 3. Font style
        const fontButton = document.querySelector(`#font-style-${id}`)?.parentElement.querySelector('.custom-dropdown-button');
        const fontStyle = fontButton ? fontButton.getAttribute('value') : '';

        // 4. Font color
        const fontColorLabel = document.getElementById(`font-color-${id}`);
        const fontColor = fontColorLabel ? fontColorLabel.textContent.trim() : '';

        // 5. Outline color
        const outlineColorLabel = document.getElementById(`outline-color-${id}`);
        const outlineColor = outlineColorLabel ? outlineColorLabel.textContent.trim() : '';

        // 6. Art previews (get srcs from preview container)
        const artPreviewDiv = document.getElementById(`art-preview-${id}`);
        const artImages = [];
        if (artPreviewDiv) {
            const imgs = artPreviewDiv.querySelectorAll('img');
            imgs.forEach(img => {
                if (img.src) {
                    artImages.push(img.src);
                }
            });
        }

        // 7. Notes
        const notes = document.getElementById(`notes-${id}`)?.value?.trim() || '';

        // Store all values
        data[section.name] = {
            id: section.title,
            color: selectedColor,
            text,
            fontStyle,
            fontColor,
            outlineColor,
            artPreviewDiv,
            artImages,
            notes
        };
    });

    return data;
}

  
  function getSelectedTentSize() {
    const selected = document.querySelector('input[name="tent-size"]:checked');
    return selected ? selected.value : null;
  }
  
  function updateFramePricing() {
    const aluminumLabel = document.getElementById('frame-aluminum-label');
    const steelLabel = document.getElementById('frame-steel-label');
    const selectedFrame = document.querySelector('input[name="frame-type"]:checked').value;
  
    if (selectedFrame === 'steel') {
      aluminumLabel.innerText = 'Aluminum (-$100.00)';
      steelLabel.innerText = 'Steel';
    } else {
      aluminumLabel.innerText = 'Aluminum';
      steelLabel.innerText = 'Steel (+$100.00)';
    }
    updateTentPricing();
  }

  function updateTentPricing() {
    const selectedSize = document.querySelector('input[name="tent-size"]:checked').value;
    const hasWalls = document.querySelector('input[name="walls-present"]:checked').value === 'yes';
    const isSteel = document.querySelector('input[name="frame-type"]:checked').value === 'steel';
  
    const basePrice = tentPrices[selectedSize];
    const wallCost = hasWalls ? wallUpcharge[selectedSize] : 0;
    const frameCost = isSteel ? steelFrameUpcharge : 0;
    const total = basePrice + wallCost + frameCost;
  
    // Update Tent Size Labels
    for (const size in tentPrices) {
        const label = document.getElementById(`price-${size}`);
        if (!label) continue;
      
        const labelText = `${size.replace('x', "'x")}'`; // e.g., 10x10 => 10'x10'
        if (size === selectedSize) {
          label.textContent = `${labelText}`;
        } else {
          const diff = tentPrices[size] - tentPrices[selectedSize];
          label.textContent = `${labelText} ${formatPriceDiff(diff)}`;
        }
      }
      
  
    // Update Walls Label
    const yesLabel = document.getElementById('wall-yes-label');
    const noLabel = document.getElementById('wall-no-label');
    const diff = wallUpcharge[selectedSize];
  
    if (hasWalls) {
      yesLabel.textContent = "Yes";
      noLabel.textContent = `No ${formatPriceDiff(-diff)}`;
    } else {
      noLabel.textContent = "No";
      yesLabel.textContent = `Yes ${formatPriceDiff(diff)}`;
    }
  
    // Update Total
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
  }
  
  function formatPriceDiff(diff) {
    if (diff === 0) return '';
    const sign = diff > 0 ? '+' : '–';
    return `(${sign}$${Math.abs(diff).toFixed(2)})`;
  }
  
  
  const tentPrices = {
    "10x10": 899.00,
    "10x15": 1079.00,
    "10x20": 1349.00
  };
  const wallUpcharge = {
    "10x10": 270.00,
    "10x15": 450.00,
    "10x20": 540.00
  };
  const steelFrameUpcharge = 100.00;
  
  