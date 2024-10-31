import { Link } from "react-router-dom"
import logocpu from "../assets/cpu.svg"

function Navbar(){


    return(
        <div className="w-full bg-teal-500 flex items-center p-4 text-black font-semibold relative">
            <img src={logocpu} alt="gg" className="absolute left-4" />
            <div className="flex gap-4 mx-auto">
                <Link to={"/"} className="hover:underline hover:scale-[130%]">Home</Link>
                <Link to={"/register"} className="hover:underline hover:scale-[130%]">Register</Link>

            </div>
        </div>
    )
}

export default Navbar