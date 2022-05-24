import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding:"0 2rem"}}>
        <span className="brand-logo">
          Сокрашение ссылок
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/create">Создать</Link>
          </li>
          <li>
            <Link to="/links">Ссылки</Link>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
