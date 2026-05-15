
import { useEffect, useRef, useState } from 'react';
import usePDFStore from '../../store/pdfStore';
import { usePDF } from '../../hooks/usePDF';

const PDFCanvasView = () => {
  const currentFileUrl = usePDFStore((state) => state.currentFileUrl);
  const { pdfDoc, loading, error } = usePDF(currentFileUrl);
  const canvasRef = useRef(null);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let renderTask = null;

    const renderPage = async (num) => {
      try {
        const page = await pdfDoc.getPage(num);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Define a reasonable scale, we can adjust it later
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };

        renderTask = page.render(renderContext);
        await renderTask.promise;
      } catch (err) {
        if (err.name !== 'RenderingCancelledException') {
          console.error('Error rendering page:', err);
        }
      }
    };

    renderPage(currentPageNum);

    return () => {
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, currentPageNum]);

  if (!currentFileUrl) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p className="text-slate-400">No PDF selected. Go back to Dashboard.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl bg-slate-800 my-8 shadow-2xl relative flex flex-col items-center p-4">
      {loading && <p className="text-slate-400">Loading PDF...</p>}
      {error && <p className="text-red-400">Failed to load PDF</p>}

      {!loading && !error && pdfDoc && (
        <>
          <div className="flex justify-between w-full mb-4 text-slate-300">
            <button
              onClick={() => setCurrentPageNum(p => Math.max(1, p - 1))}
              disabled={currentPageNum <= 1}
              className="px-3 py-1 bg-slate-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>Page {currentPageNum} of {pdfDoc.numPages}</span>
            <button
              onClick={() => setCurrentPageNum(p => Math.min(pdfDoc.numPages, p + 1))}
              disabled={currentPageNum >= pdfDoc.numPages}
              className="px-3 py-1 bg-slate-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center w-full overflow-auto bg-slate-900 rounded">
            <canvas ref={canvasRef} className="max-w-full h-auto shadow-md" />
          </div>
        </>
      )}
    </div>
  );
};

export default PDFCanvasView;
