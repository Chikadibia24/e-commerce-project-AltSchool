// utils/auth.ts

export interface User {
  email: string;
  password: string;
  [key: string]: any; // Additional user fields
}

export const getUsersFromLocalStorage = (): User[] => {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

export const saveUserToLocalStorage = (user: User) => {
  const users = getUsersFromLocalStorage();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const findUserByEmail = (email: string): User | undefined => {
  const users = getUsersFromLocalStorage();
  return users.find((user) => user.email === email);
};

export const updateUserInLocalStorage = (updatedUser: User) => {
  let users = getUsersFromLocalStorage();
  users = users.map((user) =>
    user.email === updatedUser.email ? updatedUser : user
  );
  localStorage.setItem("users", JSON.stringify(users));
};
