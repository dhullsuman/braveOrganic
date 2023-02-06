import React from "react";
import Styles from "../Styles/sideBar.module.css";
import { BiSliderAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const activePage = {
    textDecoration: "underline",
    color: "black",
  };
  return (
    <div className={Styles.categ}>
      <div>
        <BiSliderAlt />
        <p>REFINE BY</p>
      </div>
      <h3>CATEGORIES</h3>
      <hr />
      <div>
        <NavLink to={"/shopAll"} style={({isActive}) => {
                      return isActive ? activePage : undefined;
                    }}>Shop All</NavLink>
        <NavLink to={"/bestsellers"} style={({isActive}) => {
                      return isActive ? activePage : undefined;
                    }}>Best Sellers</NavLink>
        <NavLink to={"/newArrival"} style={({isActive}) => {
                      return isActive ? activePage : undefined;
                    }}>New Arrival</NavLink>
      </div>
    </div>
  );
}
