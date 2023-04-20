import React from "react";
import MenuPageBanner from "./MenuPageBanner";
import MenuStarters from "./MenuStarters";
import MenuMains from "./MenuMains";
import MenuDrinks from "./MenuDrinks";

const MenuPage = () => {
  return (
    <React.Fragment>
      <MenuPageBanner />
      <MenuStarters />
      <MenuMains />
      <MenuDrinks />
    </React.Fragment>
  );
};

export default MenuPage;
