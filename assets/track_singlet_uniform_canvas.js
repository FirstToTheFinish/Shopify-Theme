function drawTankTop(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels

    // Right shoulder section
    const shoulderLength = 15.875 * mmToPx;

    context.beginPath();
    context.moveTo(startX, startY); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
    const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
    context.lineTo(endShoulderX, endShoulderY); // Draw the shoulder line

    // Neckline dip
    const neckDipDepth = 1.5 * 10 * mmToPx;
    const neckDipSpan = 4.5 * 10 * mmToPx;

    const controlPointX = endShoulderX + neckDipSpan / 2; // Control point X (halfway of the span)
    const controlPointY = endShoulderY + neckDipDepth; // Control point Y (downward dip)

    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    const endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder

    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, endNeckY);

    context.strokeStyle = "#000000"; // Black line
    context.lineWidth = 0.05; // Line thickness
    context.stroke(); // Render the line and curve

    // Now, draw the right shoulder piece
    const rightShoulderStartX = endNeckX;
    const rightShoulderStartY = endNeckY;

    const rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
    const rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

    context.lineTo(rightEndShoulderX, rightEndShoulderY); // Draw the downward right shoulder line
    context.stroke();

    // Armhole section: Steep initial drop, then curve towards the endpoint
    const armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
    const armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;

    // Control point for steep drop at the beginning
    const armholeControlX = rightEndShoulderX; // Keep X at the start
    const armholeControlY = rightEndShoulderY + (4.75 / 1.5) * 10 * mmToPx;

    // Draw a quadratic curve with a steep drop and smooth curve to the endpoint
    context.quadraticCurveTo(armholeControlX, armholeControlY, armholeEndX, armholeEndY);
    context.stroke(); // Render the armhole curve

    // Right side torso piece
    const torsoLength = 0.4 * 10 * mmToPx; // 0.4 cm converted to pixels
    const torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians

    const torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
    const torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component

    context.lineTo(torsoEndX, torsoEndY); // Draw the torso line
    context.stroke(); // Render the torso line

    // Curve of the torso
    const curveSpan = 10.5 * 10 * mmToPx;
    const inwardDip = 0.85 * 10 * mmToPx; 

    // Control point for the inward dip
    const curveControlX = torsoEndX - inwardDip; 
    const curveControlY = torsoEndY + curveSpan / 2; 

    const curveEndX = torsoEndX; // Same X position as the start of the curve
    const curveEndY = torsoEndY + curveSpan;

    // Draw the inward curve for the torso
    context.quadraticCurveTo(curveControlX, curveControlY, curveEndX, curveEndY);
    context.stroke(); // Render the curve

    // Draw the bottom
    const bottomSpan = 10.55 * 10 * mmToPx;
    const bottomDip = 0.75 * 10 * mmToPx;

    const bottomControlX = curveEndX - bottomSpan / 2;
    const bottomControlY = curveEndY + bottomDip;

    const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
    const bottomEndY = curveEndY; // End at the same Y level as the start

    // Draw the bottom curve
    context.quadraticCurveTo(bottomControlX, bottomControlY, bottomEndX, bottomEndY);
    context.stroke(); // Render the bottom curve

    // LEFT side torso piece
    // Curve of the left torso (move this section before drawing the upward torso line)
    const leftCurveSpan = 10.5 * 10 * mmToPx;
    const leftInwardDip = 0.85 * 10 * mmToPx; 

    // Control point for the inward dip on the left side
    const leftCurveControlX = bottomEndX + leftInwardDip;
    const leftCurveControlY = bottomEndY - leftCurveSpan / 2;

    const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
    const leftCurveEndY = bottomEndY - leftCurveSpan; 

    // Draw the inward curve for the left torso
    context.quadraticCurveTo(leftCurveControlX, leftCurveControlY, leftCurveEndX, leftCurveEndY);
    context.lineWidth = 0.2;
    context.stroke(); // Render the left torso curve

    // Now draw the upward torso line after the inward curve
    const leftTorsoLength = 0.40 * 10 * mmToPx; 
    const leftTorsoAngle = 100 * (Math.PI / 180);

    const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
    const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component

    context.lineTo(leftTorsoEndX, leftTorsoEndY); // Draw the upward torso line
    context.stroke(); // Render the left torso line

    // LEFT armhole section: Mirrored curve upwards to connect to the left shoulder
    const leftArmholeEndX = startX; // This is the ending X coordinate (left shoulder start)
    const leftArmholeEndY = startY; // This is the ending Y coordinate (left shoulder start)

    // Control point for the left armhole (to create a wide parabola at first and then quickly climb upwards)
    const leftArmholeControlX = leftTorsoEndX + 1.75 * 10 * mmToPx; // Start wide, extending to the left
    const leftArmholeControlY = leftTorsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder

    // Draw the quadratic curve for the left armhole (upwards and inward)
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY);
    context.stroke(); // Render the left armhole curve

    context.closePath();
  }

  function drawTankTopMask(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels

    // Right shoulder section
    const shoulderLength = 15.875 * mmToPx;

    context.moveTo(startX, startY); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
    const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
    context.lineTo(endShoulderX, endShoulderY); // Draw the shoulder line

    // Neckline dip
    const neckDipDepth = 1.5 * 10 * mmToPx;
    const neckDipSpan = 4.5 * 10 * mmToPx;

    const controlPointX = endShoulderX + neckDipSpan / 2; // Control point X (halfway of the span)
    const controlPointY = endShoulderY + neckDipDepth; // Control point Y (downward dip)

    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    const endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder

    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, endNeckY);

    context.strokeStyle = "#000000"; // Black line
    context.lineWidth = 0.05; // Line thickness
    context.stroke(); // Render the line and curve

    // Now, draw the right shoulder piece
    const rightShoulderStartX = endNeckX;
    const rightShoulderStartY = endNeckY;

    const rightEndShoulderX = rightShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
    const rightEndShoulderY = rightShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

    context.lineTo(rightEndShoulderX, rightEndShoulderY); // Draw the downward right shoulder line
    context.stroke();

    // Armhole section: Steep initial drop, then curve towards the endpoint
    const armholeEndX = rightEndShoulderX + 1.75 * 10 * mmToPx;
    const armholeEndY = rightEndShoulderY + 4.75 * 10 * mmToPx;

    // Control point for steep drop at the beginning
    const armholeControlX = rightEndShoulderX; // Keep X at the start
    const armholeControlY = rightEndShoulderY + (4.75 / 1.5) * 10 * mmToPx;

    // Draw a quadratic curve with a steep drop and smooth curve to the endpoint
    context.quadraticCurveTo(armholeControlX, armholeControlY, armholeEndX, armholeEndY);
    context.stroke(); // Render the armhole curve

    // Right side torso piece
    const torsoLength = 0.4 * 10 * mmToPx; // 0.4 cm converted to pixels
    const torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians

    const torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
    const torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component

    context.lineTo(torsoEndX, torsoEndY); // Draw the torso line
    context.stroke(); // Render the torso line

    // Curve of the torso
    const curveSpan = 10.5 * 10 * mmToPx;
    const inwardDip = 0.85 * 10 * mmToPx; 

    // Control point for the inward dip
    const curveControlX = torsoEndX - inwardDip; 
    const curveControlY = torsoEndY + curveSpan / 2; 

    const curveEndX = torsoEndX; // Same X position as the start of the curve
    const curveEndY = torsoEndY + curveSpan;

    // Draw the inward curve for the torso
    context.quadraticCurveTo(curveControlX, curveControlY, curveEndX, curveEndY);
    context.stroke(); // Render the curve

    // Draw the bottom
    const bottomSpan = 10.55 * 10 * mmToPx;
    const bottomDip = 0.75 * 10 * mmToPx;

    const bottomControlX = curveEndX - bottomSpan / 2;
    const bottomControlY = curveEndY + bottomDip;

    const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
    const bottomEndY = curveEndY; // End at the same Y level as the start

    // Draw the bottom curve
    context.quadraticCurveTo(bottomControlX, bottomControlY, bottomEndX, bottomEndY);
    context.stroke(); // Render the bottom curve

    // LEFT side torso piece
    // Curve of the left torso (move this section before drawing the upward torso line)
    const leftCurveSpan = 10.5 * 10 * mmToPx;
    const leftInwardDip = 0.85 * 10 * mmToPx; 

    // Control point for the inward dip on the left side
    const leftCurveControlX = bottomEndX + leftInwardDip;
    const leftCurveControlY = bottomEndY - leftCurveSpan / 2;

    const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
    const leftCurveEndY = bottomEndY - leftCurveSpan; 

    // Draw the inward curve for the left torso
    context.quadraticCurveTo(leftCurveControlX, leftCurveControlY, leftCurveEndX, leftCurveEndY);
    context.stroke(); // Render the left torso curve

    // Now draw the upward torso line after the inward curve
    const leftTorsoLength = 0.40 * 10 * mmToPx; 
    const leftTorsoAngle = 100 * (Math.PI / 180);

    const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
    const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component

    context.lineTo(leftTorsoEndX, leftTorsoEndY); // Draw the upward torso line
    context.stroke(); // Render the left torso line

    // LEFT armhole section: Mirrored curve upwards to connect to the left shoulder
    const leftArmholeEndX = startX; // This is the ending X coordinate (left shoulder start)
    const leftArmholeEndY = startY; // This is the ending Y coordinate (left shoulder start)

    // Control point for the left armhole (to create a wide parabola at first and then quickly climb upwards)
    const leftArmholeControlX = leftTorsoEndX + 1.75 * 10 * mmToPx; // Start wide, extending to the left
    const leftArmholeControlY = leftTorsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder

    // Draw the quadratic curve for the left armhole (upwards and inward)
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY);
    context.stroke(); // Render the left armhole curve
  }

  function drawCuffs(context, startX, startY) {
      context.lineWidth = 0.05; // Line thickness
      const mmToPx = 3.7795275591; // Convert mm to pixels
      const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
      const shoulderLength = 15.875 * mmToPx;

      // Step 1: Move to the right shoulder cuff
      const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge

      // Calculate the endpoint along the armhole's upward path (slightly slanted like the original armhole)
      const endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
      const endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

      context.beginPath();
      context.moveTo(startX, startY); // Start at the bottom of the armhole
      context.lineTo(endArmholeX, endArmholeY); // Draw the upward part of the armhole cuff
      context.stroke();

      // Step 2: Now, draw the curve down and inward to parallel the right armhole
      const rightEndShoulderX = endArmholeX; // This is where the cuff ends at the top
      const rightEndShoulderY = endArmholeY;

      // Adjust for the cuff curve to go inward (leftwards)
      const cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Flip the direction to the left
      const cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset; // Move down with an inset

      // Control point for the cuff curve (inward to the left)
      const cuffControlX = rightEndShoulderX; // Keep X at the cuff start
      const cuffControlY = rightEndShoulderY + (5 / 1.2) * 10 * mmToPx - inset; // Adjust Y for the inset

      // Draw the cuff curve going inward to the left
      context.quadraticCurveTo(cuffControlX, cuffControlY, cuffArmholeEndX, cuffArmholeEndY);
      context.stroke();

      // Now draw the upward torso line after the inward curve
      const rightTorsoLength = 0.35 * 10 * mmToPx; 
      const rightTorsoAngle = 100 * (Math.PI / 180);

      const rightTorsoEndX = cuffArmholeEndX - rightTorsoLength * Math.cos(Math.PI - rightTorsoAngle); // X component
      const rightTorsoEndY = cuffArmholeEndY - rightTorsoLength * Math.sin(Math.PI - rightTorsoAngle); // Y component

      context.lineTo(rightTorsoEndX, rightTorsoEndY); // Draw the upward torso line
      context.stroke(); // Render the right torso line

      // right armhole section: Mirrored curve upwards to connect to the right shoulder
      const rightArmholeEndX = startX; // This is the ending X coordinate (right shoulder start)
      const rightArmholeEndY = startY; // This is the ending Y coordinate (right shoulder start)

      // Control point for the right armhole (to create a wide parabola at first and then quickly climb upwards)
      const rightArmholeControlX = rightTorsoEndX + 1.75 * 10 * mmToPx; // Start wide, extending to the right
      const rightArmholeControlY = rightTorsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the right shoulder

      // Draw the quadratic curve for the right armhole (upwards and inward)
      context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightArmholeEndX, rightArmholeEndY);
      context.stroke(); // Render the right armhole curve

    
      // Step 3: Begin Neckline Cuff
      const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
      context.moveTo(endShoulderX, endShoulderY);

      // Neckline dip
      const neckDipDepth = 4.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
      const neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm

      // Control points for the Bézier curve
      const cp1X = endShoulderX + neckDipSpan * -0.125;  // Control point 1 close to the start, for steep drop
      const cp1Y = endShoulderY + neckDipDepth * 1.2;  // Drop steeply near the start

      const cp2X = endShoulderX + neckDipSpan * 1.125;  // Control point 2 close to the end, for steep rise
      const cp2Y = endShoulderY + neckDipDepth * 1.2;  // Rise steeply near the end

      // Ending point (same level as starting Y, but horizontally shifted by neckDipSpan)
      const endNeckX = endShoulderX + neckDipSpan;
      const endNeckY = endShoulderY;  // End at the same Y level as the start

      // Begin drawing the Bézier curve for the neckline dip
      context.moveTo(endShoulderX, endShoulderY);

      // Use a cubic Bézier curve for more control over the curve shape
      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endNeckX, endNeckY);
      context.stroke();

      //Step 4: Draw second part of neck cuff
      const leftShoulderStartX = endNeckX;
      const leftShoulderStartY = endNeckY;

      let leftEndShoulderX = leftShoulderStartX + 4 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
      let leftEndShoulderY = leftShoulderStartY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component

      context.lineTo(leftEndShoulderX, leftEndShoulderY); // Draw the downward left shoulder line
      context.stroke();

      context.bezierCurveTo(cp2X * 1.01, cp1Y * 1.05, cp1X * .99, cp2Y * 1.05, endNeckX - neckDipSpan - 3.5 * mmToPx, endNeckY + 2.25 * mmToPx);
      context.stroke();

      context.lineTo(endShoulderX, endShoulderY);
      context.stroke();

      //Step 5: Draw the left shoulder/armhole cuff
      leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

      context.moveTo(leftEndShoulderX, leftEndShoulderY); // Draw the downward right shoulder line

      // Armhole section: Steep initial drop, then curve towards the endpoint
      const armholeEndX = leftEndShoulderX + 1.75 * 10 * mmToPx;
      const armholeEndY = leftEndShoulderY + 4.75 * 10 * mmToPx;

      // Control point for steep drop at the beginning
      const armholeControlX = leftEndShoulderX; // Keep X at the start
      const armholeControlY = leftEndShoulderY + (4.75 / 1.5) * 10 * mmToPx;

      // Draw a quadratic curve with a steep drop and smooth curve to the endpoint
      context.quadraticCurveTo(armholeControlX, armholeControlY, armholeEndX, armholeEndY);
      context.stroke(); // Render the armhole curve

      // left side torso piece
      const torsoLength = 3.5 * mmToPx; // 0.4 cm converted to pixels
      const torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians

      const torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
      const torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component

      context.lineTo(torsoEndX, torsoEndY); // Draw the torso line
      context.stroke(); // Render the torso line

      //Step 6: Draw the second half of the left armhole cuff
      const leftArmholeEndX = leftEndShoulderX - 7 * mmToPx * Math.sin((30 * Math.PI) / 180);
      const leftArmholeEndY = leftEndShoulderY - 3.75 * mmToPx * Math.sin((30 * Math.PI) / 180);

      // Control point for the left armhole (to create a wide parabola at first and then quickly climb upwards)
      const leftArmholeControlX = torsoEndX - 1.95 * 10 * mmToPx; // Start wide, extending to the left
      const leftArmholeControlY = torsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder

      // Draw the quadratic curve for the left armhole (upwards and inward)
      context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY);
      context.stroke(); // Render the left armhole curve
      context.closePath();

    
  }

  function drawInternal(context, startX, startY){
    context.lineWidth = 0.05; // Line thickness
    const mmToPx = 3.7795275591; // Convert mm to pixels

    context.strokeStyle = "#000000"; // Black line

    // Right shoulder section
    const shoulderLength = 15.875 * mmToPx;

    context.beginPath();
    const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
    const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
    context.moveTo(endShoulderX, endShoulderY);

    // Neckline dip
    let neckDipDepth = 1.5 * 10 * mmToPx;
    let neckDipSpan = 4.5 * 10 * mmToPx;

    const controlPointX = endShoulderX + neckDipSpan / 2; // Control point X (halfway of the span)
    const controlPointY = endShoulderY + neckDipDepth; // Control point Y (downward dip)

    let endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder

    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, endNeckY);
    context.stroke();

    // Neckline dip
    neckDipDepth = 4.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
    neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm

    // Control points for the Bézier curve
    const cp1X = endShoulderX + neckDipSpan * -0.125;  // Control point 1 close to the start, for steep drop
    const cp1Y = endShoulderY + neckDipDepth * 1.2;  // Drop steeply near the start

    const cp2X = endShoulderX + neckDipSpan * 1.125;  // Control point 2 close to the end, for steep rise
    const cp2Y = endShoulderY + neckDipDepth * 1.2;  // Rise steeply near the end

    // Ending point (same level as starting Y, but horizontally shifted by neckDipSpan)
    endNeckX = endShoulderX + neckDipSpan;
    endNeckY = endShoulderY;  // End at the same Y level as the start


    // Use a cubic Bézier curve for more control over the curve shape
    context.bezierCurveTo(cp2X, cp1Y, cp1X, cp2Y, endShoulderX, endShoulderY);
    context.stroke();

    context.closePath();
  }

  // Function to draw pinholes on canvas7 that only show above canvas4
  function drawPinholes(context, canvasWidth, canvasHeight) {
    context.lineWidth = 0.05; // Line thickness
    const pinholeRadius = .5; // radius of the pinholes in pixels
    const spacing = 15; // spacing between pinholes in pixels

    // Set fill style to make the pinholes visible
    context.fillStyle = "black";

    // Loop over the canvas width and height, creating evenly spaced holes
    for (let y = spacing; y < canvasHeight; y += spacing) {
      for (let x = spacing; x < canvasWidth; x += spacing) {
        context.beginPath();
        context.arc(x, y, pinholeRadius, 0, Math.PI * 2, false);
        context.fill(); // Fill each circle to create the hole
        context.closePath();
      }
    }
  }

  function applyTankTopMask(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0.05;

    // Draw the front tank top shape
    drawTankTopMask(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawTankTopMask(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
}



  // Restrict the pinholes to the tank top shape drawn on canvas4
  function applyPinHoleMask(context, startX, startY) {
    // Copy the tank top outline from canvas4 to canvas7
    context.beginPath();
    context.lineWidth = 0.05;
    drawTankTop(context, startX, startY); // Recreate the tank top shape
    context.clip(); // Restrict the drawing area to the tank top shape
  }

  function drawBackCuffs(context, startX, startY){
    context.lineWidth = 0.05; // Line thickness
      const mmToPx = 3.7795275591; // Convert mm to pixels
      const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
      const shoulderLength = 15.875 * mmToPx;

      // Step 1: Move to the right shoulder cuff
      const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge

      // Calculate the endpoint along the armhole's upward path (slightly slanted like the original armhole)
      const endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
      const endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

      context.beginPath();
      context.moveTo(startX, startY); // Start at the bottom of the armhole
      context.lineTo(endArmholeX, endArmholeY); // Draw the upward part of the armhole cuff
      context.stroke();

      // Step 2: Now, draw the curve down and inward to parallel the right armhole
      let rightEndShoulderX = endArmholeX; // This is where the cuff ends at the top
      let rightEndShoulderY = endArmholeY;

      // Adjust for the cuff curve to go inward (leftwards)
      let cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Flip the direction to the left
      let cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset; // Move down with an inset

      // Control point for the cuff curve (inward to the left)
      let cuffControlX = rightEndShoulderX; // Keep X at the cuff start
      let cuffControlY = rightEndShoulderY + (5 / 1.2) * 10 * mmToPx - inset; // Adjust Y for the inset

      // Draw the cuff curve going inward to the left
      context.quadraticCurveTo(cuffControlX, cuffControlY, cuffArmholeEndX, cuffArmholeEndY);
      context.stroke();

      // Now draw the upward torso line after the inward curve
      let rightTorsoLength = 0.35 * 10 * mmToPx; 
      let rightTorsoAngle = 100 * (Math.PI / 180);

      let rightTorsoEndX = cuffArmholeEndX - rightTorsoLength * Math.cos(Math.PI - rightTorsoAngle); // X component
      let rightTorsoEndY = cuffArmholeEndY - rightTorsoLength * Math.sin(Math.PI - rightTorsoAngle); // Y component

      context.lineTo(rightTorsoEndX, rightTorsoEndY); // Draw the upward torso line
      context.stroke(); // Render the right torso line

      // right armhole section: Mirrored curve upwards to connect to the right shoulder
      let rightArmholeEndX = startX; // This is the ending X coordinate (right shoulder start)
      let rightArmholeEndY = startY; // This is the ending Y coordinate (right shoulder start)

      // Control point for the right armhole (to create a wide parabola at first and then quickly climb upwards)
      let rightArmholeControlX = rightTorsoEndX + 1.75 * 10 * mmToPx; // Start wide, extending to the right
      let rightArmholeControlY = rightTorsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the right shoulder

      // Draw the quadratic curve for the right armhole (upwards and inward)
      context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightArmholeEndX, rightArmholeEndY);
      context.stroke(); // Render the right armhole curve


      //Step 3: Draw the back neck cuff
      const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
      context.moveTo(endShoulderX, endShoulderY);

      // Neckline dip
      const neckDipDepth = 1.5 * 10 * mmToPx;
      const neckDipSpan = 4.5 * 10 * mmToPx;

      const controlPointX = endShoulderX + neckDipSpan / 2; // Control point X (halfway of the span)
      const controlPointY = endShoulderY + neckDipDepth; // Control point Y (downward dip)

      const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
      const endNeckY = endShoulderY; // End Y returns to the same Y level as the shoulder

      // Draw the quadratic curve for the neckline dip
      context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, endNeckY);

      let endNeckCuffX = endNeckX + 4 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
      let endNeckCuffY = endNeckY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
      context.lineTo(endNeckCuffX, endNeckCuffY);
      context.stroke();

      endNeckCuffX = endShoulderX - 4 * mmToPx *  Math.cos((30 * Math.PI) / 180);
      endNeckCuffY = endShoulderY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180);

      context.quadraticCurveTo(controlPointX, controlPointY + 4 * mmToPx, endNeckCuffX, endNeckCuffY);
      context.stroke();

      context.lineTo(endShoulderX, endShoulderY);
      context.stroke();

      const leftShoulderStartX = endNeckX;
      const leftShoulderStartY = endNeckY;

      let leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      let leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component


      //Step 4: Draw the left shoulder/armhole cuff
      context.moveTo(leftEndShoulderX, leftEndShoulderY); // Draw the downward right shoulder line

      // Armhole section: Steep initial drop, then curve towards the endpoint
      const armholeEndX = leftEndShoulderX + 1.75 * 10 * mmToPx;
      const armholeEndY = leftEndShoulderY + 4.75 * 10 * mmToPx;

      // Control point for steep drop at the beginning
      const armholeControlX = leftEndShoulderX; // Keep X at the start
      const armholeControlY = leftEndShoulderY + (4.75 / 1.5) * 10 * mmToPx;

      // Draw a quadratic curve with a steep drop and smooth curve to the endpoint
      context.quadraticCurveTo(armholeControlX, armholeControlY, armholeEndX, armholeEndY);
      context.stroke(); // Render the armhole curve

      // left side torso piece
      const torsoLength = 3.5 * mmToPx; // 0.4 cm converted to pixels
      const torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians

      const torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
      const torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component

      context.lineTo(torsoEndX, torsoEndY); // Draw the torso line
      context.stroke(); // Render the torso line

      //Step 5: Draw the second half of the left armhole cuff
      const leftArmholeEndX = leftEndShoulderX - 7 * mmToPx * Math.sin((30 * Math.PI) / 180);
      const leftArmholeEndY = leftEndShoulderY - 3.75 * mmToPx * Math.sin((30 * Math.PI) / 180);

      // Control point for the left armhole (to create a wide parabola at first and then quickly climb upwards)
      const leftArmholeControlX = torsoEndX - 1.95 * 10 * mmToPx; // Start wide, extending to the left
      const leftArmholeControlY = torsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder

      // Draw the quadratic curve for the left armhole (upwards and inward)
      context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY);
      context.stroke(); // Render the left armhole curve

      context.closePath();
  }

  function drawBackRacerCuffs(context, startX, startY){
    context.lineWidth = 0.05; // Line thickness
      const mmToPx = 3.7795275591; // Convert mm to pixels
      const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
      const shoulderLength = 15.875 * mmToPx;

      // Step 1: Move to the right shoulder cuff
      const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge

      // Calculate the endpoint along the armhole's upward path (slightly slanted like the original armhole)
      let endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
      let endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

      context.beginPath();
      context.moveTo(startX, startY); // Start at the bottom of the armhole
      context.lineTo(endArmholeX, endArmholeY); // Draw the upward part of the armhole cuff
      context.stroke();

      // Step 2: Racerback cuff (Left)
      let rightEndShoulderX = endArmholeX; // Recalculate the starting point
      let rightEndShoulderY = endArmholeY;

      let cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Same end point as before
      let cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset;

      // First control point
      let cp1X = rightEndShoulderX + 3 * 10 * mmToPx; // Adjust control point 1 to pull curve inwards more sharply
      let cp1Y = rightEndShoulderY + 1.5 * 10 * mmToPx; // Adjust Y for sharper start

      // Second control point
      let cp2X = cuffArmholeEndX + 4 * 10 * mmToPx; // Control closer to the end
      let cp2Y = cuffArmholeEndY - .25 * 10 * mmToPx; // Lower Y adjustment

      // Draw the Bezier curve
      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, cuffArmholeEndX, cuffArmholeEndY);
      context.stroke(); // Render the curve

      //Step 3: Finish off left racerback cuff
      // Now draw the upward torso line after the inward curve
      let rightTorsoLength = 0.35 * 10 * mmToPx; 
      let rightTorsoAngle = 100 * (Math.PI / 180);

      let rightTorsoEndX = cuffArmholeEndX - rightTorsoLength * Math.cos(Math.PI - rightTorsoAngle); // X component
      let rightTorsoEndY = cuffArmholeEndY - rightTorsoLength * Math.sin(Math.PI - rightTorsoAngle); // Y component

      context.lineTo(rightTorsoEndX, rightTorsoEndY); // Draw the upward torso line
      context.stroke(); // Render the right torso line

      // Draw the Bezier curve
      context.bezierCurveTo(cp2X * .985, cp2Y * .975, cp1X * .98, cp1Y * .975, startX, startY);
      context.stroke(); // Render the curve

      // Step 4: Racerback cuff (Right)
      const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

      const neckDipDepth = 4.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
      const neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm
      const endNeckX = endShoulderX + neckDipSpan;
      const endNeckY = endShoulderY;

      const leftShoulderStartX = endNeckX;
      const leftShoulderStartY = endNeckY;

      let leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      let leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

      context.moveTo(leftEndShoulderX, leftEndShoulderY); // Draw the downward right shoulder line
    
      // Calculate the endpoint along the armhole's upward path (slightly slanted like the original armhole)
      endArmholeX = leftEndShoulderX - armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
      endArmholeY = leftEndShoulderY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

      context.lineTo(endArmholeX, endArmholeY); // Draw the upward part of the armhole cuff
      context.stroke();

      leftEndShoulderX = endArmholeX; // Recalculate the starting point
      leftEndShoulderY = endArmholeY;

      cuffArmholeEndX = leftEndShoulderX + 1.65 * 10 * mmToPx + inset; // Same end point as before
      cuffArmholeEndY = leftEndShoulderY + 5.7 * 10 * mmToPx - inset;

      // First control point
      cp1X = leftEndShoulderX - 3  * 10 * mmToPx; // Adjust control point 1 to pull curve inwards more sharply
      cp1Y = leftEndShoulderY + 1.5 * 10 * mmToPx; // Adjust Y for sharper start

      // Second control point
      cp2X = cuffArmholeEndX - 4 * 10 * mmToPx; // Control closer to the end
      cp2Y = cuffArmholeEndY - 0.25 * 10 * mmToPx; // Lower Y adjustment

      // Draw the Bezier curve

      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, cuffArmholeEndX, cuffArmholeEndY);
      context.stroke(); // Render the curve

      //Step 5: Finish racer cuff (right)
      // Now draw the upward torso line after the inward curve
      leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

      let leftTorsoLength = 0.35 * 10 * mmToPx; 
      let leftTorsoAngle = 100 * (Math.PI / 180);

      let leftTorsoEndX = cuffArmholeEndX + leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
      let leftTorsoEndY = cuffArmholeEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component

      context.lineTo(leftTorsoEndX, leftTorsoEndY); // Draw the upward torso line
      context.stroke(); // Render the right torso line

      // Draw the Bezier curve
      context.bezierCurveTo(cp2X * 1.015, cp2Y * .975, cp1X * 1.0175, cp1Y * .975, leftEndShoulderX, leftEndShoulderY);
      context.stroke(); // Render the curve
      context.closePath();
  }

  function drawBackInternal(context, startX, startY){
    context.lineWidth = 0.05; // Line thickness
      const mmToPx = 3.7795275591; // Convert mm to pixels
      const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
      const shoulderLength = 15.875 * mmToPx;

      // Step 1: Move to the right shoulder cuff
      const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge

      // Calculate the endpoint along the armhole's upward path (slightly slanted like the original armhole)
      let endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
      let endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

      context.beginPath();
      context.moveTo(startX, startY); // Start at the bottom of the armhole
      context.lineTo(endArmholeX, endArmholeY); // Draw the upward part of the armhole cuff
      context.stroke();

      // Step 2: Racerback cuff (Left)
      let rightEndShoulderX = endArmholeX; // Recalculate the starting point
      let rightEndShoulderY = endArmholeY;

      let cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Same end point as before
      let cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset;

      // First control point
      let cp1X = rightEndShoulderX + 3 * 10 * mmToPx; // Adjust control point 1 to pull curve inwards more sharply
      let cp1Y = rightEndShoulderY + 1.5 * 10 * mmToPx; // Adjust Y for sharper start

      // Second control point
      let cp2X = cuffArmholeEndX + 4 * 10 * mmToPx; // Control closer to the end
      let cp2Y = cuffArmholeEndY - .25 * 10 * mmToPx; // Lower Y adjustment

      // Draw the Bezier curve
      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, cuffArmholeEndX, cuffArmholeEndY);
      context.stroke(); // Render the curve
      
      // Now draw the upward torso line after the inward curve
      let rightTorsoLength = 0.35 * 10 * mmToPx; 
      let rightTorsoAngle = 100 * (Math.PI / 180);

      let rightTorsoEndX = cuffArmholeEndX - rightTorsoLength * Math.cos(Math.PI - rightTorsoAngle); // X component
      let rightTorsoEndY = cuffArmholeEndY - rightTorsoLength * Math.sin(Math.PI - rightTorsoAngle); // Y component

      context.lineTo(rightTorsoEndX, rightTorsoEndY); // Draw the upward torso line
      context.stroke(); // Render the right torso line

      // right armhole section: Mirrored curve upwards to connect to the right shoulder
      let rightArmholeEndX = startX; // This is the ending X coordinate (right shoulder start)
      let rightArmholeEndY = startY; // This is the ending Y coordinate (right shoulder start)

      // Control point for the right armhole (to create a wide parabola at first and then quickly climb upwards)
      let rightArmholeControlX = rightTorsoEndX + 1.75 * 10 * mmToPx; // Start wide, extending to the right
      let rightArmholeControlY = rightTorsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the right shoulder

      // Draw the quadratic curve for the right armhole (upwards and inward)
      context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightArmholeEndX, rightArmholeEndY);
      context.stroke(); // Render the right armhole curve

      // Step 4: Racerback cuff (Right)
      const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

      const neckDipDepth = 4.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
      const neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm
      const endNeckX = endShoulderX + neckDipSpan;
      const endNeckY = endShoulderY;

      const leftShoulderStartX = endNeckX;
      const leftShoulderStartY = endNeckY;

      let leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
      let leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component

      context.moveTo(leftEndShoulderX, leftEndShoulderY); // Draw the downward right shoulder line
    
      // Calculate the endpoint along the armhole's upward path (slightly slanted like the original armhole)
      endArmholeX = leftEndShoulderX - armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
      endArmholeY = leftEndShoulderY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

      context.lineTo(endArmholeX, endArmholeY); // Draw the upward part of the armhole cuff
      context.stroke();

      leftEndShoulderX = endArmholeX; // Recalculate the starting point
      leftEndShoulderY = endArmholeY;

      cuffArmholeEndX = leftEndShoulderX + 1.65 * 10 * mmToPx + inset; // Same end point as before
      cuffArmholeEndY = leftEndShoulderY + 5.7 * 10 * mmToPx - inset;

      // First control point
      cp1X = leftEndShoulderX - 2.84  * 10 * mmToPx; // Adjust control point 1 to pull curve inwards more sharply
      cp1Y = leftEndShoulderY + 1.6 * 10 * mmToPx; // Adjust Y for sharper start

      // Second control point
      cp2X = cuffArmholeEndX - 3.84 * 10 * mmToPx; // Control closer to the end
      cp2Y = cuffArmholeEndY - 0.25 * 10 * mmToPx; // Lower Y adjustment

      // Draw the Bezier curve

      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, cuffArmholeEndX, cuffArmholeEndY);
      context.stroke(); // Render the curve

      //Step 5: Draw the second half of the left armhole cuff
      const leftArmholeEndX = leftEndShoulderX - 7 * mmToPx * Math.sin((30 * Math.PI) / 180);
      const leftArmholeEndY = leftEndShoulderY - 3.75 * mmToPx * Math.sin((30 * Math.PI) / 180);

      // Control point for the left armhole (to create a wide parabola at first and then quickly climb upwards)
      const leftArmholeControlX = cuffArmholeEndX - 1.95 * 10 * mmToPx; // Start wide, extending to the left
      const leftArmholeControlY = cuffArmholeEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder

      // Draw the quadratic curve for the left armhole (upwards and inward)
      context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftEndShoulderX, leftEndShoulderY);
      context.stroke(); // Render the left armhole curve

      context.closePath();
  }

  function drawWCompressTankTop(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;

    context.beginPath();
    context.moveTo(startX, startY); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.lineTo(endShoulderX, startY); // Draw the shoulder line

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 44 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * 0.75; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)

    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(controlPointX, controlPointY, (endShoulderX + endNeckX) / 2, neckDipDepth);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.25; // Control point X (halfway of the span)
    controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, startY);

    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY;
    context.lineTo(leftShoulderEndX, leftShoulderEndY);
    context.lineTo(leftShoulderEndX + 5, leftShoulderEndY + 135);


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135 ;
    const leftArmholeControlX = leftArmholeEndX + 5;
    const leftArmholeControlY = leftArmholeEndY + 45;
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX + 40, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 15, leftTorsoStartY + 390);
    context.lineTo(startX + (leftShoulderEndX - (leftTorsoStartX + 15)),  leftTorsoStartY + 390);

    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;

    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX - 40, rightArmholeEndY + 70);

    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, startX - 5, startY + 135);
    context.lineTo(startX, startY);

    context.stroke();

    context.closePath();
  }

  function drawWCompressBackTankTop(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;

    context.beginPath();

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.moveTo(startX, startY + 12.5);
    context.lineTo(endShoulderX, startY);

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 12 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * .925; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX, controlPointY, ((endShoulderX + endNeckX) / 2), neckDipDepth);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.075; // Control point X (halfway of the span)
    controlPointY = neckDipDepth; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, startY);

    context.lineTo(endNeckX + shoulderLength, startY + 12.5);

    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY + 12.5;


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135;

    let cp1X = leftShoulderEndX - 150;
    let cp1Y = leftArmholeEndY + 10;
    let cp2X = leftShoulderEndX - 30;
    let cp2Y = leftArmholeEndY + 70;
    context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, leftArmholeEndX + 40, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 15, leftTorsoStartY + 390 - 12.5);
    context.lineTo(startX + (leftShoulderEndX - (leftTorsoStartX + 15)),  leftTorsoStartY + 390 - 12.5);

    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;

    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX - 40, leftArmholeEndY + 70);

    cp1X = startX + 150;
    cp1Y = leftArmholeEndY + 10;
    cp2X = startX + 30;
    cp2Y = leftArmholeEndY + 70;
    context.bezierCurveTo(cp2X, cp2Y, cp1X, cp1Y, startX, startY + 12.5);

    context.stroke();

    context.closePath();
  }

  function drawWCompressCuffs(context, startX, startY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    context.strokeStyle = 'black';
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;

    context.beginPath();
    context.moveTo(startX, startY); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    const rightArmCuffStartX = startX - (shoulderLength / 2.5);
   
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 44 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * 0.75; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)

    

    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY;

    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135 ;
    const leftArmholeControlX = leftArmholeEndX + 5;
    const leftArmholeControlY = leftArmholeEndY + 45;
    //context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX + 40, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    //context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 15, leftTorsoStartY + 390);
    //context.lineTo(startX + (leftShoulderEndX - (leftTorsoStartX + 15)),  leftTorsoStartY + 390);

    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 17.5;
    const rightArmholeControlY = rightArmholeEndY + 40;
    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;
    
    const c = shoulderLength / 2.5;
    context.lineTo(rightArmCuffStartX, startY); // Draw the shoulder line
    context.lineTo(rightArmCuffStartX - 5, startY + 135);
    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightArmholeEndX - 40 - c * Math.sin((30 * Math.PI) / 180), rightArmholeEndY + 70 - c * Math.cos((30 * Math.PI) / 180));
    context.lineTo(rightArmholeEndX - 40, rightArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeEndX - 5, rightArmholeEndY + 45, startX - 5, startY + 135);
    context.lineTo(startX, startY);
    context.moveTo(endShoulderX, startY);

    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(controlPointX, controlPointY, (endShoulderX + endNeckX) / 2, neckDipDepth);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.25; // Control point X (halfway of the span)
    controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, startY);
    context.moveTo(endNeckX + shoulderLength, startY);
    context.lineTo(leftShoulderEndX + (shoulderLength / 2.5), startY);
    context.lineTo(leftShoulderEndX + 5 + (shoulderLength / 2.5), startY + 135);
    context.quadraticCurveTo(leftArmholeEndX + 17.5, leftArmholeEndY + 40, leftArmholeEndX + 40 + c * Math.sin((30 * Math.PI) / 180), leftArmholeEndY + 70 - c * Math.cos((30 * Math.PI) / 180));
    context.lineTo(leftArmholeEndX + 40, leftArmholeEndY + 70);
    context.quadraticCurveTo(leftArmholeEndX + 5, leftArmholeEndY + 45, leftShoulderEndX + 5, startY + 135);
    context.lineTo(leftShoulderEndX, startY);
    context.moveTo(endNeckX, startY);
    context.lineTo(endNeckX - (shoulderLength / 2.5), startY);
    context.quadraticCurveTo(controlPointX - (shoulderLength / 2.5), controlPointY - (shoulderLength / 2.5), (endShoulderX + endNeckX) / 2, neckDipDepth - (shoulderLength / 2.5));

    controlPointX = ((endShoulderX + endNeckX) / 2) * 0.75; // Control point X (halfway of the span)
    controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX + (shoulderLength / 2.5), controlPointY - (shoulderLength / 2.5), endShoulderX + (shoulderLength / 2.5), startY);
    context.lineTo(endShoulderX, startY);
    context.moveTo(endShoulderX + (shoulderLength / 2.5) + .75, startY + (shoulderLength / 2.5) + 2);



    controlPointX = ((endShoulderX + endNeckX) / 2) * .79; // Control point X (halfway of the span)
    controlPointY = startY + 10 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX + 5 * mmToPx, controlPointY, ((endShoulderX + endNeckX) / 2), startY + 10 * mmToPx);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.21; // Control point X (halfway of the span)
    controlPointY = startY + 10 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX - 5 * mmToPx, controlPointY, endNeckX - (shoulderLength / 2.5) - .75, startY + (shoulderLength / 2.5) + 2);



    context.quadraticCurveTo(endNeckX - (shoulderLength / 2.5), startY, endNeckX - (shoulderLength / 2.5), startY);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.2; // Control point X (halfway of the span)
    controlPointY = startY + 7 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX - 5 * mmToPx, controlPointY, ((endShoulderX + endNeckX) / 2), startY + 10 * mmToPx - (shoulderLength / 2.5));

    controlPointX = ((endShoulderX + endNeckX) / 2) * .8; // Control point X (halfway of the span)
    controlPointY = startY + 7 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX + 5 * mmToPx, controlPointY, endShoulderX + (shoulderLength / 2.5), startY);

    context.quadraticCurveTo(endShoulderX + (shoulderLength / 2.5) + .5, startY + (shoulderLength / 2.5) + 2, endShoulderX + (shoulderLength / 2.5) + .75, startY + (shoulderLength / 2.5) + 2);



    context.quadraticCurveTo(controlPointX - 2.5 * mmToPx, controlPointY  + 2 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));

    context.quadraticCurveTo(controlPointX + 4.5 * mmToPx, controlPointY + 19.5 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));

    context.quadraticCurveTo(controlPointX + 0.2 * mmToPx, controlPointY + 20.5 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));


    context.moveTo(endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));


    context.quadraticCurveTo(controlPointX + 33.75 * mmToPx, controlPointY + 20 * mmToPx, endNeckX - (shoulderLength / 2.5) - 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));
    
    context.quadraticCurveTo(controlPointX + 29.5 * mmToPx, controlPointY + 19.5 * mmToPx, endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));


    context.stroke();
    context.closePath();
  }

  function drawWCompressInternal(context, startX, startY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;

    context.beginPath();
    context.moveTo(startX, startY); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    const rightArmCuffStartX = startX - (shoulderLength / 2.5);
   
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 44 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * 0.75; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)
    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY;
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135 ;
    const leftArmholeControlX = leftArmholeEndX + 5;
    const leftArmholeControlY = leftArmholeEndY + 45;
    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 17.5;
    const rightArmholeControlY = rightArmholeEndY + 40;
    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;
    
    const c = shoulderLength / 2.5;
    context.moveTo(endShoulderX + (shoulderLength / 2.5) + .75, startY + (shoulderLength / 2.5) + 2);



    controlPointX = ((endShoulderX + endNeckX) / 2) * .79; // Control point X (halfway of the span)
    controlPointY = startY + 10 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX + 5 * mmToPx, controlPointY - 7, ((endShoulderX + endNeckX) / 2), startY + 10 * mmToPx);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.21; // Control point X (halfway of the span)
    controlPointY = startY + 10 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX - 5 * mmToPx, controlPointY - 7, endNeckX - (shoulderLength / 2.5) - .75, startY + (shoulderLength / 2.5) + 2);

    controlPointX = ((endShoulderX + endNeckX) / 2) * .8; // Control point X (halfway of the span)
    controlPointY = startY + 7 * mmToPx; // Control point Y (downward dip)

    

    context.quadraticCurveTo(controlPointX + 36 * mmToPx, controlPointY  + 2 * mmToPx, endNeckX - (shoulderLength / 2.5) - 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));

    context.quadraticCurveTo(controlPointX + 30.5 * mmToPx, controlPointY + 19.5 * mmToPx, endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));
    
    context.moveTo(endShoulderX + (shoulderLength / 2.5) + .75, startY + (shoulderLength / 2.5) + 2);
    
    context.quadraticCurveTo(controlPointX - 2.5 * mmToPx, controlPointY  + 2 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));

    context.quadraticCurveTo(controlPointX + 3.5 * mmToPx, controlPointY + 19.5 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));


    context.quadraticCurveTo(controlPointX + 9 * mmToPx, controlPointY + 39 * mmToPx, ((endShoulderX + endNeckX) / 2), startY + 44 * mmToPx - (shoulderLength / 2.5));

    context.quadraticCurveTo(controlPointX + 24 * mmToPx, controlPointY + 39 * mmToPx, endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));

    context.stroke();
    context.closePath();
  }

  function drawWCompressBackCuffs(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;

    context.beginPath();

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.moveTo(endShoulderX, startY);

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 12 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * .925; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX, controlPointY, ((endShoulderX + endNeckX) / 2), neckDipDepth);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.075; // Control point X (halfway of the span)
    controlPointY = neckDipDepth; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, startY);

    context.lineTo(endNeckX - (shoulderLength / 2.5), startY);

    context.quadraticCurveTo(controlPointX - 10, controlPointY - (shoulderLength / 2.5), ((endShoulderX + endNeckX) / 2), neckDipDepth - (shoulderLength / 3));

    controlPointX = ((endShoulderX + endNeckX) / 2) * .925;

    context.quadraticCurveTo(controlPointX + 10, controlPointY - (shoulderLength / 2.5), endShoulderX + (shoulderLength / 2.5), startY);

    context.lineTo(endShoulderX, startY);

    context.moveTo(endNeckX + shoulderLength, startY + 12.5);

    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY + 12.5;


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135;

    let cp1X = leftShoulderEndX - 150;
    let cp1Y = leftArmholeEndY + 10;
    let cp2X = leftShoulderEndX - 30;
    let cp2Y = leftArmholeEndY + 70;
    context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, leftArmholeEndX + 40, leftArmholeEndY + 70);

    const c = shoulderLength / 2.5;

    context.lineTo(leftArmholeEndX + 40 + c * Math.sin((30 * Math.PI) / 180), leftArmholeEndY + 70 - c * Math.cos((30 * Math.PI) / 180));

    context.bezierCurveTo(cp2X + c, cp2Y - c / 2, cp1X + c, cp1Y, leftShoulderEndX + c, startY + 12.5);
    context.lineTo(leftShoulderEndX, startY + 12.5);
    context.moveTo( leftShoulderEndX + c, startY + 12.5);

    context.lineTo(leftShoulderEndX + 5 + (shoulderLength / 2.5), startY + 135);
    context.quadraticCurveTo(leftArmholeEndX + 17.5, leftArmholeEndY + 40, leftArmholeEndX + 40 + c * Math.sin((30 * Math.PI) / 180), leftArmholeEndY + 70 - c * Math.cos((30 * Math.PI) / 180));
    context.lineTo(leftArmholeEndX + 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));
    context.quadraticCurveTo(leftArmholeEndX + 7, leftArmholeEndY + 45, leftShoulderEndX + 5, startY + 135);
    context.lineTo(leftShoulderEndX, startY + 25);
    context.lineTo( leftShoulderEndX + c, startY + 12.5);


    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 + 12.5;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;
    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;

    cp1X = startX + 150;
    cp1Y = leftArmholeEndY + 10;
    cp2X = startX + 30;
    cp2Y = leftArmholeEndY + 70;
    
    context.moveTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    context.bezierCurveTo(cp2X, cp2Y, cp1X, cp1Y, startX, startY + 12.5);
    context.lineTo(startX - c, startY + 12.5);

    context.bezierCurveTo(cp1X - c, cp1Y + c / 3, cp2X - c, cp2Y - c / 2, rightArmholeEndX - 47.5, rightArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));
    context.lineTo(rightArmholeEndX - 40, leftArmholeEndY + 70);

    context.moveTo(startX - c, startY + 12.5);
    context.lineTo(startX - 5 - (shoulderLength / 2.5), startY + 135);
    context.quadraticCurveTo(startX - 17.5, leftArmholeEndY + 40, rightArmholeEndX - 40 - c * Math.sin((30 * Math.PI) / 180), leftArmholeEndY + 70 - c * Math.cos((30 * Math.PI) / 180));
    context.lineTo(rightArmholeEndX - 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));
    context.quadraticCurveTo(rightArmholeEndX - 3, leftArmholeEndY + 45, startX - 5, startY + 135);
    context.lineTo(startX, startY + 25);
    context.lineTo(startX - c, startY + 12.5);

    context.moveTo(startX + 60, startY + 140);

    context.quadraticCurveTo(startX + 45, leftArmholeEndY - 30, startX + 38, startY + 72.5);
    context.quadraticCurveTo(startX + 60.5, leftArmholeEndY - 40, startX + 59.8, startY + 140);

    context.moveTo(leftShoulderEndX - 60, startY + 140);

    context.quadraticCurveTo(leftShoulderEndX - 46, leftArmholeEndY - 30, leftShoulderEndX - 38, startY + 71.5);
    context.quadraticCurveTo(leftShoulderEndX - 65, leftArmholeEndY - 37, leftShoulderEndX - 60, startY + 140);
    context.stroke();

    context.closePath();
  }

  function drawWCompressBackInternal(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;

    context.beginPath();

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 12 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * .925; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)
    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.075; // Control point X (halfway of the span)
    controlPointY = neckDipDepth; // Control point Y (downward dip)
    controlPointX = ((endShoulderX + endNeckX) / 2) * .925;
    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY + 12.5;
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135;
    let cp1X = leftShoulderEndX - 150;
    let cp1Y = leftArmholeEndY + 10;
    let cp2X = leftShoulderEndX - 30;
    let cp2Y = leftArmholeEndY + 70;
    const c = shoulderLength / 2.5;
    
    context.moveTo(leftArmholeEndX + 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));
    context.quadraticCurveTo(leftArmholeEndX + 7, leftArmholeEndY + 45, leftShoulderEndX + 5, startY + 135);
    context.lineTo(leftShoulderEndX, startY + 23);
    context.quadraticCurveTo(leftShoulderEndX - 50, leftArmholeEndY - 95, leftShoulderEndX - 38, startY + 72.5);
    context.quadraticCurveTo(leftShoulderEndX - 50, leftArmholeEndY - 30, leftShoulderEndX - 60, startY + 140);
    context.quadraticCurveTo(leftShoulderEndX - 50, leftArmholeEndY + 60, leftArmholeEndX + 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));


    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 + 12.5;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;
    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;

    cp1X = startX + 150;
    cp1Y = leftArmholeEndY + 10;
    cp2X = startX + 30;
    cp2Y = leftArmholeEndY + 70;

    context.moveTo(rightArmholeEndX - 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));
    context.quadraticCurveTo(rightArmholeEndX - 3, leftArmholeEndY + 45, startX - 5, startY + 135);
    context.lineTo(startX, startY + 23);
    context.quadraticCurveTo(startX + 50, leftArmholeEndY - 95, startX + 38, startY + 72.5);
    context.quadraticCurveTo(startX + 45, leftArmholeEndY - 30, startX + 60, startY + 140);
    context.quadraticCurveTo(startX + 50, leftArmholeEndY + 55, rightArmholeEndX - 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));

    context.stroke();

    context.closePath();
  }

  function frontWCompressOverlay(startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    const shoulderLength = 8 * mmToPx;

    let svgPath = `M ${startX} ${startY} `;

    const endShoulderX = startX + shoulderLength; // X component

    svgPath += `L ${endShoulderX} ${startY} `;

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 44 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * 0.75; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)

    svgPath += `Q ${controlPointX} ${controlPointY} ${(endShoulderX + endNeckX) / 2} ${neckDipDepth} `;

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.25; // Control point X (halfway of the span)
    controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)
    svgPath += `Q ${controlPointX} ${controlPointY} ${endNeckX} ${startY} `;


    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY;

    svgPath += `L ${leftShoulderEndX} ${leftShoulderEndY} `;
    svgPath += `L ${leftShoulderEndX + 5} ${leftShoulderEndY + 135} `;


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135 ;
    const leftArmholeControlX = leftArmholeEndX + 5;
    const leftArmholeControlY = leftArmholeEndY + 45;
    svgPath += `Q ${leftArmholeControlX} ${leftArmholeControlY} ${leftArmholeEndX + 40} ${leftArmholeEndY + 70} `;

    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;

    svgPath += `Q ${leftTorsoControlX} ${leftTorsoControlY} ${leftTorsoStartX + 15} ${leftTorsoStartY + 390} `;
    svgPath += `L ${startX + (leftShoulderEndX - (leftTorsoStartX + 15))} ${leftTorsoStartY + 390} `;

    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;

    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;

    svgPath += `Q ${rightTorsoControlX} ${rightTorsoControlY} ${rightArmholeEndX - 40} ${rightArmholeEndY + 70} `;
    svgPath += `Q ${rightArmholeControlX} ${rightArmholeControlY} ${startX - 5} ${startY + 135} `;
    svgPath += `L ${startX} ${startY} `;
    return svgPath;
  }

  function backWCompressOverlay(startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    const shoulderLength = 8 * mmToPx;
    const endShoulderX = startX + shoulderLength; // X component

    let svgPath = `M ${startX} ${startY + 12.5} `;
    svgPath += `L ${endShoulderX} ${startY} `;

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 12 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * .925; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    svgPath += `Q ${controlPointX} ${controlPointY} ${((endShoulderX + endNeckX) / 2)} ${neckDipDepth} `;

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.075; // Control point X (halfway of the span)
    controlPointY = neckDipDepth; // Control point Y (downward dip)

    svgPath += `Q ${controlPointX} ${controlPointY} ${endNeckX} ${startY} `;
    svgPath += `L ${endNeckX + shoulderLength} ${startY + 12.5} `;

    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY + 12.5;


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135;

    let cp1X = leftShoulderEndX - 150;
    let cp1Y = leftArmholeEndY + 10;
    let cp2X = leftShoulderEndX - 30;
    let cp2Y = leftArmholeEndY + 70;
    svgPath += `C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${leftArmholeEndX + 40} ${leftArmholeEndY + 70} `;

    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;

    svgPath += `Q ${leftTorsoControlX} ${leftTorsoControlY} ${leftTorsoStartX + 15} ${leftTorsoStartY + 390 - 12.5} `;
    svgPath += `L ${startX + (leftShoulderEndX - (leftTorsoStartX + 15))} ${leftTorsoStartY + 390 - 12.5} `;

    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;

    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;

    svgPath += `Q ${rightTorsoControlX} ${rightTorsoControlY} ${rightArmholeEndX - 40} ${leftArmholeEndY + 70} `;

    cp1X = startX + 150;
    cp1Y = leftArmholeEndY + 10;
    cp2X = startX + 30;
    cp2Y = leftArmholeEndY + 70;
    
    svgPath += `C ${cp2X} ${cp2Y} ${cp1X} ${cp1Y} ${startX} ${startY + 12.5} `;

    return svgPath;
  }

  function drawWCompressTankTopMask(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;
  
    context.moveTo(startX, startY); // Start point at the top of the left shoulder
  
    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.lineTo(endShoulderX, startY); // Draw the shoulder line
  
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 44 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * 0.75; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)
  
    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(controlPointX, controlPointY, (endShoulderX + endNeckX) / 2, neckDipDepth);
  
    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.25; // Control point X (halfway of the span)
    controlPointY = neckDipDepth * 1.02; // Control point Y (downward dip)
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, startY);
  
    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY;
    context.lineTo(leftShoulderEndX, leftShoulderEndY);
    context.lineTo(leftShoulderEndX + 5, leftShoulderEndY + 135);
  
  
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135 ;
    const leftArmholeControlX = leftArmholeEndX + 5;
    const leftArmholeControlY = leftArmholeEndY + 45;
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX + 40, leftArmholeEndY + 70);
  
    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 15, leftTorsoStartY + 390);
    context.lineTo(startX + (leftShoulderEndX - (leftTorsoStartX + 15)),  leftTorsoStartY + 390);
  
    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;
  
    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX - 40, rightArmholeEndY + 70);
  
    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, startX - 5, startY + 135);
    context.lineTo(startX, startY);
  
    context.stroke();
  
  }
  
  function drawWCompressBackTankTopMask(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8 * mmToPx;
  
    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.moveTo(startX, startY + 12.5);
    context.lineTo(endShoulderX, startY);
  
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 12 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2) * .925; // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)
  
    context.quadraticCurveTo(controlPointX, controlPointY, ((endShoulderX + endNeckX) / 2), neckDipDepth);
  
    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.075; // Control point X (halfway of the span)
    controlPointY = neckDipDepth; // Control point Y (downward dip)
  
    context.quadraticCurveTo(controlPointX, controlPointY, endNeckX, startY);
  
    context.lineTo(endNeckX + shoulderLength, startY + 12.5);
  
    const leftShoulderEndX = endNeckX + shoulderLength;
    const leftShoulderEndY = startY + 12.5;
  
  
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 135;
  
    let cp1X = leftShoulderEndX - 150;
    let cp1Y = leftArmholeEndY + 10;
    let cp2X = leftShoulderEndX - 30;
    let cp2Y = leftArmholeEndY + 70;
    context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, leftArmholeEndX + 40, leftArmholeEndY + 70);
  
    const leftTorsoStartX = leftArmholeEndX + 40;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 40;
    const leftTorsoControlY = leftTorsoStartY + 100;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 15, leftTorsoStartY + 390 - 12.5);
    context.lineTo(startX + (leftShoulderEndX - (leftTorsoStartX + 15)),  leftTorsoStartY + 390 - 12.5);
  
    
    const rightArmholeEndX = startX - 5;
    const rightArmholeEndY = startY + 135 ;
    const rightArmholeControlX = rightArmholeEndX - 5;
    const rightArmholeControlY = rightArmholeEndY + 45;
  
    const rightTorsoStartX = rightArmholeEndX - 40;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 40;
    const rightTorsoControlY = rightTorsoStartY + 100;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX - 40, leftArmholeEndY + 70);
  
    cp1X = startX + 150;
    cp1Y = leftArmholeEndY + 10;
    cp2X = startX + 30;
    cp2Y = leftArmholeEndY + 70;
    context.bezierCurveTo(cp2X, cp2Y, cp1X, cp1Y, startX, startY + 12.5);
  
    context.stroke();
  
  }
  
    function applyWCompressTankTopMask(context, frontStartX, frontStartY, backStartX, backStartY) {
      // Start a new path for the clip mask
      context.beginPath();
      context.lineWidth = 0.05;
  
      // Draw the front tank top shape
      drawWCompressTankTopMask(context, frontStartX, frontStartY); 
  
      // Instead of closing the path, keep it open and continue drawing
      // Draw the back tank top shape
      drawWCompressBackTankTopMask(context, backStartX, backStartY); 
  
      // Now close the combined path and apply the clip
      context.closePath();
      context.clip(); // Clip both front and back tank top shapes
  }

  //Men's Compression
  function drawMCompressTankTop(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8.5 * mmToPx;

    context.beginPath();
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.lineTo(endShoulderX, startY); // Draw the shoulder line

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 25 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    // Draw the quadratic curve for the neckline dip
    context.bezierCurveTo(controlPointX * .725, controlPointY * .8, controlPointX * .85, controlPointY, (endShoulderX + endNeckX) / 2, neckDipDepth);
    context.bezierCurveTo(controlPointX * 1.15, controlPointY, controlPointX * 1.275, controlPointY * 0.8, endNeckX, startY);

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    context.lineTo(leftShoulderEndX, leftShoulderEndY);


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 10;
    const leftTorsoControlY = leftTorsoStartY + 275;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo((endShoulderX + endNeckX) / 2, leftTorsoStartY + 380, startX - (shoulderLength * 1.75) - 5 - 2.5,  leftTorsoStartY + 350);

    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;

    const rightTorsoStartX = rightArmholeEndX;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 10;
    const rightTorsoControlY = rightTorsoStartY + 275;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX, rightArmholeEndY + 70);

    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightShoulderEndX, rightShoulderEndY);

    context.stroke();

    context.closePath();
  }

  function drawMCompressBackTankTop(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8.5 * mmToPx;

    context.beginPath();
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    context.lineTo(endShoulderX, startY); // Draw the shoulder line

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 7.5 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    // Draw the quadratic curve for the neckline dip
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth, endNeckX, startY)

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    context.lineTo(leftShoulderEndX, leftShoulderEndY);


    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 10;
    const leftTorsoControlY = leftTorsoStartY + 275;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo((endShoulderX + endNeckX) / 2, leftTorsoStartY + 380, startX - (shoulderLength * 1.75) - 5 - 2.5,  leftTorsoStartY + 350);

    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;

    const rightTorsoStartX = rightArmholeEndX;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 10;
    const rightTorsoControlY = rightTorsoStartY + 275;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX, rightArmholeEndY + 70);

    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightShoulderEndX, rightShoulderEndY);

    context.stroke();

    context.closePath();
  }


  function drawMCompressCuffs(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8.5 * mmToPx;

    context.beginPath();
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 25 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;




    context.lineTo(startX - (shoulderLength * 2.05), startY + 38.5);
    context.quadraticCurveTo(rightArmholeControlX - 15, rightArmholeControlY - 2.5, startX - (shoulderLength * 2.05) + 3, rightArmholeEndY + 56);
    context.lineTo(rightArmholeEndX, rightArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightShoulderEndX, rightShoulderEndY);

    context.moveTo(leftShoulderEndX, leftShoulderEndY);
    context.lineTo(leftShoulderEndX + (shoulderLength * .285), startY + 38.5);
    context.quadraticCurveTo(leftArmholeControlX + 15, rightArmholeControlY - 2.5, leftShoulderEndX + (shoulderLength * .3) - 3, rightArmholeEndY + 56);
    context.lineTo(leftArmholeEndX, rightArmholeEndY + 70);
    context.quadraticCurveTo(leftArmholeControlX, rightArmholeControlY, leftShoulderEndX, rightShoulderEndY);

    context.moveTo(endShoulderX, startY);
    context.bezierCurveTo(controlPointX * .725, controlPointY * .8, controlPointX * .85, controlPointY, (endShoulderX + endNeckX) / 2, neckDipDepth);
    context.bezierCurveTo(controlPointX * 1.15, controlPointY, controlPointX * 1.275, controlPointY * 0.8, endNeckX, startY);
    context.lineTo(endNeckX - (shoulderLength * .45), startY - 8);
    context.bezierCurveTo(controlPointX * 1.225, controlPointY - 16, controlPointX, controlPointY * 0.8 + 24, (endShoulderX + endNeckX) / 2, neckDipDepth - 17);
    context.bezierCurveTo(controlPointX, controlPointY * 0.8 + 24, controlPointX * 0.775, controlPointY - 16, endShoulderX + (shoulderLength * 0.45), startY - 8);
    context.lineTo(endShoulderX, startY);

    context.moveTo(endShoulderX + (shoulderLength * 0.45), startY - 8);

    const neckDipDepth2 = startY + 2 * mmToPx;
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth2, endNeckX - (shoulderLength * .45), startY - 8);
    context.quadraticCurveTo(endNeckX - (shoulderLength * .45), startY, endNeckX - (shoulderLength * .45) - 1, startY + 7.5);
    //context.lineTo(endNeckX - (shoulderLength * .45), startY + 7.5);
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth2 + (5.5 * mmToPx), endShoulderX + (shoulderLength * .45) + 1, startY + 7.5);
    context.quadraticCurveTo(endShoulderX + (shoulderLength * .45), startY, endShoulderX + (shoulderLength * 0.45), startY - 8);

    context.stroke();

    context.closePath();
  }

  function drawMCompressBackCuffs(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    // Right shoulder section
    const shoulderLength = 8.5 * mmToPx;

    context.beginPath();
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 25 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;




    context.lineTo(startX - (shoulderLength * 2.05), startY + 38.5);
    context.quadraticCurveTo(rightArmholeControlX - 15, rightArmholeControlY - 2.5, startX - (shoulderLength * 2.05) + 3, rightArmholeEndY + 56);
    context.lineTo(rightArmholeEndX, rightArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightShoulderEndX, rightShoulderEndY);

    context.moveTo(leftShoulderEndX, leftShoulderEndY);
    context.lineTo(leftShoulderEndX + (shoulderLength * .285), startY + 38.5);
    context.quadraticCurveTo(leftArmholeControlX + 15, rightArmholeControlY - 2.5, leftShoulderEndX + (shoulderLength * .3) - 3, rightArmholeEndY + 56);
    context.lineTo(leftArmholeEndX, rightArmholeEndY + 70);
    context.quadraticCurveTo(leftArmholeControlX, rightArmholeControlY, leftShoulderEndX, rightShoulderEndY);

    context.moveTo(endShoulderX, startY);
    context.lineTo(endShoulderX + (shoulderLength * 0.45), startY - 8);
    const neckDipDepth2 = startY + 2 * mmToPx;
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth2, endNeckX - (shoulderLength * .45), startY - 8);
    context.lineTo(endNeckX, startY);
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth2 + (5.5 * mmToPx), endShoulderX, startY);
    

    context.stroke();

    context.closePath();
  }

  function drawMCompressInternal(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.5; // Line thickness
    // Right shoulder section
    const shoulderLength = 8.5 * mmToPx;

    context.beginPath();
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    // Calculate endpoint of the shoulder
    const endShoulderX = startX + shoulderLength; // X component
    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 25 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;

    const neckDipDepth2 = startY + 2 * mmToPx;
    context.moveTo(endShoulderX + (shoulderLength * .45) + 1, startY + 7.5);
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth2 + (5.5 * mmToPx), endNeckX - (shoulderLength * .45) - 1, startY + 7.5);
    context.bezierCurveTo(controlPointX * 1.225, controlPointY - 16, controlPointX, controlPointY * 0.8 + 24, (endShoulderX + endNeckX) / 2, neckDipDepth - 17);
    context.bezierCurveTo(controlPointX, controlPointY * 0.8 + 24, controlPointX * 0.775, controlPointY - 16, endShoulderX + (shoulderLength * 0.45) + 1, startY + 7.5);

    context.stroke();

    context.closePath();
  }

  function frontMCompressOverlay(startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    const shoulderLength = 8.5 * mmToPx;
    let svgPath = `M ${startX - (shoulderLength * 1.75)} ${startY + 35}`;

    const endShoulderX = startX + shoulderLength; // X component
    svgPath += `L ${endShoulderX} ${startY}`;

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 25 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)
    svgPath += `C ${controlPointX * .725} ${controlPointY * .8} ${controlPointX * .85} ${controlPointY} ${(endShoulderX + endNeckX) / 2} ${neckDipDepth}`;
    svgPath += `C ${controlPointX * 1.15} ${controlPointY} ${controlPointX * 1.275} ${controlPointY * 0.8} ${endNeckX} ${startY}`;

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    svgPath += `L ${leftShoulderEndX} ${leftShoulderEndY}`;

    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    svgPath += `Q ${leftArmholeControlX} ${leftArmholeControlY} ${leftArmholeEndX} ${leftArmholeEndY + 70}`;

    const leftTorsoStartX = leftArmholeEndX;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 10;
    const leftTorsoControlY = leftTorsoStartY + 275;
    svgPath += `Q ${leftTorsoControlX} ${leftTorsoControlY} ${leftTorsoStartX + 2.5} ${leftTorsoStartY + 350}`;
    svgPath += `Q ${(endShoulderX + endNeckX) / 2} ${leftTorsoStartY + 380} ${startX - (shoulderLength * 1.75) - 5 - 2.5} ${leftTorsoStartY + 350}`;

    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;
    const rightTorsoStartX = rightArmholeEndX;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 10;
    const rightTorsoControlY = rightTorsoStartY + 275;
    svgPath += `Q ${rightTorsoControlX} ${rightTorsoControlY} ${rightArmholeEndX} ${rightArmholeEndY + 70}`;
    svgPath += `Q ${rightArmholeControlX} ${rightArmholeControlY} ${rightShoulderEndX} ${rightShoulderEndY}`;

    return svgPath;
  }

  function backMCompressOverlay(startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    const shoulderLength = 8.5 * mmToPx;
    let svgPath = `M ${startX - (shoulderLength * 1.75)} ${startY + 35}`;

    const endShoulderX = startX + shoulderLength; // X component
    svgPath += `L ${endShoulderX} ${startY}`;

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 7.5 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)
    svgPath += `Q ${((endShoulderX + endNeckX) / 2)} ${neckDipDepth} ${endNeckX} ${startY}`;

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    svgPath += `L ${leftShoulderEndX} ${leftShoulderEndY}`;

    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    svgPath += `Q ${leftArmholeControlX} ${leftArmholeControlY} ${leftArmholeEndX} ${leftArmholeEndY + 70}`;

    const leftTorsoStartX = leftArmholeEndX;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 10;
    const leftTorsoControlY = leftTorsoStartY + 275;
    svgPath += `Q ${leftTorsoControlX} ${leftTorsoControlY} ${leftTorsoStartX + 2.5} ${leftTorsoStartY + 350}`;
    svgPath += `Q ${(endShoulderX + endNeckX) / 2} ${leftTorsoStartY + 380} ${startX - (shoulderLength * 1.75) - 5 - 2.5} ${leftTorsoStartY + 350}`;

    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;

    const rightTorsoStartX = rightArmholeEndX;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 10;
    const rightTorsoControlY = rightTorsoStartY + 275;
    svgPath += `Q ${rightTorsoControlX} ${rightTorsoControlY} ${rightArmholeEndX} ${rightArmholeEndY + 70}`;
    svgPath += `Q ${rightArmholeControlX} ${rightArmholeControlY} ${rightShoulderEndX} ${rightShoulderEndY}`;

    return svgPath;
  }

  function drawMCompressTankTopMask(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    const shoulderLength = 8.5 * mmToPx;
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    const endShoulderX = startX + shoulderLength; // X component
    context.lineTo(endShoulderX, startY); // Draw the shoulder line

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 25 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)
    context.bezierCurveTo(controlPointX * .725, controlPointY * .8, controlPointX * .85, controlPointY, (endShoulderX + endNeckX) / 2, neckDipDepth);
    context.bezierCurveTo(controlPointX * 1.15, controlPointY, controlPointX * 1.275, controlPointY * 0.8, endNeckX, startY);

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    context.lineTo(leftShoulderEndX, leftShoulderEndY);

    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 10;
    const leftTorsoControlY = leftTorsoStartY + 275;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo((endShoulderX + endNeckX) / 2, leftTorsoStartY + 380, startX - (shoulderLength * 1.75) - 5 - 2.5,  leftTorsoStartY + 350);

    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;
    const rightTorsoStartX = rightArmholeEndX;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 10;
    const rightTorsoControlY = rightTorsoStartY + 275;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX, rightArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightShoulderEndX, rightShoulderEndY);

  }

  function drawMCompressBackTankTopMask(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.05; // Line thickness
    const shoulderLength = 8.5 * mmToPx;
    context.moveTo(startX - (shoulderLength * 1.75), startY + 35); // Start point at the top of the left shoulder

    const endShoulderX = startX + shoulderLength; // X component
    context.lineTo(endShoulderX, startY); // Draw the shoulder line

    const neckDipSpan = 172.6771653546;
    const neckDipDepth = startY + 7.5 * mmToPx;
    const endNeckX = endShoulderX + neckDipSpan; // End of the dip horizontally
    let controlPointX = ((endShoulderX + endNeckX) / 2); // Control point X (halfway of the span)
    let controlPointY = neckDipDepth; // Control point Y (downward dip)
    context.quadraticCurveTo(((endShoulderX + endNeckX) / 2), neckDipDepth, endNeckX, startY)

    const leftShoulderEndX = endNeckX + (shoulderLength * 2.75);
    const leftShoulderEndY = startY + 35;
    context.lineTo(leftShoulderEndX, leftShoulderEndY);

    const leftArmholeEndX = leftShoulderEndX + 5;
    const leftArmholeEndY = leftShoulderEndY + 120;
    const leftArmholeControlX = leftArmholeEndX - 65;
    const leftArmholeControlY = leftArmholeEndY - 15;
    context.quadraticCurveTo(leftArmholeControlX, leftArmholeControlY, leftArmholeEndX, leftArmholeEndY + 70);

    const leftTorsoStartX = leftArmholeEndX;
    const leftTorsoStartY = leftArmholeEndY + 70;
    const leftTorsoControlX = leftTorsoStartX - 10;
    const leftTorsoControlY = leftTorsoStartY + 275;
    context.quadraticCurveTo(leftTorsoControlX, leftTorsoControlY, leftTorsoStartX + 2.5, leftTorsoStartY + 350);
    context.quadraticCurveTo((endShoulderX + endNeckX) / 2, leftTorsoStartY + 380, startX - (shoulderLength * 1.75) - 5 - 2.5,  leftTorsoStartY + 350);

    const rightShoulderEndX = startX - (shoulderLength * 1.75);
    const rightShoulderEndY = startY + 35;
    const rightArmholeEndX = rightShoulderEndX - 5;
    const rightArmholeEndY = rightShoulderEndY + 120;
    const rightArmholeControlX = rightArmholeEndX + 65;
    const rightArmholeControlY = rightArmholeEndY - 15;

    const rightTorsoStartX = rightArmholeEndX;
    const rightTorsoStartY = rightArmholeEndY + 70;
    const rightTorsoControlX = rightTorsoStartX + 10;
    const rightTorsoControlY = rightTorsoStartY + 275;
    context.quadraticCurveTo(rightTorsoControlX, rightTorsoControlY, rightArmholeEndX, rightArmholeEndY + 70);
    context.quadraticCurveTo(rightArmholeControlX, rightArmholeControlY, rightShoulderEndX, rightShoulderEndY);
  }

  function applyMCompressTankTopMask(context, frontStartX, frontStartY, backStartX, backStartY) {
    // Start a new path for the clip mask
    context.beginPath();
    context.lineWidth = 0.05;

    // Draw the front tank top shape
    drawMCompressTankTopMask(context, frontStartX, frontStartY); 

    // Instead of closing the path, keep it open and continue drawing
    // Draw the back tank top shape
    drawMCompressBackTankTopMask(context, backStartX, backStartY); 

    // Now close the combined path and apply the clip
    context.closePath();
    context.clip(); // Clip both front and back tank top shapes
  } 

      let canvas, context, canvas2, context2, canvas3, context3;
      let canvas4, context4, canvas5, context5, canvas6, context6;
      let canvas7, context7, canvas8, context8, canvas9, context9;
      let templateCanvas1, templateContext1, templateCanvas2, templateContext2, templateCanvas3, templateContext3;
      let hiddenCanvas1, hiddenContext1, hiddenCanvas2, hiddenContext2, hiddencanvas3, hiddencontext3;
      let hiddencanvas4, hiddencontext4, hiddencanvas5, hiddencontext5, hiddencanvas6, hiddencontext6;
      let hiddencanvas7, hiddencontext7, hiddencanvas8, hiddencontext8, hiddencanvas9, hiddencontext9;
      let hiddentemplateCanvas1, hiddentemplateContext1, hiddentemplateCanvas2, hiddentemplateContext2, hiddentemplateCanvas3, hiddentemplateContext3;
      let frontOverlayPath, backOverlayPath;

      if(itDescript.toUpperCase().includes("TANK")){

        document.getElementById("uniformCanvases").style.marginLeft = '100px';
        document.getElementById("FrontOverlayCanvas").style.marginLeft = '300px';
        document.getElementById("BackOverlayCanvas").style.marginLeft = '300px';

        document.getElementById("NordLogo").style.left = '205px';
        document.getElementById("NordLogo").style.top = '150px';

        document.getElementById("hiddenNordLogo").style.left = '0px';
        document.getElementById("hiddenNordLogo").style.top = '150px';

        document.getElementById("hiddenNordLogo2").style.left = '0px';
        document.getElementById("hiddenNordLogo2").style.top = '150px';

        document.getElementById("hiddenNordLogo3").style.left = '0px';
        document.getElementById("hiddenNordLogo3").style.top = '150px';

        document.getElementById("hiddenNordLogo4").style.left = '0px';
        document.getElementById("hiddenNordLogo4").style.top = '150px';
        

        // Initialize the canvas and context
        canvas = document.getElementById("TankTopCanvas");
        context = canvas.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawMCompressTankTop(context, 200, 100);
        context.fillStyle = "darkgray";
        context.fill();

        canvas2 = document.getElementById("TankTopCuffCanvas");
        context2 = canvas2.getContext("2d");

        drawMCompressCuffs(context2, 200, 100);
        context2.fillStyle = "lightgray";
        context2.fill();

        canvas3 = document.getElementById("TankTopInternalFrontCanvas");
        context3 = canvas3.getContext("2d");

        drawMCompressInternal(context3, 200, 100);
        context3.fillStyle = "lightgray";
        context3.fill();

        // Initialize the canvas and context
        canvas4 = document.getElementById("TankTopBackCanvas");
        context4 = canvas4.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawMCompressBackTankTop(context4, 700, 100);
        context4.fillStyle = "darkgray";
        context4.fill();

        canvas5 = document.getElementById("TankTopBackCuffCanvas");
        context5 = canvas5.getContext("2d");

        drawMCompressBackCuffs(context5, 700, 100);
        context5.fillStyle = "lightgray";
        context5.fill();

        canvas6 = document.getElementById("TankTopInternalBackCanvas");
        context6 = canvas6.getContext("2d");
        context6.fillStyle = "lightgray";

        templateCanvas1 = document.getElementById("TankTopTemplateColor1Canvas");
        templateContext1 = templateCanvas1.getContext("2d");

        templateCanvas2 = document.getElementById("TankTopTemplateColor2Canvas");
        templateContext2 = templateCanvas2.getContext("2d");

        templateCanvas3 = document.getElementById("TankTopTemplateColor3Canvas");
        templateContext3 = templateCanvas3.getContext("2d");


        // Initialize all hidden canvases and contexts
        hiddenCanvas1 = document.getElementById("hiddenTankTopCanvas");
        hiddenContext1 = hiddenCanvas1.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawMCompressTankTop(hiddenContext1, 200, 100);
        hiddenContext1.fillStyle = "darkgray";
        hiddenContext1.fill();

        hiddenCanvas2 = document.getElementById("hiddenTankTopCuffCanvas");
        hiddenContext2 = hiddenCanvas2.getContext("2d");

        drawMCompressCuffs(hiddenContext2, 200, 100);
        hiddenContext2.fillStyle = "lightgray";
        hiddenContext2.fill();

        hiddencanvas3 = document.getElementById("hiddenTankTopInternalFrontCanvas");
        hiddencontext3 = hiddencanvas3.getContext("2d"); 

        drawMCompressInternal(hiddencontext3, 200, 100);
        hiddencontext3.fillStyle = "lightgray";
        hiddencontext3.fill();

        // Initialize the canvas and context
        hiddencanvas4 = document.getElementById("hiddenTankTopBackCanvas");
        hiddencontext4 = hiddencanvas4.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawMCompressBackTankTop(hiddencontext4, 700, 100);
        hiddencontext4.fillStyle = "darkgray";
        hiddencontext4.fill();

        hiddencanvas5 = document.getElementById("hiddenTankTopBackCuffCanvas");
        hiddencontext5 = hiddencanvas5.getContext("2d");

        drawMCompressBackCuffs(hiddencontext5, 700, 100);
        hiddencontext5.fillStyle = "lightgray";
        hiddencontext5.fill();

        hiddencanvas6 = document.getElementById("hiddenTankTopInternalBackCanvas");
        hiddencontext6 = hiddencanvas6.getContext("2d");
        hiddencontext6.fillStyle = "lightgray";

        hiddentemplateCanvas1 = document.getElementById("hiddenTankTopTemplateColor1Canvas");
        hiddentemplateContext1 = hiddentemplateCanvas1.getContext("2d");

        hiddentemplateCanvas2 = document.getElementById("hiddenTankTopTemplateColor2Canvas");
        hiddentemplateContext2 = hiddentemplateCanvas2.getContext("2d");

        hiddentemplateCanvas3 = document.getElementById("hiddenTankTopTemplateColor3Canvas");
        hiddentemplateContext3 = hiddentemplateCanvas3.getContext("2d");

        frontOverlayPath = frontMCompressOverlay(200, 100);
        frontOverlayPath += `Z`;
        backOverlayPath = backMCompressOverlay(200, 100);
        backOverlayPath += `Z`;
      }
      else if(itDescript.toUpperCase().includes("COMPRESSION")){

        document.getElementById("uniformCanvases").style.marginLeft = '20px';
        document.getElementById("FrontOverlayCanvas").style.marginLeft = '260px';
        document.getElementById("BackOverlayCanvas").style.marginLeft = '260px';

        document.getElementById("NordLogo").style.left = '225px';
        document.getElementById("NordLogo").style.top = '225px';

        document.getElementById("hiddenNordLogo").style.left = '-20px';
        document.getElementById("hiddenNordLogo").style.top = '225px';

        document.getElementById("hiddenNordLogo2").style.left = '-20px';
        document.getElementById("hiddenNordLogo2").style.top = '225px';

        document.getElementById("hiddenNordLogo3").style.left = '-20px';
        document.getElementById("hiddenNordLogo3").style.top = '225px';

        document.getElementById("hiddenNordLogo4").style.left = '-20px';
        document.getElementById("hiddenNordLogo4").style.top = '225px';
        

        // Initialize the canvas and context
        canvas = document.getElementById("TankTopCanvas");
        context = canvas.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawWCompressTankTop(context, 200, 100);
        context.fillStyle = "darkgray";
        context.fill();

        canvas2 = document.getElementById("TankTopCuffCanvas");
        context2 = canvas2.getContext("2d");

        drawWCompressCuffs(context2, 200, 100);
        context2.fillStyle = "lightgray";
        context2.fill();

        canvas3 = document.getElementById("TankTopInternalFrontCanvas");
        context3 = canvas3.getContext("2d");

        drawWCompressInternal(context3, 200, 100);
        context3.fillStyle = "lightgray";
        context3.fill();

        // Initialize the canvas and context
        canvas4 = document.getElementById("TankTopBackCanvas");
        context4 = canvas4.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawWCompressBackTankTop(context4, 700, 100);
        context4.fillStyle = "darkgray";
        context4.fill();

        canvas5 = document.getElementById("TankTopBackCuffCanvas");
        context5 = canvas5.getContext("2d");

        drawWCompressBackCuffs(context5, 700, 100);
        context5.fillStyle = "lightgray";
        context5.fill();

        canvas6 = document.getElementById("TankTopInternalBackCanvas");
        context6 = canvas6.getContext("2d");

        drawWCompressBackInternal(context6, 700, 100);
        context6.fillStyle = "lightgray";
        context6.fill();

        templateCanvas1 = document.getElementById("TankTopTemplateColor1Canvas");
        templateContext1 = templateCanvas1.getContext("2d");

        templateCanvas2 = document.getElementById("TankTopTemplateColor2Canvas");
        templateContext2 = templateCanvas2.getContext("2d");

        templateCanvas3 = document.getElementById("TankTopTemplateColor3Canvas");
        templateContext3 = templateCanvas3.getContext("2d");


        // Initialize all hidden canvases and contexts
        hiddenCanvas1 = document.getElementById("hiddenTankTopCanvas");
        hiddenContext1 = hiddenCanvas1.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawWCompressTankTop(hiddenContext1, 200, 100);
        hiddenContext1.fillStyle = "darkgray";
        hiddenContext1.fill();

        hiddenCanvas2 = document.getElementById("hiddenTankTopCuffCanvas");
        hiddenContext2 = hiddenCanvas2.getContext("2d");

        drawWCompressCuffs(hiddenContext2, 200, 100);
        hiddenContext2.fillStyle = "lightgray";
        hiddenContext2.fill();

        hiddencanvas3 = document.getElementById("hiddenTankTopInternalFrontCanvas");
        hiddencontext3 = hiddencanvas3.getContext("2d"); 

        drawWCompressInternal(hiddencontext3, 200, 100);
        hiddencontext3.fillStyle = "lightgray";
        hiddencontext3.fill();

        // Initialize the canvas and context
        hiddencanvas4 = document.getElementById("hiddenTankTopBackCanvas");
        hiddencontext4 = hiddencanvas4.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawWCompressBackTankTop(hiddencontext4, 700, 100);
        hiddencontext4.fillStyle = "darkgray";
        hiddencontext4.fill();

        hiddencanvas5 = document.getElementById("hiddenTankTopBackCuffCanvas");
        hiddencontext5 = hiddencanvas5.getContext("2d");

        drawWCompressBackCuffs(hiddencontext5, 700, 100);
        hiddencontext5.fillStyle = "lightgray";
        hiddencontext5.fill();

        hiddencanvas6 = document.getElementById("hiddenTankTopInternalBackCanvas");
        hiddencontext6 = hiddencanvas6.getContext("2d");

        drawWCompressBackInternal(hiddencontext6, 700, 100);
        hiddencontext6.fillStyle = "lightgray";
        hiddencontext6.fill();

        hiddentemplateCanvas1 = document.getElementById("hiddenTankTopTemplateColor1Canvas");
        hiddentemplateContext1 = hiddentemplateCanvas1.getContext("2d");

        hiddentemplateCanvas2 = document.getElementById("hiddenTankTopTemplateColor2Canvas");
        hiddentemplateContext2 = hiddentemplateCanvas2.getContext("2d");

        hiddentemplateCanvas3 = document.getElementById("hiddenTankTopTemplateColor3Canvas");
        hiddentemplateContext3 = hiddentemplateCanvas3.getContext("2d");

        frontOverlayPath = frontWCompressOverlay(200, 100);
        frontOverlayPath += `Z`;
        backOverlayPath = backWCompressOverlay(200, 100);
        backOverlayPath += `Z`;
      }
      else{
        // Initialize the canvas and context
        canvas = document.getElementById("TankTopCanvas");
        context = canvas.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawTankTop(context, 200, 100);
        context.fillStyle = "darkgray";
        context.fill();

        canvas2 = document.getElementById("TankTopCuffCanvas");
        context2 = canvas2.getContext("2d");

        drawCuffs(context2, 200, 100);
        context2.fillStyle = "lightgray";
        context2.fill();

        canvas3 = document.getElementById("TankTopInternalFrontCanvas");
        context3 = canvas3.getContext("2d");

        drawInternal(context3, 200, 100);
        context3.fillStyle = "gray";
        context3.fill();

        // Initialize the canvas and context
        canvas4 = document.getElementById("TankTopBackCanvas");
        context4 = canvas4.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawTankTop(context4, 700, 100);
        context4.fillStyle = "darkgray";
        context4.fill();

        canvas5 = document.getElementById("TankTopBackCuffCanvas");
        context5 = canvas5.getContext("2d");

        drawBackCuffs(context5, 700, 100);
        context5.fillStyle = "lightgray";
        context5.fill();

        if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
          canvas6 = document.getElementById("TankTopInternalBackCanvas");
          context6 = canvas6.getContext("2d");

          drawBackInternal(context6, 700, 100);
          context6.fillStyle = "gray";
          context6.fill();
        }

        canvas7 = document.getElementById("TankTopBackHolesCanvas");
        context7 = canvas7.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND")){
          // Restrict pinholes to the tank top shape
          applyPinHoleMask(context7, 700, 100);

          // Draw pinholes
          drawPinholes(context7, canvas7.width, canvas7.height);
        }


        canvas8 = document.getElementById("TankTopBackRacerCuffCanvas");
        context8 = canvas8.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
          drawBackRacerCuffs(context8, 700, 100);
          context8.fillStyle = "lightgray";
          context8.fill();
        }

        canvas9 = document.getElementById("TankTopFrontOutlineCanvas");
        context9 = canvas9.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND")){
          applyPinHoleMask(context9, 200, 100);
        }

        templateCanvas1 = document.getElementById("TankTopTemplateColor1Canvas");
        templateContext1 = templateCanvas1.getContext("2d");

        templateCanvas2 = document.getElementById("TankTopTemplateColor2Canvas");
        templateContext2 = templateCanvas2.getContext("2d");

        templateCanvas3 = document.getElementById("TankTopTemplateColor3Canvas");
        templateContext3 = templateCanvas3.getContext("2d");


        // Initialize all hidden canvases and contexts
        hiddenCanvas1 = document.getElementById("hiddenTankTopCanvas");
        hiddenContext1 = hiddenCanvas1.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawTankTop(hiddenContext1, 200, 100);
        hiddenContext1.fillStyle = "darkgray";
        hiddenContext1.fill();

        hiddenCanvas2 = document.getElementById("hiddenTankTopCuffCanvas");
        hiddenContext2 = hiddenCanvas2.getContext("2d");

        drawCuffs(hiddenContext2, 200, 100);
        hiddenContext2.fillStyle = "lightgray";
        hiddenContext2.fill();

        hiddencanvas3 = document.getElementById("hiddenTankTopInternalFrontCanvas");
        hiddencontext3 = hiddencanvas3.getContext("2d"); 

        drawInternal(hiddencontext3, 200, 100);
        hiddencontext3.fillStyle = "gray";
        hiddencontext3.fill();

        // Initialize the canvas and context
        hiddencanvas4 = document.getElementById("hiddenTankTopBackCanvas");
        hiddencontext4 = hiddencanvas4.getContext("2d");

        // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
        drawTankTop(hiddencontext4, 700, 100);
        hiddencontext4.fillStyle = "darkgray";
        hiddencontext4.fill();

        hiddencanvas5 = document.getElementById("hiddenTankTopBackCuffCanvas");
        hiddencontext5 = hiddencanvas5.getContext("2d");

        drawBackCuffs(hiddencontext5, 700, 100);
        hiddencontext5.fillStyle = "lightgray";
        hiddencontext5.fill();

        hiddencanvas6 = document.getElementById("hiddenTankTopInternalBackCanvas");
        hiddencontext6 = hiddencanvas6.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
          drawBackInternal(hiddencontext6, 700, 100);
          hiddencontext6.fillStyle = "gray";
          hiddencontext6.fill();
        }

        hiddencanvas7 = document.getElementById("hiddenTankTopBackHolesCanvas");
        hiddencontext7 = hiddencanvas7.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND")){
          // Restrict pinholes to the tank top shape
          applyPinHoleMask(hiddencontext7, 700, 100);

          // Draw pinholes
          drawPinholes(hiddencontext7, hiddencanvas7.width, hiddencanvas7.height);
        }

        hiddencanvas8 = document.getElementById("hiddenTankTopBackRacerCuffCanvas");
        hiddencontext8 = hiddencanvas8.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
          drawBackRacerCuffs(hiddencontext8, 700, 100);
          hiddencontext8.fillStyle = "lightgray";
          hiddencontext8.fill();
        }

        hiddencanvas9 = document.getElementById("hiddenTankTopFrontOutlineCanvas");
        hiddencontext9 = hiddencanvas9.getContext("2d");

        if(itDescript.toUpperCase().includes("LEGEND")){
          applyPinHoleMask(hiddencontext9, 200, 100);
        }

        hiddentemplateCanvas1 = document.getElementById("hiddenTankTopTemplateColor1Canvas");
        hiddentemplateContext1 = hiddentemplateCanvas1.getContext("2d");

        hiddentemplateCanvas2 = document.getElementById("hiddenTankTopTemplateColor2Canvas");
        hiddentemplateContext2 = hiddentemplateCanvas2.getContext("2d");

        hiddentemplateCanvas3 = document.getElementById("hiddenTankTopTemplateColor3Canvas");
        hiddentemplateContext3 = hiddentemplateCanvas3.getContext("2d");

        frontOverlayPath = frontOverlay(200, 100);
        frontOverlayPath += `Z`;
        backOverlayPath;

        if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
          backOverlayPath = backOverlay(200, 100);
        }
        else{
          backOverlayPath = backOverlay1(200, 100);
        }
        backOverlayPath += `Z`;

      }

    

