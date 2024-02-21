import images1 from '../../assets/img/enlaces.png'

const Sections = () => {
    return (
        <div className="flex justify-center p-10">
            <div className="grid grid-cols-2 gap-10 p-5">
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        RESERVA DE HORA
                    </div>
                    </a>
                </div>
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        SERVICIOS
                    </div>
                    </a>
                </div>
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        SOLICITUD INFORMES
                    </div></a>
                </div>
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        TEXTO
                    </div></a>
                </div>
            </div>
        </div>
    );
}

export default Sections;