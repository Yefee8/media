import React from "react";

interface props {
    children: React.ReactNode
}

const Button: React.FC<props> = ({children}) => {
    return (
        <button
            className="p-3 transition duration-300 hover:text-white hover:bg-primary rounded-2xl background-transparent border-2 border-primary text-primary font-medium">
            {children}
        </button>
    )
}

export default Button;
