import images1 from '../../assets/img/enlaces.png'

const Sections = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-10 p-5">
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        RESERVA DE HORA
                    </div>
                </div>
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        SERVICIOS
                    </div>
                </div>
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        SOLICITUD INFORMES
                    </div>
                </div>
                <div className="relative h-[100px] ">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    </a>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        TEXTO
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sections;