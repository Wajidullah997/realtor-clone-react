import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const location = useLocation();
    const navigate = useNavigate();
    
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b-[2px] sticky top-0 z-50">
      <header className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 cursor-pointer">
            <li
              className={`py-3 text-sm font-semibold border-b-transparent border-b-[3px] text-gray-400 ${
                pathMathRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold border-b-transparent border-b-[3px] text-gray-400 ${
                pathMathRoute("/offer") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offer")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold border-b-transparent border-b-[3px] text-gray-400 ${
                pathMathRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
