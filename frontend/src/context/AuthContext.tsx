/* eslint-disable react-refresh/only-export-components */
import { useToast } from "@chakra-ui/react";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

type DataAuth = {
  email: string;
  password: string;
};

type AuthContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
  handleLogin: (data: DataAuth) => void;
  handleLogout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = React.createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = async (data: DataAuth) => {
    const { email, password } = data;
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (response?.data?.user) {
        const access_token = String(response?.data?.session?.access_token);
        localStorage.setItem("access_token", access_token);

        setIsLoggedIn(true);
        toast({
          description: "Bem vinda Mavi ❤️",
          position: "top",
          status: "success",
          isClosable: true,
          onCloseComplete() {
            location.reload();
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        description: "Ocorreu um erro ao logar",
        position: "top",
        status: "error",
      });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn: () => {}, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
