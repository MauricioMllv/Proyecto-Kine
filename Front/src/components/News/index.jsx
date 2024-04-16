import Card from '../Card/index.jsx'

const News = () => {
  return (
    <div className="flex flex-col items-center h-full sm:p-5 md:p-10">
      <h2 className="container flex justify-center sm:w-full md:w-[80%] p-3 bg-[#367DAB] text-white text-3xl">Noticias y Artículos</h2>
      <article className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-5">
        {/* Card para visualizacion, luego cambiar */}
      <Card />
      <Card />
      <Card />
      {/* Card para visualizacion, luego cambiar */}
      
      {/* <Card title='Noticia 1' />
      <Card title='Noticia 2' />
      <Card title='Noticia 3' /> */}
      </article>
      <a href="/todasnoticias"><button className="flex justify-center my-4 px-12 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">
        Ver Más
      </button></a>
    </div>
  );
}

export default News;