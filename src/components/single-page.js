import React, { useState } from "react";
import { Document, Page} from "react-pdf";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const { pdf } = props;

  return (
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        style={
          {
            backgroundColor: 'tomato'
          }
        }
      >
        <Page pageNumber={pageNumber} 
        style={
          {
            'object-position': '50% 50%',
          }
        }/>
      </Document>
  );
}