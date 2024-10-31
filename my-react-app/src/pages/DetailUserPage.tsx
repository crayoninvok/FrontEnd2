import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IUser } from "../types/user"
import axios from "../helpers/axios"
import jaki from "../assets/dzaky.jpeg"

function DetailUserPage(){
    const [user, setUsers] = useState<IUser | null>(null)
    const { userId } = useParams()
   
    const getData = async() =>{
        try{
            const {data} = await axios.get(`/users/${userId}`)
            setUsers(data)
        }catch(err){
            console.log(err);
            

        }
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div className="flex flex-col items-center text-center mt-5 bg-gray-400 rounded-lg shadow-lg p-6 max-w-sm mx-auto ">
        <div className="mb-4">
            <img 
                src={jaki} 
                alt="jak" 
                className="w-48 h-48 rounded-full shadow-md  hover:border-2-blue-600 " 
            />
        </div>
        <h1 className="text-gray-800 text-2xl font-semibold mb-2">Username: {user?.username}</h1>
        <h1 className="text-gray-600 text-lg">Email: {user?.email}</h1>
    </div>
    )
}

export default DetailUserPage