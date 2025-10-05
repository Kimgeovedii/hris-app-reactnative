// context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

interface SignInParams {
  phone: string;
  password: string;
}

interface AuthContextType {
  signIn: (params: SignInParams) => Promise<void>;
  signOut: () => void;
  user: any;
}

const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  user: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);

  const signIn = async ({ phone, password }: SignInParams) => {
    console.log("Logging in with", phone, password);
    // contoh: panggil API login di sini
    setUser({ phone });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
