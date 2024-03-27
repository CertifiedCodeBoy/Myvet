import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories, { theme } from "./components/Categories";
import Footer from "./components/Footer";
import OffersProvider from "./contexts/OffersContext";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import { ChakraProvider } from "@chakra-ui/react";
import Discounts from "./components/Discounts";
import ProductsProvider from "./contexts/ProductsContext";
import Help from "./components/Help";
import Contact from "./components/Contact";
import HelpNav from "./components/HelpNav";
import Loginsignupnav from "./components/Loginsignupnav";
import Chat from "./components/Chat";
import { UserContext } from "./contexts/UserContext";
import LoggedInNav from "./components/LoggedInNav";
import BuyerProfile from "./components/BuyerProfile";
const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <OffersProvider>
          <div className="sm:flex-1">
            <Router>
              <Routes>
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
                  path="/"
                  element={
                    <>
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Discounts />
                      <Home />
                      <Footer />
                    </>
                  }
                  exact
                ></Route>
                <Route
                  path="/Categories/:category"
                  element={
                    <>
                      {isLoggedIn ? <LoggedInNav /> : <Navbar />}
                      <Discounts />
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
                <Route path="*" element={<h1>Not Found</h1>}></Route>
              </Routes>
            </Router>
          </div>
        </OffersProvider>
      </ProductsProvider>
    </ChakraProvider>
  );
};

export default App;
