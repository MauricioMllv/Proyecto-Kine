import img from '../../assets/img/1.png'

const Card = ({ }) => {
    // const truncatedContent = content.split(' ').slice(0, 10).join(' ') + '...';
  
    return (
      <div className="bg-white border border-slate-300 p-4 m-4 shadow-xl rounded-md w-[200px] ">
        <a href="">
            <img src={img} alt="" className="w-full h-32 object-cover mb-2 rounded-md" />
            <h4 className="text-base mb-1">Importancia de los estiramientos</h4>
        </a>
        <p className="text-gray-600 mb-1 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis?...</p>
        
      </div>
    );
  };
  
  export default Card;