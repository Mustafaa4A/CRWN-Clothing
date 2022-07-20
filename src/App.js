import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";

import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigations from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedLister,
} from "./utils/firebase/firebase.util";
import { UserContext } from "./contexts/user.context";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedLister((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigations />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
