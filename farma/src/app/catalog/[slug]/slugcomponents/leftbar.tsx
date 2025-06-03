import { FunctionComponent } from "react";

interface LeftBarProps {
  brandFiltered: string[];
}

const LeftBar: FunctionComponent<LeftBarProps> = ({ brandFiltered }) => {
  return (
    <div className="w-[306px]">
      <form className="category-form">
        <div>
          <h3>Бренды</h3>
          {brandFiltered.map((e) => (
            <div className="brand-input" key={e}>
              <input type="checkbox" id={e} name={e} />
              <label htmlFor={e}>{e}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>Наличие</h3>
          <div className="brand-input">
            <input type="radio" name="have" id="avaible" value={`avaible`} />
            <label htmlFor="avaible">В наличии</label>
          </div>
          <div className="brand-input">
            <input type="radio" name="have" id="order" value={`order`} />
            <label htmlFor="order">Под заказ</label>
          </div>
        </div>
        <div>
          <h3>Цена</h3>
          <div className="price-input">
            <label htmlFor="price">От</label>
            <input type="number" name="price" id="low-price" />
            <label htmlFor="price">До</label>
            <input type="number" name="price" id="high-price" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftBar;
