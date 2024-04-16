import img from '../../assets/img/1.png'

const Card = ({ }) => {
    // const truncatedContent = content.split(' ').slice(0, 10).join(' ') + '...';
    // texto a mostrar en card
    return (
      <a href="/noticias"><div className="bg-white border border-slate-300 p-0.5 m-4 shadow-xl rounded-md md:w-[200px] sm:flex sm:flex-col sm:items-center">
        <section className='flex md:flex-col md:justify-center'>
            <img src={img} alt="" className=" w-32 h-32 md:w-full md:h-full object-cover rounded-md justify-center" />
        
          <section className='ml-2 pt-1 md:flex-col justify-center '>
            <h4 className="text-base mb-1">Importancia de los estiramientos</h4>
            <p className="text-gray-600 mb-1 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis?...</p>
          </section>
        </section>
        
        
      </div></a>
    );
  };
  
  export default Card;