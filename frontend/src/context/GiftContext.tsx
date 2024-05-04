/* eslint-disable react-refresh/only-export-components */
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type Gift = {
  imageUrl: string;
  name: string;
  links: string[];
};

type GiftContextData = {
  giftSelected: Gift;
  setGiftSelected: Dispatch<SetStateAction<Gift>>;
};

type GiftProviderProps = {
  children: ReactNode;
};

export const GiftContext = React.createContext({} as GiftContextData);

export function GiftProvider({ children }: GiftProviderProps) {
  const [giftSelected, setGiftSelected] = useState({
    name: "",
    imageUrl: "",
    links: [""],
  });

  return (
    <GiftContext.Provider
      value={{
        giftSelected,
        setGiftSelected,
      }}
    >
      {children}
    </GiftContext.Provider>
  );
}

export function useGift(): GiftContextData {
  const context = useContext(GiftContext);

  if (!context) {
    throw new Error("useGift must be used within an GiftProvider");
  }

  return context;
}
