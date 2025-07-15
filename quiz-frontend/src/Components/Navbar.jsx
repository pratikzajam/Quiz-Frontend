const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-3 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">Quiz App</h1>
            <div className="space-x-4">
                <button className="hover:underline">Home</button>
                <button className="hover:underline">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
