import { Header } from "../components/Header/Header";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" placeholder="Поиск по объявлениям" />
              <button className="btn btn-primary search-btn">
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

        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-product">
                <div className="content-product_info">
                  <h2 className="content-product_title">
                    Электросамокат kugoo Gx
                  </h2>

                  <img
                    className="content-product_img"
                    src={`${process.env.PUBLIC_URL}/image/kugoo-img.jpg`}
                    alt="kugoo-img"
                  />
                  <p className="content-product_text">
                    Продаю не спеша самокат в хорошем состоянии.
                    <br />
                    Торг возможен.
                    <br />
                    За период эксплуатации не выявлено ни одной проблемы.
                    <br />
                    Из минусов — нужно прокачать задний тормоз.
                    <br />
                    Установлен отсекатель сзади.
                    <br />
                    Покрышки CST внедорожные.
                    <br />
                    Все на подшипниках, болты протянуты.
                    <br />
                    Пробег 881км , это немного для такого зверя.
                  </p>
                </div>
                <div className="content-product_prise">
                  <h2 className="content-product_title-prise">75 000 ₽</h2>
                  <button className="btn btn-primary btn-product">
                    Показать телефон
                  </button>
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side_title">Сервисы и услуги</h3>

                <div className="content-side_box">
                  <div className="content-side_list">
                    <div className="content-side_list-item">
                      <img
                        className="content-side_list-item--img"
                        src={`${process.env.PUBLIC_URL}/image/side-img_truck.svg`}
                        alt="side-img_truck"
                      />
                      <h5 className="content-side_list-item--title">
                        Доставка
                      </h5>
                      <p className="content-side_list-item--text">
                        Проверка при получении и возможность бесплатно вернуть
                        товар
                      </p>
                    </div>
                    <div className="content-side_list-item">
                      <img
                        className="content-side_list-item--img"
                        src={`${process.env.PUBLIC_URL}/image/side-img_sedan.svg`}
                        alt="side-img_sedan"
                      />
                      <h5 className="content-side_list-item--title">
                        Автотека
                      </h5>
                      <p className="content-side_list-item--text">
                        Отчёт с историей авто: пробег, владельцы, сведения о
                        залоге, ДТП и ремонтах
                      </p>
                    </div>
                    <div className="content-side_list-item">
                      <img
                        className="content-side_list-item--img"
                        src={`${process.env.PUBLIC_URL}/image/side-img_love.svg`}
                        alt="side-img_build"
                      />
                      <h5 className="content-side_list-item--title">
                        Онлайн-бронирование жилья
                      </h5>
                      <p className="content-side_list-item--text">
                        Посуточная аренда квартир и домов: большой выбор
                        вариантов для поездок по России
                      </p>
                    </div>
                  </div>

                  <div className="content-side_footer">
                    <p className="content-side_footer-item">
                      © ООО «Абито», 2026
                    </p>
                    <Link to="/" className="content-side_footer-item">
                      Положение об Политика конфиденциальности
                    </Link>
                    <Link to="/" className="content-side_footer-item">
                      Обработка данных
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
