import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Summary.css";

const Summary = ({ username }) => {
  const [holdings, setHoldings] = useState([]);
  const [investment, setInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [pnl, setPnl] = useState(0);
  const [percentChange, setPercentChange] = useState(0);

  const formattedName = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : "User";

  useEffect(() => {
    axios
      .get("http://localhost:8080/allHoldings")
      .then((res) => {
        const data = res.data;
        setHoldings(data);

        let totalInvestment = 0;
        let totalCurrentValue = 0;

        data.forEach((stock) => {
          const stockInvestment = stock.avg * stock.qty;
          const stockCurrentValue = stock.price * stock.qty;

          totalInvestment += stockInvestment;
          totalCurrentValue += stockCurrentValue;
        });

        const totalPnl = totalCurrentValue - totalInvestment;
        const percent =
          totalInvestment !== 0 ? (totalPnl / totalInvestment) * 100 : 0;

        setInvestment(totalInvestment);
        setCurrentValue(totalCurrentValue);
        setPnl(totalPnl);
        setPercentChange(percent);
      })
      .catch((err) => {
        console.error("Failed to fetch holdings:", err);
      });
  }, []);

  return (
    <>
      <div className="username">
        <h6>Hi, {formattedName}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl.toFixed(2)}{" "}
              <small>
                {percentChange >= 0 ? "+" : ""}
                {percentChange.toFixed(2)}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>
                {currentValue.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
            <p>
              Investment{" "}
              <span>
                {investment.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;