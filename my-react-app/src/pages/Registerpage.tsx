import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup'
import axios from '../helpers/axios';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Invalid email required"),
    password: Yup.string().min(3, "Password must 3 character").required("Password is required")

})

interface FormValues{
    username:string;
    email:string;
    password:string
}

function Registerpage(){
    const navigate = useNavigate()
    const initialValue:FormValues = {username:'', email:'', password:''}

    const handleAdd = async (user: FormValues) =>{
        try{
            await axios.post("/users", user)
            alert("User berhasil ditambahkan👍")
            navigate("/")
        } catch(err){
            console.log(err);
            
        }
    }

    return(
        <div className="flex justify-center h-[100vh] items-center bg-gray-100">
            <div className='bg-rose-100 p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px]'>
                <h1 className='text-2xl font-bold text-center mb-6 text-gray-700 '>Register Form</h1>
                <Formik 
                    initialValues={initialValue}
                    validationSchema={RegisterSchema}
                    onSubmit={(values, action) => {
                        handleAdd(values);
                        action.resetForm()
                    }}
                >
                    {(props: FormikProps<FormValues>) => {
                        const {handleChange, values, touched, errors} = props
                        return(
                            <Form >
                                <div>
                                    <label  className="block text-sm font-medium text-black" htmlFor="username">Username : </label>
                                    <Field 
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        value={values.username}
                                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                                    />
                                    {touched.username && errors.username ? (
                                        <div className='text-red-500 text-xs'>{errors.username}</div>
                                    ):null}
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-black" htmlFor="email">Email : </label>
                                    <Field 
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                                    />
                                    {touched.email && errors.email ? (
                                        <div className='text-red-500 text-xs'>{errors.email}</div>
                                    ):null}
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-black" htmlFor="password">Password : </label>
                                    <Field 
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                         className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                                    />
                                    {touched.password && errors.password ? (
                                        <div className='text-red-500 text-xs'>{errors.password}</div>
                                    ):null}
                                </div>
                                <button className='mt-5 w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-3xl border border-blue-500 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200'>Register</button>
                            </Form>
                        )
                    }}
                     

                </Formik>
            </div>
        </div>
    )
}

export default Registerpage