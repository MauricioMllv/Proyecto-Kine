import Card from '../Card/index.jsx'

const News = () => {
  return (
    <div className="flex flex-col items-center h-full p-10">
      <h2 className="flex justify-center w-3/4 p-2 bg-[#367DAB] text-white text-xl">Noticias y Artículos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card para visualizacion, luego cambiar */}
      <Card />
      <Card />
      <Card />
      {/* Card para visualizacion, luego cambiar */}
      
      {/* <Card title='Noticia 1' />
      <Card title='Noticia 2' />
      <Card title='Noticia 3' /> */}
      </div>
      <a href=""><button className="flex justify-center mt-4 bg-[#D6A83E] text-white py-2 px-12 rounded-md">
        Ver Más
      </button></a>
    </div>
  );
}

export default News;
