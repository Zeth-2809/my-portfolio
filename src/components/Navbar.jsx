function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 px-8  py-4">
            <div className="max-w-6x1 mx-auto flex justify-between items-center">
                <h1 className="text-2x1 font-bold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Zeth.dev

                </h1>
                <ul className="flex gap-8 text-white font-medium">
                    <li><a href="#hero" className="hover:text-purple-400 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
                    <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>   
                </ul>
            </div>
        </nav>
    )
}

export default Navbar