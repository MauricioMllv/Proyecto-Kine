import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="bg-[#084D6E] p-4">
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
                    <a href="">Inicio</a>
                    <a href="">Contacto</a>
                    <a href="">Nosotros</a>
                    <a href="">FAQ</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;