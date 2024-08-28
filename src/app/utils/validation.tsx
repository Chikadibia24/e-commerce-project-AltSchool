// utils/validation.ts

export const validateEmail = (email: string): string | any => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return <p className="text-[red]">{"Email is required"}</p>;
  if (!emailRegex.test(email)) return <p className="text-[red]">{"Invalid email format"}</p>;
  return null;
};

export const validatePassword = (password: string): string | any => {
  if (!password) return <p className="text-[red]">{"Password is required"}</p>;
  if (password.length < 6) return (
    <p className="text-[red]">
      {"Password must be at least 6 characters long"}
    </p>
  );
  return null;
};
