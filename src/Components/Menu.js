import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Menu({ title, menuObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>

      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <Link to={`${menu.path}`}>
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
