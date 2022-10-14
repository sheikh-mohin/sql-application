const PDFDocument = require('pdfkit');
const fs = require('fs');
const { capitalizeFirstLetter } = require("../utils/index.util");

exports.expLetter = (user, currentDate) => {
    let fromDate = user.join_date.toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric' });
    let toDate = user.leave_date.toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric' })
    let date = currentDate.toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric' })

    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream('./pdf/Experience Letter.pdf'));
    pdfDoc.fontSize(19.5).text("Experience Letter\n\n", { align: 'center' })
    pdfDoc.fontSize(19.5).fillColor('black').text("TO WHOMSOEVER IT MAY CONCERN \n\n\n", { align: 'center' })
    pdfDoc.fontSize(12).fillColor('black')
        .text(`This is to confirm that Mr. ${capitalizeFirstLetter(user.name)}, EMP ${user.employee_id} has been
    \nreleased from the services of Broadstairs IT Solutions (OPC) Private Limited with
    \neffect from ${fromDate}. He was employed in the company from ${fromDate} till
    \n${toDate}. ${user['he/she']} was last designated as ${capitalizeFirstLetter(user.designation)}. We thank ${user['him/her']} for the
    \ncontribution during ${user['his/hers']} tenure with the organization and wish him all the best in his
    \nfuture endeavors.
    \n\n\nFor Broadstairs IT Solutions(OPC) Private Limited\n\n\n\n`, { align: 'left' })

    pdfDoc.moveDown(0.5)
    pdfDoc.image('./signature/Screenshot (6).png', { width: 200, height: 50 })
        .fontSize(12).fillColor('black').text(`\nWaseem Sajjad`, { align: 'left' })
    pdfDoc.fontSize(12).fillColor('black').text(`\nDirector – Human Resources`, { align: 'left' })
    pdfDoc.fontSize(12).fillColor('black').text(`\n${date}`, { align: 'left' })
    pdfDoc.end();
    return;
}
