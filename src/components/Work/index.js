import React, { useState } from 'react'
import './styles.scss'
import { Document, Page } from 'react-pdf'
import doc from '../../assets/Data-Analytic-Report.pdf'
import { pdfjs } from 'react-pdf'
import { View } from '@react-pdf/renderer'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


export const Work = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)

  }

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  return (
    <div className='work'>
      <div className='work__document'>
        <Document file={doc} onLoadSuccess={onDocumentLoadSuccess}
          pageLayout="single"
          options={{ workerSrc: "/pdf.worker.js" }}
          
        >

          <Page pageNumber={pageNumber} size="A4" 
            scale={1.4}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          >

             
            </Page>
          <div className='work__buttons'>
            <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </Document>
      </div>
    </div>
  )
}

export default Work
