import React from "react";

interface props {
    children: React.ReactNode
}

const Button: React.FC<props> = ({children}) => {
    return (
        <button
            className="p-3 transition duration-300 text-white bg-primary rounded-2xl background-transparent border-2 border-primary font-medium">
            {children}
        </button>
    )
}

export default Button;
