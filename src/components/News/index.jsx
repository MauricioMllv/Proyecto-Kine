import React, { useState } from 'react';

const News = () => {
  // Datos ficticios de noticias
  const newsData = [
    { id: 1, title: 'Noticia 1', content: 'Contenido de la Noticia 1' },
    { id: 2, title: 'Noticia 2', content: 'Contenido de la Noticia 2' },
    { id: 3, title: 'Noticia 3', content: 'Contenido de la Noticia 3' },
    { id: 4, title: 'Noticia 4', content: 'Contenido de la Noticia 4' },
    // Agrega más noticias según sea necesario
  ];

  // Estado para controlar la cantidad de noticias a mostrar
  const [visibleNews, setVisibleNews] = useState(3);

  // Filtra las últimas noticias según el estado visibleNews
  const displayedNews = newsData.slice(-visibleNews);

  return (
    <div className='flex justify-center'>
      <div className="py-6">
        <a className="flex justify-center w-3/4 p-2 bg-[#367DAB] text-white text-xl" href="">
          Noticias y Artículos
        </a>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {displayedNews.map((news) => (
          <div key={news.id} className="border w-[200px] h-[200px]">
            <h2 className="text-xl font-bold w-full">{news.title}</h2>
            <p className='w-full'>{news.content}</p>
          </div>
        ))}
      </div>
      {newsData.length > visibleNews && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleNews((prev) => prev + 3)}
            className="bg-[#D6A83E] text-white px-12 py-2 rounded"
          >
            Ver Más
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
