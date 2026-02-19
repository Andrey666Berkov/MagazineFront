import { Link } from "react-router";

const Header = () => { 
    return (
        <div className="flex justify-around w-full py-3">
            <Link to="/">Home</Link>
            <Link to="/store">Магазин</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/Registration">Registration</Link>
        </div>
    );
}

export default Header