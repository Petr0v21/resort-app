import React, { useEffect, useState } from "react";
// import "../index.css";

export const Exchenge = () => {
  const price = 5000;
  const [active, setActive] = useState(5000);
  const [valueInput, setValueInput] = useState(1);
  const [icon, setIcon] = useState("₴");

  const getInfoCurrency = () => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setCurrency({
          ...currency,
          USD: {
            name: data[0].ccy,
            value: data[0].sale,
          },
          EUR: {
            name: data[1].ccy,
            value: data[1].sale,
          },
        });
        console.log(currency);
      });
  };
  useEffect(() => getInfoCurrency(), []);
  const [currency, setCurrency] = useState({
    USD: {
      name: "USD",
      value: 1,
    },
    EUR: {
      name: "EUR",
      value: 1,
    },
    UAH: {
      name: "UAH",
      value: 1,
    },
  });
  const [nameCurrencyBUY, setNameCurrencyBUY] = useState(currency.UAH.name);

  const changeHandlerSelectBUY = (event) => {
    setNameCurrencyBUY(event.target.value);
    switch (event.target.value) {
      case "USD":
        setActive(price * (1 / currency.USD.value));
        setIcon("$");
        break;
      case "EUR":
        setActive(price * (1 / currency.EUR.value));
        setIcon("€");
        break;
      default:
        setActive(price);
        setIcon("₴");
    }
  };

  const changeHandlerInput = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="exchenger">
      <form>
        <h3 className="Price">
          Price: {active.toFixed(2) * valueInput} {icon}
        </h3>
        <select
          value={nameCurrencyBUY}
          onChange={(event) => changeHandlerSelectBUY(event)}
          className="SelectCurrency"
        >
          <option value={currency.EUR.name}>{currency.EUR.name}</option>
          <option value={currency.UAH.name}>{currency.UAH.name}</option>
          <option value={currency.USD.name}>{currency.USD.name}</option>
        </select>
      </form>
      <input
        className="inputExchenger"
        placeholder="1 person"
        value={valueInput}
        onChange={(event) => changeHandlerInput(event)}
      ></input>
    </div>
  );
};
