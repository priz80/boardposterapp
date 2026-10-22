import { Card } from "../components/Card/Card";
import { Link, useOutletContext } from "react-router-dom";

export const Home = () => {
  const { products, titleText } = useOutletContext();
  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main_title">{titleText}</h2>
            <div className="content-main_list">
              {products.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  prise={card.prise}
                  adress={card.adress}
                  data={card.data}
                  img={card.img}
                />
              ))}
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
                  <h5 className="content-side_list-item--title">Доставка</h5>
                  <p className="content-side_list-item--text">
                    Проверка при получении и возможность бесплатно вернуть товар
                  </p>
                </div>
                <div className="content-side_list-item">
                  <img
                    className="content-side_list-item--img"
                    src={`${process.env.PUBLIC_URL}/image/side-img_sedan.svg`}
                    alt="side-img_sedan"
                  />
                  <h5 className="content-side_list-item--title">Автотека</h5>
                  <p className="content-side_list-item--text">
                    Отчёт с историей авто: пробег, владельцы, сведения о залоге,
                    ДТП и ремонтах
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
                    Посуточная аренда квартир и домов: большой выбор вариантов
                    для поездок по России
                  </p>
                </div>
              </div>

              <div className="content-side_footer">
                <p className="content-side_footer-item">© ООО «Абито», 2026</p>
                <Link to="/" className="content-side_footer-item">
                  Политика конфиденциальности
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
  );
};
