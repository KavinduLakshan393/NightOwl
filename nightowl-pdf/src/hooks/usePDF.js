import { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url';

// We configure the worker locally using Vite's static asset handling
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export const usePDF = (fileUrl) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fileUrl) return;
    
    let isMounted = true;
    const loadPDF = async () => {
      if (isMounted) setLoading(true);
      if (isMounted) setError(null);
      try {
        const loadingTask = pdfjsLib.getDocument(fileUrl);
        const pdf = await loadingTask.promise;
        if (isMounted) {
          setPdfDoc(pdf);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading PDF:', err);
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    loadPDF();

    return () => {
      isMounted = false;
      // Ideally we should destroy the doc when it changes, but pdfjs does caching.
      // Doing so can be complex depending on use cases.
    };
  }, [fileUrl]);

  return { pdfDoc, loading, error };
};
