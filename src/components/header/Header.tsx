const Header = () => {
    return (
        <>
            <header className="h-16 bg-white flex items-center justify-between px-4 relative">
                {/* <button className="sidebar-toggle md:hidden text-gray-600">☰</button> */}
                {/* <h1 className="text-xl font-bold">Welcome back Admin!</h1> */}

                <div className="relative ml-auto">
                    <button className="admin-toggle flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                        <span className="text-gray-800 font-medium">Admin</span>
                        <svg className="w-4 h-4 transition-transform transform" id="adminIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div id="adminDropdown" className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg hidden z-10">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;