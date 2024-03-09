import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen  grid-rows-[auto,1fr,auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll my-10">
      <main className=" max-w-3xl mx-auto">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
