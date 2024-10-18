import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, variant = 'primary', onClick, ...props }: ButtonProps) {
  return (
    <button
      className={`button--${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
