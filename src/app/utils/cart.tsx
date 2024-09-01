// utils/cart.ts
//"use client"

import { User } from "./auth";
// import { useRouter } from "next/navigation";


export const addToCart = (productId: string) => {
  const user = getCurrentUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  let cart = localStorage.getItem(`cart_${user.email}`);
  let cartItems = cart ? JSON.parse(cart) : [];

  cartItems.push(productId);
  localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
};

export const addToFavorites = (productId: string) => {
  const user = getCurrentUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  let favorites = localStorage.getItem(`favorites_${user.email}`);
  let favoriteItems = favorites ? JSON.parse(favorites) : [];

  favoriteItems.push(productId);
  localStorage.setItem(
    `favorites_${user.email}`,
    JSON.stringify(favoriteItems)
  );
};


export const logOut = () => {
  const user = getCurrentUser();
  // const router = useRouter();
  if (user) {
    localStorage.removeItem("currentUser");
    alert("Logged Out Successfully");
    // router.push("/");
  }
};


export const getCurrentUser = (): User | null => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  }
  return null;
};


