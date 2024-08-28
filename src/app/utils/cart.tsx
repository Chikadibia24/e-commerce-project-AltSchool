// utils/cart.ts

import { User } from "./auth";

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

// export const goToCart = () => {
//   const user = getCurrentUser();
//   if (!user) {
//     throw new Error("User not authenticated");
//   }
// }

export const getCurrentUser = (): User | null => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  }
  return null;
};
