import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    const searchValue = searchText.toLowerCase();
    
    const filtered = cardArray.filter(
      (p) =>
        p.title.toLowerCase().includes(searchValue) ||
        p.prise.toLowerCase().includes(searchValue),
    );
    setProducts(filtered);
    
  };

  useEffect(() => {
    
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input
                type="text"
                value={searchText}
                onChange={handleSearch}
                placeholder="Поиск по объявлениям"
              />
              <button className="btn search-clear" style={{ display: "none" }}>
                <span style={{ color: "gray", fontSize: "28px" }}>×</span>
              </button>
              <button
                className="btn btn-primary search-btn"
                onClick={handleSearchArray}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/image/search.svg`}
                  className="search-btn_item"
                  alt="search"
                />
                <span className="search-btn_text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{ products }} />;
      </main>
    </>
  );
};
