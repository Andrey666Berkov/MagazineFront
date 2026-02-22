import { Link } from "react-router";

const Header = () => { 
    return (
        <div className="flex justify-center gap-30 text-2xl 
        font-bolds from-neutral-200 font-serif w-full py-3 ">
            <Link to="/">Home</Link>
            <Link to="/store">Магазин</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/Registration">Registration</Link>
        </div>
    );
}

export default Header