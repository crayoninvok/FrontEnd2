import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import trash from "../assets/trash-2.svg"
import { useNavigate } from "react-router-dom";

function Homepage(){
    const [users, setUsers] = useState<IUser[]>([])
    const [reload, setReload] = useState<boolean>(true)
    const navigate = useNavigate ()

    const getData = async() => {
        try{
            const { data } = await axios.get("/users")
            setUsers(data)
        }catch (err){
            console.log(err);
            
        }
    }


    const handleDelete = async (user: IUser) => {
        const confirmSubmit = confirm(`Apakah yakin ingin menghapus data ${user.username}?`);
        if (confirmSubmit) {
            try {
                await axios.delete(`/users/${user.id}`);
                setReload(!reload)
                console.log(`Data untuk ${user.username} telah dihapus`);
            } catch (err) {
                console.error(err);
            }
        }
    };

    useEffect (() => {
        getData()
    }, [reload])
    
    return(
        <div className="bg-gray-200 min-h-screen">
        <div className=" flex justify-center p-5">
            <table className="text-center w-[50%] border-2 border-black border-solid">
                <thead >
                    <tr >
                        <th className="bg-rose-300 p-2 border-2 border-black border-solid w-20">No</th>
                        <th className="bg-rose-300 p-2 border-2 border-black border-solid ">Username</th>
                        <th className="bg-rose-300 p-2 border-2 border-black border-solid ">Email</th>
                        <th className="bg-rose-300 p-2 border-2 border-black border-solid w-20"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, idx) => {
                            return(
                                <tr className="bg-rose-500 p-2 border-2 border-black border-solid text-white hover:animate-pulse hover:cursor-pointer" key={idx}>
                                    <td className="bg-rose-500 p-2 border-2 border-black border-solid ">{idx + 1}</td>
                                    <td onClick={() => navigate(`/${item.id}`)} className="bg-rose-500 p-2 border-2 border-black border-solid ">{item.username}</td>
                                    <td onClick={() => navigate(`/${item.id}`)} className="bg-rose-500 p-2 border-2 border-black border-solid ">{item.email}</td>

                                    <td className="bg-gray-400 p-2 border-2 border-black border-solid ">
                                    <button onClick={() => handleDelete(item)} className="text-red-500 text-lg"><img src={trash} alt=""/></button>
                                    
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Homepage