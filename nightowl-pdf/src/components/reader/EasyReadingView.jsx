import React from 'react';

const EasyReadingView = () => {
  return (
    <div className="w-full max-w-2xl px-6 py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-slate-100">Chapter 1: The Beginning</h1>
      
      <div className="space-y-6 text-lg leading-relaxed text-slate-300 font-body">
        <p>
          <strong className="text-white">This</strong> is a sample of the extracted and reflowed text. Notice how the bionic reading toggle might embolden the first parts of words to guide the eye.
        </p>
        <p>
          The line height is spacious, and the column width is constrained to ensure optimal eye tracking across the page without horizontal scrolling.
        </p>
        <p>
          In a full implementation, this view dynamically extracts text from the PDF using pdfExtractor.js and formats it cleanly.
        </p>
      </div>
    </div>
  );
};

export default EasyReadingView;
