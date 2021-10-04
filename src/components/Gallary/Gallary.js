import React, { useState } from "react";
import items from "../../assets/data/gallarydata";
import Menu from "../../helpers/GallaryMenu/GallaryMenu";
import Categories from "../../helpers/GallaryTypes/GallaryTypes";
import "./gallary.css";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Gallary() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our Gallary</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default Gallary;
