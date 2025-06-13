import React, { useEffect, useState, useRef } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/pages/_news.scss';

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const News = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadPdfAsImages = async () => {
      const loadingTask = getDocument('/pressArticle.pdf');
      const pdf = await loadingTask.promise;
      const tempImages = [];

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 3 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        const imgData = canvas.toDataURL('image/png');
        tempImages.push(imgData);
      }

      setImages(tempImages);
    };

    loadPdfAsImages();
  }, []);
  
  
  return (
    <div className='news'>
        <h1 className='news__title'>Living North</h1>
        <p className='news__intro'> 
            I feel really lucky to have been part of this article with Living North! <br />
            To work hard on something I care about and actually see it out there for others to read motivates me to keep going and building Doggie's Delights <FontAwesomeIcon icon={faPaw}/>
        </p>
        {images.length === 0 && <p>Loading...</p>}
        {images.map((imgSrc, i) => (
            <img
            key={i}
            src={imgSrc}
            alt={`Page ${i + 1}`}
            />
        ))}
    </div>
  );
};

export default News;
