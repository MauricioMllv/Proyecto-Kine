import './style.css';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-blue-900 p-4">
                <div className='container mx-auto flex flex-row justify-between items-center ps-10'>
                <img src="" alt="" />
                </div>
                <div className='flex items-center space-x-4 justify-end text-white pe-10'>
                <a href="" >Inicio</a>
                <a href="" >Contacto</a>
                <a href="" >Nosotros</a>
                <a href="" >FAQ</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;