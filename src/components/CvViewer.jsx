import React, { useEffect } from "react";
import { ArrowLeft, DownloadSimple } from "phosphor-react";
import { CV_CONFIG } from "../data/cvConfig";

export default function CvViewer() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = CV_CONFIG.title;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="cv-viewer">
      <iframe src={CV_CONFIG.inlineUrl} title={CV_CONFIG.title} className="cv-viewer-frame" />

      <div className="cv-viewer-bar">
        <a href="/" className="btn">
          <ArrowLeft size={15} />
          Portfolio
        </a>
        <a href={CV_CONFIG.fileUrl} download={CV_CONFIG.downloadFileName} className="btn btn-primary">
          <DownloadSimple size={15} weight="bold" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
