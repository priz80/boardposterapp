import { Link, useOutletContext, useParams } from "react-router-dom";

export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();
  const findProduct = products.find((p) => p.id === +id);

  return (
    <section className="content">
      <div className="container">
        {findProduct ? (
          <div className="content-box">
            <div className="content-product">
              <div className="content-product_info">
                <h2 className="content-product_title">{findProduct.title}</h2>

                <img
                  className="content-product_img"
                  src={findProduct.img}
                  alt={findProduct.title}
                />
                <p className="content-product_text">
                  {findProduct.description}
                </p>
              </div>
              <div className="content-product_prise">
                <h2 className="content-product_title-prise">
                  {findProduct.prise}
                </h2>
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
                    <h5 className="content-side_list-item--title">Доставка</h5>
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
                    <h5 className="content-side_list-item--title">Автотека</h5>
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
                      Посуточная аренда квартир и домов: большой выбор вариантов
                      для поездок по России
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
        ) : (
          <h2>Такого товара не существует!</h2>
        )}
      </div>
    </section>
  );
};