// Find the uniformCanvases div
const uniformCanvases = document.getElementById("uniformCanvases");
if (!uniformCanvases) {
  console.error("uniformCanvases element not found");
}

// Create the <svg> element for the clip path
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("width", "0");
svgElement.setAttribute("height", "0");
svgElement.setAttribute("id", "svgFront");

// Create <defs> and <clipPath>
const defsElement = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const clipPathElement = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
clipPathElement.setAttribute("id", "tankTopClipPath");

// Create the <path> element and set the 'd' attribute with svgPath1
const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElement.setAttribute("d", frontOverlayPath); // Ensure svgPath1 is valid

// Build the SVG structure
clipPathElement.appendChild(pathElement);
defsElement.appendChild(clipPathElement);
svgElement.appendChild(defsElement);
// Append the SVG to the uniformCanvases div

uniformCanvases.appendChild(svgElement);

// Create <svg> element for the back overlay clip path
const svgBack = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgBack.setAttribute("width", "0");
svgBack.setAttribute("height", "0");
svgBack.setAttribute("id", "svgBack");

// Create <defs> and <clipPath> for the back overlay
const defsBack = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const clipPathBack = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
clipPathBack.setAttribute("id", "tankTopBackClipPath");

// Create the <path> element and set the 'd' attribute with backOverlayPath for the back overlay
const pathBack = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathBack.setAttribute("d", backOverlayPath); // Assuming backOverlayPath contains the correct path data for the back

