      //Neck and Side Strip Design
      function templateDesign6(context1, context2, fStartX, fStartY, bStartX, bStartY){
        //Step: 1 Side Stripes of Singlet Front and Back
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        
        context1.beginPath();
        context1.moveTo(fStartX, fStartY);
        
        // Calculate endpoint of the shoulder
        let endShoulderX = fStartX - 7 * mmToPx * Math.cos((-30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - 7 * mmToPx * Math.sin((-30 * Math.PI) / 180); // Y component
        
        context1.moveTo(endShoulderX, endShoulderY);
        context1.strokeStyle = "#000000"; // Black line
        context1.lineWidth = 0.1; // Line thickness
        
        context1.lineTo(endShoulderX, endShoulderY + 600);
        context1.lineTo(endShoulderX - 50, endShoulderY + 600);
        context1.lineTo(endShoulderX - 50, endShoulderY);
        context1.lineTo(endShoulderX, endShoulderY);
        
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        const neckDipDepth = 1.5 * 10 * mmToPx;
        const neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightEndShoulderX = endNeckX + 7 * mmToPx + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = endNeckY + 7 * mmToPx + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        context1.moveTo(rightEndShoulderX , rightEndShoulderY);
        context1.lineTo(rightEndShoulderX , rightEndShoulderY + 600);
        context1.lineTo(rightEndShoulderX + 50 , rightEndShoulderY + 600);
        context1.lineTo(rightEndShoulderX + 50 , rightEndShoulderY);
        context1.lineTo(rightEndShoulderX , rightEndShoulderY);
        
        //Step: 2 Back Side Stripes
        context1.moveTo(bStartX, bStartY);
        // Calculate endpoint of the shoulder
        endShoulderX = bStartX - 7 * mmToPx * Math.cos((-30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - 7 * mmToPx * Math.sin((-30 * Math.PI) / 180); // Y component
        
        context1.moveTo(endShoulderX, endShoulderY);
        context1.strokeStyle = "#000000"; // Black line
        context1.lineWidth = 0.1; // Line thickness
        
        context1.lineTo(endShoulderX, endShoulderY + 600);
        context1.lineTo(endShoulderX - 50, endShoulderY + 600);
        context1.lineTo(endShoulderX - 50, endShoulderY);
        context1.lineTo(endShoulderX, endShoulderY);
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightEndShoulderX = endNeckX + 7 * mmToPx + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = endNeckY + 7 * mmToPx + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        context1.moveTo(rightEndShoulderX , rightEndShoulderY);
        context1.lineTo(rightEndShoulderX , rightEndShoulderY + 600);
        context1.lineTo(rightEndShoulderX + 50 , rightEndShoulderY + 600);
        context1.lineTo(rightEndShoulderX + 50 , rightEndShoulderY);
        context1.lineTo(rightEndShoulderX , rightEndShoulderY);
        
        context1.stroke();
        context1.closePath();
        
        //Step: 3 Shoulder and Neck Stripe Front and Back
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        context2.strokeStyle = "#000000"; // Black line
        context2.lineWidth = 0.10; // Line thickness
        
        context2.moveTo(fStartX, fStartY);
        
        context2.moveTo(fStartX, fStartY + 40);
        context2.lineTo(fStartX  + 800, fStartY + 40);
        context2.lineTo(fStartX  + 800, fStartY - 40);
        context2.lineTo(fStartX, fStartY - 40);
        context2.lineTo(fStartX, fStartY + 40);
        
        context2.stroke();
        context2.closePath();
        
        
    }
    
    //3 Stripe Design
    function templateDesign5(context1, context2, canvasWidth, canvasHeight, fStartX, fStartY, bStartX, bStartY) {
        //Step: 1 Horizontal Stripes for first color
        const rectangleHeight = 10; // Height of each rectangle in pixels
        const spacing = 30; // Spacing between rectangles in pixels
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        // Loop over the canvas height, creating rectangles spanning the width of the canvas
        for (let y = 0; y < canvasHeight; y += rectangleHeight + spacing) {
            context1.rect(0, y, canvasWidth, rectangleHeight); // Rectangle spans full width of the canvas
            context1.stroke();
        }
        context1.closePath();
        
        //Step: 2 Horizontal Stripes for second color
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        
        // Loop over the canvas height, creating rectangles spanning the width of the canvas
        for (let y = 10; y < canvasHeight; y += rectangleHeight + spacing) {
            context2.rect(0, y, canvasWidth, rectangleHeight); // Rectangle spans full width of the canvas
            context2.stroke();
        }
        context2.closePath();
        
    }
    
    function seededRandom(seed) {
        var m = 0x80000000; // 2^31
        var a = 1103515245;
        var c = 12345;
        
        seed = seed % m;
        return function() {
            seed = (a * seed + c) % m;
            return seed / m;
        };
    }
    
    //Random Square Design
    function templateDesign8(context1, canvasWidth, canvasHeight, fStartX, fStartY, bStartX, bStartY) {
        //Step 1: Square Design "Random"
        const seed = 38197510052001;
        const squareMinSize = 6; // Minimum size of squares
        const squareMaxSize = 15; // Maximum size of squares
        const spacing = 7.5; // Space between squares
        const random = seededRandom(seed); // Create a random generator with a specific seed
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        
        // Loop over the canvas and generate squares
        let y = 50; // Initialize Y coordinate
        context1.beginPath();
        while (y < canvasHeight - 50) {
            let x = 50; // Initialize X coordinate
            while (x < canvasWidth) {
                // Generate random square size within the defined range
                const size = squareMinSize + Math.floor(random() * (squareMaxSize - squareMinSize + 1));
                
                // Draw the square
                context1.rect(x, y - size / 2, size, size); // Draw square
                
                x += size + spacing;
            }
            // Move to the next row, accounting for square size and spacing
            y += squareMaxSize + spacing;
        }
        context1.stroke();
        context1.closePath();
        
    }
    
    //Crossbody Stripe Design
    function templateDesign2(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
        //Step: 1 Vertical/Diagonal Stripes of Singlet Front and Back for first color
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        context1.moveTo(bStartX, bStartY);
        
        let endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        context1.moveTo(endShoulderX + 55, endShoulderY);
        context1.lineTo(endShoulderX + 55, endShoulderY + 650);
        context1.lineTo(endShoulderX + 62.5, endShoulderY + 650);
        context1.lineTo(endShoulderX + 62.5, endShoulderY);
        context1.lineTo(endShoulderX + 55, endShoulderY);
        
        const neckDipDepth = 1.5 * 10 * mmToPx;
        const neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        context1.moveTo(endNeckX - 55, endNeckY);
        context1.lineTo(endNeckX - 55, endNeckY + 650);
        context1.lineTo(endNeckX - 62.5, endNeckY + 650);
        context1.lineTo(endNeckX - 62.5, endNeckY);
        context1.lineTo(endNeckX - 55, endNeckY);
        
        context1.moveTo(fStartX, fStartY);
        
        endShoulderX = fStartX - 4.75 - 13 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY + 4.75 + 13 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
        context1.moveTo(endShoulderX, endShoulderY);
        context1.lineTo(endShoulderX + 392.5, endShoulderY + 515);
        context1.lineTo(endShoulderX + 385, endShoulderY + 515);
        context1.lineTo(endShoulderX - 7.5, endShoulderY);
        context1.lineTo(endShoulderX, endShoulderY);
        
        endShoulderX = fStartX - 36.75 - 13 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY + 36.75 + 13 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
        context1.moveTo(endShoulderX, endShoulderY);
        context1.lineTo(endShoulderX + 452.5, endShoulderY + 592.5);
        context1.lineTo(endShoulderX + 445, endShoulderY + 592.5);
        context1.lineTo(endShoulderX - 7.5, endShoulderY);
        context1.lineTo(endShoulderX, endShoulderY);
        
        
        context1.stroke();
        context1.closePath();
        
        //Step 2: Draw Stripes for second color
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        context2.moveTo(bStartX, bStartY);
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        context2.moveTo(endShoulderX + 62.5, endShoulderY);
        context2.lineTo(endShoulderX + 62.5, endShoulderY + 650);
        context2.lineTo(endShoulderX + 70, endShoulderY + 650);
        context2.lineTo(endShoulderX + 70, endShoulderY);
        context2.lineTo(endShoulderX + 62.5, endShoulderY);
        
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        context2.moveTo(endNeckX - 62.5, endNeckY);
        context2.lineTo(endNeckX - 62.5, endNeckY + 650);
        context2.lineTo(endNeckX - 70, endNeckY + 650);
        context2.lineTo(endNeckX - 70, endNeckY);
        context2.lineTo(endNeckX - 62.5, endNeckY);
        
        context2.moveTo(fStartX, fStartY);
        
        endShoulderX = fStartX - 9 - 13 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY + 9 + 13 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
        context2.moveTo(endShoulderX, endShoulderY);
        context2.lineTo(endShoulderX + 392.5, endShoulderY + 515);
        context2.lineTo(endShoulderX + 385, endShoulderY + 515);
        context2.lineTo(endShoulderX - 7.5, endShoulderY);
        context2.lineTo(endShoulderX, endShoulderY);
        
        endShoulderX = fStartX - 33 - 13 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY + 33 + 13 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
        context2.moveTo(endShoulderX, endShoulderY);
        context2.lineTo(endShoulderX + 452.5, endShoulderY + 592.5);
        context2.lineTo(endShoulderX + 445, endShoulderY + 592.5);
        context2.lineTo(endShoulderX - 7.5, endShoulderY);
        context2.lineTo(endShoulderX, endShoulderY);
        
        
        context2.stroke();
        context2.closePath();
        
        //Step 3: Draw Stripes for third color
        applyTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
        context3.beginPath();
        context3.moveTo(bStartX, bStartY);
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        context3.moveTo(endShoulderX + 70, endShoulderY);
        context3.lineTo(endShoulderX + 70, endShoulderY + 650);
        context3.lineTo(endShoulderX + 100, endShoulderY + 650);
        context3.lineTo(endShoulderX + 100, endShoulderY);
        context3.lineTo(endShoulderX + 70, endShoulderY);
        
        context3.moveTo(fStartX, fStartY);
        
        endShoulderX = fStartX - 14 - 13 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY + 14 + 13 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
        context3.moveTo(endShoulderX, endShoulderY);
        context3.lineTo(endShoulderX + 452.5, endShoulderY + 592.5);
        context3.lineTo(endShoulderX + 420, endShoulderY + 592.5);
        context3.lineTo(endShoulderX - 32.5, endShoulderY);
        context3.lineTo(endShoulderX, endShoulderY);
        
        context3.stroke();
        context3.closePath();
        
    }
    
    //Side Diamond Design
    function templateDesign3(context1, context2, fStartX, fStartY, bStartX, bStartY){
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        
        context1.beginPath();
        //Step 1: Draw first part of diamond shape designs
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let count = 0;
        let x = 60;
        let y = -15;
        let height = 375;
        
        while (y < height){
            
            while(count < 6){
                context1.moveTo(armholeEndX - x, armholeEndY + y);
                context1.lineTo(armholeEndX - x, armholeEndY + y - 3.5 * mmToPx);
                context1.lineTo(armholeEndX - x + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y - 3.5 * mmToPx + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX - x + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX - x, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 60;
            y = y - 50
            count = 0;
        }
        
        //Step 2: Clip and mirror on front side and repeat on to backside
        y = -15
        let offset = 405;
        while (y < height){
            
            while(count < 6){
                context1.moveTo(armholeEndX + x - offset, armholeEndY + y);
                context1.lineTo(armholeEndX + x - offset, armholeEndY + y - 3.5 * mmToPx);
                context1.lineTo(armholeEndX + x - offset - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y - 3.5 * mmToPx + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX + x - offset - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX + x - offset, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 60;
            y = y - 50
            count = 0;
        }
        
        //Step 3: Repeat and mirror pattern to backside
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        count = 0;
        x = 10;
        y = 30;
        offset = 402.5;
        height = 425;
        
        while (y < height){
            
            while(count < 6){
                context1.moveTo(armholeEndX - x - offset, armholeEndY + y);
                context1.lineTo(armholeEndX - x - offset, armholeEndY + y - 3.5 * mmToPx);
                context1.lineTo(armholeEndX - x - offset + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y - 3.5 * mmToPx + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX - x - offset + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX - x - offset, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 10;
            y = y - 50
            count = 0;
        }
        
        y = 30
        while (y < height){
            
            while(count < 6){
                context1.moveTo(armholeEndX + x, armholeEndY + y);
                context1.lineTo(armholeEndX + x, armholeEndY + y - 3.5 * mmToPx);
                context1.lineTo(armholeEndX + x - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y - 3.5 * mmToPx + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX + x - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context1.lineTo(armholeEndX + x , armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 10;
            y = y - 50
            count = 0;
        }
        
        
        context1.stroke();
        context1.closePath();
        
        
        //Step 4: Draw second part of diamond shape designs
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        
        count = 0;
        x = 60;
        y = -15;
        height = 375;
        offset = 405;
        while (y < height){
            
            while(count < 6){
                context2.moveTo(armholeEndX - x, armholeEndY + y);
                context2.lineTo(armholeEndX - x + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX - x + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX - x, armholeEndY + y + 2 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX - x, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 60;
            y = y - 50
            count = 0;
        }
        
        //Step 5: Mirror on front side
        y = -15
        while (y < height){
            
            while(count < 6){
                context2.moveTo(armholeEndX + x - offset, armholeEndY + y);
                context2.lineTo(armholeEndX + x - offset - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX + x - offset - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX + x - offset, armholeEndY + y + 2 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX + x - offset, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 60;
            y = y - 50
            count = 0;
        }
        
        //Step 6: Repeat and mirror pattern to backside
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        count = 0;
        x = 10;
        y = 30;
        offset = 402.5;
        height = 425;
        
        while (y < height){
            
            while(count < 6){
                context2.moveTo(armholeEndX + x, armholeEndY + y);
                context2.lineTo(armholeEndX + x - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX + x - 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX + x, armholeEndY + y + 2 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX + x, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 10;
            y = y - 50
            count = 0;
        }
        
        y = 30
        while (y < height){
            
            while(count < 6){
                context2.moveTo(armholeEndX - x - offset, armholeEndY + y);
                context2.lineTo(armholeEndX - x - offset + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX - x - offset + 3 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX - x - offset, armholeEndY + y + 2 * mmToPx * Math.sin((45 * Math.PI) / 180));
                context2.lineTo(armholeEndX - x - offset, armholeEndY + y);
                
                ++count;
                x = x - 12.5;
                y = y + 12.5;
            }
            x = 10;
            y = y - 50
            count = 0;
        }
        
        
        context2.stroke();
        context2.closePath();
        
        
    }
    
    //Several Crossbody Stripes Design
    function templateDesign10(context1, context2, fStartX, fStartY, bStartX, bStartY){
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        
        context1.beginPath();
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let count = 0;
        let x = 60;
        let y = 40;
        
        
        //Step 1: Draw frontside stripes
        let offset = 50;
        while(count < 4){
            context1.moveTo(armholeEndX + x - offset, armholeEndY + y);
            context1.lineTo(armholeEndX + x - offset, armholeEndY + y - 1.75 * mmToPx);
            context1.lineTo(armholeEndX + x - offset - 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y - 1.75 * mmToPx + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
            context1.lineTo(armholeEndX + x - offset - 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
            context1.lineTo(armholeEndX + x - offset, armholeEndY + y);
            ++count;
            y = y + 20;
        }
        y = y + 15
        context1.moveTo(armholeEndX + x - offset, armholeEndY + y);
        context1.lineTo(armholeEndX + x - offset, armholeEndY + y - 5.5 * mmToPx);
        context1.lineTo(armholeEndX + x - offset - 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y - 5.5 * mmToPx + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - offset - 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 140 * mmToPx * Math.sin((27.5 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - offset, armholeEndY + y);
        
        //Step 2: Draw backside stripes
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        count = 0;
        x = 60;
        y = 40;
        offset = 472.5;
        while(count < 4){
            context1.moveTo(armholeEndX + x - offset, armholeEndY + y);
            context1.lineTo(armholeEndX + x - offset, armholeEndY + y - 1.75 * mmToPx);
            context1.lineTo(armholeEndX + x - offset + 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y - 1.75 * mmToPx + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
            context1.lineTo(armholeEndX + x - offset + 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
            context1.lineTo(armholeEndX + x - offset, armholeEndY + y);
            ++count;
            y = y + 20;
        }
        y = y + 15
        context1.moveTo(armholeEndX + x - offset, armholeEndY + y);
        context1.lineTo(armholeEndX + x - offset, armholeEndY + y - 5.5 * mmToPx);
        context1.lineTo(armholeEndX + x - offset + 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y - 5.5 * mmToPx + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - offset + 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 140 * mmToPx * Math.sin((27.5 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - offset, armholeEndY + y);
        
        context1.stroke();
        context1.closePath();
        
        
        //Step 3: Draw frontside bottom color piece
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        
        context2.beginPath();
        
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        count = 0;
        x = 60;
        y = 40;
        offset = 50;
        while(count < 4){
            ++count;
            y = y + 20;
        }
        
        y = y + 15;
        context2.moveTo(armholeEndX + x - offset, armholeEndY + y);
        context2.lineTo(armholeEndX + x - offset - 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 140 * mmToPx * Math.sin((27.5 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - offset - 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 100 * mmToPx);
        context2.lineTo(armholeEndX + x - offset + 10 * mmToPx, armholeEndY + y + 100 * mmToPx);
        context2.lineTo(armholeEndX + x - offset, armholeEndY + y);
        
        
        
        //Step 4: Draw backside bottom color piece
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        count = 0;
        x = 60;
        y = 40;
        offset = 472.5;
        while(count < 4){
            ++count;
            y = y + 20;
        }
        y = y + 15
        context2.moveTo(armholeEndX + x - offset, armholeEndY + y);
        context2.lineTo(armholeEndX + x - offset + 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 140 * mmToPx * Math.sin((27.5  * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - offset + 140 * mmToPx * Math.cos((27.5  * Math.PI) / 180), armholeEndY + y + 100 * mmToPx);
        context2.lineTo(armholeEndX + x - offset - 10 * mmToPx, armholeEndY + y + 100 * mmToPx);
        context2.lineTo(armholeEndX + x - offset, armholeEndY + y);
        
        context2.stroke();
        context2.closePath();
        
        
    }
    
    function templateDesign7(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
        //Step: 1 First set of side shapes (outermost) frontside
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let x = 5;
        let y = 25;
        
        context1.moveTo(armholeEndX + x, armholeEndY + y);
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 65 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y + 58 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 230;
        context1.moveTo(armholeEndX + x, armholeEndY + y);
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 12 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 310;
        context1.moveTo(armholeEndX + x, armholeEndY + y);
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 50 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y + 43 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y);
        
        
        y = 25;
        x = 410;
        context1.moveTo(armholeEndX - x, armholeEndY + y);
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 65 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y + 58 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y);
        
        y = 230;
        context1.moveTo(armholeEndX - x, armholeEndY + y);
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 12 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y);
        
        y = 310;
        context1.moveTo(armholeEndX - x, armholeEndY + y);
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 50 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y + 43 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y);
        
        //Step 2: First set of side shapes (outermost) backside
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        x = 5;
        y = 25;
        
        context1.moveTo(armholeEndX + x, armholeEndY + y);
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 65 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y + 58 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 230;
        context1.moveTo(armholeEndX + x, armholeEndY + y);
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 12 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 310;
        context1.moveTo(armholeEndX + x, armholeEndY + y);
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x - 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 50 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y + 43 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX + x, armholeEndY + y);
        
        
        y = 25;
        x = 410;
        context1.moveTo(armholeEndX - x, armholeEndY + y);
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 65 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y + 58 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y);
        
        y = 230;
        context1.moveTo(armholeEndX - x, armholeEndY + y);
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 12 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y);
        
        y = 310;
        context1.moveTo(armholeEndX - x, armholeEndY + y);
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 7 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x + 15 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 50 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y + 43 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context1.lineTo(armholeEndX - x, armholeEndY + y);
        
        context1.stroke();
        context1.closePath();
        
        
        //Step 3: Second set of side shapes (innermost) frontside
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        
        x = -50;
        y = 50;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 8 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 67.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 9 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 4 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 87.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 10 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 107.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 11 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 6 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 130;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 33 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 28 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 255;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 24 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 19 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 365;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 45 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 40 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        x = -355;
        y = 50;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 8 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 67.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 9 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 4 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 87.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 10 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 107.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 11 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 6 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 130;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 33 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 28 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 255;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 24 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 19 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 365;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 45 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 40 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        
        //Step 4: Second set of side shapes (innermost) backside
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        
        x = -50;
        y = 50;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 8 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 67.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 9 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 4 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 87.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 10 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 107.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 11 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 6 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 130;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 33 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 28 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 255;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 24 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 19 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 365;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x - 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 45 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 40 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        x = -355;
        y = 50;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 8 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 3 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 67.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 9 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 4 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 87.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 10 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 107.5;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 11 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 6 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 130;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 33 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 28 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 255;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 24 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 19 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        y = 365;
        context2.moveTo(armholeEndX + x, armholeEndY + y);
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 5 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x + 12 * mmToPx * Math.cos((45 * Math.PI) / 180), armholeEndY + y + 45 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y + 40 * mmToPx * Math.sin((45 * Math.PI) / 180));
        context2.lineTo(armholeEndX + x, armholeEndY + y);
        
        context2.stroke();
        context2.closePath();
        
        
        //Step 3: Second set of side shapes (innermost) frontside
        applyTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
        context3.beginPath();
        
        context3.moveTo(bStartX + 100, bStartY);
        context3.lineTo(bStartX + 100, bStartY + 620);
        context3.lineTo(bStartX + 175, bStartY + 620);
        context3.lineTo(bStartX + 175, bStartY);
        context3.lineTo(bStartX + 100, bStartY);
        
        context3.stroke();
        context3.closePath();
    
    }
    
    //Feather Design
    function templateDesign4(context, fStartX, fStartY, bStartX, bStartY){
        const mmToPx = 3.7795275591; // Convert mm to pixels
        
        let baseX = fStartX + 135;
        let baseY = fStartY + 215;
        let shapeWidth = 20; // Spacing between shapes
        let rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        let shapeHeight = 105; // Fixed height for each shape
        let count = 0;
        let xOffset = 0; // Offset for each new shape
        
        // Begin the drawing path
        applyTankTopMask(context, fStartX, fStartY, bStartX, bStartY);
        context.beginPath();
        
        // Step 1: Draw bottom layer of feathers for frontside
        while (count < 7) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Move the origin to the bottom of the shape instead of the top
            context.translate(baseX + xOffset, baseY + shapeHeight);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(-rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.lineTo(-5 * mmToPx * Math.cos((-45 * Math.PI) / 180), -5 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(-25, -75); // Slanted line back towards the top
            context.quadraticCurveTo(-25, -95, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal offset for the next shape
            ++count;
            shapeWidth += 1;
            xOffset -= shapeWidth; // Move the next shape to the left
        }
        
        baseX = fStartX + 140;
        shapeWidth = 20;
        count = 0;
        xOffset = 0;
        while (count < 7) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Move the origin to the bottom of the shape instead of the top
            context.translate(baseX + xOffset, baseY + shapeHeight);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.lineTo(5 * mmToPx * Math.cos((-45 * Math.PI) / 180), -5 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(25, -75); // Slanted line back towards the top
            context.quadraticCurveTo(25, -95, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal offset for the next shape
            ++count;
            shapeWidth += 1;
            xOffset += shapeWidth; // Move the next shape to the left
        }
        
        // Step 2: Draw middle layer of feathers
        baseX = fStartX + 135;
        baseY = fStartY + 90;
        shapeWidth = 35; // Spacing between shapes
        shapeHeight = 120;
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        let baseYOffset = 1.5; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 6) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(-rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(-25, 10, -10 * mmToPx * Math.cos((-45 * Math.PI) / 180), -10 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(-37.5, -75); // Slanted line back towards the top
            context.quadraticCurveTo(-37.5, -110, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .15;
            baseYOffset += .5;
            xOffset -= shapeWidth; // Move the next feather to the left
        }
        
        baseX = fStartX + 140;
        shapeWidth = 35; // Spacing between shapes
        shapeHeight = 120;
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 1.5; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 6) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(25, 10, 10 * mmToPx * Math.cos((-45 * Math.PI) / 180), -10 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(37.5, -75); // Slanted line back towards the top
            context.quadraticCurveTo(37.5, -110, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .15;
            baseYOffset += .5;
            xOffset += shapeWidth; // Move the next feather to the left
        }
        
        //Step 3: Final Layer of feathers
        baseX = fStartX + 135;
        baseY = fStartY + -65;
        shapeWidth = 50; // Spacing between shapes
        shapeHeight = 150;
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 2; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 3) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(-rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(-35, 10, -13.75 * mmToPx * Math.cos((-40 * Math.PI) / 180), -13.75 * mmToPx * Math.sin((-40 * Math.PI) / 180)); // Diagonal line
            context.lineTo(-51, -100); // Slanted line back towards the top
            context.quadraticCurveTo(-51, -150, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .5;
            baseYOffset += 1.25;
            xOffset -= shapeWidth; // Move the next feather to the left
        }
        
        baseX = fStartX + 140;
        baseY = fStartY + -65;
        shapeWidth = 50; // Spacing between shapes
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 2; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 3) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(35, 10, 13.75 * mmToPx * Math.cos((-40 * Math.PI) / 180), -13.75 * mmToPx * Math.sin((-40 * Math.PI) / 180)); // Diagonal line
            context.lineTo(51, -100); // Slanted line back towards the top
            context.quadraticCurveTo(51, -150, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .5;
            baseYOffset += 1.25;
            xOffset += shapeWidth; // Move the next feather to the left
        }
        
        // Step 4: Repeat for backside
        baseX = bStartX + 135;
        baseY = bStartY + 215;
        shapeWidth = 20; // Spacing between shapes
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        shapeHeight = 105; // Fixed height for each shape
        count = 0;
        xOffset = 0; // Offset for each new shape
        while (count < 7) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Move the origin to the bottom of the shape instead of the top
            context.translate(baseX + xOffset, baseY + shapeHeight);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(-rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.lineTo(-5 * mmToPx * Math.cos((-45 * Math.PI) / 180), -5 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(-25, -75); // Slanted line back towards the top
            context.quadraticCurveTo(-25, -95, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal offset for the next shape
            ++count;
            shapeWidth += 1;
            xOffset -= shapeWidth; // Move the next shape to the left
        }
        
        baseX = bStartX + 140;
        shapeWidth = 20;
        count = 0;
        xOffset = 0;
        while (count < 7) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Move the origin to the bottom of the shape instead of the top
            context.translate(baseX + xOffset, baseY + shapeHeight);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.lineTo(5 * mmToPx * Math.cos((-45 * Math.PI) / 180), -5 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(25, -75); // Slanted line back towards the top
            context.quadraticCurveTo(25, -95, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal offset for the next shape
            ++count;
            shapeWidth += 1;
            xOffset += shapeWidth; // Move the next shape to the left
        }
        
        // Step 2: Draw middle layer of feathers
        baseX = bStartX + 135;
        baseY = bStartY + 90;
        shapeWidth = 35; // Spacing between shapes
        shapeHeight = 120;
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 1.5; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 6) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(-rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(-25, 10, -10 * mmToPx * Math.cos((-45 * Math.PI) / 180), -10 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(-37.5, -75); // Slanted line back towards the top
            context.quadraticCurveTo(-37.5, -110, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .15;
            baseYOffset += .5;
            xOffset -= shapeWidth; // Move the next feather to the left
        }
        
        baseX = bStartX + 140;
        shapeWidth = 35; // Spacing between shapes
        shapeHeight = 120;
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 1.5; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 6) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(25, 10, 10 * mmToPx * Math.cos((-45 * Math.PI) / 180), -10 * mmToPx * Math.sin((-45 * Math.PI) / 180)); // Diagonal line
            context.lineTo(37.5, -75); // Slanted line back towards the top
            context.quadraticCurveTo(37.5, -110, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .15;
            baseYOffset += .5;
            xOffset += shapeWidth; // Move the next feather to the left
        }
        
        //Step 3: Final Layer of feathers
        baseX = bStartX + 135;
        baseY = bStartY + -65;
        shapeWidth = 50; // Spacing between shapes
        shapeHeight = 150;
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 2; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 3) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(-rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(-35, 10, -13.75 * mmToPx * Math.cos((-40 * Math.PI) / 180), -13.75 * mmToPx * Math.sin((-40 * Math.PI) / 180)); // Diagonal line
            context.lineTo(-51, -100); // Slanted line back towards the top
            context.quadraticCurveTo(-51, -150, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .5;
            baseYOffset += 1.25;
            xOffset -= shapeWidth; // Move the next feather to the left
        }
        
        baseX = bStartX + 140;
        baseY = bStartY + -65;
        shapeWidth = 50; // Spacing between shapes
        count = 0;
        xOffset = 0; // Offset for each new shape
        rotationAngle = 7 * (Math.PI / 180); // Rotate by 7 degrees on each iteration
        baseYOffset = 2; // Vertical offset adjustment for making the feathers go further down
        
        while (count < 3) {
            // Save the current state of the canvas before rotating
            context.save();
            
            // Calculate the dynamic Y offset to push the feathers farther down
            let dynamicYOffset = baseYOffset * count;
            
            // Move the origin to the bottom of the shape, applying the dynamic offset to push it down
            context.translate(baseX + xOffset, baseY + shapeHeight + dynamicYOffset);
            
            // Rotate the context progressively to the left by 'rotationAngle * count'
            context.rotate(rotationAngle * count);
            
            // Draw the shape at the new rotated position
            context.moveTo(0, -shapeHeight); // Move to the top of the shape (inverted due to base alignment)
            context.lineTo(0, 0); // Draw the vertical line (from the top to the bottom)
            context.quadraticCurveTo(35, 10, 13.75 * mmToPx * Math.cos((-40 * Math.PI) / 180), -13.75 * mmToPx * Math.sin((-40 * Math.PI) / 180)); // Diagonal line
            context.lineTo(51, -100); // Slanted line back towards the top
            context.quadraticCurveTo(51, -150, 0, -shapeHeight); // Curve back to the top
            
            // Restore the canvas state to reset any transformations
            context.restore();
            
            // Increment the count and adjust the horizontal and vertical offset for the next shape
            ++count;
            shapeWidth += .5;
            baseYOffset += 1.25;
            xOffset += shapeWidth; // Move the next feather to the left
        }
        
        // Apply the stroke to draw the shapes
        context.lineWidth = 0.1;
        context.stroke();
        context.closePath();
        
    }
    
    function templateDesign1Mask(context1, fStartX, fStartY, bStartX, bStartY){
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let torsoLength = 0.4 * 10 * mmToPx; // 0.4 cm converted to pixels
        let torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians
        let torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
        let torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component
        
        const curveSpan = 10.5 * 10 * mmToPx;
        const curveEndX = torsoEndX; // Same X position as the start of the curve
        const curveEndY = torsoEndY + curveSpan;
        const inwardDip = 0.85 * 10 * mmToPx; 
        const curveControlX = torsoEndX - inwardDip; 
        const curveControlY = torsoEndY + curveSpan / 2; 
        const bottomSpan = 10.55 * 10 * mmToPx;
        const bottomDip = 0.75 * 10 * mmToPx;
        const bottomControlX = curveEndX - bottomSpan / 2;
        const bottomControlY = curveEndY + bottomDip;
        const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
        const bottomEndY = curveEndY; // End at the same Y level as the start
        const leftCurveSpan = 10.5 * 10 * mmToPx;
        const leftInwardDip = 0.85 * 10 * mmToPx; 
        const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
        const leftCurveEndY = bottomEndY - leftCurveSpan;
        const leftCurveControlX = bottomEndX + leftInwardDip;
        const leftCurveControlY = bottomEndY - leftCurveSpan / 2; 
        const leftTorsoLength = 0.40 * 10 * mmToPx; 
        const leftTorsoAngle = 100 * (Math.PI / 180);
        const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
        const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component
        context1.moveTo(armholeEndX, armholeEndY);
        context1.lineTo(torsoEndX, torsoEndY);
        context1.quadraticCurveTo(curveControlX, curveControlY, curveEndX, curveEndY);
        context1.quadraticCurveTo(endNeckX, endNeckY + 640 ,endNeckX + 10, endNeckY + 640);
        context1.bezierCurveTo(endNeckX, endNeckY + 350, endNeckX + 10, endNeckY + 300, torsoEndX, torsoEndY);
        
        context1.moveTo(bottomEndX, bottomEndY);
        context1.quadraticCurveTo(leftCurveControlX, leftCurveControlY, leftCurveEndX, leftCurveEndY);
        context1.bezierCurveTo(endShoulderX - 10, endShoulderY + 300, endShoulderX, endShoulderY + 350, endShoulderX - 10, endShoulderY + 640);
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        context1.moveTo(endShoulderX + 15, endShoulderY + 100);
        context1.lineTo(endShoulderX + 15, endShoulderY + 640);
        context1.lineTo(endShoulderX - 150, endShoulderY + 640);
        context1.lineTo(endShoulderX - 150, endShoulderY + 100);
        context1.lineTo(endShoulderX + 15, endShoulderY + 100);
        
        context1.moveTo(endNeckX - 15, endNeckY + 100);
        context1.lineTo(endNeckX - 15, endNeckY + 640);
        context1.lineTo(endNeckX + 150, endNeckY + 640);
        context1.lineTo(endNeckX + 150, endNeckY + 100);
        context1.lineTo(endNeckX - 15, endNeckY + 100);
        
        context1.lineWidth = 0.1;
        context1.stroke();
        context1.closePath();
        context1.clip();
        
    }
    
    function templateDesign01Mask(context1, fStartX, fStartY, bStartX, bStartY){
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let torsoLength = 0.4 * 10 * mmToPx; // 0.4 cm converted to pixels
        let torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians
        let torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
        let torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component
        
        const curveSpan = 10.5 * 10 * mmToPx;
        const curveEndX = torsoEndX; // Same X position as the start of the curve
        const curveEndY = torsoEndY + curveSpan;
        const inwardDip = 0.85 * 10 * mmToPx; 
        const curveControlX = torsoEndX - inwardDip; 
        const curveControlY = torsoEndY + curveSpan / 2; 
        const bottomSpan = 10.55 * 10 * mmToPx;
        const bottomDip = 0.75 * 10 * mmToPx;
        const bottomControlX = curveEndX - bottomSpan / 2;
        const bottomControlY = curveEndY + bottomDip;
        const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
        const bottomEndY = curveEndY; // End at the same Y level as the start
        const leftCurveSpan = 10.5 * 10 * mmToPx;
        const leftInwardDip = 0.85 * 10 * mmToPx; 
        const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
        const leftCurveEndY = bottomEndY - leftCurveSpan;
        const leftCurveControlX = bottomEndX + leftInwardDip;
        const leftCurveControlY = bottomEndY - leftCurveSpan / 2; 
        const leftTorsoLength = 0.40 * 10 * mmToPx; 
        const leftTorsoAngle = 100 * (Math.PI / 180);
        const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
        const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component
        context1.moveTo(armholeEndX, armholeEndY);
        context1.lineTo(torsoEndX, torsoEndY);
        context1.quadraticCurveTo(curveControlX, curveControlY, curveEndX, curveEndY);
        context1.quadraticCurveTo(endNeckX, endNeckY + 640 ,endNeckX + 10, endNeckY + 640);
        context1.bezierCurveTo(endNeckX, endNeckY + 350, endNeckX + 10, endNeckY + 300, torsoEndX, torsoEndY);
        
        context1.moveTo(bottomEndX, bottomEndY);
        context1.quadraticCurveTo(leftCurveControlX, leftCurveControlY, leftCurveEndX, leftCurveEndY);
        context1.bezierCurveTo(endShoulderX - 10, endShoulderY + 300, endShoulderX, endShoulderY + 350, endShoulderX - 10, endShoulderY + 640);
        
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        context1.moveTo(endShoulderX + 15, endShoulderY - 100);
        context1.lineTo(endShoulderX + 15, endShoulderY + 640);
        context1.lineTo(endShoulderX - 150, endShoulderY + 640);
        context1.lineTo(endShoulderX - 150, endShoulderY - 100);
        context1.lineTo(endShoulderX + 15, endShoulderY - 100);
        
        context1.moveTo(endNeckX - 15, endNeckY - 100);
        context1.lineTo(endNeckX - 15, endNeckY + 640);
        context1.lineTo(endNeckX + 150, endNeckY + 640);
        context1.lineTo(endNeckX + 150, endNeckY - 100);
        context1.lineTo(endNeckX - 15, endNeckY - 100);
        
        context1.lineWidth = 0.1;
        context1.stroke();
        context1.closePath();
        context1.clip();
        
    }
    
    //Checker Design for legend/racerback
    function templateDesign1(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
        //Step: 1 Draw stripes on frontside
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let torsoLength = 0.4 * 10 * mmToPx; // 0.4 cm converted to pixels
        let torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians
        let torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
        let torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component
        context1.moveTo(endNeckX, endNeckY + 640);
        context1.lineTo(endNeckX + 10, endNeckY+ 640);
        context1.bezierCurveTo(endNeckX, endNeckY + 350, endNeckX + 10, endNeckY + 300, torsoEndX, torsoEndY);
        context1.lineTo(armholeEndX, armholeEndY);
        context1.bezierCurveTo(endNeckX , endNeckY + 295 ,endNeckX - 10, endNeckY + 350, endNeckX, endNeckY + 640);
        
        const curveSpan = 10.5 * 10 * mmToPx;
        const curveEndX = torsoEndX; // Same X position as the start of the curve
        const curveEndY = torsoEndY + curveSpan;
        const bottomSpan = 10.55 * 10 * mmToPx;
        const bottomDip = 0.75 * 10 * mmToPx;
        const bottomControlX = curveEndX - bottomSpan / 2;
        const bottomControlY = curveEndY + bottomDip;
        const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
        const bottomEndY = curveEndY; // End at the same Y level as the start
        const leftCurveSpan = 10.5 * 10 * mmToPx;
        const leftInwardDip = 0.85 * 10 * mmToPx; 
        const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
        const leftCurveEndY = bottomEndY - leftCurveSpan; 
        const leftTorsoLength = 0.40 * 10 * mmToPx; 
        const leftTorsoAngle = 100 * (Math.PI / 180);
        const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
        const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component
        
        
        context1.moveTo(endShoulderX, endShoulderY + 640)
        context1.lineTo(endShoulderX - 10, endShoulderY + 640);
        context1.bezierCurveTo(endShoulderX, endShoulderY + 350, endShoulderX - 10, endShoulderY + 300, leftCurveEndX, leftCurveEndY);
        context1.lineTo(leftTorsoEndX, leftTorsoEndY);
        context1.bezierCurveTo(endShoulderX, endShoulderY + 295 ,endShoulderX + 10, endShoulderY + 350, endShoulderX, endShoulderY + 640);
        
        //Step 2: Draw backside stripes
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        context1.moveTo(endShoulderX + 25, endShoulderY + 100);
        context1.lineTo(endShoulderX + 25, endShoulderY + 640);
        context1.lineTo(endShoulderX + 15, endShoulderY + 640);
        context1.lineTo(endShoulderX + 15, endShoulderY + 100);
        context1.lineTo(endShoulderX + 25, endShoulderY + 100);
        
        context1.moveTo(endNeckX - 25, endNeckY + 100);
        context1.lineTo(endNeckX - 25, endNeckY + 640);
        context1.lineTo(endNeckX - 15, endNeckY + 640);
        context1.lineTo(endNeckX - 15, endNeckY + 100);
        context1.lineTo(endNeckX - 25, endNeckY + 100);
        
        context1.lineWidth = 0.1;
        context1.stroke();
        context1.closePath();
        
        
        //Step 3: Draw frontside first colored checkers
        templateDesign1Mask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        
        const squareSize = 40; // Define the size of each square
        const squareSpacing = 40; // Define the spacing between each square
        let canvasWidth = 290; // Define the width limit of the canvas
        let canvasHeight = 800; // Define the height limit of the canvas
        let startX = fStartX - 110; // Starting X position for the first square
        let startY = fStartY + 150; // Starting Y position for the first square
        let x = startX;
        let y = startY;
        let rowIndex = 0;
        
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x + squareSize < canvasWidth) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x += squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = rightEndShoulderX + 70; // Starting X position for the first square
        startY = rightEndShoulderY + 150; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x + squareSize > canvasWidth) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        //Step 4: Draw backside checkers for first color
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        const brightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        const brightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = bStartX + 50; // Starting X position for the first square
        startY = bStartY + 70; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth ) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = brightEndShoulderX + 70; // Starting X position for the first square
        startY = brightEndShoulderY + 70; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth + 500) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        context2.lineWidth = 0.1;
        context2.stroke();
        context2.closePath();
        
        //Step 5: Draw frontside second colored checkers
        templateDesign1Mask(context3, 200, 100, 700, 100);
        context3.beginPath();
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = fStartX - 150; // Starting X position for the first square
        startY = fStartY + 150; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x + squareSize < canvasWidth) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x += squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = rightEndShoulderX + 30; // Starting X position for the first square
        startY = rightEndShoulderY + 150; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = bStartX + 90; // Starting X position for the first square
        startY = bStartY + 70; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth + 250) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        anvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = brightEndShoulderX + 110; // Starting X position for the first square
        startY = brightEndShoulderY + 70; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth + 500) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        context3.lineWidth = 0.1;
        context3.stroke();
        context3.closePath();
        
    }
    
    //Checker Design for non-racerback
    function templateDesign01(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
        //Step: 1 Draw stripes on frontside
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        let rightShoulderStartX = endNeckX;
        let rightShoulderStartY = endNeckY;
        let rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
        let armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;
        let torsoLength = 0.4 * 10 * mmToPx; // 0.4 cm converted to pixels
        let torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians
        let torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
        let torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component
        context1.moveTo(endNeckX, endNeckY + 640);
        context1.lineTo(endNeckX + 10, endNeckY+ 640);
        context1.bezierCurveTo(endNeckX, endNeckY + 350, endNeckX + 10, endNeckY + 300, torsoEndX, torsoEndY);
        context1.lineTo(armholeEndX, armholeEndY);
        context1.bezierCurveTo(endNeckX , endNeckY + 295 ,endNeckX - 10, endNeckY + 350, endNeckX, endNeckY + 640);
        
        const curveSpan = 10.5 * 10 * mmToPx;
        const curveEndX = torsoEndX; // Same X position as the start of the curve
        const curveEndY = torsoEndY + curveSpan;
        const bottomSpan = 10.55 * 10 * mmToPx;
        const bottomDip = 0.75 * 10 * mmToPx;
        const bottomControlX = curveEndX - bottomSpan / 2;
        const bottomControlY = curveEndY + bottomDip;
        const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
        const bottomEndY = curveEndY; // End at the same Y level as the start
        const leftCurveSpan = 10.5 * 10 * mmToPx;
        const leftInwardDip = 0.85 * 10 * mmToPx; 
        const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
        const leftCurveEndY = bottomEndY - leftCurveSpan; 
        const leftTorsoLength = 0.40 * 10 * mmToPx; 
        const leftTorsoAngle = 100 * (Math.PI / 180);
        const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
        const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component
        
        
        context1.moveTo(endShoulderX, endShoulderY + 640)
        context1.lineTo(endShoulderX - 10, endShoulderY + 640);
        context1.bezierCurveTo(endShoulderX, endShoulderY + 350, endShoulderX - 10, endShoulderY + 300, leftCurveEndX, leftCurveEndY);
        context1.lineTo(leftTorsoEndX, leftTorsoEndY);
        context1.bezierCurveTo(endShoulderX, endShoulderY + 295 ,endShoulderX + 10, endShoulderY + 350, endShoulderX, endShoulderY + 640);
        
        //Step 2: Draw backside stripes
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        context1.moveTo(endShoulderX + 25, endShoulderY - 100);
        context1.lineTo(endShoulderX + 25, endShoulderY + 640);
        context1.lineTo(endShoulderX + 15, endShoulderY + 640);
        context1.lineTo(endShoulderX + 15, endShoulderY - 100);
        context1.lineTo(endShoulderX + 25, endShoulderY - 100);
        
        context1.moveTo(endNeckX - 25, endNeckY - 100);
        context1.lineTo(endNeckX - 25, endNeckY + 640);
        context1.lineTo(endNeckX - 15, endNeckY + 640);
        context1.lineTo(endNeckX - 15, endNeckY - 100);
        context1.lineTo(endNeckX - 25, endNeckY - 100);
        
        context1.lineWidth = 0.1;
        context1.stroke();
        context1.closePath();
        
        
        //Step 3: Draw frontside first colored checkers
        templateDesign01Mask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        
        const squareSize = 40; // Define the size of each square
        const squareSpacing = 40; // Define the spacing between each square
        let canvasWidth = 290; // Define the width limit of the canvas
        let canvasHeight = 800; // Define the height limit of the canvas
        let startX = fStartX - 110; // Starting X position for the first square
        let startY = fStartY + 150; // Starting Y position for the first square
        let x = startX;
        let y = startY;
        let rowIndex = 0;
        
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x + squareSize < canvasWidth) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x += squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = rightEndShoulderX + 70; // Starting X position for the first square
        startY = rightEndShoulderY + 150; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x + squareSize > canvasWidth) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        //Step 4: Draw backside checkers for first color
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        const brightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        const brightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = bStartX + 50; // Starting X position for the first square
        startY = bStartY - 50; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth ) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = brightEndShoulderX + 70; // Starting X position for the first square
        startY = brightEndShoulderY - 50; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth + 500) {
                // Draw the square at the current x, y position
                context2.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        context2.lineWidth = 0.1;
        context2.stroke();
        context2.closePath();
        
        //Step 5: Draw frontside second colored checkers
        templateDesign01Mask(context3, 200, 100, 700, 100);
        context3.beginPath();
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = fStartX - 150; // Starting X position for the first square
        startY = fStartY + 150; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x + squareSize < canvasWidth) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x += squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = rightEndShoulderX + 30; // Starting X position for the first square
        startY = rightEndShoulderY + 150; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        canvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = bStartX + 90; // Starting X position for the first square
        startY = bStartY - 50; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth + 250) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        anvasWidth = 290; // Define the width limit of the canvas
        canvasHeight = 800; // Define the height limit of the canvas
        startX = brightEndShoulderX + 110; // Starting X position for the first square
        startY = brightEndShoulderY - 50; // Starting Y position for the first square
        x = startX;
        y = startY;
        rowIndex = 0;
        while (y + squareSize < canvasHeight) {
            // For every alternate row, offset the starting x position by half the square size plus spacing
            if (rowIndex % 2 === 1) {
                x = startX + (squareSize + squareSpacing) / 2;
            } else {
                x = startX;
            }
            
            while (x - squareSize > canvasWidth + 500) {
                // Draw the square at the current x, y position
                context3.rect(x, y, squareSize, squareSize);
                x -= squareSize + squareSpacing; // Move to the next position in the row
            }
            
            // Move to the next row
            y += squareSize; // Move down by the square size and spacing
            rowIndex++; // Increment row index to alternate the offset
        }
        
        context3.lineWidth = 0.1;
        context3.stroke();
        context3.closePath();
        
    }
    
    //Man of Steel Design
    function templateDesign9(context1, context2, fStartX, fStartY, bStartX, bStartY){
        const mmToPx = 3.7795275591; // Convert mm to pixels
        const shoulderLength = 15.875 * mmToPx;
        applyTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
        context1.beginPath();
        
        //Step 1: Draw innermost front pieces
        let endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        let endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        let neckDipDepth = 1.5 * 10 * mmToPx;
        let neckDipSpan = 4.5 * 10 * mmToPx;
        let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        
        context1.moveTo(endNeckX - 7.5, endNeckY + 635);
        context1.lineTo(endNeckX - 7.5, endNeckY + 520);
        context1.lineTo(endNeckX + 120, endNeckY + 220);
        context1.lineTo(endNeckX + 120 + 2.5 * mmToPx  * Math.cos((30 * Math.PI) / 180), endNeckY + 220 + 4 * mmToPx * Math.cos((30 * Math.PI) / 180));
        context1.lineTo(endNeckX + 2.5, endNeckY + 520);
        context1.lineTo(endNeckX + 2.5, endNeckY + 635);
        context1.lineTo(endNeckX - 7.5, endNeckY + 635);
        
        context1.moveTo(endShoulderX + 9, endShoulderY + 635);
        context1.lineTo(endShoulderX + 9, endShoulderY + 520);
        context1.lineTo(endShoulderX - 120, endShoulderY + 215);
        context1.lineTo(endShoulderX - 120 - 2.5 * mmToPx  * Math.cos((30 * Math.PI) / 180), endShoulderY + 215 + 4 * mmToPx * Math.cos((30 * Math.PI) / 180));
        context1.lineTo(endShoulderX - 1, endShoulderY + 520);
        context1.lineTo(endShoulderX - 1, endShoulderY + 635);
        context1.lineTo(endShoulderX + 9, endShoulderY + 635);
        
        
        //Step 2: Draw correpsonding back pieces (uppermost)
        endShoulderX = bStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = bStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        rightShoulderStartX = endNeckX;
        rightShoulderStartY = endNeckY;
        const brightEndShoulderX = 2.5 + rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        const brightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        
        context1.moveTo(bStartX - 62.5, bStartY + 200);
        context1.lineTo(bStartX - 62.5 + 5 * mmToPx  * Math.cos((30 * Math.PI) / 180), bStartY + 200 + 4 * mmToPx * Math.cos((30 * Math.PI) / 180));
        context1.lineTo(bStartX - 67.5, bStartY + 300);
        context1.lineTo(bStartX - 62.5, bStartY + 200);
        
        context1.moveTo(brightEndShoulderX + 65, brightEndShoulderY + 200);
        context1.lineTo(brightEndShoulderX + 65 - 5 * mmToPx  * Math.cos((30 * Math.PI) / 180), brightEndShoulderY + 200 + 4 * mmToPx * Math.cos((30 * Math.PI) / 180));
        context1.lineTo(brightEndShoulderX + 67.5, brightEndShoulderY + 300);
        context1.lineTo(brightEndShoulderX + 65, brightEndShoulderY + 200);
        
        context1.lineWidth = 0.1;
        context1.stroke();
        context1.closePath();
        
        applyTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
        context2.beginPath();
        
        //Step 3: Draw outermost front pieces
        endShoulderX = fStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
        endShoulderY = fStartY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
        neckDipDepth = 1.5 * 10 * mmToPx;
        neckDipSpan = 4.5 * 10 * mmToPx;
        endNeckX = endShoulderX + neckDipSpan + 5; // End of the dip horizontally
        endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder
        
        context2.moveTo(endNeckX + 5, endNeckY + 635);
        context2.bezierCurveTo(endNeckX + 10, endNeckY + 450, endNeckX + 100, endNeckY + 350, endNeckX + 120, endNeckY + 310);
        context2.lineTo(endNeckX + 120, endNeckY + 340);
        context2.bezierCurveTo(endNeckX + 100, endNeckY + 370, endNeckX + 45, endNeckY + 455, endNeckX + 30, endNeckY + 550);
        
        context2.bezierCurveTo(endNeckX + 40, endNeckY + 500, endNeckX + 100, endNeckY + 390, endNeckX + 125, endNeckY + 360);
        context2.lineTo(endNeckX + 125, endNeckY + 390);
        context2.bezierCurveTo(endNeckX + 100, endNeckY + 425, endNeckX + 55, endNeckY + 500, endNeckX + 45, endNeckY + 560);
        
        context2.bezierCurveTo(endNeckX + 50, endNeckY + 550, endNeckX + 100, endNeckY + 430, endNeckX + 130, endNeckY + 410);
        context2.lineTo(endNeckX + 130, endNeckY + 440);
        context2.bezierCurveTo(endNeckX + 100, endNeckY + 465, endNeckX + 65, endNeckY + 545, endNeckX + 60, endNeckY + 570);
        
        context2.bezierCurveTo(endNeckX + 65, endNeckY + 565, endNeckX + 100, endNeckY + 470, endNeckX + 135, endNeckY + 460);
        context2.lineTo(endNeckX + 135, endNeckY + 490);
        context2.bezierCurveTo(endNeckX + 100, endNeckY + 505, endNeckX + 80, endNeckY + 560, endNeckX + 75, endNeckY + 580);
        
        context2.bezierCurveTo(endNeckX + 80, endNeckY + 575, endNeckX + 100, endNeckY + 510, endNeckX + 140, endNeckY + 510);
        context2.lineTo(endNeckX + 140, endNeckY + 530);
        context2.bezierCurveTo(endNeckX + 100, endNeckY + 535, endNeckX + 95, endNeckY + 575, endNeckX + 90, endNeckY + 590);
        
        context2.bezierCurveTo(endNeckX + 95, endNeckY + 585, endNeckX + 100, endNeckY + 550, endNeckX + 145, endNeckY + 550);
        context2.lineTo(endNeckX + 145, endNeckY + 570);
        context2.bezierCurveTo(endNeckX + 100, endNeckY + 565, endNeckX + 110, endNeckY + 590, endNeckX + 105, endNeckY + 600);
        context2.lineTo(endNeckX + 145, endNeckY + 600);
        context2.lineTo(endNeckX + 145, endNeckY + 635);
        context2.lineTo(endNeckX + 5, endNeckY + 635);
        
        endShoulderX -= 3;
        context2.moveTo(endShoulderX - 5, endShoulderY + 635);
        context2.bezierCurveTo(endShoulderX - 10, endShoulderY + 450, endShoulderX - 100, endShoulderY + 350, endShoulderX - 120, endShoulderY + 310);
        context2.lineTo(endShoulderX - 120, endShoulderY + 340);
        context2.bezierCurveTo(endShoulderX - 100, endShoulderY + 370, endShoulderX - 45, endShoulderY + 455, endShoulderX - 30, endShoulderY + 550);
        
        context2.bezierCurveTo(endShoulderX - 40, endShoulderY + 500, endShoulderX - 100, endShoulderY + 390, endShoulderX - 125, endShoulderY + 360);
        context2.lineTo(endShoulderX - 125, endShoulderY + 390);
        context2.bezierCurveTo(endShoulderX - 100, endShoulderY + 425, endShoulderX - 55, endShoulderY + 500, endShoulderX - 45, endShoulderY + 560);
        
        context2.bezierCurveTo(endShoulderX - 50, endShoulderY + 550, endShoulderX - 100, endShoulderY + 430, endShoulderX - 130, endShoulderY + 410);
        context2.lineTo(endShoulderX - 130, endShoulderY + 440);
        context2.bezierCurveTo(endShoulderX - 100, endShoulderY + 465, endShoulderX - 65, endShoulderY + 545, endShoulderX - 60, endShoulderY + 570);
        
        context2.bezierCurveTo(endShoulderX - 65, endShoulderY + 565, endShoulderX - 100, endShoulderY + 470, endShoulderX - 135, endShoulderY + 460);
        context2.lineTo(endShoulderX - 135, endShoulderY + 490);
        context2.bezierCurveTo(endShoulderX - 100, endShoulderY + 505, endShoulderX - 80, endShoulderY + 560, endShoulderX - 75, endShoulderY + 580);
        
        context2.bezierCurveTo(endShoulderX - 80, endShoulderY + 575, endShoulderX - 100, endShoulderY + 510, endShoulderX - 140, endShoulderY + 510);
        context2.lineTo(endShoulderX - 140, endShoulderY + 530);
        context2.bezierCurveTo(endShoulderX - 100, endShoulderY + 535, endShoulderX - 95, endShoulderY + 575, endShoulderX - 90, endShoulderY + 590);
        
        context2.bezierCurveTo(endShoulderX - 95, endShoulderY + 585, endShoulderX - 100, endShoulderY + 550, endShoulderX - 145, endShoulderY + 550);
        context2.lineTo(endShoulderX - 145, endShoulderY + 570);
        context2.bezierCurveTo(endShoulderX - 100, endShoulderY + 565, endShoulderX - 110, endShoulderY + 590, endShoulderX - 105, endShoulderY + 600);
        context2.lineTo(endShoulderX - 145, endShoulderY + 600);
        context2.lineTo(endShoulderX - 145, endShoulderY + 635);
        context2.lineTo(endShoulderX - 5, endShoulderY + 635);
        
        
        //Step 4: Draw correpsonding back pieces (Working top to bottom)
        context2.moveTo(bStartX - 25, bStartY + 260);
        context2.bezierCurveTo(bStartX - 40, bStartY + 325, bStartX - 80, bStartY + 350, bStartX - 90, bStartY + 400);
        context2.lineTo(bStartX - 75, bStartY + 400);
        context2.bezierCurveTo(bStartX - 50, bStartY + 350, bStartX - 30, bStartY + 330, bStartX - 10, bStartY + 275);
        context2.lineTo(bStartX - 25, bStartY + 260);
        
        context2.moveTo(bStartX + 10, bStartY + 290);
        context2.bezierCurveTo(bStartX - 15, bStartY + 350, bStartX - 70, bStartY + 400, bStartX - 90, bStartY + 450);
        context2.lineTo(bStartX - 75, bStartY + 450);
        context2.bezierCurveTo(bStartX - 50, bStartY + 405, bStartX - 5, bStartY + 367.5, bStartX + 22.5, bStartY + 305);
        context2.lineTo(bStartX + 10, bStartY + 290);
        
        context2.moveTo(bStartX + 37.5, bStartY + 335);
        context2.bezierCurveTo(bStartX - 5, bStartY + 420, bStartX - 60, bStartY + 410, bStartX - 90, bStartY + 500);
        context2.lineTo(bStartX - 75, bStartY + 500);
        context2.bezierCurveTo(bStartX - 40, bStartY + 425, bStartX + 5 , bStartY + 430, bStartX + 50, bStartY + 355);
        context2.lineTo(bStartX + 37.5, bStartY + 335);
        
        context2.moveTo(bStartX + 60, bStartY + 390);
        context2.bezierCurveTo(bStartX + 5, bStartY + 450, bStartX - 50, bStartY + 430, bStartX - 90, bStartY + 550);
        context2.lineTo(bStartX - 75, bStartY + 550);
        context2.bezierCurveTo(bStartX - 60, bStartY + 462.5, bStartX + 30 , bStartY + 455, bStartX + 67.5, bStartY + 410);
        context2.lineTo(bStartX + 60, bStartY + 390);
        
        context2.moveTo(bStartX + 75, bStartY + 450);
        context2.bezierCurveTo(bStartX + 15, bStartY + 505, bStartX - 50, bStartY + 445, bStartX - 110, bStartY + 600);
        context2.lineTo(bStartX - 95, bStartY + 600);
        context2.bezierCurveTo(bStartX - 40, bStartY + 460, bStartX + 30 , bStartY + 517.5, bStartX + 80, bStartY + 470);
        context2.lineTo(bStartX + 75, bStartY + 450);
        
        context2.moveTo(bStartX + 90, bStartY + 510);
        context2.bezierCurveTo(bStartX + 15, bStartY + 535, bStartX - 50, bStartY + 500, bStartX - 110, bStartY + 600);
        context2.lineTo(bStartX - 95, bStartY + 600);
        context2.bezierCurveTo(bStartX - 40, bStartY + 525, bStartX + 30 , bStartY + 545, bStartX + 92.5, bStartY + 530);
        context2.lineTo(bStartX + 90, bStartY + 510);
        
        context2.moveTo(bStartX + 105, bStartY + 560);
        context2.bezierCurveTo(bStartX + 15, bStartY + 575, bStartX - 50, bStartY + 535, bStartX - 110, bStartY + 600);
        context2.lineTo(bStartX - 95, bStartY + 600);
        context2.bezierCurveTo(bStartX - 40, bStartY + 565, bStartX + 50 , bStartY + 590, bStartX + 105, bStartY + 577.5);
        context2.lineTo(bStartX + 105, bStartY + 560);
        
        
        //Step 5: Other Side of correpsonding back pieces
        context2.moveTo(brightEndShoulderX + 25, brightEndShoulderY + 260);
        context2.bezierCurveTo(brightEndShoulderX + 40, brightEndShoulderY + 325, brightEndShoulderX + 80, brightEndShoulderY + 350, brightEndShoulderX + 90, brightEndShoulderY + 400);
        context2.lineTo(brightEndShoulderX + 75, brightEndShoulderY + 400);
        context2.bezierCurveTo(brightEndShoulderX + 50, brightEndShoulderY + 350, brightEndShoulderX + 30, brightEndShoulderY + 330, brightEndShoulderX + 10, brightEndShoulderY + 275);
        context2.lineTo(brightEndShoulderX + 25, brightEndShoulderY + 260);
        
        context2.moveTo(brightEndShoulderX - 10, brightEndShoulderY + 290);
        context2.bezierCurveTo(brightEndShoulderX + 15, brightEndShoulderY + 350, brightEndShoulderX + 70, brightEndShoulderY + 400, brightEndShoulderX + 90, brightEndShoulderY + 450);
        context2.lineTo(brightEndShoulderX + 75, brightEndShoulderY + 450);
        context2.bezierCurveTo(brightEndShoulderX + 50, brightEndShoulderY + 405, brightEndShoulderX + 5, brightEndShoulderY + 367.5, brightEndShoulderX - 22.5, brightEndShoulderY + 305);
        context2.lineTo(brightEndShoulderX - 10, brightEndShoulderY + 290);
        
        context2.moveTo(brightEndShoulderX - 37.5, brightEndShoulderY + 335);
        context2.bezierCurveTo(brightEndShoulderX + 5, brightEndShoulderY + 420, brightEndShoulderX + 60, brightEndShoulderY + 410, brightEndShoulderX + 90, brightEndShoulderY + 500);
        context2.lineTo(brightEndShoulderX + 75, brightEndShoulderY + 500);
        context2.bezierCurveTo(brightEndShoulderX + 30, brightEndShoulderY + 417.5, brightEndShoulderX - 5 , brightEndShoulderY + 430, brightEndShoulderX - 50, brightEndShoulderY + 355);
        context2.lineTo(brightEndShoulderX - 37.5, brightEndShoulderY + 335);
        
        context2.moveTo(brightEndShoulderX - 60, brightEndShoulderY + 390);
        context2.bezierCurveTo(brightEndShoulderX - 5, brightEndShoulderY + 450, brightEndShoulderX + 50, brightEndShoulderY + 430, brightEndShoulderX + 90, brightEndShoulderY + 550);
        context2.lineTo(brightEndShoulderX + 75, brightEndShoulderY + 550);
        context2.bezierCurveTo(brightEndShoulderX + 40, brightEndShoulderY + 445, brightEndShoulderX - 30 , brightEndShoulderY + 455, brightEndShoulderX - 67.5, brightEndShoulderY + 410);
        context2.lineTo(brightEndShoulderX - 60, brightEndShoulderY + 390);
        
        context2.moveTo(brightEndShoulderX - 75, brightEndShoulderY + 450);
        context2.bezierCurveTo(brightEndShoulderX - 15, brightEndShoulderY + 505, brightEndShoulderX + 50, brightEndShoulderY + 445, brightEndShoulderX + 110, brightEndShoulderY + 600);
        context2.lineTo(brightEndShoulderX + 95, brightEndShoulderY + 600);
        context2.bezierCurveTo(brightEndShoulderX + 40, brightEndShoulderY + 460, brightEndShoulderX - 30 , brightEndShoulderY + 517.5, brightEndShoulderX - 80, brightEndShoulderY + 470);
        context2.lineTo(brightEndShoulderX - 75, brightEndShoulderY + 450);
        
        context2.moveTo(brightEndShoulderX - 90, brightEndShoulderY + 510);
        context2.bezierCurveTo(brightEndShoulderX - 15, brightEndShoulderY + 535, brightEndShoulderX + 50, brightEndShoulderY + 500, brightEndShoulderX + 110, brightEndShoulderY + 600);
        context2.lineTo(brightEndShoulderX + 95, brightEndShoulderY + 600);
        context2.bezierCurveTo(brightEndShoulderX + 40, brightEndShoulderY + 525, brightEndShoulderX - 30 , brightEndShoulderY + 545, brightEndShoulderX - 92.5, brightEndShoulderY + 530);
        context2.lineTo(brightEndShoulderX - 90, brightEndShoulderY + 510);
        
        context2.moveTo(brightEndShoulderX - 105, brightEndShoulderY + 560);
        context2.bezierCurveTo(brightEndShoulderX - 15, brightEndShoulderY + 575, brightEndShoulderX + 50, brightEndShoulderY + 535, brightEndShoulderX + 110, brightEndShoulderY + 600);
        context2.lineTo(brightEndShoulderX + 95, brightEndShoulderY + 600);
        context2.bezierCurveTo(brightEndShoulderX + 40, brightEndShoulderY + 565, brightEndShoulderX - 50 , brightEndShoulderY + 590, brightEndShoulderX - 105, brightEndShoulderY + 577.5);
        context2.lineTo(brightEndShoulderX - 105, brightEndShoulderY + 560);
        
        context2.lineWidth = 0.1;
        context2.stroke();
        context2.closePath();
        
        
    }

    //Back Single Stripe Design
function templateWCompressDesign1(context1, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    context1.beginPath();

    const endShoulderX = bStartX + shoulderLength; // X component
    const neckDipSpan = 172.6771653546;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = bStartY + 12.5;
    const leftArmholeEndY = leftShoulderEndY + 135;
    const leftTorsoStartY = leftArmholeEndY + 70;
  

    context1.moveTo(bStartX, bStartY + 12.5);
    context1.lineTo(bStartX + 15, bStartY + 206);
    context1.quadraticCurveTo(bStartX + 50, bStartY + 250, bStartX + 50, bStartY + 300);
    context1.lineTo(bStartX + 50, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftShoulderEndX - 50, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftShoulderEndX - 50, bStartY + 300);
    context1.quadraticCurveTo(leftShoulderEndX - 50, bStartY + 250, leftShoulderEndX - 15, bStartY + 206);
    context1.lineTo(leftShoulderEndX, bStartY + 12.5);
    context1.lineTo(leftShoulderEndX, bStartY - 20);
    context1.lineTo(bStartX, bStartY - 20);
    context1.lineTo(bStartX, bStartY + 12.5);

  
    context1.stroke();
    context1.closePath();
}

//Arch design
function templateWCompressDesign2(context1, context2, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    context1.moveTo(rightArmholeEndX - 27, bStartY + 290);
    context1.quadraticCurveTo(bStartX + 25, bStartY + 177.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 87.5);
    context1.quadraticCurveTo(leftShoulderEndX - 25, bStartY + 177.5, leftArmholeEndX + 27, bStartY + 290);
    context1.lineTo(leftArmholeEndX + 50, bStartY + 275);
    context1.lineTo(leftArmholeEndX + 50, bStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, bStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, bStartY + 275);
    context1.lineTo(rightArmholeEndX - 27, bStartY + 275);

    context2.moveTo(rightArmholeEndX - 32.5, bStartY + 270);
    context2.quadraticCurveTo(bStartX + 10, bStartY + 167.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 72.5);
    context2.quadraticCurveTo(leftShoulderEndX - 10, bStartY + 165, leftArmholeEndX + 32.5, bStartY + 270);
    context2.lineTo(leftArmholeEndX + 27, bStartY + 272.5);
    context2.quadraticCurveTo(leftShoulderEndX - 20, bStartY + 170, ((endShoulderX + endNeckX) / 2), neckDipDepth + 80);
    context2.quadraticCurveTo(bStartX + 20, bStartY + 170, rightArmholeEndX - 27, bStartY + 275);
    context2.lineTo(rightArmholeEndX - 32.5, bStartY + 270);

    context2.moveTo(rightArmholeEndX - 32.5, bStartY + 255);
    context2.quadraticCurveTo(bStartX + 10, bStartY + 157.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 65);
    context2.quadraticCurveTo(leftShoulderEndX - 10, bStartY + 157.5, leftArmholeEndX + 32.5, bStartY + 255);
    context2.lineTo(leftArmholeEndX + 37.5, bStartY + 252.5);
    context2.quadraticCurveTo(leftShoulderEndX, bStartY + 152.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 57.5);
    context2.quadraticCurveTo(bStartX, bStartY + 152.5, rightArmholeEndX - 37.5, bStartY + 252.5);
    context2.lineTo(rightArmholeEndX - 32.5, bStartY + 255);

    context2.moveTo(rightArmholeEndX - 38.5, bStartY + 240);
    context2.quadraticCurveTo(bStartX + 5, bStartY + 142.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 50);
    context2.quadraticCurveTo(leftShoulderEndX - 5, bStartY + 142.5, leftArmholeEndX + 38.5, bStartY + 240);
    context2.lineTo(leftArmholeEndX + 43.5, bStartY + 237.5);
    context2.quadraticCurveTo(leftShoulderEndX, bStartY + 137.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 42.5);
    context2.quadraticCurveTo(bStartX, bStartY + 137.5, rightArmholeEndX - 43.5, bStartY + 237.5);
    context2.lineTo(rightArmholeEndX - 38.5, bStartY + 240);
    
      // Calculate endpoint of the shoulder
    fStartY = fStartY - 5;
    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135 ;
    rightArmholeEndX = fStartX - 5;

    context1.moveTo(rightArmholeEndX - 27, fStartY + 290);
    context1.quadraticCurveTo(fStartX + 25, fStartY + 177.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 87.5);
    context1.quadraticCurveTo(leftShoulderEndX - 25, fStartY + 177.5, leftArmholeEndX + 27, fStartY + 290);
    context1.lineTo(leftArmholeEndX + 50, fStartY + 275);
    context1.lineTo(leftArmholeEndX + 50, fStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, fStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, fStartY + 275);
    context1.lineTo(rightArmholeEndX - 27, fStartY + 275);

    context2.moveTo(rightArmholeEndX - 32.5, fStartY + 270);
    context2.quadraticCurveTo(fStartX + 10, fStartY + 167.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 72.5);
    context2.quadraticCurveTo(leftShoulderEndX - 10, fStartY + 165, leftArmholeEndX + 32.5, fStartY + 270);
    context2.lineTo(leftArmholeEndX + 27, fStartY + 272.5);
    context2.quadraticCurveTo(leftShoulderEndX - 20, fStartY + 170, ((endShoulderX + endNeckX) / 2), neckDipDepth + 80);
    context2.quadraticCurveTo(fStartX + 20, fStartY + 170, rightArmholeEndX - 27, fStartY + 275);
    context2.lineTo(rightArmholeEndX - 32.5, fStartY + 270);

    context2.moveTo(rightArmholeEndX - 32.5, fStartY + 255);
    context2.quadraticCurveTo(fStartX + 10, fStartY + 157.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 65);
    context2.quadraticCurveTo(leftShoulderEndX - 10, fStartY + 157.5, leftArmholeEndX + 32.5, fStartY + 255);
    context2.lineTo(leftArmholeEndX + 37.5, fStartY + 252.5);
    context2.quadraticCurveTo(leftShoulderEndX, fStartY + 152.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 57.5);
    context2.quadraticCurveTo(fStartX, fStartY + 152.5, rightArmholeEndX - 37.5, fStartY + 252.5);
    context2.lineTo(rightArmholeEndX - 32.5, fStartY + 255);

    context2.moveTo(rightArmholeEndX - 38.5, fStartY + 240);
    context2.quadraticCurveTo(fStartX + 5, fStartY + 142.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 50);
    context2.quadraticCurveTo(leftShoulderEndX - 5, fStartY + 142.5, leftArmholeEndX + 38.5, fStartY + 240);
    context2.lineTo(leftArmholeEndX + 43.5, fStartY + 237.5);
    context2.quadraticCurveTo(leftShoulderEndX, fStartY + 137.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 42.5);
    context2.quadraticCurveTo(fStartX, fStartY + 137.5, rightArmholeEndX - 43.5, fStartY + 237.5);
    context2.lineTo(rightArmholeEndX - 38.5, fStartY + 240);

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();
}

//Wing Design
function templateWCompressDesign3(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context3.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();
    context3.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    //CODE HERE FOR BACKSIDE TEMPLATE CODE
    context1.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(leftArmholeEndX - 55, leftArmholeEndY + 165, leftArmholeEndX - 60, leftArmholeEndY + 210);
    context1.lineTo(leftArmholeEndX - 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(leftArmholeEndX - 5, leftArmholeEndY + 275, leftArmholeEndX + 40, leftArmholeEndY + 245);
    context1.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 70);

    context2.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 78);
    context2.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(leftArmholeEndX - 52.5, leftArmholeEndY + 175, leftArmholeEndX - 53, leftArmholeEndY + 220);
    context2.lineTo(leftArmholeEndX - 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 190, leftArmholeEndX + 40, leftArmholeEndY + 160);
    context2.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 78);

    context3.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 195, leftArmholeEndX - 32.5, leftArmholeEndY + 310);
    context3.lineTo(leftArmholeEndX - 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(leftArmholeEndX - 2.5, leftArmholeEndY + 260, leftArmholeEndX + 40, leftArmholeEndY + 242.5);
    context3.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 170);

    context1.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(rightArmholeEndX + 55, leftArmholeEndY + 165, rightArmholeEndX + 60, leftArmholeEndY + 210);
    context1.lineTo(rightArmholeEndX + 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(rightArmholeEndX + 5, leftArmholeEndY + 275, rightArmholeEndX - 40, leftArmholeEndY + 245);
    context1.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    context2.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 78);
    context2.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(rightArmholeEndX + 52.5, leftArmholeEndY + 175, rightArmholeEndX + 53, leftArmholeEndY + 220);
    context2.lineTo(rightArmholeEndX + 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 190, rightArmholeEndX - 40, leftArmholeEndY + 160);
    context2.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 78);

    context3.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 195, rightArmholeEndX + 32.5, leftArmholeEndY + 310);
    context3.lineTo(rightArmholeEndX + 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(rightArmholeEndX + 2.5, leftArmholeEndY + 260, rightArmholeEndX - 40, leftArmholeEndY + 242.5);
    context3.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 170);
    

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    //CODE HERE FOR FRONTSIDE TEMPLATE CODE
    context1.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(leftArmholeEndX - 55, leftArmholeEndY + 165, leftArmholeEndX - 60, leftArmholeEndY + 210);
    context1.lineTo(leftArmholeEndX - 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(leftArmholeEndX - 5, leftArmholeEndY + 275, leftArmholeEndX + 40, leftArmholeEndY + 245);
    context1.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 70);

    context2.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 78);
    context2.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(leftArmholeEndX - 52.5, leftArmholeEndY + 175, leftArmholeEndX - 53, leftArmholeEndY + 220);
    context2.lineTo(leftArmholeEndX - 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 190, leftArmholeEndX + 40, leftArmholeEndY + 160);
    context2.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 78);

    context3.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 195, leftArmholeEndX - 32.5, leftArmholeEndY + 310);
    context3.lineTo(leftArmholeEndX - 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(leftArmholeEndX - 2.5, leftArmholeEndY + 260, leftArmholeEndX + 40, leftArmholeEndY + 242.5);
    context3.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 170);

    context1.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(rightArmholeEndX + 55, leftArmholeEndY + 165, rightArmholeEndX + 60, leftArmholeEndY + 210);
    context1.lineTo(rightArmholeEndX + 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(rightArmholeEndX + 5, leftArmholeEndY + 275, rightArmholeEndX - 40, leftArmholeEndY + 245);
    context1.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    context2.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 78);
    context2.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(rightArmholeEndX + 52.5, leftArmholeEndY + 175, rightArmholeEndX + 53, leftArmholeEndY + 220);
    context2.lineTo(rightArmholeEndX + 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 190, rightArmholeEndX - 40, leftArmholeEndY + 160);
    context2.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 78);

    context3.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 195, rightArmholeEndX + 32.5, leftArmholeEndY + 310);
    context3.lineTo(rightArmholeEndX + 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(rightArmholeEndX + 2.5, leftArmholeEndY + 260, rightArmholeEndX - 40, leftArmholeEndY + 242.5);
    context3.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 170);

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();

    context3.stroke();
    context3.closePath();
}

//Dot Design
function templateWCompressDesign4(context1, context2, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;
    
    context1.moveTo(leftArmholeEndX + 29, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 21, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 71, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 121, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 171, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 221, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 271, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 310, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 100, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 29, fStartY + 280);

    const dotSpacing = 6; // Spacing between dots inside each diamond
    let startX, startYTop, startYBottom, endX, row, numDots;
    let i = 0;
    let j = 0;
    let dotSize = 3;
    let rows = [
        { startX: leftArmholeEndX - 371, endX: leftArmholeEndX - 271},
        { startX: leftArmholeEndX - 271, endX: leftArmholeEndX - 171},
        { startX: leftArmholeEndX - 171, endX: leftArmholeEndX - 71},
        { startX: leftArmholeEndX - 71, endX: leftArmholeEndX + 29},
        { startX: leftArmholeEndX + 29, endX: leftArmholeEndX + 129}
    ];

    let rows2 = [
        { startX: leftArmholeEndX - 321, endX: leftArmholeEndX - 221},
        { startX: leftArmholeEndX - 221, endX: leftArmholeEndX - 121},
        { startX: leftArmholeEndX - 121, endX: leftArmholeEndX - 21},
        { startX: leftArmholeEndX - 21, endX: leftArmholeEndX + 79}
    ];
    const heights = [
        { startY: fStartY + 280},
        { startY: fStartY + 330},
        { startY: fStartY + 380},
        { startY: fStartY + 430},
        { startY: fStartY + 480}
    ]

    const dotSizes = [3, 2.5, 2, 1.5, 1];

    for(j = 0; j < 5; ++j){
        dotSize = dotSizes[j];
        if(j % 2 === 0){
            for(i = 0; i < rows.length; ++i){
                numDots = 19;
                startX = rows[i].startX;
                endX = rows[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
        else{
            for(i = 0; i < rows2.length; ++i){
                numDots = 19;
                startX = rows2[i].startX;
                endX = rows2[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows2[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
    }

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    context1.moveTo(leftArmholeEndX + 29, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 21, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 71, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 121, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 171, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 221, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 271, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 310, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 100, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 29, fStartY + 280);

    rows = [
        { startX: leftArmholeEndX - 371, endX: leftArmholeEndX - 271},
        { startX: leftArmholeEndX - 271, endX: leftArmholeEndX - 171},
        { startX: leftArmholeEndX - 171, endX: leftArmholeEndX - 71},
        { startX: leftArmholeEndX - 71, endX: leftArmholeEndX + 29},
        { startX: leftArmholeEndX + 29, endX: leftArmholeEndX + 129}
    ];

    rows2 = [
        { startX: leftArmholeEndX - 321, endX: leftArmholeEndX - 221},
        { startX: leftArmholeEndX - 221, endX: leftArmholeEndX - 121},
        { startX: leftArmholeEndX - 121, endX: leftArmholeEndX - 21},
        { startX: leftArmholeEndX - 21, endX: leftArmholeEndX + 79}
    ];

    for(j = 0; j < 5; ++j){
        dotSize = dotSizes[j];
        if(j % 2 === 0){
            for(i = 0; i < rows.length; ++i){
                numDots = 19;
                startX = rows[i].startX;
                endX = rows[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
        else{
            for(i = 0; i < rows2.length; ++i){
                numDots = 19;
                startX = rows2[i].startX;
                endX = rows2[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows2[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
    }

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();
}

function applyWCompressTankTopMaskTemplate5(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0.05;

    // Draw the front tank top shape
    drawWCompressTankTopMask(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawWCompressBackTankTopMaskTemplate5(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}

function drawWCompressBackTankTopMaskTemplate5(context, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    const shoulderLength = 8 * mmToPx;

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    context.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context.quadraticCurveTo(leftArmholeEndX - 60, leftArmholeEndY + 150, leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context.lineTo(leftTorsoStartX + 15, leftTorsoStartY + 390 - 12.5);
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftArmholeEndX + 40, leftArmholeEndY + 70);

    context.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeEndX + 60, leftArmholeEndY + 150, rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context.lineTo(rightTorsoStartX - 15, leftTorsoStartY + 390 - 12.5);
    context.quadraticCurveTo(rightTorsoControlX, leftTorsoControlY, rightArmholeEndX - 40, leftArmholeEndY + 70);

}

//Checkerboard Design
function templateWCompressDesign5(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context3.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMaskTemplate5(context1, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMaskTemplate5(context2, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();
    context3.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    context3.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context3.quadraticCurveTo(leftArmholeEndX - 60, leftArmholeEndY + 150, leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 52.5, leftTorsoStartY + 390 - 12.5);
    context3.quadraticCurveTo(leftArmholeEndX - 52.5, leftArmholeEndY + 157.5, leftArmholeEndX + 40, leftArmholeEndY + 77.5);
    context3.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 70);

    context3.moveTo(rightArmholeEndX +- 40, leftArmholeEndY + 70);
    context3.quadraticCurveTo(rightArmholeEndX + 60, leftArmholeEndY + 150, rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 52.5, leftTorsoStartY + 390 - 12.5);
    context3.quadraticCurveTo(rightArmholeEndX + 52.5, leftArmholeEndY + 157.5, rightArmholeEndX - 40, leftArmholeEndY + 77.5);
    context3.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    const squareSize = 30; // Define the size of each square
    const squareSpacing = 30; // Define the spacing between each square
    let canvasWidth = 600 + bStartX; // Define the width limit of the canvas
    let canvasHeight = 800; // Define the height limit of the canvas
    let startX = bStartX - 108.5; // Starting X position for the first square
    let startY = fStartY; // Starting Y position for the first square
    let x = startX;
    let y = startY;
    let rowIndex = 0;

    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
            
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context2.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
            
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }

    x = startX;
    y = startY;
    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
        
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context1.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
        
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }


    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    canvasWidth = 600; // Define the width limit of the canvas
    canvasHeight = 800; // Define the height limit of the canvas
    startX = fStartX - 108.5; // Starting X position for the first square
    startY = fStartY; // Starting Y position for the first square
    x = startX;
    y = startY;
    rowIndex = 0;
        
    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
            
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context2.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
            
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }

    x = startX;
    y = startY;
    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
        
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context1.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
        
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }



    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();

    context3.stroke();
    context3.closePath();
}

function applyWCompressTankTopMaskTemplate6(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0.05;

    // Draw the front tank top shape
    drawWCompressTankTopMask(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawWCompressBackTankTopMaskTemplate6(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}

function drawWCompressBackTankTopMaskTemplate6(context, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    const shoulderLength = 8 * mmToPx;

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    context.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context.lineTo(leftArmholeEndX - 60, leftArmholeEndY + 30);
    context.lineTo(leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context.lineTo(leftTorsoStartX + 15, leftTorsoStartY + 390 - 12.5);
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftArmholeEndX + 40, leftArmholeEndY + 70);
    context.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 30);

    context.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);
    context.lineTo(rightArmholeEndX + 60, leftArmholeEndY + 30);
    context.lineTo(rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context.lineTo(rightTorsoStartX - 15, leftTorsoStartY + 390 - 12.5);
    context.quadraticCurveTo(rightTorsoControlX, leftTorsoControlY, rightArmholeEndX - 40, leftArmholeEndY + 70);
    context.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 30);

}

//Stripe Design
function templateWCompressDesign6(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context3.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMaskTemplate6(context1, fStartX, fStartY, bStartX, bStartY);
    //applyWCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();
    context3.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    for(let i = 0; i < 4; ++i){
        context2.moveTo(bStartX - 10, fStartY + 17 + (i * 13));
        context2.lineTo(bStartX - 10, fStartY + 17 + 6.5 + (i * 13));
        context2.lineTo(endShoulderX + 35, fStartY + 17 - 25 + (i * 13));
        context2.lineTo(endShoulderX + 35, fStartY + 17 - 31.5 + (i * 13));
        context2.lineTo(bStartX - 10, fStartY + 17 + (i * 13));
    }

    for(let i = 0; i < 3; ++i){
        context3.moveTo(bStartX - 10, fStartY + 17 + 6.5 + (i * 13));
        context3.lineTo(bStartX - 10, fStartY + 17 + 13 + (i * 13));
        context3.lineTo(endShoulderX + 35, fStartY + 23.5 - 25 + (i * 13));
        context3.lineTo(endShoulderX + 35, fStartY + 23.5 - 31.5 + (i * 13));
        context3.lineTo(bStartX - 10, fStartY + 17 + 6.5 + (i * 13));
    }

    for(let i = 0; i < 4; ++i){
        context2.moveTo(leftShoulderEndX + 10, fStartY + 17 + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 17 + 6.5 + (i * 13));
        context2.lineTo(endNeckX - 35, fStartY + 17 - 25 + (i * 13));
        context2.lineTo(endNeckX - 35, fStartY + 17 - 31.5 + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 17 + (i * 13));
    }

    for(let i = 0; i < 3; ++i){
        context3.moveTo(leftShoulderEndX + 10, fStartY + 17 + 6.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 17 + 13 + (i * 13));
        context3.lineTo(endNeckX - 35, fStartY + 23.5 - 25 + (i * 13));
        context3.lineTo(endNeckX - 35, fStartY + 23.5 - 31.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 17 + 6.5 + (i * 13));
    }

    let lineWidth = 12.5; // Initial width of the stripe
    const gap = 6.5; // Constant gap between stripes
    let currentY = fStartY + 50; // Starting Y position
    
    for (let i = 0; i < 60; ++i) {
    
        let topY = currentY; // Top of the stripe
        let bottomY = topY + lineWidth + 30; // Bottom of the stripe
    
        context1.moveTo(bStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY);
        context1.lineTo(leftTorsoStartX + 15, topY);
        context1.lineTo(leftTorsoStartX + 15, topY - lineWidth);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY - lineWidth);
        context1.lineTo(bStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY - lineWidth);
        context1.lineTo(bStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
    
        // Move the starting Y position down by the line width plus a fixed gap
        currentY += lineWidth + gap;
    
        // Reduce line width progressively while keeping gaps constant
        lineWidth *= 0.925;
    }

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    for(let i = 0; i < 8; ++i){
        context2.moveTo(fStartX - 10, fStartY + (i * 13));
        context2.lineTo(fStartX - 10, fStartY + 6.5 + (i * 13));
        context2.lineTo(endShoulderX + 15, fStartY - 3 + (i * 13));
        context2.lineTo(endShoulderX + 15, fStartY - 9.5  + (i * 13));
        context2.lineTo(fStartX - 10, fStartY + (i * 13));
    }

    for(let i = 0; i < 7; ++i){
        context3.moveTo(fStartX - 10, fStartY + 6.5 + (i * 13));
        context3.lineTo(fStartX - 10, fStartY + 13 + (i * 13));
        context3.lineTo(endShoulderX + 15, fStartY + 6.5 - 3 + (i * 13));
        context3.lineTo(endShoulderX + 15, fStartY - 3 + (i * 13));
        context3.lineTo(fStartX - 10, fStartY + 6.5 + (i * 13));
    }

    for(let i = 0; i < 8; ++i){
        context2.moveTo(leftShoulderEndX + 10, fStartY + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 6.5 + (i * 13));
        context2.lineTo(endNeckX - 15, fStartY - 3 + (i * 13));
        context2.lineTo(endNeckX - 15, fStartY - 9.5  + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + (i * 13));
    }

    for(let i = 0; i < 7; ++i){
        context3.moveTo(leftShoulderEndX + 10, fStartY + 6.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 13 + (i * 13));
        context3.lineTo(endNeckX - 15, fStartY - 3 + 6.5 + (i * 13));
        context3.lineTo(endNeckX - 15, fStartY - 3 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 6.5 + (i * 13));
    }

    lineWidth = 12.5; // Initial width of the stripe
    currentY = fStartY + 50; // Starting Y position
    
    for (let i = 0; i < 60; ++i) {
    
        let topY = currentY; // Top of the stripe
        let bottomY = topY + lineWidth + 30; // Bottom of the stripe
    
        context1.moveTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY);
        context1.lineTo(leftTorsoStartX + 15, topY);
        context1.lineTo(leftTorsoStartX + 15, topY - lineWidth);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY - lineWidth);
        context1.lineTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY - lineWidth);
        context1.lineTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
    
        // Move the starting Y position down by the line width plus a fixed gap
        currentY += lineWidth + gap;
    
        // Reduce line width progressively while keeping gaps constant
        lineWidth *= 0.925;
    }
    



    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();

    context3.stroke();
    context3.closePath();
}

function applyWCompressTankTopMaskTemplate7(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0;
    context.strokeStyle = "transparent";

    // Draw the front tank top shape
    drawWCompressTankTopMaskTemplate7(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawWCompressBackTankTopMask(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}

function drawWCompressTankTopMaskTemplate7(context, fStartX, fStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0; // Line thickness
    context.strokeStyle = "transparent";
    const shoulderLength = 8 * mmToPx;

    //Back singlet template design
    let endShoulderX = fStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = fStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = fStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = fStartX - 5;
    let rightArmholeEndY = fStartY + 135;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    context.moveTo(leftArmholeEndX + 42.5, leftArmholeEndY + 50);
    context.quadraticCurveTo(leftArmholeEndX - 10, leftArmholeEndY + 70, leftArmholeEndX - 20, leftArmholeEndY + 130);
    context.quadraticCurveTo(leftArmholeEndX - 25, leftArmholeEndY + 175, leftTorsoStartX - 55, leftTorsoStartY + 200);
    context.lineTo(leftTorsoStartX - 30, leftTorsoStartY + 377.5);
    context.lineTo(leftTorsoStartX + 15, leftTorsoStartY + 377.5);
    context.quadraticCurveTo(leftTorsoControlX - 1, leftTorsoControlY - 10, leftArmholeEndX + 40, leftArmholeEndY + 70 - 12.5);
    context.lineTo(leftArmholeEndX + 42.5, leftArmholeEndY + 50);

    context.moveTo(rightArmholeEndX - 42.5, leftArmholeEndY + 50);
    context.quadraticCurveTo(rightArmholeEndX + 10, leftArmholeEndY + 70, rightArmholeEndX + 20, leftArmholeEndY + 130);
    context.quadraticCurveTo(rightArmholeEndX + 25, leftArmholeEndY + 175, rightTorsoStartX + 55, leftTorsoStartY + 200);
    context.lineTo(rightTorsoStartX + 30, leftTorsoStartY + 377.5);
    context.lineTo(rightTorsoStartX - 15, leftTorsoStartY + 377.5);
    context.quadraticCurveTo(rightTorsoControlX + 1, leftTorsoControlY - 10, rightArmholeEndX - 40, leftArmholeEndY + 70 - 12.5);
    context.lineTo(rightArmholeEndX - 42.5, leftArmholeEndY + 50);

}

//Side Design
function templateWCompressDesign7(context1, context2, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 0; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context1.strokeStyle = "transparent";
    const shoulderLength = 8 * mmToPx;

    applyWCompressTankTopMaskTemplate7(context1, fStartX, fStartY, bStartX, bStartY);
    applyWCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;

    const backLineWidth = 3;
    const backGap = 4;
    let backCurrentY = -5;
    let backCurrentXShift = -15; // Shift left progressively
    
    for (let i = 0; i < 15; ++i) {  // Increase iterations as needed
        context2.moveTo(rightArmholeEndX - 40 - backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
        context2.quadraticCurveTo(
            rightArmholeEndX - backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            rightArmholeEndX + 60 - backCurrentXShift, 
            leftArmholeEndY + 110 - backCurrentY
        );
        context2.lineTo(rightArmholeEndX + 20 - backCurrentXShift, leftArmholeEndY + 30 - backCurrentY);
        context2.lineTo(rightArmholeEndX + 20 + backLineWidth - backCurrentXShift, leftArmholeEndY + 30 - backCurrentY);
        context2.lineTo(rightArmholeEndX + 60 + backLineWidth - backCurrentXShift, leftArmholeEndY + 110 - backCurrentY);
        context2.lineTo(
            rightArmholeEndX + 60 + backLineWidth * 1.5 - backCurrentXShift, 
            leftArmholeEndY + 110 + backLineWidth - backCurrentY
        );
        context2.quadraticCurveTo(
            rightArmholeEndX + backLineWidth * 1.5 - backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            rightArmholeEndX - 40 - backCurrentXShift, 
            leftArmholeEndY + 150 + backLineWidth - backCurrentY
        );
        context2.lineTo(rightArmholeEndX - 40 - backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
    
        // Move up and left for the next iteration
        backCurrentY += backGap; // Move upwards
        backCurrentXShift += 10;  // Move left progressively
    }
    
    backCurrentY = -5;
    backCurrentXShift = -15; // Shift left progressively
    
    for (let i = 0; i < 15; ++i) {  // Increase iterations as needed
        context2.moveTo(leftArmholeEndX + 40 + backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
        context2.quadraticCurveTo(
            leftArmholeEndX + backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            leftArmholeEndX - 60 + backCurrentXShift, 
            leftArmholeEndY + 110 - backCurrentY
        );
        context2.lineTo(leftArmholeEndX - 20 + backCurrentXShift, leftArmholeEndY + 30 - backCurrentY);
        context2.lineTo(leftArmholeEndX - 20 - backLineWidth + backCurrentXShift, leftArmholeEndY + 30 - backCurrentY);
        context2.lineTo(leftArmholeEndX - 60 - backLineWidth + backCurrentXShift, leftArmholeEndY + 110 - backCurrentY);
        context2.lineTo(
            leftArmholeEndX - 60 - backLineWidth * 1.5 + backCurrentXShift, 
            leftArmholeEndY + 110 + backLineWidth - backCurrentY
        );
        context2.quadraticCurveTo(
            leftArmholeEndX - backLineWidth * 1.5 + backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            leftArmholeEndX + 40 + backCurrentXShift, 
            leftArmholeEndY + 150 + backLineWidth - backCurrentY
        );
        context2.lineTo(leftArmholeEndX + 40 + backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
    
        // Move up and left for the next iteration
        backCurrentY += backGap; // Move upwards
        backCurrentXShift += 10;  // Move left progressively
    }

    

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    let lineWidth = 5;
    const gap = 3;
    let currentY = fStartY + 200;

    // Compute final values directly
    for (let i = 0; i < 13; ++i) {  // Run 15 times to get the values for the 16th iteration
        currentY += lineWidth + gap;
        lineWidth *= 1.04;
    }

    let lastTopY = currentY;
    let lastBottomY = lastTopY + lineWidth + 30 + (5 * 13);


    // Draw only the last stripe
    context1.moveTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), lastTopY);
    context1.lineTo(((endShoulderX + endNeckX) / 2), lastBottomY);
    context1.lineTo(leftTorsoStartX + 15, lastTopY);
    context1.lineTo(leftTorsoStartX + 15, lastTopY + 300);
    context1.lineTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), lastTopY + 300);
    context1.lineTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), lastTopY);



    lineWidth = 5; // Initial width of the stripe
    currentY = fStartY + 200; // Starting Y position
    
    for (let i = 0; i < 14; ++i) {
    
        let topY = currentY; // Top of the stripe
        let bottomY = topY + lineWidth + 30 + (5 * i); // Bottom of the stripe
    
        context1.moveTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY);
        context1.lineTo(leftTorsoStartX + 15, topY);
        context1.lineTo(leftTorsoStartX + 15, topY - lineWidth);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY - lineWidth);
        context1.lineTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY - lineWidth);
        context1.lineTo(fStartX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
    
        // Move the starting Y position down by the line width plus a fixed gap
        currentY += lineWidth + gap;
    
        // Reduce line width progressively while keeping gaps constant
        lineWidth *= 1.04;
    }


    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();
}

function templateMCompressDesign1(context1, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    const shoulderLength = 8.5 * mmToPx;

    applyMCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    context1.beginPath();

    const endShoulderX = bStartX + shoulderLength; // X component
    const neckDipSpan = 172.6771653546;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = bStartY + 35;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftTorsoStartY = leftArmholeEndY + 70;
  

    context1.moveTo(bStartX - (shoulderLength * 1.75), bStartY + 12.5);
    context1.lineTo(bStartX - (shoulderLength * 1.75), bStartY + 150);
    context1.quadraticCurveTo(bStartX + 100 - (shoulderLength * 1.75), bStartY + 200, bStartX + 100 - (shoulderLength * 1.75), bStartY + 300);
    context1.lineTo(bStartX + 100 - (shoulderLength * 1.75), leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftShoulderEndX - 100, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftShoulderEndX - 100, bStartY + 300);
    context1.quadraticCurveTo(leftShoulderEndX - 100, bStartY + 200, leftShoulderEndX - 3, bStartY + 150);
    context1.lineTo(leftShoulderEndX, bStartY + 12.5);
    context1.lineTo(leftShoulderEndX, bStartY - 20);
    context1.lineTo(bStartX - (shoulderLength * 1.75), bStartY - 20);
    context1.lineTo(bStartX - (shoulderLength * 1.75), bStartY + 12.5);

  
    context1.stroke();
    context1.closePath();
}

function templateMCompressDesign2(context1, context2, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    const shoulderLength = 8.5 * mmToPx;

    applyMCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 7.5 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;

    context1.moveTo(rightArmholeEndX - 27, bStartY + 290);
    context1.quadraticCurveTo(rightShoulderEndX + 25, bStartY + 177.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 87.5);
    context1.quadraticCurveTo(leftShoulderEndX - 25, bStartY + 177.5, leftArmholeEndX + 27, bStartY + 290);
    context1.lineTo(leftArmholeEndX + 50, bStartY + 275);
    context1.lineTo(leftArmholeEndX + 50, bStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, bStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, bStartY + 275);
    context1.lineTo(rightArmholeEndX - 27, bStartY + 290);

    context2.moveTo(rightArmholeEndX - 32.5, bStartY + 270);
    context2.quadraticCurveTo(rightShoulderEndX + 10, bStartY + 167.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 72.5);
    context2.quadraticCurveTo(leftShoulderEndX - 10, bStartY + 165, leftArmholeEndX + 32.5, bStartY + 270);
    context2.lineTo(leftArmholeEndX + 27, bStartY + 272.5);
    context2.quadraticCurveTo(leftShoulderEndX - 20, bStartY + 170, ((endShoulderX + endNeckX) / 2), neckDipDepth + 80);
    context2.quadraticCurveTo(rightShoulderEndX + 20, bStartY + 170, rightArmholeEndX - 27, bStartY + 275);
    context2.lineTo(rightArmholeEndX - 32.5, bStartY + 270);

    context2.moveTo(rightArmholeEndX - 32.5, bStartY + 255);
    context2.quadraticCurveTo(rightShoulderEndX + 10, bStartY + 157.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 65);
    context2.quadraticCurveTo(leftShoulderEndX - 10, bStartY + 157.5, leftArmholeEndX + 32.5, bStartY + 255);
    context2.lineTo(leftArmholeEndX + 37.5, bStartY + 252.5);
    context2.quadraticCurveTo(leftShoulderEndX, bStartY + 152.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 57.5);
    context2.quadraticCurveTo(rightShoulderEndX, bStartY + 152.5, rightArmholeEndX - 37.5, bStartY + 252.5);
    context2.lineTo(rightArmholeEndX - 32.5, bStartY + 255);

    context2.moveTo(rightArmholeEndX - 38.5, bStartY + 240);
    context2.quadraticCurveTo(rightShoulderEndX + 5, bStartY + 142.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 50);
    context2.quadraticCurveTo(leftShoulderEndX - 5, bStartY + 142.5, leftArmholeEndX + 38.5, bStartY + 240);
    context2.lineTo(leftArmholeEndX + 43.5, bStartY + 237.5);
    context2.quadraticCurveTo(leftShoulderEndX, bStartY + 137.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 42.5);
    context2.quadraticCurveTo(rightShoulderEndX, bStartY + 137.5, rightArmholeEndX - 43.5, bStartY + 237.5);
    context2.lineTo(rightArmholeEndX - 38.5, bStartY + 240);
    
      // Calculate endpoint of the shoulder
      endShoulderX = fStartX + shoulderLength; // X component
      neckDipSpan = 172.6771653546;
      neckDipDepth = fStartY + 7.5 * mmToPx;
      endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
      leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
      leftShoulderEndY = fStartY + 35;
      leftArmholeEndX = leftShoulderEndX + 5;
      leftArmholeEndY = leftShoulderEndY + 120;
      rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
      rightArmholeEndX = rightShoulderEndX - 5;

    context1.moveTo(rightArmholeEndX - 27, fStartY + 290);
    context1.quadraticCurveTo(rightShoulderEndX + 25, fStartY + 177.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 65);
    context1.quadraticCurveTo(leftShoulderEndX - 25, fStartY + 177.5, leftArmholeEndX + 27, fStartY + 290);
    context1.lineTo(leftArmholeEndX + 50, fStartY + 275);
    context1.lineTo(leftArmholeEndX + 50, fStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, fStartY - 20);
    context1.lineTo(rightArmholeEndX - 50, fStartY + 275);
    context1.lineTo(rightArmholeEndX - 27, fStartY + 275);

    context2.moveTo(rightArmholeEndX - 32.5, fStartY + 270);
    context2.quadraticCurveTo(rightShoulderEndX + 10, fStartY + 167.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 50);
    context2.quadraticCurveTo(leftShoulderEndX - 10, fStartY + 165, leftArmholeEndX + 32.5, fStartY + 270);
    context2.lineTo(leftArmholeEndX + 27, fStartY + 272.5);
    context2.quadraticCurveTo(leftShoulderEndX - 20, fStartY + 170, ((endShoulderX + endNeckX) / 2), neckDipDepth + 57.5);
    context2.quadraticCurveTo(rightShoulderEndX + 20, fStartY + 170, rightArmholeEndX - 27, fStartY + 275);
    context2.lineTo(rightArmholeEndX - 32.5, fStartY + 270);

    context2.moveTo(rightArmholeEndX - 32.5, fStartY + 255);
    context2.quadraticCurveTo(rightShoulderEndX + 10, fStartY + 157.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 42.5);
    context2.quadraticCurveTo(leftShoulderEndX - 10, fStartY + 157.5, leftArmholeEndX + 32.5, fStartY + 255);
    context2.lineTo(leftArmholeEndX + 37.5, fStartY + 252.5);
    context2.quadraticCurveTo(leftShoulderEndX, fStartY + 152.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 35);
    context2.quadraticCurveTo(rightShoulderEndX, fStartY + 152.5, rightArmholeEndX - 37.5, fStartY + 252.5);
    context2.lineTo(rightArmholeEndX - 32.5, fStartY + 255);

    context2.moveTo(rightArmholeEndX - 38.5, fStartY + 240);
    context2.quadraticCurveTo(rightShoulderEndX + 5, fStartY + 142.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 27.5);
    context2.quadraticCurveTo(leftShoulderEndX - 5, fStartY + 142.5, leftArmholeEndX + 38.5, fStartY + 240);
    context2.lineTo(leftArmholeEndX + 43.5, fStartY + 237.5);
    context2.quadraticCurveTo(leftShoulderEndX, fStartY + 137.5, ((endShoulderX + endNeckX) / 2), neckDipDepth + 20);
    context2.quadraticCurveTo(rightShoulderEndX, fStartY + 137.5, rightArmholeEndX - 43.5, fStartY + 237.5);
    context2.lineTo(rightArmholeEndX - 38.5, fStartY + 240);

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();
}

function templateMCompressDesign3(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context3.lineWidth = 1; // Line thickness
    const shoulderLength = 8 * mmToPx;

    applyMCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();
    context3.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 7.5 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX - 28;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX + 32.5;
    let rightArmholeEndY = bStartY + 120;
    let rightTorsoStartX = rightArmholeEndX;
    let rightTorsoStartY = rightArmholeEndY + 70;

    //CODE HERE FOR BACKSIDE TEMPLATE CODE
    context1.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(leftArmholeEndX - 55, leftArmholeEndY + 165, leftArmholeEndX - 60, leftArmholeEndY + 210);
    context1.lineTo(leftArmholeEndX - 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(leftArmholeEndX - 5, leftArmholeEndY + 275, leftArmholeEndX + 40, leftArmholeEndY + 245);
    context1.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 70);

    context2.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 78);
    context2.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(leftArmholeEndX - 52.5, leftArmholeEndY + 175, leftArmholeEndX - 53, leftArmholeEndY + 220);
    context2.lineTo(leftArmholeEndX - 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 190, leftArmholeEndX + 40, leftArmholeEndY + 160);
    context2.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 78);

    context3.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 195, leftArmholeEndX - 32.5, leftArmholeEndY + 310);
    context3.lineTo(leftArmholeEndX - 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(leftArmholeEndX - 2.5, leftArmholeEndY + 260, leftArmholeEndX + 40, leftArmholeEndY + 242.5);
    context3.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 170);

    context1.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(rightArmholeEndX + 55, leftArmholeEndY + 165, rightArmholeEndX + 60, leftArmholeEndY + 210);
    context1.lineTo(rightArmholeEndX + 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(rightArmholeEndX + 5, leftArmholeEndY + 275, rightArmholeEndX - 40, leftArmholeEndY + 245);
    context1.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    context2.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 78);
    context2.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(rightArmholeEndX + 52.5, leftArmholeEndY + 175, rightArmholeEndX + 53, leftArmholeEndY + 220);
    context2.lineTo(rightArmholeEndX + 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 190, rightArmholeEndX - 40, leftArmholeEndY + 160);
    context2.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 78);

    context3.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 195, rightArmholeEndX + 32.5, leftArmholeEndY + 310);
    context3.lineTo(rightArmholeEndX + 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(rightArmholeEndX + 2.5, leftArmholeEndY + 260, rightArmholeEndX - 40, leftArmholeEndY + 242.5);
    context3.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 170);
    

    //Back singlet template design
    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 7.5 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    leftShoulderEndY = fStartY + 35;
    leftArmholeEndX = leftShoulderEndX - 28;
    leftArmholeEndY = leftShoulderEndY + 120;
    leftTorsoStartX = leftArmholeEndX;
    leftTorsoStartY = leftArmholeEndY + 70;
    rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    rightArmholeEndX = rightShoulderEndX + 32.5;
    rightArmholeEndY = fStartY + 120;
    rightTorsoStartX = rightArmholeEndX;
    rightTorsoStartY = rightArmholeEndY + 70;

    //CODE HERE FOR FRONTSIDE TEMPLATE CODE
    context1.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(leftArmholeEndX - 55, leftArmholeEndY + 165, leftArmholeEndX - 60, leftArmholeEndY + 210);
    context1.lineTo(leftArmholeEndX - 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(leftArmholeEndX - 5, leftArmholeEndY + 275, leftArmholeEndX + 40, leftArmholeEndY + 245);
    context1.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 70);

    context2.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 78);
    context2.lineTo(leftArmholeEndX - 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(leftArmholeEndX - 52.5, leftArmholeEndY + 175, leftArmholeEndX - 53, leftArmholeEndY + 220);
    context2.lineTo(leftArmholeEndX - 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(leftArmholeEndX - 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 190, leftArmholeEndX + 40, leftArmholeEndY + 160);
    context2.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 78);

    context3.moveTo(leftArmholeEndX + 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(leftArmholeEndX - 20, leftArmholeEndY + 195, leftArmholeEndX - 32.5, leftArmholeEndY + 310);
    context3.lineTo(leftArmholeEndX - 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(leftArmholeEndX - 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(leftArmholeEndX - 2.5, leftArmholeEndY + 260, leftArmholeEndX + 40, leftArmholeEndY + 242.5);
    context3.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 170);

    context1.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 125);
    context1.quadraticCurveTo(rightArmholeEndX + 55, leftArmholeEndY + 165, rightArmholeEndX + 60, leftArmholeEndY + 210);
    context1.lineTo(rightArmholeEndX + 80, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 40, leftTorsoStartY + 390 - 12.5);
    context1.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 325);
    context1.quadraticCurveTo(rightArmholeEndX + 5, leftArmholeEndY + 275, rightArmholeEndX - 40, leftArmholeEndY + 245);
    context1.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    context2.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 78);
    context2.lineTo(rightArmholeEndX + 15, leftArmholeEndY + 135);
    context2.quadraticCurveTo(rightArmholeEndX + 52.5, leftArmholeEndY + 175, rightArmholeEndX + 53, leftArmholeEndY + 220);
    context2.lineTo(rightArmholeEndX + 72.5, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 60, leftTorsoStartY + 390 - 12.5);
    context2.lineTo(rightArmholeEndX + 35, leftArmholeEndY + 280);
    context2.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 190, rightArmholeEndX - 40, leftArmholeEndY + 160);
    context2.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 78);

    context3.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 170);
    context3.quadraticCurveTo(rightArmholeEndX + 20, leftArmholeEndY + 195, rightArmholeEndX + 32.5, leftArmholeEndY + 310);
    context3.lineTo(rightArmholeEndX + 52.5, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 45, leftTorsoStartY + 390 - 12.5);
    context3.lineTo(rightArmholeEndX + 19, leftArmholeEndY + 320);
    context3.quadraticCurveTo(rightArmholeEndX + 2.5, leftArmholeEndY + 260, rightArmholeEndX - 40, leftArmholeEndY + 242.5);
    context3.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 170);

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();

    context3.stroke();
    context3.closePath();
}

function templateMCompressDesign4(context1, context2, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    const shoulderLength = 8.15 * mmToPx;

    applyMCompressTankTopMask(context1, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let neckDipDepth = bStartY + 12 * mmToPx;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + shoulderLength;
    let leftShoulderEndY = bStartY + 12.5;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 135;
    let leftTorsoStartX = leftArmholeEndX + 40;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let leftTorsoControlX = leftTorsoStartX - 40;
    let leftTorsoControlY = leftTorsoStartY + 100;
    let rightArmholeEndX = bStartX - 5;
    let rightArmholeEndY = bStartY + 135 ;
    let rightArmholeControlX = rightArmholeEndX - 5;
    let rightArmholeControlY = rightArmholeEndY + 45;
    let rightTorsoStartX = rightArmholeEndX - 40;
    let rightTorsoStartY = rightArmholeEndY + 70;
    let rightTorsoControlX = rightTorsoStartX + 40;
    let rightTorsoControlY = rightTorsoStartY + 100;
    
    context1.moveTo(leftArmholeEndX + 79, fStartY + 230);
    context1.lineTo(leftArmholeEndX + 29, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 21, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 71, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 121, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 171, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 221, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 271, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 321, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 310, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 100, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 79, fStartY + 230);

    const dotSpacing = 6; // Spacing between dots inside each diamond
    let startX, startYTop, startYBottom, endX, row, numDots;
    let i = 0;
    let j = 0;
    let dotSize = 3;
    let rows = [
        { startX: leftArmholeEndX - 371, endX: leftArmholeEndX - 271},
        { startX: leftArmholeEndX - 271, endX: leftArmholeEndX - 171},
        { startX: leftArmholeEndX - 171, endX: leftArmholeEndX - 71},
        { startX: leftArmholeEndX - 71, endX: leftArmholeEndX + 29},
        { startX: leftArmholeEndX + 29, endX: leftArmholeEndX + 129}
    ];

    let rows2 = [
        { startX: leftArmholeEndX - 321, endX: leftArmholeEndX - 221},
        { startX: leftArmholeEndX - 221, endX: leftArmholeEndX - 121},
        { startX: leftArmholeEndX - 121, endX: leftArmholeEndX - 21},
        { startX: leftArmholeEndX - 21, endX: leftArmholeEndX + 79}
    ];
    const heights = [
        { startY: fStartY + 280},
        { startY: fStartY + 330},
        { startY: fStartY + 380},
        { startY: fStartY + 430},
        { startY: fStartY + 480}
    ]

    const dotSizes = [3, 2.5, 2, 1.5, 1];

    for(j = 0; j < 5; ++j){
        dotSize = dotSizes[j];
        if(j % 2 === 0){
            for(i = 0; i < rows.length; ++i){
                numDots = 19;
                startX = rows[i].startX;
                endX = rows[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
        else{
            for(i = 0; i < rows2.length; ++i){
                numDots = 19;
                startX = rows2[i].startX;
                endX = rows2[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows2[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
    }

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    context1.moveTo(leftArmholeEndX + 79, fStartY + 230);
    context1.lineTo(leftArmholeEndX + 29, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 21, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 71, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 121, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 171, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 221, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 271, fStartY + 280);
    context1.lineTo(leftArmholeEndX - 321, fStartY + 230);
    context1.lineTo(leftArmholeEndX - 310, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 100, fStartY + 600);
    context1.lineTo(leftArmholeEndX + 79, fStartY + 230);

    rows = [
        { startX: leftArmholeEndX - 371, endX: leftArmholeEndX - 271},
        { startX: leftArmholeEndX - 271, endX: leftArmholeEndX - 171},
        { startX: leftArmholeEndX - 171, endX: leftArmholeEndX - 71},
        { startX: leftArmholeEndX - 71, endX: leftArmholeEndX + 29},
        { startX: leftArmholeEndX + 29, endX: leftArmholeEndX + 129}
    ];

    rows2 = [
        { startX: leftArmholeEndX - 321, endX: leftArmholeEndX - 221},
        { startX: leftArmholeEndX - 221, endX: leftArmholeEndX - 121},
        { startX: leftArmholeEndX - 121, endX: leftArmholeEndX - 21},
        { startX: leftArmholeEndX - 21, endX: leftArmholeEndX + 79}
    ];

    for(j = 0; j < 5; ++j){
        dotSize = dotSizes[j];
        if(j % 2 === 0){
            for(i = 0; i < rows.length; ++i){
                numDots = 19;
                startX = rows[i].startX;
                endX = rows[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
        else{
            for(i = 0; i < rows2.length; ++i){
                numDots = 19;
                startX = rows2[i].startX;
                endX = rows2[i].endX;
                startYBottom = heights[j].startY;
                startYTop = heights[j].startY;
                row = 1;
                while(numDots > 1){
                    if(numDots != 19){
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                            context2.moveTo(startX + dotSpacing, startYTop);
                            context2.arc(startX + dotSpacing / 3, startYTop, dotSize, 0, Math.PI  * 2);
                        }
                    }
                    else{
                        for(startX; startX < endX; startX += dotSpacing){
                            context2.moveTo(startX + dotSpacing, startYBottom);
                            context2.arc(startX + dotSpacing / 3, startYBottom, dotSize, 0, Math.PI  * 2);
                        }
                    }

                    
                    numDots -= 2;
                    startX = rows2[i].startX + (row * dotSpacing);
                    endX -= dotSpacing;
                    startYBottom += dotSpacing;
                    startYTop -= dotSpacing;
                    ++row;
                }
            }
        }
    }

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();
}

function applyMCompressTankTopMaskTemplate5(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0.05;

    // Draw the front tank top shape
    drawMCompressTankTopMask(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawMCompressBackTankTopMaskTemplate5(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}

function drawMCompressBackTankTopMaskTemplate5(context, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    const shoulderLength = 8.5 * mmToPx;

    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;
    let rightTorsoStartX = rightArmholeEndX;
    let leftTorsoControlX = leftTorsoStartX - 10;
    let leftTorsoControlY = leftTorsoStartY + 275;
    let rightTorsoControlX = rightTorsoStartX + 10;

    context.moveTo(leftArmholeEndX, leftArmholeEndY + 70);
    context.quadraticCurveTo(leftArmholeEndX - 80, leftArmholeEndY + 150, leftTorsoStartX - 100, leftTorsoStartY + 362);
    context.quadraticCurveTo(leftArmholeEndX - 50 , leftTorsoStartY + 357, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftArmholeEndX, leftArmholeEndY + 70);

    context.moveTo(rightArmholeEndX, leftArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeEndX + 80, leftArmholeEndY + 150, rightArmholeEndX + 100, leftTorsoStartY + 362);
    context.quadraticCurveTo(rightArmholeEndX + 50 , leftTorsoStartY + 357, rightTorsoStartX - 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo(rightTorsoControlX, leftTorsoControlY, rightArmholeEndX, leftArmholeEndY + 70);

}

function templateMCompressDesign5(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context3.lineWidth = 1; // Line thickness
    const shoulderLength = 8.5 * mmToPx;

    applyMCompressTankTopMaskTemplate5(context1, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMaskTemplate5(context2, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();
    context3.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;
    let rightTorsoStartX = rightArmholeEndX;

    context3.moveTo(leftArmholeEndX, leftArmholeEndY + 70);
    context3.quadraticCurveTo(leftArmholeEndX - 80, leftArmholeEndY + 150, leftArmholeEndX - 100, leftTorsoStartY + 362);
    context3.lineTo(leftArmholeEndX - 92.5, leftTorsoStartY + 362);
    context3.quadraticCurveTo(leftArmholeEndX - 72.5, leftArmholeEndY + 157.5, leftArmholeEndX, leftArmholeEndY + 79);
    context3.lineTo(leftArmholeEndX, leftArmholeEndY + 70);

    context3.moveTo(rightArmholeEndX, leftArmholeEndY + 70);
    context3.quadraticCurveTo(rightArmholeEndX + 80, leftArmholeEndY + 150, rightArmholeEndX + 100, leftTorsoStartY + 362);
    context3.lineTo(rightArmholeEndX + 92.5, leftTorsoStartY + 362);
    context3.quadraticCurveTo(rightArmholeEndX + 72.5, leftArmholeEndY + 157.5, rightArmholeEndX , leftArmholeEndY + 79);
    context3.lineTo(rightArmholeEndX, leftArmholeEndY + 70);

    const squareSize = 30; // Define the size of each square
    const squareSpacing = 30; // Define the spacing between each square
    let canvasWidth = 600 + bStartX; // Define the width limit of the canvas
    let canvasHeight = 800; // Define the height limit of the canvas
    let startX = bStartX - 106.5; // Starting X position for the first square
    let startY = fStartY; // Starting Y position for the first square
    let x = startX;
    let y = startY;
    let rowIndex = 0;

    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
            
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context2.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
            
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }

    x = startX;
    y = startY;
    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
        
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context1.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
        
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }


    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    neckDipDepth = fStartY + 12 * mmToPx;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + shoulderLength;
    leftShoulderEndY = fStartY + 12.5;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 135;
    leftTorsoStartX = leftArmholeEndX + 40;
    leftTorsoStartY = leftArmholeEndY + 70;
    leftTorsoControlX = leftTorsoStartX - 40;
    leftTorsoControlY = leftTorsoStartY + 100;
    rightArmholeEndX = fStartX - 5;
    rightArmholeEndY = fStartY + 135;
    rightArmholeControlX = rightArmholeEndX - 5;
    rightArmholeControlY = rightArmholeEndY + 45;
    rightTorsoStartX = rightArmholeEndX - 40;
    rightTorsoStartY = rightArmholeEndY + 70;
    rightTorsoControlX = rightTorsoStartX + 40;
    rightTorsoControlY = rightTorsoStartY + 100;

    canvasWidth = 600; // Define the width limit of the canvas
    canvasHeight = 800; // Define the height limit of the canvas
    startX = fStartX - 106.5; // Starting X position for the first square
    startY = fStartY; // Starting Y position for the first square
    x = startX;
    y = startY;
    rowIndex = 0;
        
    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
            
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context2.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
            
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }

    x = startX;
    y = startY;
    while (y + squareSize < canvasHeight) {
        // For every alternate row, offset the starting x position by half the square size plus spacing
        if (rowIndex % 2 === 1) {
            x = startX + (squareSize + squareSpacing) / 2;
        } else {
            x = startX;
        }
        
        while (x + squareSize < canvasWidth) {
            // Draw the square at the current x, y position
            context1.rect(x, y, squareSize, squareSize);
            x += squareSize + squareSpacing; // Move to the next position in the row
        }
        
        // Move to the next row
        y += squareSize; // Move down by the square size and spacing
        rowIndex++; // Increment row index to alternate the offset
    }



    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();

    context3.stroke();
    context3.closePath();
}

function applyMCompressTankTopMaskTemplate6(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0.05;

    // Draw the front tank top shape
    drawMCompressTankTopMask(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawMCompressBackTankTopMaskTemplate6(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}

function drawMCompressBackTankTopMaskTemplate6(context, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    const shoulderLength = 8.5 * mmToPx;

    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;
    let rightTorsoStartX = rightArmholeEndX;
    let leftTorsoControlX = leftTorsoStartX - 10;
    let leftTorsoControlY = leftTorsoStartY + 275;
    let rightTorsoControlX = rightTorsoStartX + 10;

    context.moveTo(leftArmholeEndX, leftArmholeEndY + 70);
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo(leftArmholeEndX - 50, leftTorsoStartY + 355, leftTorsoStartX - 60, leftTorsoStartY + 362);
    context.lineTo(leftArmholeEndX - 60, leftArmholeEndY + 75);
    context.lineTo(leftArmholeEndX, leftArmholeEndY + 70);

    context.moveTo(rightArmholeEndX, leftArmholeEndY + 70);
    context.quadraticCurveTo(rightTorsoControlX, leftTorsoControlY, rightTorsoStartX - 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo(rightArmholeEndX + 50, leftTorsoStartY + 355, rightTorsoStartX + 60, leftTorsoStartY + 362);
    context.lineTo(rightArmholeEndX + 60, leftArmholeEndY + 75);
    context.lineTo(rightArmholeEndX, leftArmholeEndY + 70);

}

function templateMCompressDesign6(context1, context2, context3, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 1; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context3.lineWidth = 1; // Line thickness
    const shoulderLength = 8.5 * mmToPx;

    applyMCompressTankTopMaskTemplate6(context1, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context3, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();
    context3.beginPath();

    //Back singlet template design
    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;
    let rightTorsoStartX = rightArmholeEndX;



    for(let i = 0; i < 4; ++i){
        context2.moveTo(rightShoulderEndX - 10, fStartY + 39 + (i * 13));
        context2.lineTo(rightShoulderEndX - 10, fStartY + 39 + 6.5 + (i * 13));
        context2.lineTo(endShoulderX + 75, fStartY + 17 - 42 + (i * 13));
        context2.lineTo(endShoulderX + 75, fStartY + 17 - 48.5 + (i * 13));
        context2.lineTo(rightShoulderEndX - 10, fStartY + 39 + (i * 13));
    }

    for(let i = 0; i < 3; ++i){
        context3.moveTo(rightShoulderEndX - 10, fStartY + 39 + 6.5 + (i * 13));
        context3.lineTo(rightShoulderEndX - 10, fStartY + 39 + 13 + (i * 13));
        context3.lineTo(endShoulderX + 75, fStartY + 23.5 - 42 + (i * 13));
        context3.lineTo(endShoulderX + 75, fStartY + 23.5 - 48.5 + (i * 13));
        context3.lineTo(rightShoulderEndX - 10, fStartY + 39 + 6.5 + (i * 13));
    }

    for(let i = 0; i < 4; ++i){
        context2.moveTo(leftShoulderEndX + 10, fStartY + 39 + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 39 + 6.5 + (i * 13));
        context2.lineTo(endNeckX - 75, fStartY + 17 - 42 + (i * 13));
        context2.lineTo(endNeckX - 75, fStartY + 17 - 48.5 + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 39 + (i * 13));
    }

    for(let i = 0; i < 3; ++i){
        context3.moveTo(leftShoulderEndX + 10, fStartY + 39 + 6.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 39 + 13 + (i * 13));
        context3.lineTo(endNeckX - 75, fStartY + 23.5 - 42 + (i * 13));
        context3.lineTo(endNeckX - 75, fStartY + 23.5 - 48.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 39 + 6.5 + (i * 13));
    }

    let lineWidth = 12.5; // Initial width of the stripe
    const gap = 6.5; // Constant gap between stripes
    let currentY = fStartY + 60; // Starting Y position
    
    for (let i = 0; i < 60; ++i) {
    
        let topY = currentY; // Top of the stripe
        let bottomY = topY + lineWidth + 30; // Bottom of the stripe
    
        context1.moveTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY);
        context1.lineTo(leftTorsoStartX + 15, topY);
        context1.lineTo(leftTorsoStartX + 15, topY - lineWidth);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY - lineWidth);
        context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY - lineWidth);
        context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
    
        // Move the starting Y position down by the line width plus a fixed gap
        currentY += lineWidth + gap;
    
        // Reduce line width progressively while keeping gaps constant
        lineWidth *= 0.925;
    }

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    leftShoulderEndY = fStartY + 35;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 120;
    leftTorsoStartX = leftArmholeEndX;
    leftTorsoStartY = leftArmholeEndY + 70;
    rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    rightArmholeEndX = rightShoulderEndX - 5;
    rightTorsoStartX = rightArmholeEndX;

    

    for(let i = 0; i < 7; ++i){
        context2.moveTo(rightShoulderEndX - 10, fStartY + 39 + (i * 13));
        context2.lineTo(rightShoulderEndX - 10, fStartY + 39 + 6.5 + (i * 13));
        context2.lineTo(endShoulderX + 75, fStartY + 17 - 42 + (i * 13));
        context2.lineTo(endShoulderX + 75, fStartY + 17 - 48.5 + (i * 13));
        context2.lineTo(rightShoulderEndX - 10, fStartY + 39 + (i * 13));
    }

    for(let i = 0; i < 6; ++i){
        context3.moveTo(rightShoulderEndX - 10, fStartY + 39 + 6.5 + (i * 13));
        context3.lineTo(rightShoulderEndX - 10, fStartY + 39 + 13 + (i * 13));
        context3.lineTo(endShoulderX + 75, fStartY + 23.5 - 42 + (i * 13));
        context3.lineTo(endShoulderX + 75, fStartY + 23.5 - 48.5 + (i * 13));
        context3.lineTo(rightShoulderEndX - 10, fStartY + 39 + 6.5 + (i * 13));
    }

    for(let i = 0; i < 7; ++i){
        context2.moveTo(leftShoulderEndX + 10, fStartY + 39 + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 39 + 6.5 + (i * 13));
        context2.lineTo(endNeckX - 75, fStartY + 17 - 42 + (i * 13));
        context2.lineTo(endNeckX - 75, fStartY + 17 - 48.5 + (i * 13));
        context2.lineTo(leftShoulderEndX + 10, fStartY + 39 + (i * 13));
    }

    for(let i = 0; i < 6; ++i){
        context3.moveTo(leftShoulderEndX + 10, fStartY + 39 + 6.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 39 + 13 + (i * 13));
        context3.lineTo(endNeckX - 75, fStartY + 23.5 - 42 + (i * 13));
        context3.lineTo(endNeckX - 75, fStartY + 23.5 - 48.5 + (i * 13));
        context3.lineTo(leftShoulderEndX + 10, fStartY + 39 + 6.5 + (i * 13));
    }

    lineWidth = 12.5; // Initial width of the stripe
    currentY = fStartY + 40; // Starting Y position
    
    for (let i = 0; i < 60; ++i) {
    
        let topY = currentY; // Top of the stripe
        let bottomY = topY + lineWidth + 30; // Bottom of the stripe
    
        context1.moveTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY);
        context1.lineTo(leftTorsoStartX + 15, topY);
        context1.lineTo(leftTorsoStartX + 15, topY - lineWidth);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY - lineWidth);
        context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY - lineWidth);
        context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
    
        // Move the starting Y position down by the line width plus a fixed gap
        currentY += lineWidth + gap;
    
        // Reduce line width progressively while keeping gaps constant
        lineWidth *= 0.925;
    }

    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();

    context3.stroke();
    context3.closePath();
}

function applyMCompressTankTopMaskTemplate7(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0;
    context.strokeStyle = "transparent";

    // Draw the front tank top shape
    drawMCompressTankTopMaskTemplate7(context, frontStartX, frontStartY);
    //drawMCompressTankTopMask(context, frontStartX, frontStartY);  

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawMCompressBackTankTopMask(context, backStartX, backStartY);
     

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}

function drawMCompressTankTopMaskTemplate7(context, fStartX, fStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0; // Line thickness
    context.strokeStyle = "transparent";
    const shoulderLength = 8.5 * mmToPx;

    let endShoulderX = fStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = fStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;
    let rightTorsoStartX = rightArmholeEndX;
    let leftTorsoControlX = leftTorsoStartX - 10;
    let leftTorsoControlY = leftTorsoStartY + 275;
    let rightTorsoControlX = rightTorsoStartX + 10;

    context.moveTo(leftArmholeEndX, leftArmholeEndY + 70);
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo(leftTorsoStartX - 25, leftTorsoStartY + 355, leftTorsoStartX - 35, leftTorsoStartY + 355.5);
    context.lineTo(leftTorsoStartX - 42.5, leftTorsoStartY + 140);
    context.quadraticCurveTo(leftArmholeEndX - 45, leftArmholeEndY + 90, leftArmholeEndX, leftArmholeEndY + 70);

    context.moveTo(rightArmholeEndX, leftArmholeEndY + 70);
    context.quadraticCurveTo(rightTorsoControlX, leftTorsoControlY, rightTorsoStartX - 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo(rightTorsoStartX + 25, leftTorsoStartY + 355, rightTorsoStartX + 35, leftTorsoStartY + 355.5);
    context.lineTo(rightTorsoStartX + 42.5, leftTorsoStartY + 140);
    context.quadraticCurveTo(rightArmholeEndX + 45, leftArmholeEndY + 90, rightArmholeEndX, leftArmholeEndY + 70);

}

function templateMCompressDesign7(context1, context2, fStartX, fStartY, bStartX, bStartY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context1.lineWidth = 0; // Line thickness
    context2.lineWidth = 1; // Line thickness
    context1.strokeStyle = "transparent";
    const shoulderLength = 8.5 * mmToPx;

    applyMCompressTankTopMaskTemplate7(context1, fStartX, fStartY, bStartX, bStartY);
    applyMCompressTankTopMask(context2, fStartX, fStartY, bStartX, bStartY);
  
    context1.beginPath();
    context2.beginPath();

    let endShoulderX = bStartX + shoulderLength; // X component
    let neckDipSpan = 172.6771653546;
    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    let leftShoulderEndY = bStartY + 35;
    let leftArmholeEndX = leftShoulderEndX + 5;
    let leftArmholeEndY = leftShoulderEndY + 120;
    let leftTorsoStartX = leftArmholeEndX;
    let leftTorsoStartY = leftArmholeEndY + 70;
    let rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    let rightArmholeEndX = rightShoulderEndX - 5;
    let rightTorsoStartX = rightArmholeEndX;

    const backLineWidth = 3;
    const backGap = 4;
    let backCurrentY = 0;
    let backCurrentXShift = -25; // Shift left progressively
    
    for (let i = 0; i < 13; ++i) {  // Increase iterations as needed
        context2.moveTo(rightArmholeEndX - 40 - backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
        context2.quadraticCurveTo(
            rightArmholeEndX - backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            rightArmholeEndX + 60 - backCurrentXShift, 
            leftArmholeEndY + 110 - backCurrentY
        );
        
        context2.lineTo(rightArmholeEndX + 0 - backCurrentXShift, leftArmholeEndY - 5 - backCurrentY);
        context2.lineTo(rightArmholeEndX + 0 + backLineWidth - backCurrentXShift, leftArmholeEndY - 5 - backCurrentY);
        context2.lineTo(rightArmholeEndX + 60 + backLineWidth - backCurrentXShift, leftArmholeEndY + 110 - backCurrentY);

        context2.lineTo(
            rightArmholeEndX + 60 + backLineWidth * 1.5 - backCurrentXShift, 
            leftArmholeEndY + 110 + backLineWidth - backCurrentY
        );
        context2.quadraticCurveTo(
            rightArmholeEndX + backLineWidth * 1.5 - backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            rightArmholeEndX - 40 - backCurrentXShift, 
            leftArmholeEndY + 150 + backLineWidth - backCurrentY
        );
        context2.lineTo(rightArmholeEndX - 40 - backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
    
        // Move up and left for the next iteration
        backCurrentY += backGap; // Move upwards
        backCurrentXShift += 10;  // Move left progressively
    }
    
    backCurrentY = 0;
    backCurrentXShift = -25; // Shift left progressively
    
    for (let i = 0; i < 13; ++i) {  // Increase iterations as needed
        context2.moveTo(leftArmholeEndX + 40 + backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
        context2.quadraticCurveTo(
            leftArmholeEndX + backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            leftArmholeEndX - 60 + backCurrentXShift, 
            leftArmholeEndY + 110 - backCurrentY
        );
        context2.lineTo(leftArmholeEndX - 0 + backCurrentXShift, leftArmholeEndY - 5 - backCurrentY);
        context2.lineTo(leftArmholeEndX - 0 - backLineWidth + backCurrentXShift, leftArmholeEndY - 5 - backCurrentY);
        context2.lineTo(leftArmholeEndX - 60 - backLineWidth + backCurrentXShift, leftArmholeEndY + 110 - backCurrentY);
        context2.lineTo(
            leftArmholeEndX - 60 - backLineWidth * 1.5 + backCurrentXShift, 
            leftArmholeEndY + 110 + backLineWidth - backCurrentY
        );
        context2.quadraticCurveTo(
            leftArmholeEndX - backLineWidth * 1.5 + backCurrentXShift, 
            leftArmholeEndY + 120 - backCurrentY, 
            leftArmholeEndX + 40 + backCurrentXShift, 
            leftArmholeEndY + 150 + backLineWidth - backCurrentY
        );
        context2.lineTo(leftArmholeEndX + 40 + backCurrentXShift, leftArmholeEndY + 150 - backCurrentY);
    
        // Move up and left for the next iteration
        backCurrentY += backGap; // Move upwards
        backCurrentXShift += 10;  // Move left progressively
    }

    

    endShoulderX = fStartX + shoulderLength; // X component
    neckDipSpan = 172.6771653546;
    endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    leftShoulderEndY = fStartY + 35;
    leftArmholeEndX = leftShoulderEndX + 5;
    leftArmholeEndY = leftShoulderEndY + 120;
    leftTorsoStartX = leftArmholeEndX;
    leftTorsoStartY = leftArmholeEndY + 70;
    rightShoulderEndX = endShoulderX - (shoulderLength * 2.75);
    rightArmholeEndX = rightShoulderEndX - 5;
    rightTorsoStartX = rightArmholeEndX;

    let lineWidth = 5;
    const gap = 3;
    let currentY = fStartY + 200;

    // Compute final values directly
    for (let i = 0; i < 13; ++i) {  // Run 15 times to get the values for the 16th iteration
        currentY += lineWidth + gap;
        lineWidth *= 1.04;
    }

    let lastTopY = currentY;
    let lastBottomY = lastTopY + lineWidth + 30 + (5 * 13);


    // Draw only the last stripe
    context1.moveTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), lastTopY);
    context1.lineTo(((endShoulderX + endNeckX) / 2), lastBottomY);
    context1.lineTo(leftTorsoStartX + 15, lastTopY);
    context1.lineTo(leftTorsoStartX + 15, lastTopY + 300);
    context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), lastTopY + 300);
    context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), lastTopY);



    lineWidth = 5; // Initial width of the stripe
    currentY = fStartY + 200; // Starting Y position
    
    for (let i = 0; i < 14; ++i) {
    
        let topY = currentY; // Top of the stripe
        let bottomY = topY + lineWidth + 30 + (5 * i); // Bottom of the stripe
    
        context1.moveTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY);
        context1.lineTo(leftTorsoStartX + 15, topY);
        context1.lineTo(leftTorsoStartX + 15, topY - lineWidth);
        context1.lineTo(((endShoulderX + endNeckX) / 2), bottomY - lineWidth);
        context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY - lineWidth);
        context1.lineTo(rightShoulderEndX + (leftShoulderEndX - (leftTorsoStartX + 15)), topY);
    
        // Move the starting Y position down by the line width plus a fixed gap
        currentY += lineWidth + gap;
    
        // Reduce line width progressively while keeping gaps constant
        lineWidth *= 1.04;
    }


    context1.stroke();
    context1.closePath();

    context2.stroke();
    context2.closePath();
}
    
    // Template list with function names and parameters
    const templates = [
        { name: "Design 1", functionName: "templateDesign1"},
        { name: "Design 2", functionName: "templateDesign2"},
        { name: "Design 3", functionName: "templateDesign3"},
        { name: "Design 4", functionName: "templateDesign4"},
        { name: "Design 5", functionName: "templateDesign5"},
        { name: "Design 6", functionName: "templateDesign6"},
        { name: "Design 7", functionName: "templateDesign7"},
        { name: "Design 8", functionName: "templateDesign8"},
        { name: "Design 9", functionName: "templateDesign9"},
        { name: "Design 10", functionName: "templateDesign10"},
        { name: "No Design", functionName: "None"}
    ];
    
    const WCompTemplates = [
        { name: "Design 1", functionName: "templateDesign1"},
        { name: "Design 2", functionName: "templateDesign2"},
        { name: "Design 3", functionName: "templateDesign3"},
        { name: "Design 4", functionName: "templateDesign4"},
        { name: "Design 5", functionName: "templateDesign5"},
        { name: "Design 6", functionName: "templateDesign6"},
        { name: "Design 7", functionName: "templateDesign7"},
        { name: "No Design", functionName: "None"}
    ];

    const MCompTemplates = [
        { name: "Design 1", functionName: "templateDesign1"},
        { name: "Design 2", functionName: "templateDesign2"},
        { name: "Design 3", functionName: "templateDesign3"},
        { name: "Design 4", functionName: "templateDesign4"},
        { name: "Design 5", functionName: "templateDesign5"},
        { name: "Design 6", functionName: "templateDesign6"},
        { name: "Design 7", functionName: "templateDesign7"},
        { name: "No Design", functionName: "None"}
    ];
    
    
    // Populate dropdown with template options and previews
    function populateTemplateDropdown() {
        const templateOptions = document.getElementById("templateOptions");

        templateOptions.innerHTML = '';
        if(itDescript.toUpperCase().includes("TANK")){
            MCompTemplates.forEach(template => {
                const option = document.createElement("div");
                option.className = "template-option";
                
                const thumbnail = document.createElement("img");
                thumbnail.alt = `${template.name} Preview`;
                
                option.appendChild(thumbnail);
                option.appendChild(document.createElement("br"));

                // Create a styled span for the template name
                const templateName = document.createElement("span");
                templateName.textContent = template.name;
                templateName.style.fontWeight = "bold"; // Example style
                templateName.style.color = "#333"; // Example style
                templateName.style.fontSize = "16px"; // Example style
                templateName.style.marginTop = "5px"; // Add spacing between image and text
                templateName.style.display = "block"; // Ensure it's displayed on a new line
                
                option.appendChild(templateName);

                option.onclick = () => selectTemplate(template, thumbnail);
                
                templateOptions.appendChild(option);
                
                // Generate the thumbnail for each template on load
                generateThumbnail(template, thumbnail);
            });
        }
        else if(itDescript.toUpperCase().includes("COMPRESSION")){
            WCompTemplates.forEach(template => {
                const option = document.createElement("div");
                option.className = "template-option";
                
                const thumbnail = document.createElement("img");
                thumbnail.alt = `${template.name} Preview`;
                
                option.appendChild(thumbnail);
                option.appendChild(document.createElement("br"));

                // Create a styled span for the template name
                const templateName = document.createElement("span");
                templateName.textContent = template.name;
                templateName.style.fontWeight = "bold"; // Example style
                templateName.style.color = "#333"; // Example style
                templateName.style.fontSize = "16px"; // Example style
                templateName.style.marginTop = "5px"; // Add spacing between image and text
                templateName.style.display = "block"; // Ensure it's displayed on a new line
                
                option.appendChild(templateName);

                option.onclick = () => selectTemplate(template, thumbnail);
                
                templateOptions.appendChild(option);
                
                // Generate the thumbnail for each template on load
                generateThumbnail(template, thumbnail);
            });
        }
        else{
            templates.forEach(template => {
                const option = document.createElement("div");
                option.className = "template-option";
                
                const thumbnail = document.createElement("img");
                thumbnail.alt = `${template.name} Preview`;
                
                option.appendChild(thumbnail);
                option.appendChild(document.createElement("br"));

                // Create a styled span for the template name
                const templateName = document.createElement("span");
                templateName.textContent = template.name;
                templateName.style.fontWeight = "bold"; // Example style
                templateName.style.color = "#333"; // Example style
                templateName.style.fontSize = "16px"; // Example style
                templateName.style.marginTop = "5px"; // Add spacing between image and text
                templateName.style.display = "block"; // Ensure it's displayed on a new line
                
                option.appendChild(templateName);

                option.onclick = () => selectTemplate(template, thumbnail);
                
                templateOptions.appendChild(option);
                
                // Generate the thumbnail for each template on load
                generateThumbnail(template, thumbnail);
            });
        }
    }
    
    // Generate the thumbnail for each template based on color selection
    function generateThumbnail(template, thumbnailElement) {

        function embedImageInCanvas(hiddenCanvas) {
            const context = hiddenCanvas.getContext('2d');

            let needsOutline = false;
            if(itDescript.toUpperCase().includes("COMPRESSION")){
                if(template.name.includes("2") || template.name.includes("5") || template.name.includes("6")){
                    needsOutline = true;
                }
            }
            else{
                if(template.name.includes("4") || template.name.includes("5") || template.name.includes("8")){
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
            const styles = window.getComputedStyle(hiddenNordLogo);
        
            // Extract dimensions and positions
            const imgHeight = parseFloat(styles.height.replace('px', '')) || hiddenNordLogo.naturalHeight;
            const imgWidth = parseFloat(styles.width.replace('px', '')) || hiddenNordLogo.naturalHeight;
        
            // Draw the image onto the canvas
            if(itDescript.toUpperCase().includes("TANK")){
                context.drawImage(hiddenNordLogo, 405, 200, imgWidth/1.25, imgHeight/1.25);
            }
            else if(itDescript.toUpperCase().includes("COMPRESSION")){
                context.drawImage(hiddenNordLogo, 385, 275, imgWidth/1.25, imgHeight/1.25);
            }
            else{
                context.drawImage(hiddenNordLogo, 415, 240, imgWidth/1.25, imgHeight/1.25);
            }
        }
        

        // Reset all hidden canvases for the selected template
        hiddentemplateCanvas1.width = hiddentemplateCanvas1.width;
        hiddentemplateCanvas2.width = hiddentemplateCanvas2.width;
        hiddentemplateCanvas3.width = hiddentemplateCanvas3.width;
        
        const color1 = document.getElementById("selectedColor4").style.backgroundColor;
        const color2 = document.getElementById("selectedColor5").style.backgroundColor;
        const color3 = document.getElementById("selectedColor6").style.backgroundColor;
        
        // Draw the selected template onto the hidden canvases
        if(itDescript.toUpperCase().includes("TANK")){
            switch (template.name) {
                case "Design 1":
                templateMCompressDesign1(hiddentemplateContext1, 200, 100, 700, 100);
                break;

                case "Design 2":
                templateMCompressDesign2(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 3":
                templateMCompressDesign3(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 4":
                templateMCompressDesign4(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 5":
                templateMCompressDesign5(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 6":
                templateMCompressDesign6(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 7":
                templateMCompressDesign7(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                // Repeat for all other designs...
                case "No Template":
                return; // Exit early if there's no template
            }
        }
        else if(itDescript.toUpperCase().includes("COMPRESSION")){
            switch (template.name) {
                case "Design 1":
                templateWCompressDesign1(hiddentemplateContext1, 200, 100, 700, 100);
                break;

                case "Design 2":
                templateWCompressDesign2(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 3":
                templateWCompressDesign3(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 4":
                templateWCompressDesign4(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 5":
                templateWCompressDesign5(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 6":
                templateWCompressDesign6(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 7":
                templateWCompressDesign7(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                // Repeat for all other designs...
                case "No Template":
                return; // Exit early if there's no template
            }
        }
        else{
            switch (template.name) {
                case "Design 1":
                if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
                    templateDesign1(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                }
                else{
                    templateDesign01(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                }
                break;
                case "Design 2":
                templateDesign2(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100); 
                break;
                
                case "Design 3":
                templateDesign3(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 4":
                templateDesign4(hiddentemplateContext1, 200, 100, 700, 100);
                break;
                
                case "Design 5":
                templateDesign5(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateCanvas1.width, hiddentemplateCanvas1.height, 200, 100, 700, 100);
                break;
                
                case "Design 6":
                templateDesign6(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 7":
                templateDesign7(hiddentemplateContext1, hiddentemplateContext2, hiddentemplateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 8":
                templateDesign8(hiddentemplateContext1, hiddentemplateCanvas1.width, hiddentemplateCanvas1.height, 200, 100, 700, 100);
                break;
                
                case "Design 9":
                templateDesign9(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 10":
                templateDesign10(hiddentemplateContext1, hiddentemplateContext2, 200, 100, 700, 100);
                break;
                // Repeat for all other designs...
                case "No Template":
                return; // Exit early if there's no template
            }
        }       
        
        // Apply colors to the canvases if selected
        if (color1) {
            hiddentemplateContext1.fillStyle = color1;
            hiddentemplateContext1.fill();
        }
        if (color2) {
            hiddentemplateContext2.fillStyle = color2;
            hiddentemplateContext2.fill();
        }
        if (color3) {
            hiddentemplateContext3.fillStyle = color3;
            hiddentemplateContext3.fill();
        }
        
        // Create a composite canvas to combine all layers
        const compositeCanvas = document.createElement("canvas");
        compositeCanvas.width = hiddentemplateCanvas1.width;
        compositeCanvas.height = hiddentemplateCanvas1.height;
        const compositeContext = compositeCanvas.getContext("2d");

        if(itDescript.toUpperCase().includes('COMPRESSION')){
            compositeContext.drawImage(hiddenTankTopCanvas, 0, 0);                  // z-index 1
            compositeContext.drawImage(hiddenTankTopBackCanvas, 0, 0);              // z-index 1
            compositeContext.drawImage(hiddenTankTopTemplateColor1Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopTemplateColor2Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopTemplateColor3Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopInternalFrontCanvas, 0, 0);     // z-index 4
            compositeContext.drawImage(hiddenTankTopInternalBackCanvas, 0, 0);      // z-index 4
            compositeContext.drawImage(hiddenTankTopCuffCanvas, 0, 0);              // z-index 5
            compositeContext.drawImage(hiddenTankTopBackCuffCanvas, 0, 0);          // z-index 5
            embedImageInCanvas(compositeCanvas);
        }
        else if((itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")) && itDescript.toUpperCase().includes('COMPRESSION')){
        
            // Draw each hidden canvas onto the composite canvas following z-index order
            compositeContext.drawImage(hiddenTankTopCanvas, 0, 0);                  // z-index 1
            compositeContext.drawImage(hiddenTankTopBackCanvas, 0, 0);              // z-index 1
            compositeContext.drawImage(hiddenTankTopTemplateColor1Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopTemplateColor2Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopTemplateColor3Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopInternalFrontCanvas, 0, 0);     // z-index 4
            compositeContext.drawImage(hiddenTankTopBackHolesCanvas, 0, 0);         // z-index 4
            compositeContext.drawImage(hiddenTankTopFrontOutlineCanvas, 0, 0);      // z-index 4
            compositeContext.drawImage(hiddenTankTopInternalBackCanvas, 0, 0);      // z-index 4
            compositeContext.drawImage(hiddenTankTopCuffCanvas, 0, 0);              // z-index 5
            compositeContext.drawImage(hiddenTankTopBackCuffCanvas, 0, 0);          // z-index 5
            compositeContext.drawImage(hiddenTankTopBackRacerCuffCanvas, 0, 0);     // z-index 5
            embedImageInCanvas(compositeCanvas);
        }
        else{
            compositeContext.drawImage(hiddenTankTopCanvas, 0, 0);                  // z-index 1
            compositeContext.drawImage(hiddenTankTopBackCanvas, 0, 0);              // z-index 1
            compositeContext.drawImage(hiddenTankTopTemplateColor1Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopTemplateColor2Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopTemplateColor3Canvas, 0, 0);    // z-index 2
            compositeContext.drawImage(hiddenTankTopInternalFrontCanvas, 0, 0);     // z-index 4
            compositeContext.drawImage(hiddenTankTopInternalBackCanvas, 0, 0);      // z-index 4
            compositeContext.drawImage(hiddenTankTopCuffCanvas, 0, 0);              // z-index 5
            compositeContext.drawImage(hiddenTankTopBackCuffCanvas, 0, 0);          // z-index 5
            embedImageInCanvas(compositeCanvas);
        }

        
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

        // Convert the cropped canvas to a data URL and use it as the source for the thumbnail image
        thumbnailElement.src = croppedCanvas.toDataURL("image/png");
    }
    
    
    
    function selectTemplate(template, thumbnail) {
        templateCanvas1.width = templateCanvas1.width; // Resets the canvas
        templateCanvas2.width = templateCanvas2.width; // Resets the canvas
        templateCanvas3.width = templateCanvas3.width; // Resets the canvas
        const color1 = document.getElementById("selectedColor4").style.backgroundColor;
        const color2 = document.getElementById("selectedColor5").style.backgroundColor;
        const color3 = document.getElementById("selectedColor6").style.backgroundColor;

        const image = document.getElementById("NordLogo");
        const canvasFront = document.getElementById('TankTopCanvas');
        const context = canvasFront.getContext('2d');
        let color = context.fillStyle;
        color = color.toUpperCase();
        
        // Draw the selected template onto the hidden canvases
        if(itDescript.toUpperCase().includes("TANK")){
            switch (template.name) {
                case "Design 1":
                templateMCompressDesign1(templateContext1, 200, 100, 700, 100);
                break;

                case "Design 2":
                templateMCompressDesign2(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 3":
                templateMCompressDesign3(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 4":
                templateMCompressDesign4(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 5":
                templateMCompressDesign5(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 6":
                templateMCompressDesign6(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 7":
                templateMCompressDesign7(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                // Repeat for all other designs...
                case "No Template":
                return; // Exit early if there's no template
            }
        }
        else if(itDescript.toUpperCase().includes("COMPRESSION")){
            switch (template.name) {
                case "Design 1":
                templateWCompressDesign1(templateContext1, 200, 100, 700, 100);
                break;

                case "Design 2":
                templateWCompressDesign2(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 3":
                templateWCompressDesign3(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 4":
                templateWCompressDesign4(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 5":
                templateWCompressDesign5(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 6":
                templateWCompressDesign6(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 7":
                templateWCompressDesign7(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                // Repeat for all other designs...
                case "No Template":
                return; // Exit early if there's no template
            }
        }
        else{
            switch (template.name){
                case "Design 1":
                    if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
                        templateDesign1(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                    }
                    else{
                        templateDesign01(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                    }
                break;
                
                case "Design 2":
                templateDesign2(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 3":
                templateDesign3(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 4":
                templateDesign4(templateContext1, 200, 100, 700, 100);
                break;
                
                case "Design 5":
                templateDesign5(templateContext1, templateContext2, templateCanvas1.width, templateCanvas1.height, 200, 100, 700, 100);
                break;
                
                case "Design 6":
                templateDesign6(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 7":
                templateDesign7(templateContext1, templateContext2, templateContext3, 200, 100, 700, 100);
                break;
                
                case "Design 8":
                templateDesign8(templateContext1, templateCanvas1.width, templateCanvas1.height, 200, 100, 700, 100);
                break;
                
                case "Design 9":
                templateDesign9(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "Design 10":
                templateDesign10(templateContext1, templateContext2, 200, 100, 700, 100);
                break;
                
                case "No Template":
                break;
            }
        }

        if(color1){
            templateContext1.fillStyle = color1;
            templateContext1.fill();
        }
        if(color2){
            templateContext2.fillStyle = color2;
            templateContext2.fill();
        }
        if(color3){
            templateContext3.fillStyle = color3;
            templateContext3.fill();
        }

        const selectedPreview = document.getElementById("templatePreviewImage");
        selectedPreview.src = thumbnail.src;
        
        document.getElementById("templateLabel").textContent = template.name;
        selectedTemplate.name = template.name;
        selectColor(color, 'selectedColor1', 'colorDropdown1');
        
        toggleTemplateDropdown();
    }
    
    function toggleTemplateDropdown() {
        const dropdown = document.getElementById("templateOptions");
        dropdown.style.display = dropdown.style.display === "grid" ? "none" : "grid";
    }
    
    // Helper function to apply the selected color to the context
    function applyColor(context, color) {
        if (color) {
            context.fillStyle = color;
            context.fill();
        }
    }
    
    
   
    let selectedTemplate = { name: "No Design" };