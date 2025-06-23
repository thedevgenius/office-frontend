import Link from "next/link";

const Sidebar = () => {
    return (
        <>
            <aside className="w-64 bg-white hidden md:block border-r border-gray-100" id="sidebar">
                <div className="h-16 flex items-center justify-center font-bold text-xl">Admin Panel</div>
                <nav className="p-4">
                    <ul>
                        <li>
                            <Link href={'/'} className="block py-2 px-4 rounded hover:bg-gray-100">Dashboard</Link>
                        </li>

                        <li>
                            <button className="menu-toggle w-full text-left flex justify-between items-center py-2 px-4 hover:bg-gray-100 rounded cursor-pointer" data-target="users-menu">
                                Users
                                <svg className="w-4 h-4 transition-transform transform" id="icon-users-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <ul className="ml-6 mt-1 space-y-1 hidden" id="users-menu">
                                <li><a href="#" className="block py-1 px-2 rounded hover:bg-gray-100 text-sm">All Users</a></li>
                                <li><a href="#" className="block py-1 px-2 rounded hover:bg-gray-100 text-sm">Add User</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-100">Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar;