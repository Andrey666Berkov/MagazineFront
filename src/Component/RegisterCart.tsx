import { getRegister } from "../Api/api";
import {  useNavigate } from "react-router";

const RegisterCart = () => {
    const navigate=useNavigate()

    const onSubmit = async (formData: FormData) => {
        //console.log(formData);        
        const email = formData.get("email") as string | null;
        const password = formData.get("password") as string | null;
        //console.log(email, password);        
        if (email !== null && password !== null) {
            const result = await getRegister({ email, password });
          //  console.log(result);
            if (result.status === 200) {
                 console.log("registration");
                 navigate("/login")
            }
        }
    }
    
    return (
        <div className="flex flex-col  justify-center items-center
             bg-blue-300   rounded-2xl shadow-2xl ">
            <h1 className="text-xl">Регистрация</h1>
            <form className="flex flex-col" action={onSubmit}>
                <input type="email" name="email" placeholder="Email"
                    className="m-2 p-2 border border-gray-300 rounded " />
                <input type="password" name="password" placeholder="Password" className="m-2 p-2 border border-gray-300 rounded" />
                <button type="submit" className="m-2 p-2 bg-blue-500 text-white rounded">Register</button>
            </form>
        </div>
    )
}

export default RegisterCart