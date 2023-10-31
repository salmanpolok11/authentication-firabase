import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className=" bg-slate-50 text-blue-700 space-x-4  p-2 shadow-md">
                    <Link to="/">Home</Link>
                     <Link to="login" >Log In</Link>
    </div>
  );
};

export default Header;