const QRCode = require('magic-qr-code');
const fs = require('fs');
const { convertFile}  = require('convert-svg-to-png');

// Global Construction Parameters
const squareWidth = 45;
const framePadding = squareWidth * 2.5;
const squareMargin = squareWidth * 0.2;

module.exports.qrEncil = function (qrContent) {

    //  Generate Buffer
    const qrBuffer = generateBuffer(qrContent);

    //  Specific Construction Parameters
    const OutputFilename = 'qrencil.svg'
    const qrLength = qrBuffer.length;
    const totalDimension = qrLength * (squareWidth + squareMargin) + 2* framePadding;

    // Preparing SVG code
    const viewbox = `0 0 ${totalDimension} ${totalDimension}`;
    const svgHeader = `<svg x="0px" y="0px" width="2000" height="2000" viewbox="${viewbox}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >`
    const svgFrame = `\n\t<rect x="0" y="0" width="${totalDimension}" height="${totalDimension}" rx="25" ry="25" stroke="black" fill="none" stroke-width="1" />`;
    const svgFooter = '\n</svg>';

    //  Loop over buffer
    var i,j;
    let svgContent = "";
    for (i = 0; i < qrBuffer.length; i++) {
        for(j=0; j<qrBuffer.length; j++)
        {
            if(j == 0)
            {
                //  console.log('Row Start');
                svgContent += '\n\t<g>'
            }
            svgContent += drawRectangle(qrBuffer[i][j],i,j);
            // console.log(qrBuffer[i][j]);
            if(j == qrBuffer.length-1)
            {
                //  console.log('Row End');
                svgContent += '\n\t</g>'
            }
        }
    }

    const svgFinal = svgHeader + svgFrame + svgContent + svgFooter;

    //Create file if not exist
    fs.writeFile( OutputFilename, svgFinal, 
    function (err) {
        if (err) throw err;
        console.log("File created!")
    });

    (async() => {
        const inputFilePath = OutputFilename;
        const outputFilePath = await convertFile(inputFilePath);
       
        console.log(outputFilePath);
        //=> "/path/to/my-image.png"
      })();

}

//  Encode the QR information into buffer
function generateBuffer(input) {
    let output = QRCode.encode(input,QRCode.ECC_L);
    return output;
}

// Draw the single rectangle if buffer is 1
function drawRectangle(value, pos_i, pos_j) {
    
    let xPos= framePadding + squareWidth*pos_j + ( squareMargin * pos_j );
    let yPos= framePadding + squareWidth*pos_i + ( squareMargin * pos_i );

    //  console.log(value);
    if (value == 1)
    {
        let svgRectangle = `\n\t\t<rect x="${xPos}" y="${yPos}" width="${squareWidth}" height="${squareWidth}" stroke="black" fill="none" stroke-width="1"/>`;
        return svgRectangle;
    }
    else {
        return "";
    }
}