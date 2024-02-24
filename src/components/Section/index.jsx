import images1 from '../../assets/img/enlaces.png'

const Sections = () => {
    return (
        <div className="flex justify-center p-10">
            <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-2">
                <section className="relative sm:h-3/4 md:h-[100px]">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        RESERVA DE HORA
                    </div>
                    </a>
                </section>
                <section className="relative sm:h-3/4 md:h-[100px]">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        SERVICIOS
                    </div>
                    </a>
                </section>
                <section className="relative sm:h-3/4 md:h-[100px]">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        SOLICITUD INFORMES
                    </div></a>
                </section>
                <section className="relative sm:h-3/4 md:h-[100px]">
                    <a href="#">
                        <img className="" src={images1} alt="" />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                        TEXTO
                    </div></a>
                </section>
            </div>
        </div>
    );
}

export default Sections;