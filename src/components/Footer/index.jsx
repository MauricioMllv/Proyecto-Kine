import Logo from '../../assets/img/Logo.png'

const Footer = () => {
    return (
        <div className="flex flex-col items-center h-full bg-[#084D6E]">
            <img className='w-[300px]' src={Logo} alt="" />
            <ul className='text-white text-center pb-2'>
                <a href=""><li>Contactanos</li></a>
                <a href=""><li>Quiénes somos</li></a>
                <a href=""><li>Términos y Condiciones</li></a>
                <a href=""><li>© 2024 KineHome - Todos los derechos reservados</li></a>
            </ul>
        </div>
    );
}

export default Footer;