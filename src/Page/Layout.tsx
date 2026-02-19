import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {  

    return (
        <div className="flex flex-col min-h-screen bg-amber-200">
            <header className=" flex flex-col items-center justify-between bg-blue-300"><Header/></header>
            <main className="flex-1"><Outlet/></main>
            <footer className="flex items-center justify-center bg-blue-100 py-5"><Footer/></footer> 
            
        </div>
    )
}

export default Layout