import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="bg-[#084D6E] p-4 mb-10">
                <div className="container mx-auto flex flex-row justify-between items-center ps-10">
                    <img src="" alt="" />
                    <div className="lg:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            ☰
                        </button>
                    </div>
                </div>
                <div
                    className={`${
                        isMenuOpen
                            ? 'block flex flex-col items-center space-y-4'
                            : 'hidden'
                    } lg:flex lg:items-center lg:space-x-4 justify-end text-white pe-10`}
                >
                    <a href="/">Inicio</a>
                    <a href="/contact">Contacto</a>
                    <a href="/about">Nosotros</a>
                    <a href="/preguntas">FAQ</a>
                    <a href=""><button className="px-2 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">
                        Agendar Hora
                    </button></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;