// Build the SVG structure for the back overlay
clipPathBack.appendChild(pathBack);
defsBack.appendChild(clipPathBack);
svgBack.appendChild(defsBack);

// Append the SVG to the uniformCanvases div
uniformCanvases.appendChild(svgBack);

function showCanvases(){
  document.getElementById("uniformCanvases").style.visibility = "visible";
}

function frontOverlay(startX, startY){
  const mmToPx = 3.7795275591; // Convert mm to pixels
  const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
  const shoulderLength = 15.875 * mmToPx;
  const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge
  const endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
  const endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)
  const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
  const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
  const rightEndShoulderX = endArmholeX;
  const rightEndShoulderY = endArmholeY;
  const cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Flip the direction to the left
  const cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset; // Move down with an inset
  const cuffControlX = rightEndShoulderX; // Keep X at the cuff start
  const cuffControlY = rightEndShoulderY + (5 / 1.2) * 10 * mmToPx - inset; // Adjust Y for the inset
  const neckDipDepth = 4.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
  const neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm
  const cp1X = endShoulderX + neckDipSpan * -0.125; 
  const cp1Y = endShoulderY + neckDipDepth * 1.2; 
  const cp2X = endShoulderX + neckDipSpan * 1.125;  
  const cp2Y = endShoulderY + neckDipDepth * 1.2;  
  const endNeckX = endShoulderX + neckDipSpan;
  const endNeckY = endShoulderY;
  const leftShoulderStartX = endNeckX;
  const leftShoulderStartY = endNeckY;
  let leftEndShoulderX1 = leftShoulderStartX + 4 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
  let leftEndShoulderY1 = leftShoulderStartY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
  let leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
  let leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
  const armholeEndX = leftEndShoulderX + 1.75 * 10 * mmToPx;
  const armholeEndY = leftEndShoulderY + 4.75 * 10 * mmToPx;
  const armholeControlX = leftEndShoulderX; // Keep X at the start
  const armholeControlY = leftEndShoulderY + (4.75 / 1.5) * 10 * mmToPx;
  const torsoLength = 3.5 * mmToPx; // 0.4 cm converted to pixels
  const torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians
  const torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
  const torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component
  let leftArmholeEndX = leftEndShoulderX - 7 * mmToPx * Math.sin((30 * Math.PI) / 180);
  let leftArmholeEndY = leftEndShoulderY - 3.75 * mmToPx * Math.sin((30 * Math.PI) / 180);
  let leftArmholeControlX = torsoEndX - 1.95 * 10 * mmToPx; // Start wide, extending to the left
  let leftArmholeControlY = torsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder

  let svgPath = `M ${torsoEndX} ${torsoEndY} `;
  svgPath += `Q ${leftArmholeControlX} ${leftArmholeControlY} ${leftArmholeEndX} ${leftArmholeEndY} `;
  svgPath += `L ${leftEndShoulderX1} ${leftEndShoulderY1} `;
  svgPath += `C ${cp2X * 1.01} ${cp1Y * 1.05} ${cp1X * .99} ${cp2Y * 1.05} ${endNeckX - neckDipSpan - 3.5 * mmToPx} ${endNeckY + 2.25 * mmToPx} `;
  svgPath += `L ${endArmholeX} ${endArmholeY} `;
  svgPath += `Q ${cuffControlX} ${cuffControlY} ${cuffArmholeEndX} ${cuffArmholeEndY} `;
  svgPath += `M ${torsoEndX} ${torsoEndY} `;

  const curveSpan = 10.5 * 10 * mmToPx;
  const inwardDip = 0.85 * 10 * mmToPx; 
  const curveControlX = torsoEndX - inwardDip; 
  const curveControlY = torsoEndY + curveSpan / 2; 
  const curveEndX = torsoEndX; // Same X position as the start of the curve
  const curveEndY = torsoEndY + curveSpan;
  svgPath += `Q ${curveControlX} ${curveControlY}, ${curveEndX} ${curveEndY} `;
  const bottomSpan = 10.55 * 10 * mmToPx;
  const bottomDip = 0.75 * 10 * mmToPx;
  const bottomControlX = curveEndX - bottomSpan / 2;
  const bottomControlY = curveEndY + bottomDip;
  const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
  const bottomEndY = curveEndY; // End at the same Y level as the start
  svgPath += `Q ${bottomControlX} ${bottomControlY}, ${bottomEndX} ${bottomEndY} `;
  const leftCurveSpan = 10.5 * 10 * mmToPx;
  const leftInwardDip = 0.85 * 10 * mmToPx; 
  const leftCurveControlX = bottomEndX + leftInwardDip;
  const leftCurveControlY = bottomEndY - leftCurveSpan / 2;
  const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
  const leftCurveEndY = bottomEndY - leftCurveSpan; 
  svgPath += `Q ${leftCurveControlX} ${leftCurveControlY}, ${leftCurveEndX} ${leftCurveEndY} `;
  const leftTorsoLength = 0.40 * 10 * mmToPx; 
  const leftTorsoAngle = 100 * (Math.PI / 180);
  const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
  const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component

  return svgPath;
}

