import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedLister,
} from "../utils/firebase/firebase.util";

//create the actual value of the context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//create the context provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedLister((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
