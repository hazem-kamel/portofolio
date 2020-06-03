import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "./Resume.css";
import cv from "../../static/data/Hazem-MERN-Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="cv">
      <Document
        className="cv-file"
        file={cv}
        onLoadError={(error) => {
          console.log("Load error", error);
        }}
        onSourceSuccess={() => {
          console.log("Source success");
        }}
        onSourceError={(error) => {
          console.error("Source error", error);
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
export default Resume;