function backOverlay(startX, startY){
  const mmToPx = 3.7795275591; // Convert mm to pixels
  const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
  const shoulderLength = 15.875 * mmToPx;
  const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge
  let endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
  let endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)
  let rightEndShoulderX = endArmholeX; // Recalculate the starting point
  let rightEndShoulderY = endArmholeY;
  let cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Same end point as before
  let cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset;
  let cp1X = rightEndShoulderX + 3 * 10 * mmToPx; // Adjust control point 1 to pull curve inwards more sharply
  let cp1Y = rightEndShoulderY + 1.5 * 10 * mmToPx; // Adjust Y for sharper start
  let cp2X = cuffArmholeEndX + 4 * 10 * mmToPx; // Control closer to the end
  let cp2Y = cuffArmholeEndY - .25 * 10 * mmToPx; // Lower Y adjustment
  let rightTorsoLength = 0.35 * 10 * mmToPx; 
  let rightTorsoAngle = 100 * (Math.PI / 180);
  let rightTorsoEndX = cuffArmholeEndX - rightTorsoLength * Math.cos(Math.PI - rightTorsoAngle); // X component
  let rightTorsoEndY = cuffArmholeEndY - rightTorsoLength * Math.sin(Math.PI - rightTorsoAngle); // Y component
  const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
  const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
  const neckDipDepth = 1.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
  const neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm
  const endNeckX = endShoulderX + neckDipSpan;
  const endNeckY = endShoulderY;
  const leftShoulderStartX = endNeckX;
  const leftShoulderStartY = endNeckY;
  let leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
  let leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
  const controlPointX = endShoulderX + neckDipSpan / 2; // Control point X (halfway of the span)
  const controlPointY = endShoulderY + neckDipDepth; // Control point Y (downward dip)
  let endNeckCuffX1 = endNeckX + 4 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
  let endNeckCuffY1 = endNeckY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
  let endNeckCuffX = endShoulderX - 4 * mmToPx *  Math.cos((30 * Math.PI) / 180);
  let endNeckCuffY = endShoulderY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180);
  let endArmholeX1 = leftEndShoulderX - armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
  let endArmholeY1 = leftEndShoulderY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)

  endNeckCuffX = endShoulderX - 4 * mmToPx *  Math.cos((30 * Math.PI) / 180);
  endNeckCuffY = endShoulderY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180);

  let leftEndShoulderX1 = endArmholeX1; // Recalculate the starting point
  let leftEndShoulderY1 = endArmholeY1;
  let cuffArmholeEndX1 = leftEndShoulderX1 + 1.65 * 10 * mmToPx + inset; // Same end point as before
  let cuffArmholeEndY1 = leftEndShoulderY1 + 5.7 * 10 * mmToPx - inset;
  let cp1X1 = leftEndShoulderX1 - 3  * 10 * mmToPx; // Adjust control point 1 to pull curve inwards more sharply
  let cp1Y1 = leftEndShoulderY1 + 1.5 * 10 * mmToPx; // Adjust Y for sharper start
  let cp2X1 = cuffArmholeEndX1 - 4 * 10 * mmToPx; // Control closer to the end
  let cp2Y1 = cuffArmholeEndY1 - 0.25 * 10 * mmToPx; // Lower Y adjustment

  let svgPath = `M ${cuffArmholeEndX1} ${cuffArmholeEndY1} `;
  svgPath += `C ${cp2X1} ${cp2Y1} ${cp1X1} ${cp1Y1} ${endArmholeX1} ${endArmholeY1} `;
  svgPath += `L ${endNeckCuffX1} ${endNeckCuffY1} `;
  svgPath += `Q ${controlPointX} ${controlPointY + 4 * mmToPx} ${endNeckCuffX} ${endNeckCuffY} `;
  svgPath += `L ${endArmholeX} ${endArmholeY} `;
  svgPath += `C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${cuffArmholeEndX} ${cuffArmholeEndY} `;
  svgPath += `M ${cuffArmholeEndX1} ${cuffArmholeEndY1} `;

  const curveSpan = 10.5 * 10 * mmToPx;
  const inwardDip = 0.85 * 10 * mmToPx; 
  const curveControlX = cuffArmholeEndX1 - inwardDip; 
  const curveControlY = cuffArmholeEndY1 + curveSpan / 2; 
  const curveEndX = cuffArmholeEndX1; // Same X position as the start of the curve
  const curveEndY = cuffArmholeEndY1 + curveSpan;
  svgPath += `Q ${curveControlX} ${curveControlY}, ${curveEndX} ${curveEndY} `;

  const bottomSpan = 10.55 * 10 * mmToPx;
  const bottomDip = 0.75 * 10 * mmToPx;
  const bottomControlX = curveEndX - bottomSpan / 2;
  const bottomControlY = curveEndY + bottomDip;
  const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
  const bottomEndY = curveEndY; // End at the same Y level as the start
  svgPath += `Q ${bottomControlX} ${bottomControlY}, ${bottomEndX} ${bottomEndY} `;

  const leftCurveSpan = 10.5 * 10 * mmToPx;
  const leftInwardDip = 0.85 * 10 * mmToPx; 
  const leftCurveControlX = bottomEndX + leftInwardDip;
  const leftCurveControlY = bottomEndY - leftCurveSpan / 2;
  const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
  const leftCurveEndY = bottomEndY - leftCurveSpan; 
  svgPath += `Q ${leftCurveControlX} ${leftCurveControlY}, ${leftCurveEndX} ${leftCurveEndY} `;

  const leftTorsoLength = 0.40 * 10 * mmToPx; 
  const leftTorsoAngle = 100 * (Math.PI / 180);
  const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
  const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component

  return svgPath;
}

