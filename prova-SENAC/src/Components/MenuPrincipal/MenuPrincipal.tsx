import React from "react";
import "./MenuPrincipal.css";

interface MenuPrincipalProps {
    name: string;
    logoUrl: string;
    
}


const MenuPrincipal: React.FC<MenuPrincipalProps> = ({name, logoUrl}) => {
return(
    <>
    <div className="menu_logo">
        <img className="logox" src={logoUrl} alt="Logo" />
    </div>
    <div className="menu_name">
        <h1 className="namex">{name}</h1>
    </div>
    </>
);
};

export default MenuPrincipal;