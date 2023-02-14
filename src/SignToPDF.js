import React from 'react'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import downloadjs from 'downloadjs';
import { useContext } from 'react'
import { StatusContext } from './StatusContext'





async function modifyPdf(date,img) {

    
    const url = '/001.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
    const pngUrl = img
    const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())
    const pngImage = await pdfDoc.embedPng(pngImageBytes)
  
    const pngDims = pngImage.scale(0.5)
    
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const secondPage = pages[1]
    const thridPage = pages[3]
    const fourthPage = pages[5]
    const fivePage = pages[10]
    const sixPage = pages[11]
    const sevenPage = pages[12]
    const eightPage = pages[13]
    const ninePage = pages[14]
    const tenPage = pages[15]
    const elevenPage = pages[16]
    const { width, height } = firstPage.getSize()
  
    firstPage.drawImage(pngImage, {
      x: 50,
      y: 160,
      width: pngDims.width /2,
      height: pngDims.height / 2,
    })
  
    firstPage.drawText(date, {
      x: 50,
      y: 90,
      size: 10,
      font: helveticaFont,
      color: rgb(0.1, 0.1, 0.1),
      rotate: degrees(0),
    })

    secondPage.drawImage(pngImage, {
        x: 50,
        y: 340,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      secondPage.drawText(date, {
        x: 50,
        y: 280,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      thridPage.drawImage(pngImage, {
        x: 50,
        y: 230,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      thridPage.drawText(date, {
        x: 50,
        y: 150,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      fourthPage.drawImage(pngImage, {
        x: 50,
        y: 410,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      fourthPage.drawText(date, {
        x: 50,
        y: 340,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      fivePage.drawImage(pngImage, {
        x: 50,
        y: 665,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      fivePage.drawText(date, {
        x: 50,
        y: 600,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      sixPage.drawImage(pngImage, {
        x: 50,
        y: 140,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      sixPage.drawText(date, {
        x: 50,
        y: 75,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })
      
      sevenPage.drawImage(pngImage, {
        x: 50,
        y: 75,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      sevenPage.drawText(date, {
        x: 230,
        y: 160,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      eightPage.drawImage(pngImage, {
        x: 50,
        y: 200,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      eightPage.drawText(date, {
        x: 230,
        y: 280,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      ninePage.drawImage(pngImage, {
        x: 50,
        y: 365,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      ninePage.drawText(date, {
        x: 50,
        y: 305,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      tenPage.drawImage(pngImage, {
        x: 50,
        y: 305,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })
    
      tenPage.drawText(date, {
        x: 50,
        y: 240,
        size: 10,
        font: helveticaFont,
        color: rgb(0.1, 0.1, 0.1),
        rotate: degrees(0),
      })

      elevenPage.drawImage(pngImage, {
        x: 50,
        y: 370,
        width: pngDims.width /2,
        height: pngDims.height / 2,
      })  


    const pdfBytes = await pdfDoc.save()
    downloadjs(pdfBytes, "loan_argeement.pdf", "application/pdf");
  }


export default function SignToPDF() {

    const {cust_detial,imageURL}= useContext(StatusContext)  

  return (
    <div className="SignToPDF">
          <button onClick={() => modifyPdf(cust_detial.loan_date,imageURL)}>Download PDF</button>
          
    </div>
  )
}