function backOverlay1(startX, startY){
  const mmToPx = 3.7795275591; // Convert mm to pixels
  const inset = 0.4 * 10 * mmToPx; // 0.4 cm inset for the cuff
  const shoulderLength = 15.875 * mmToPx;
  const armholeLength = 4 * mmToPx; // 4 cm upwards along the armhole edge
  const endArmholeX = startX + armholeLength * Math.cos((30 * Math.PI) / 180); // X component (slightly slanted inward)
  const endArmholeY = startY - armholeLength * Math.sin((30 * Math.PI) / 180); // Y component (going upwards)
  const endShoulderX = startX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
  const endShoulderY = startY - shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
  const rightEndShoulderX = endArmholeX;
  const rightEndShoulderY = endArmholeY;
  const cuffArmholeEndX = rightEndShoulderX - 2.375 * 10 * mmToPx + inset; // Flip the direction to the left
  const cuffArmholeEndY = rightEndShoulderY + 5.7 * 10 * mmToPx - inset; // Move down with an inset
  const cuffControlX = rightEndShoulderX; // Keep X at the cuff start
  const cuffControlY = rightEndShoulderY + (5 / 1.2) * 10 * mmToPx - inset; // Adjust Y for the inset
  const neckDipDepth = 1.5 * 10 * mmToPx;  // Keep the deep dip of 10 cm
  const neckDipSpan = 4.5 * 10 * mmToPx;  // Keep the span of 4.5 cm
  const cp1X = endShoulderX + neckDipSpan * -0.125; 
  const cp1Y = endShoulderY + neckDipDepth * 1.2; 
  const cp2X = endShoulderX + neckDipSpan * 1.125;  
  const cp2Y = endShoulderY + neckDipDepth * 1.2;  
  const endNeckX = endShoulderX + neckDipSpan;
  const endNeckY = endShoulderY;
  const leftShoulderStartX = endNeckX;
  const leftShoulderStartY = endNeckY;
  let leftEndShoulderX1 = leftShoulderStartX + 4 * mmToPx * Math.cos((30 * Math.PI) / 180); // X component
  let leftEndShoulderY1 = leftShoulderStartY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180); // Y component
  let leftEndShoulderX = leftShoulderStartX + shoulderLength * Math.cos((30 * Math.PI) / 180); // X component
  let leftEndShoulderY = leftShoulderStartY + shoulderLength * Math.sin((30 * Math.PI) / 180); // Y component
  const armholeEndX = leftEndShoulderX + 1.75 * 10 * mmToPx;
  const armholeEndY = leftEndShoulderY + 4.75 * 10 * mmToPx;
  const armholeControlX = leftEndShoulderX; // Keep X at the start
  const armholeControlY = leftEndShoulderY + (4.75 / 1.5) * 10 * mmToPx;
  const torsoLength = 3.5 * mmToPx; // 0.4 cm converted to pixels
  const torsoAngle = 80 * (Math.PI / 180); // 80 degrees in radians
  const torsoEndX = armholeEndX + torsoLength * Math.cos(Math.PI - torsoAngle); // X component
  const torsoEndY = armholeEndY + torsoLength * Math.sin(Math.PI - torsoAngle); // Y component
  let leftArmholeEndX = leftEndShoulderX - 7 * mmToPx * Math.sin((30 * Math.PI) / 180);
  let leftArmholeEndY = leftEndShoulderY - 3.75 * mmToPx * Math.sin((30 * Math.PI) / 180);
  let leftArmholeControlX = torsoEndX - 1.95 * 10 * mmToPx; // Start wide, extending to the left
  let leftArmholeControlY = torsoEndY - 4.75 / 3.25 * 10 * mmToPx; // Climb tall quickly as it approaches the left shoulder
  const controlPointX = endShoulderX + neckDipSpan / 2; // Control point X (halfway of the span)
  const controlPointY = endShoulderY + neckDipDepth; // Control point Y (downward dip)
  let endNeckCuffX = endShoulderX - 4 * mmToPx *  Math.cos((30 * Math.PI) / 180);
  let endNeckCuffY = endShoulderY + 4 * mmToPx * Math.sin((30 * Math.PI) / 180);

  let svgPath = `M ${torsoEndX} ${torsoEndY} `;
  svgPath += `Q ${leftArmholeControlX} ${leftArmholeControlY} ${leftArmholeEndX} ${leftArmholeEndY} `;
  svgPath += `L ${leftEndShoulderX1} ${leftEndShoulderY1} `;
  svgPath += `Q ${controlPointX} ${controlPointY + 4 * mmToPx} ${endNeckCuffX} ${endNeckCuffY}`;
  svgPath += `L ${endArmholeX} ${endArmholeY} `;
  svgPath += `Q ${cuffControlX} ${cuffControlY} ${cuffArmholeEndX} ${cuffArmholeEndY} `;
  svgPath += `M ${torsoEndX} ${torsoEndY} `;

  const curveSpan = 10.5 * 10 * mmToPx;
  const inwardDip = 0.85 * 10 * mmToPx; 
  const curveControlX = torsoEndX - inwardDip; 
  const curveControlY = torsoEndY + curveSpan / 2; 
  const curveEndX = torsoEndX; // Same X position as the start of the curve
  const curveEndY = torsoEndY + curveSpan;
  svgPath += `Q ${curveControlX} ${curveControlY}, ${curveEndX} ${curveEndY} `;
  const bottomSpan = 10.55 * 10 * mmToPx;
  const bottomDip = 0.75 * 10 * mmToPx;
  const bottomControlX = curveEndX - bottomSpan / 2;
  const bottomControlY = curveEndY + bottomDip;
  const bottomEndX = curveEndX - bottomSpan; // End of the bottom span
  const bottomEndY = curveEndY; // End at the same Y level as the start
  svgPath += `Q ${bottomControlX} ${bottomControlY}, ${bottomEndX} ${bottomEndY} `;
  const leftCurveSpan = 10.5 * 10 * mmToPx;
  const leftInwardDip = 0.85 * 10 * mmToPx; 
  const leftCurveControlX = bottomEndX + leftInwardDip;
  const leftCurveControlY = bottomEndY - leftCurveSpan / 2;
  const leftCurveEndX = bottomEndX; // Same X position as the start of the curve
  const leftCurveEndY = bottomEndY - leftCurveSpan; 
  svgPath += `Q ${leftCurveControlX} ${leftCurveControlY}, ${leftCurveEndX} ${leftCurveEndY} `;
  const leftTorsoLength = 0.40 * 10 * mmToPx; 
  const leftTorsoAngle = 100 * (Math.PI / 180);
  const leftTorsoEndX = leftCurveEndX - leftTorsoLength * Math.cos(Math.PI - leftTorsoAngle); // X component
  const leftTorsoEndY = leftCurveEndY - leftTorsoLength * Math.sin(Math.PI - leftTorsoAngle); // Y component

  return svgPath;
}

