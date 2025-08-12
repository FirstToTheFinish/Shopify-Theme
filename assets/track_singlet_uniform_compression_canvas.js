function drawWCompressTankTop(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.1; // Line thickness
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
    context.lineWidth = 0.1; // Line thickness
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
    context.lineWidth = 0.25; // Line thickness
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

    context.quadraticCurveTo(controlPointX + .5 * mmToPx, controlPointY + 20 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));


    context.moveTo(endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));


    context.quadraticCurveTo(controlPointX + 33 * mmToPx, controlPointY + 20 * mmToPx, endNeckX - (shoulderLength / 2.5) - 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));
    
    context.quadraticCurveTo(controlPointX + 29.5 * mmToPx, controlPointY + 19.5 * mmToPx, endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));


    context.stroke();
    context.closePath();
  }

  function drawWCompressInternal(context, startX, startY){
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.25; // Line thickness
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

    context.quadraticCurveTo(controlPointX + 5 * mmToPx, controlPointY, ((endShoulderX + endNeckX) / 2), startY + 10 * mmToPx);

    controlPointX = ((endShoulderX + endNeckX) / 2) * 1.21; // Control point X (halfway of the span)
    controlPointY = startY + 10 * mmToPx; // Control point Y (downward dip)

    context.quadraticCurveTo(controlPointX - 5 * mmToPx, controlPointY, endNeckX - (shoulderLength / 2.5) - .75, startY + (shoulderLength / 2.5) + 2);

    controlPointX = ((endShoulderX + endNeckX) / 2) * .8; // Control point X (halfway of the span)
    controlPointY = startY + 7 * mmToPx; // Control point Y (downward dip)

    

    context.quadraticCurveTo(controlPointX + 36 * mmToPx, controlPointY  + 2 * mmToPx, endNeckX - (shoulderLength / 2.5) - 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));

    context.quadraticCurveTo(controlPointX + 29.5 * mmToPx, controlPointY + 19.5 * mmToPx, endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));
    
    context.moveTo(endShoulderX + (shoulderLength / 2.5) + .75, startY + (shoulderLength / 2.5) + 2);
    
    context.quadraticCurveTo(controlPointX - 2.5 * mmToPx, controlPointY  + 2 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 1.4 * mmToPx, startY + 9 * mmToPx + (shoulderLength / 1.25));

    context.quadraticCurveTo(controlPointX + 4.5 * mmToPx, controlPointY + 19.5 * mmToPx, endShoulderX + (shoulderLength / 2.5) + 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));


    context.quadraticCurveTo(controlPointX + 9 * mmToPx, controlPointY + 34 * mmToPx, ((endShoulderX + endNeckX) / 2), startY + 44 * mmToPx - (shoulderLength / 2.5));

    context.quadraticCurveTo(controlPointX + 24 * mmToPx, controlPointY + 34 * mmToPx, endNeckX - (shoulderLength / 2.5) - 8 * mmToPx, startY + 28.5 * mmToPx + (shoulderLength / 1.25));

    context.stroke();
    context.closePath();
  }

  function drawWCompressBackCuffs(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.25; // Line thickness
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
    context.lineTo(leftShoulderEndX, startY + 26);
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
    context.lineTo(startX, startY + 26);
    context.lineTo(startX - c, startY + 12.5);

    context.moveTo(startX + 60, startY + 140);

    context.quadraticCurveTo(startX + 45, leftArmholeEndY - 30, startX + 38, startY + 72.5);
    context.quadraticCurveTo(startX + 62.5, leftArmholeEndY - 30, startX + 60, startY + 140);

    context.moveTo(leftShoulderEndX - 60, startY + 140);

    context.quadraticCurveTo(leftShoulderEndX - 46, leftArmholeEndY - 30, leftShoulderEndX - 38, startY + 72.5);
    context.quadraticCurveTo(leftShoulderEndX - 63, leftArmholeEndY - 31, leftShoulderEndX - 60, startY + 140);
    context.stroke();

    context.closePath();
  }

  function drawWCompressBackInternal(context, startX, startY) {
    const mmToPx = 3.7795275591; // Convert mm to pixels
    context.lineWidth = 0.25; // Line thickness
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
    context.lineTo(leftShoulderEndX, startY + 26);
    context.quadraticCurveTo(leftShoulderEndX - 37, leftArmholeEndY - 80, leftShoulderEndX - 38, startY + 72.5);
    context.quadraticCurveTo(leftShoulderEndX - 45, leftArmholeEndY - 30, leftShoulderEndX - 60, startY + 140);
    context.quadraticCurveTo(leftShoulderEndX - 49, leftArmholeEndY + 52, leftArmholeEndX + 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));


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
    context.lineTo(startX, startY + 26);
    context.quadraticCurveTo(startX + 37, leftArmholeEndY - 80, startX + 38, startY + 72.5);
    context.quadraticCurveTo(startX + 45, leftArmholeEndY - 30, startX + 60, startY + 140);
    context.quadraticCurveTo(startX + 49, leftArmholeEndY + 52, rightArmholeEndX - 31.5, leftArmholeEndY + 69.75 - c * Math.cos((30 * Math.PI) / 180));

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