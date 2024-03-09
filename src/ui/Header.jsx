import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-500  flex items-center justify-between sm:px-6 px-4 py-3 border-b border-stone-200 uppercase">
      <Link className="tracking-widest" to="/">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