function toggleSingletSettingsMenu() {
  const menu = document.getElementById('singlet-settings-menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function formatPriceDiff(diff) {
  if (diff === 0) return '';
  const sign = diff > 0 ? '+' : '–';
  return `(${sign}$${Math.abs(diff).toFixed(2)})`;
}


const singletPrices = {
  "Legend": 44.99,
  "Loose Fit": 32.99,
  "Compression": 44.99,
  "Fitted": 44.99
};

function getSelected(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function setEnabled(groupId, allowedValues) {
  const group = document.getElementById(groupId);
  const inputs = group.querySelectorAll('input[type="radio"]');
  let firstEnabled = null;

  inputs.forEach(input => {
    const enabled = allowedValues.includes(input.value);
    input.disabled = !enabled;

    // style feedback via data-disabled class on label
    const label = input.closest('label.square-radio');
    if (label) label.classList.toggle('is-disabled', !enabled);

    if (enabled && !firstEnabled) firstEnabled = input;
  });

  // if the current selection is now disabled, pick the first enabled
  const current = group.querySelector('input[type="radio"]:checked');
  if (current && current.disabled && firstEnabled) {
    firstEnabled.checked = true;
  }
}

function applyRules() {
  const singlet = getSelected('singlet-type');   // Legend | LooseFit | Compression | Fitted
  const gender  = getSelected('gender-type');    // Mens | Womens | Youth | Boys | Girls

  /* ----- STYLE rules ----- */
  // defaults: both styles allowed
  let styleAllowed = ['Normal', 'Racerback'];

  if (singlet === 'Legend') {
    styleAllowed = ['Racerback'];                // Legend => only Racerback
  } else if (singlet === 'Fitted') {
    styleAllowed = ['Normal'];                   // Fitted => only Normal
  } else if (singlet === 'Compression') {
    // Compression + Men's/Boys => Normal only
    if (gender === 'Mens' || gender === 'Boys') {
      styleAllowed = ['Normal'];
    }
    // Compression + Women's/Girls => Racerback only
    if (gender === 'Womens' || gender === 'Girls') {
      styleAllowed = ['Racerback'];
    }
  }
  setEnabled('style-type-options', styleAllowed);

  /* ----- GENDER rules ----- */
  // Compression => Youth NOT available, Boys & Girls ARE available
  // Non-Compression => Boys & Girls NOT available, Youth IS available
  let genderAllowed;
  if (singlet === 'Compression') {
    genderAllowed = ['Mens', 'Womens', 'Boys', 'Girls']; // no Youth
  } else {
    genderAllowed = ['Mens', 'Womens', 'Youth'];         // no Boys/Girls
  }
  setEnabled('gender-type-options', genderAllowed);

  document.getElementById('total-price').textContent = `$${singletPrices[getSelected('singlet-type')].toFixed(2)}`;
}

/* === Hook up events & initial state === */
document.addEventListener('DOMContentLoaded', () => {
  // run once on load
  applyRules();

  // re-apply when singlet or gender changes
  document.getElementById('singlet-type-options').addEventListener('change', applyRules);
  document.getElementById('gender-type-options').addEventListener('change', applyRules);
});

function saveChanges(){
    document.getElementById("pricing").textContent = `Total Price: $${singletPrices[getSelected('singlet-type')].toFixed(2)}/each`;
    document.body.style.cursor = 'progress';
    await delay(100);
    let title;
    const singlet = getSelected('singlet-type');
    const gender = getSelected('gender-type');
    const style = getSelected('style-type');

    if(singlet == "Compression" && (gender == "Mens" || gender == "Boys")){
      itDescript = `${gender} ${singlet} Tank`;
    }
    else if(singlet == "Compression" && (gender == "Womens" || gender == "Girls")){
      itDescript = `${gender} ${singlet} ${style}`;
    }
    else if (singlet == "Legend"){
      itDescript = `${gender} ${singlet} Singlet`;
    }
    else if (singlet == "Loose Fit" && style == "Racerback"){
      itDescript = `${gender} ${singlet} ${style}`;
    }
    else{
      itDescript = `${gender} ${singlet} Singlet`;
    }
    document.getElementById('builderTitle').textContent = itDescript;
    clearCanvases();
    buildCanvases();
    reapplySelectedColor('selectedColor1', 'colorDropdown1');
    reapplySelectedColor('selectedColor2', 'colorDropdown2');
    reapplySelectedColor('selectedColor3', 'colorDropdown3');
    reapplySelectedColor('selectedColor4', 'colorDropdown4');
    reapplySelectedColor('selectedColor5', 'colorDropdown5');
    reapplySelectedColor('selectedColor6', 'colorDropdown6');
    populateTemplateDropdown();
    populateEffectDropdown();
    
    // Create a "No Design" template object to generate the initial default thumbnail
    const noDesignTemplate = { name: "No Design" };
    const templatePreviewImage = document.getElementById("templatePreviewImage");
    
    // Generate and set the "No Design" thumbnail as the default preview image
    generateThumbnail(noDesignTemplate, templatePreviewImage);
    selectTemplate(noDesignTemplate, templatePreviewImage);
    document.body.style.cursor = 'default';
    toggleSingletSettingsMenu();
}

function reapplySelectedColor(selectedId, dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;

  // 1. Look inside the color grid for a selected swatch
  const selectedOption = dropdown.querySelector('.color-option-grid .color-option.selected');
  if (selectedOption) {
    // Trigger its existing onclick
    if (typeof selectedOption.onclick === 'function') {
      selectedOption.onclick();
    } else {
      // If inline onclick is a string attribute
      const handler = selectedOption.getAttribute('onclick');
      if (handler) eval(handler);
    }
    return;
  }

  // 2. Fallback to custom color box
  const idx = selectedId.match(/\d+$/)?.[0] || '';
  const customBox = document.getElementById(`colorDisplayBox${idx}`);
  if (customBox) {
    if (typeof customBox.onclick === 'function') {
      customBox.onclick();
    } else {
      const handler = customBox.getAttribute('onclick');
      if (handler) eval(handler);
    }
  }
}


function clearCanvases() {
  // Select ALL <canvas> elements inside uniformCanvases and the hidden div
  const canvases = document.querySelectorAll(
    '#uniformCanvases canvas, [style*="display: none"] canvas'
  );

  canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}

function hideCanvases(){
  canvas7.style.visibility = "hidden";
  canvas8.style.visibility = "hidden";
  canvas9.style.visibility = "hidden";

  hiddencanvas7.style.visibility = "hidden";
  hiddencanvas8.style.visibility = "hidden";
  hiddencanvas9.style.visibility = "hidden";
}

function showHiddenCanvases(){
  canvas7.style.visibility = "visible";
  canvas8.style.visibility = "visible";
  canvas9.style.visibility = "visible";

  hiddencanvas7.style.visibility = "visible";
  hiddencanvas8.style.visibility = "visible";
  hiddencanvas9.style.visibility = "visible";
}


function buildCanvases(){

        if(itDescript.toUpperCase().includes("TANK")){

          hideCanvases();

          document.getElementById("uniformCanvases").style.marginLeft = '100px';
          document.getElementById("FrontOverlayCanvas").style.marginLeft = '300px';
          document.getElementById("BackOverlayCanvas").style.marginLeft = '300px';

          document.getElementById("NordLogo").style.left = '205px';
          document.getElementById("NordLogo").style.top = '150px';

          document.getElementById("hiddenNordLogo").style.left = '0px';
          document.getElementById("hiddenNordLogo").style.top = '150px';

          document.getElementById("hiddenNordLogo2").style.left = '0px';
          document.getElementById("hiddenNordLogo2").style.top = '150px';

          document.getElementById("hiddenNordLogo3").style.left = '0px';
          document.getElementById("hiddenNordLogo3").style.top = '150px';

          document.getElementById("hiddenNordLogo4").style.left = '0px';
          document.getElementById("hiddenNordLogo4").style.top = '150px';
          

          // Initialize the canvas and context
          canvas = document.getElementById("TankTopCanvas");
          context = canvas.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawMCompressTankTop(context, 200, 100);
          context.fillStyle = "darkgray";
          context.fill();

          canvas2 = document.getElementById("TankTopCuffCanvas");
          context2 = canvas2.getContext("2d");

          drawMCompressCuffs(context2, 200, 100);
          context2.fillStyle = "lightgray";
          context2.fill();

          canvas3 = document.getElementById("TankTopInternalFrontCanvas");
          context3 = canvas3.getContext("2d");

          drawMCompressInternal(context3, 200, 100);
          context3.fillStyle = "lightgray";
          context3.fill();

          // Initialize the canvas and context
          canvas4 = document.getElementById("TankTopBackCanvas");
          context4 = canvas4.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawMCompressBackTankTop(context4, 700, 100);
          context4.fillStyle = "darkgray";
          context4.fill();

          canvas5 = document.getElementById("TankTopBackCuffCanvas");
          context5 = canvas5.getContext("2d");

          drawMCompressBackCuffs(context5, 700, 100);
          context5.fillStyle = "lightgray";
          context5.fill();

          canvas6 = document.getElementById("TankTopInternalBackCanvas");
          context6 = canvas6.getContext("2d");
          context6.fillStyle = "lightgray";

          templateCanvas1 = document.getElementById("TankTopTemplateColor1Canvas");
          templateContext1 = templateCanvas1.getContext("2d");

          templateCanvas2 = document.getElementById("TankTopTemplateColor2Canvas");
          templateContext2 = templateCanvas2.getContext("2d");

          templateCanvas3 = document.getElementById("TankTopTemplateColor3Canvas");
          templateContext3 = templateCanvas3.getContext("2d");


          // Initialize all hidden canvases and contexts
          hiddenCanvas1 = document.getElementById("hiddenTankTopCanvas");
          hiddenContext1 = hiddenCanvas1.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawMCompressTankTop(hiddenContext1, 200, 100);
          hiddenContext1.fillStyle = "darkgray";
          hiddenContext1.fill();

          hiddenCanvas2 = document.getElementById("hiddenTankTopCuffCanvas");
          hiddenContext2 = hiddenCanvas2.getContext("2d");

          drawMCompressCuffs(hiddenContext2, 200, 100);
          hiddenContext2.fillStyle = "lightgray";
          hiddenContext2.fill();

          hiddencanvas3 = document.getElementById("hiddenTankTopInternalFrontCanvas");
          hiddencontext3 = hiddencanvas3.getContext("2d"); 

          drawMCompressInternal(hiddencontext3, 200, 100);
          hiddencontext3.fillStyle = "lightgray";
          hiddencontext3.fill();

          // Initialize the canvas and context
          hiddencanvas4 = document.getElementById("hiddenTankTopBackCanvas");
          hiddencontext4 = hiddencanvas4.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawMCompressBackTankTop(hiddencontext4, 700, 100);
          hiddencontext4.fillStyle = "darkgray";
          hiddencontext4.fill();

          hiddencanvas5 = document.getElementById("hiddenTankTopBackCuffCanvas");
          hiddencontext5 = hiddencanvas5.getContext("2d");

          drawMCompressBackCuffs(hiddencontext5, 700, 100);
          hiddencontext5.fillStyle = "lightgray";
          hiddencontext5.fill();

          hiddencanvas6 = document.getElementById("hiddenTankTopInternalBackCanvas");
          hiddencontext6 = hiddencanvas6.getContext("2d");
          hiddencontext6.fillStyle = "lightgray";

          hiddentemplateCanvas1 = document.getElementById("hiddenTankTopTemplateColor1Canvas");
          hiddentemplateContext1 = hiddentemplateCanvas1.getContext("2d");

          hiddentemplateCanvas2 = document.getElementById("hiddenTankTopTemplateColor2Canvas");
          hiddentemplateContext2 = hiddentemplateCanvas2.getContext("2d");

          hiddentemplateCanvas3 = document.getElementById("hiddenTankTopTemplateColor3Canvas");
          hiddentemplateContext3 = hiddentemplateCanvas3.getContext("2d");

          frontOverlayPath = frontMCompressOverlay(200, 100);
          frontOverlayPath += `Z`;
          backOverlayPath = backMCompressOverlay(200, 100);
          backOverlayPath += `Z`;
        }
        else if(itDescript.toUpperCase().includes("COMPRESSION")){

          hideCanvases();

          document.getElementById("uniformCanvases").style.marginLeft = '20px';
          document.getElementById("FrontOverlayCanvas").style.marginLeft = '260px';
          document.getElementById("BackOverlayCanvas").style.marginLeft = '260px';

          document.getElementById("NordLogo").style.left = '225px';
          document.getElementById("NordLogo").style.top = '225px';

          document.getElementById("hiddenNordLogo").style.left = '-20px';
          document.getElementById("hiddenNordLogo").style.top = '225px';

          document.getElementById("hiddenNordLogo2").style.left = '-20px';
          document.getElementById("hiddenNordLogo2").style.top = '225px';

          document.getElementById("hiddenNordLogo3").style.left = '-20px';
          document.getElementById("hiddenNordLogo3").style.top = '225px';

          document.getElementById("hiddenNordLogo4").style.left = '-20px';
          document.getElementById("hiddenNordLogo4").style.top = '225px';
          

          // Initialize the canvas and context
          canvas = document.getElementById("TankTopCanvas");
          context = canvas.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawWCompressTankTop(context, 200, 100);
          context.fillStyle = "darkgray";
          context.fill();

          canvas2 = document.getElementById("TankTopCuffCanvas");
          context2 = canvas2.getContext("2d");

          drawWCompressCuffs(context2, 200, 100);
          context2.fillStyle = "lightgray";
          context2.fill();

          canvas3 = document.getElementById("TankTopInternalFrontCanvas");
          context3 = canvas3.getContext("2d");

          drawWCompressInternal(context3, 200, 100);
          context3.fillStyle = "lightgray";
          context3.fill();

          // Initialize the canvas and context
          canvas4 = document.getElementById("TankTopBackCanvas");
          context4 = canvas4.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawWCompressBackTankTop(context4, 700, 100);
          context4.fillStyle = "darkgray";
          context4.fill();

          canvas5 = document.getElementById("TankTopBackCuffCanvas");
          context5 = canvas5.getContext("2d");

          drawWCompressBackCuffs(context5, 700, 100);
          context5.fillStyle = "lightgray";
          context5.fill();

          canvas6 = document.getElementById("TankTopInternalBackCanvas");
          context6 = canvas6.getContext("2d");

          drawWCompressBackInternal(context6, 700, 100);
          context6.fillStyle = "lightgray";
          context6.fill();

          templateCanvas1 = document.getElementById("TankTopTemplateColor1Canvas");
          templateContext1 = templateCanvas1.getContext("2d");

          templateCanvas2 = document.getElementById("TankTopTemplateColor2Canvas");
          templateContext2 = templateCanvas2.getContext("2d");

          templateCanvas3 = document.getElementById("TankTopTemplateColor3Canvas");
          templateContext3 = templateCanvas3.getContext("2d");


          // Initialize all hidden canvases and contexts
          hiddenCanvas1 = document.getElementById("hiddenTankTopCanvas");
          hiddenContext1 = hiddenCanvas1.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawWCompressTankTop(hiddenContext1, 200, 100);
          hiddenContext1.fillStyle = "darkgray";
          hiddenContext1.fill();

          hiddenCanvas2 = document.getElementById("hiddenTankTopCuffCanvas");
          hiddenContext2 = hiddenCanvas2.getContext("2d");

          drawWCompressCuffs(hiddenContext2, 200, 100);
          hiddenContext2.fillStyle = "lightgray";
          hiddenContext2.fill();

          hiddencanvas3 = document.getElementById("hiddenTankTopInternalFrontCanvas");
          hiddencontext3 = hiddencanvas3.getContext("2d"); 

          drawWCompressInternal(hiddencontext3, 200, 100);
          hiddencontext3.fillStyle = "lightgray";
          hiddencontext3.fill();

          // Initialize the canvas and context
          hiddencanvas4 = document.getElementById("hiddenTankTopBackCanvas");
          hiddencontext4 = hiddencanvas4.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawWCompressBackTankTop(hiddencontext4, 700, 100);
          hiddencontext4.fillStyle = "darkgray";
          hiddencontext4.fill();

          hiddencanvas5 = document.getElementById("hiddenTankTopBackCuffCanvas");
          hiddencontext5 = hiddencanvas5.getContext("2d");

          drawWCompressBackCuffs(hiddencontext5, 700, 100);
          hiddencontext5.fillStyle = "lightgray";
          hiddencontext5.fill();

          hiddencanvas6 = document.getElementById("hiddenTankTopInternalBackCanvas");
          hiddencontext6 = hiddencanvas6.getContext("2d");

          drawWCompressBackInternal(hiddencontext6, 700, 100);
          hiddencontext6.fillStyle = "lightgray";
          hiddencontext6.fill();

          hiddentemplateCanvas1 = document.getElementById("hiddenTankTopTemplateColor1Canvas");
          hiddentemplateContext1 = hiddentemplateCanvas1.getContext("2d");

          hiddentemplateCanvas2 = document.getElementById("hiddenTankTopTemplateColor2Canvas");
          hiddentemplateContext2 = hiddentemplateCanvas2.getContext("2d");

          hiddentemplateCanvas3 = document.getElementById("hiddenTankTopTemplateColor3Canvas");
          hiddentemplateContext3 = hiddentemplateCanvas3.getContext("2d");

          frontOverlayPath = frontWCompressOverlay(200, 100);
          frontOverlayPath += `Z`;
          backOverlayPath = backWCompressOverlay(200, 100);
          backOverlayPath += `Z`;
        }
        else{
          hideCanvases();

          document.getElementById("uniformCanvases").style.marginLeft = '0px';
          document.getElementById("FrontOverlayCanvas").style.marginLeft = '250px';
          document.getElementById("BackOverlayCanvas").style.marginLeft = '250px';

          document.getElementById("NordLogo").style.left = '265px';
          document.getElementById("NordLogo").style.top = '190px';

          document.getElementById("hiddenNordLogo").style.left = '0px';
          document.getElementById("hiddenNordLogo").style.top = '150px';

          document.getElementById("hiddenNordLogo2").style.left = '0px';
          document.getElementById("hiddenNordLogo2").style.top = '150px';

          document.getElementById("hiddenNordLogo3").style.left = '0px';
          document.getElementById("hiddenNordLogo3").style.top = '150px';

          document.getElementById("hiddenNordLogo4").style.left = '0px';
          document.getElementById("hiddenNordLogo4").style.top = '150px';
          // Initialize the canvas and context
          canvas = document.getElementById("TankTopCanvas");
          context = canvas.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawTankTop(context, 200, 100);
          context.fillStyle = "darkgray";
          context.fill();

          canvas2 = document.getElementById("TankTopCuffCanvas");
          context2 = canvas2.getContext("2d");

          drawCuffs(context2, 200, 100);
          context2.fillStyle = "lightgray";
          context2.fill();

          canvas3 = document.getElementById("TankTopInternalFrontCanvas");
          context3 = canvas3.getContext("2d");

          drawInternal(context3, 200, 100);
          context3.fillStyle = "gray";
          context3.fill();

          // Initialize the canvas and context
          canvas4 = document.getElementById("TankTopBackCanvas");
          context4 = canvas4.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawTankTop(context4, 700, 100);
          context4.fillStyle = "darkgray";
          context4.fill();

          canvas5 = document.getElementById("TankTopBackCuffCanvas");
          context5 = canvas5.getContext("2d");

          drawBackCuffs(context5, 700, 100);
          context5.fillStyle = "lightgray";
          context5.fill();

          if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
            showHiddenCanvases();
            canvas6 = document.getElementById("TankTopInternalBackCanvas");
            context6 = canvas6.getContext("2d");

            drawBackInternal(context6, 700, 100);
            context6.fillStyle = "gray";
            context6.fill();
          }

          canvas7 = document.getElementById("TankTopBackHolesCanvas");
          context7 = canvas7.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND")){
            // Restrict pinholes to the tank top shape
            applyPinHoleMask(context7, 700, 100);

            // Draw pinholes
            drawPinholes(context7, canvas7.width, canvas7.height);
          }


          canvas8 = document.getElementById("TankTopBackRacerCuffCanvas");
          context8 = canvas8.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
            drawBackRacerCuffs(context8, 700, 100);
            context8.fillStyle = "lightgray";
            context8.fill();
          }

          canvas9 = document.getElementById("TankTopFrontOutlineCanvas");
          context9 = canvas9.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND")){
            applyPinHoleMask(context9, 200, 100);
          }

          templateCanvas1 = document.getElementById("TankTopTemplateColor1Canvas");
          templateContext1 = templateCanvas1.getContext("2d");

          templateCanvas2 = document.getElementById("TankTopTemplateColor2Canvas");
          templateContext2 = templateCanvas2.getContext("2d");

          templateCanvas3 = document.getElementById("TankTopTemplateColor3Canvas");
          templateContext3 = templateCanvas3.getContext("2d");


          // Initialize all hidden canvases and contexts
          hiddenCanvas1 = document.getElementById("hiddenTankTopCanvas");
          hiddenContext1 = hiddenCanvas1.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawTankTop(hiddenContext1, 200, 100);
          hiddenContext1.fillStyle = "darkgray";
          hiddenContext1.fill();

          hiddenCanvas2 = document.getElementById("hiddenTankTopCuffCanvas");
          hiddenContext2 = hiddenCanvas2.getContext("2d");

          drawCuffs(hiddenContext2, 200, 100);
          hiddenContext2.fillStyle = "lightgray";
          hiddenContext2.fill();

          hiddencanvas3 = document.getElementById("hiddenTankTopInternalFrontCanvas");
          hiddencontext3 = hiddencanvas3.getContext("2d"); 

          drawInternal(hiddencontext3, 200, 100);
          hiddencontext3.fillStyle = "gray";
          hiddencontext3.fill();

          // Initialize the canvas and context
          hiddencanvas4 = document.getElementById("hiddenTankTopBackCanvas");
          hiddencontext4 = hiddencanvas4.getContext("2d");

          // Draw the entire tank top with shoulder, neckline, armhole, torso, and bottom
          drawTankTop(hiddencontext4, 700, 100);
          hiddencontext4.fillStyle = "darkgray";
          hiddencontext4.fill();

          hiddencanvas5 = document.getElementById("hiddenTankTopBackCuffCanvas");
          hiddencontext5 = hiddencanvas5.getContext("2d");

          drawBackCuffs(hiddencontext5, 700, 100);
          hiddencontext5.fillStyle = "lightgray";
          hiddencontext5.fill();

          hiddencanvas6 = document.getElementById("hiddenTankTopInternalBackCanvas");
          hiddencontext6 = hiddencanvas6.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
            drawBackInternal(hiddencontext6, 700, 100);
            hiddencontext6.fillStyle = "gray";
            hiddencontext6.fill();
          }

          hiddencanvas7 = document.getElementById("hiddenTankTopBackHolesCanvas");
          hiddencontext7 = hiddencanvas7.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND")){
            // Restrict pinholes to the tank top shape
            applyPinHoleMask(hiddencontext7, 700, 100);

            // Draw pinholes
            drawPinholes(hiddencontext7, hiddencanvas7.width, hiddencanvas7.height);
          }

          hiddencanvas8 = document.getElementById("hiddenTankTopBackRacerCuffCanvas");
          hiddencontext8 = hiddencanvas8.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
            drawBackRacerCuffs(hiddencontext8, 700, 100);
            hiddencontext8.fillStyle = "lightgray";
            hiddencontext8.fill();
          }

          hiddencanvas9 = document.getElementById("hiddenTankTopFrontOutlineCanvas");
          hiddencontext9 = hiddencanvas9.getContext("2d");

          if(itDescript.toUpperCase().includes("LEGEND")){
            applyPinHoleMask(hiddencontext9, 200, 100);
          }

          hiddentemplateCanvas1 = document.getElementById("hiddenTankTopTemplateColor1Canvas");
          hiddentemplateContext1 = hiddentemplateCanvas1.getContext("2d");

          hiddentemplateCanvas2 = document.getElementById("hiddenTankTopTemplateColor2Canvas");
          hiddentemplateContext2 = hiddentemplateCanvas2.getContext("2d");

          hiddentemplateCanvas3 = document.getElementById("hiddenTankTopTemplateColor3Canvas");
          hiddentemplateContext3 = hiddentemplateCanvas3.getContext("2d");

          frontOverlayPath = frontOverlay(200, 100);
          frontOverlayPath += `Z`;
          backOverlayPath;

          if(itDescript.toUpperCase().includes("LEGEND") || itDescript.toUpperCase().includes("RACERBACK")){
            backOverlayPath = backOverlay(200, 100);
          }
          else{
            backOverlayPath = backOverlay1(200, 100);
          }
          backOverlayPath += `Z`;

        }

      

  // Find the uniformCanvases div
  const uniformCanvases = document.getElementById("uniformCanvases");
  if (!uniformCanvases) {
    console.error("uniformCanvases element not found");
  }

  // Create the <svg> element for the clip path
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", "0");
  svgElement.setAttribute("height", "0");
  svgElement.setAttribute("id", "svgFront");

  // Create <defs> and <clipPath>
  const defsElement = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const clipPathElement = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
  clipPathElement.setAttribute("id", "tankTopClipPath");

  // Create the <path> element and set the 'd' attribute with svgPath1
  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement.setAttribute("d", frontOverlayPath); // Ensure svgPath1 is valid

  // Build the SVG structure
  clipPathElement.appendChild(pathElement);
  defsElement.appendChild(clipPathElement);
  svgElement.appendChild(defsElement);
  // Append the SVG to the uniformCanvases div

  let oldsvg = document.getElementById("svgFront");
  if(oldsvg){
    oldsvg.remove();
  }
  uniformCanvases.appendChild(svgElement);

  // Create <svg> element for the back overlay clip path
  const svgBack = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgBack.setAttribute("width", "0");
  svgBack.setAttribute("height", "0");
  svgBack.setAttribute("id", "svgBack");

  // Create <defs> and <clipPath> for the back overlay
  const defsBack = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const clipPathBack = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
  clipPathBack.setAttribute("id", "tankTopBackClipPath");

  // Create the <path> element and set the 'd' attribute with backOverlayPath for the back overlay
  const pathBack = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathBack.setAttribute("d", backOverlayPath); // Assuming backOverlayPath contains the correct path data for the back

  // Build the SVG structure for the back overlay
  clipPathBack.appendChild(pathBack);
  defsBack.appendChild(clipPathBack);
  svgBack.appendChild(defsBack);

  // Append the SVG to the uniformCanvases div
  oldsvg = document.getElementById("svgBack");
  if(oldsvg){
    oldsvg.remove();
  }
  uniformCanvases.appendChild(svgBack);
}