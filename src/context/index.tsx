"use client";

import { createContext, ReactNode, useState } from "react";

// Define the shape of the context
interface CountContextType {
  itemOneCount: number;
  itemTwoCount: number;
  itemThreeCount: number;
  priceOneCount: number;
  priceTwoCount: number;
  priceThreeCount: number;
  totalPriceCount: number;
  incrementOne: () => void;
  decrementOne: () => void;
  incrementTwo: () => void;
  decrementTwo: () => void;
  incrementThree: () => void;
  decrementThree: () => void;
}

// Create the context with an initial undefined value
export const CountContext = createContext<CountContextType | undefined>(undefined);

// Provide the context to the component tree
export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [itemOneCount, setItemOneCount] = useState<number>(1);
  const [itemTwoCount, setItemTwoCount] = useState<number>(1);
  const [itemThreeCount, setItemThreeCount] = useState<number>(1);
  const [priceOneCount, setPriceOneCount] = useState<number>(3000);
  const [priceTwoCount, setPriceTwoCount] = useState<number>(3000);
  const [priceThreeCount, setPriceThreeCount] = useState<number>(3000);
  const [totalPriceCount, setTotalPriceCount] = useState<number>(9000);

  //First Item Increment and Decrement functions
  const incrementOne = () => {
    setItemOneCount((prevCount) => prevCount + 1);
    setPriceOneCount((prevPriceCount) => prevPriceCount + 3000);
    setTotalPriceCount((prevTotalPriceCount) => prevTotalPriceCount + 3000);
  };

  const decrementOne = () => {
    setItemOneCount((prevCount) =>
      prevCount >= 2 ? prevCount - 1 : prevCount
    );
    setPriceOneCount((prevPriceCount) =>
      prevPriceCount >= 6000 ? prevPriceCount - 3000 : prevPriceCount
    );
    setTotalPriceCount((prevTotalPriceCount) =>
      prevTotalPriceCount >= 12000
        ? prevTotalPriceCount - 3000
        : prevTotalPriceCount
    );
  };

  //Second Item Increment and Decrement functions
  const incrementTwo = () => {
    setItemTwoCount((prevCount) => prevCount + 1);
    setPriceTwoCount((prevPriceCount) => prevPriceCount + 3000);
    setTotalPriceCount((prevTotalPriceCount) => prevTotalPriceCount + 3000);
  };

  const decrementTwo = () => {
    setItemTwoCount((prevCount) =>
      prevCount >= 2 ? prevCount - 1 : prevCount
    );
    setPriceTwoCount((prevPriceCount) =>
      prevPriceCount >= 6000 ? prevPriceCount - 3000 : prevPriceCount
    );
    setTotalPriceCount((prevTotalPriceCount) =>
      prevTotalPriceCount >= 12000
        ? prevTotalPriceCount - 3000
        : prevTotalPriceCount
    );
  };

  //Third Item Increment and Decrement functions
  const incrementThree = () => {
    setItemThreeCount((prevCount) => prevCount + 1);
    setPriceThreeCount((prevPriceCount) => prevPriceCount + 3000);
    setTotalPriceCount((prevTotalPriceCount) => prevTotalPriceCount + 3000);
  };
  
  const decrementThree = () => {
    setItemThreeCount((prevCount) =>
      prevCount >= 2 ? prevCount - 1 : prevCount
    );
    setPriceThreeCount((prevPriceCount) =>
      prevPriceCount >= 6000 ? prevPriceCount - 3000 : prevPriceCount
    );
    setTotalPriceCount((prevTotalPriceCount) =>
      prevTotalPriceCount >= 12000
        ? prevTotalPriceCount - 3000
        : prevTotalPriceCount
    );
  };

  return (
    <CountContext.Provider
      value={{
        totalPriceCount,
        itemOneCount,
        priceOneCount,
        incrementOne,
        decrementOne,
        itemTwoCount,
        priceTwoCount,
        incrementTwo,
        decrementTwo,
        itemThreeCount,
        priceThreeCount,
        incrementThree,
        decrementThree,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
