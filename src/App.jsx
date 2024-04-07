import React, { useContext } from "react";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories, { theme } from "./components/Categories";
import Footer from "./components/Footer";
import OffersProvider from "./contexts/OffersContext";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import Discounts from "./components/Discounts";
import Help from "./components/Help";
import Contact from "./components/Contact";
import HelpNav from "./components/HelpNav";
import Loginsignupnav from "./components/Loginsignupnav";
import Chat from "./components/Chat";
import { UserContext } from "./contexts/UserContext";
import { ProductsContext } from "./contexts/ProductsContext";
import LoggedInNav from "./components/LoggedInNav";
import BuyerProfile from "./components/BuyerProfile";
import Favorites from "./components/Favorites";
import Orders from "./components/Orders";
import Loading from "./components/Loading";
const App = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { products, loading } = useContext(ProductsContext);

  if (loading || !products) {
    return <Loading />;
  }

  return (
        <OffersProvider>
          <div className="sm:flex-1">
            <Outlet />
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Discounts />
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Home />
                      <Footer />
                    </>
                  }
                  exact
                ></Route>
                <Route
                  path="/Login"
                  element={
                    <>
                      <Loginsignupnav />
                      <Login />
                    </>
                  }
                ></Route>
                <Route
                  path="/Signup"
                  element={
                    <>
                      <Loginsignupnav />
                      <SignUp />
                    </>
                  }
                ></Route>
                <Route
                  path="/Categories/:category"
                  element={
                    <>
                      <Discounts />
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Categories />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Cart"
                  element={
                    <>
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Cart />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Favorites"
                  element={
                    <>
                      <Discounts />
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Favorites />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Offers"
                  element={
                    <>
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Discounts />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Orders"
                  element={
                    <>
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Orders />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Product/:id"
                  element={
                    <>
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <ProductPage />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Help"
                  element={
                    <>
                      <HelpNav />
                      <Help />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/Contact"
                  element={
                    <>
                      <HelpNav />
                      <Contact />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  path="/a"
                  element={
                    <>
                      <Chat />
                    </>
                  }
                ></Route>
                <Route path="/SellerProfile" element={<></>}></Route>
                <Route
                  path="/BuyerProfile"
                  element={
                    <>
                      <LoggedInNav />
                      <BuyerProfile />
                    </>
                  }
                ></Route>
                <Route path="/Loading" element={<Loading />}></Route>
                <Route path="*" element={<h1>Not Found</h1>}></Route>
              </Routes>
            </Router>
          </div>
        </OffersProvider>
  );
};

export default App;
