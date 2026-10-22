import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
  const [titleText, setTitleText] = useState("Все предложения");
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

    const getDeclension = (count) => {
      const lastDigit = count % 10;
      const lastTwoDigits = count % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "объявлений";
      if (lastDigit === 1) return "объявление";
      if (lastDigit >= 2 && lastDigit <= 4) return "объявления";
      return "объявлений";
    };

    setTitleText(
      `По Вашему запросу нашлось ${filtered.length} ${getDeclension(filtered.length)}`,
    );
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchArray();
                  }
                }}
                placeholder="Поиск по объявлениям"
              />
              <button
                className="btn search-clear"
                style={{ display: searchText ? "flex" : "none" }}
                onClick={() => {
                  setSearchText("");
                  setProducts(cardArray);
                  
                  setTitleText("Все предложения");
                }}
              >
                <span style={{ color: "gray", fontSize: "28px" }}>×</span>
              </button>
              <button
                className="btn btn-primary search-btn"
                onClick={handleSearchArray}
                disabled={!searchText}
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
        <Outlet context={{ products, titleText }} />
      </main>
    </>
  );
};
