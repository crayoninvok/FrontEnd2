import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar bg-gray-300">
            <div className="flex-1">
                <p className="font-bold text-xl ml-3 bg-">Twittax</p>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/loginpage">Login</Link></li>
                        <li><Link to ="/">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar