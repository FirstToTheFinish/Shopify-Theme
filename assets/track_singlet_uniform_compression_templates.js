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

//Checkerboard Design
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

//Stripe Design
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

//Side Design
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