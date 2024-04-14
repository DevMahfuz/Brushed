"use client";

import { createContext, useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const supabase = createClient();
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
