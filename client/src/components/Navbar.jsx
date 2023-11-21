const Navbar = () => {
    return (
        <nav className="relative flex w-full h-16 z-20 bg-black shadow-md justify-between items-center px-10">
            <h1 className="text-secondary">Typer</h1>
            <h1 className="text-light">Updates</h1>
            <button className="bg-primary text-secondary rounded-tr-3xl rounded-bl-3xl p-5 px-6 h-6 flex items-center font-semibold">Create Account</button>
            <button className="bg-light text-dark rounded-tr-3xl rounded-bl-3xl p-5 px-6 h-6 flex items-center font-semibold">Sign In</button>
        </nav>
    )
};

export default Navbar;