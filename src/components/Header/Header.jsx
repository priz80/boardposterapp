import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to="/"
            className="header-logo"
          >
            <img src={`${process.env.PUBLIC_URL}/image/logo.svg`} alt="logo" />
            <span>MyAvito</span>
          </Link>
          <div className="header-control">
            <button className="btn btn-outline">Вход регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="header-burger">
            <img
              src={`${process.env.PUBLIC_URL}/image/burger.svg`}
              alt="burger button"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
