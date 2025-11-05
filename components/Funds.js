import React from "react";
import { Link } from "react-router-dom";

const DataRow = ({ label, value, highlight }) => (
  <div className="data">
    <p>{label}</p>
    <p className={highlight ? "imp colored" : "imp"}>{value}</p>
  </div>
);

const Funds = () => {
  return (
    <>
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="action-buttons">
          <Link className="btn btn-green">Add Funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row">
        {/* Equity Section */}
        <div className="col">
          <span>
            <p className="section-title">Equity</p>
          </span>

          <div className="table">
            <DataRow label="Available margin" value="4,043.10" highlight />
            <DataRow label="Used margin" value="3,757.30" />
            <DataRow label="Available cash" value="4,043.10" />

            <hr />

            <DataRow label="Opening balance" value="4,043.10" />
            <DataRow label="Payin" value="4,064.00" />
            <DataRow label="SPAN" value="0.00" />
            <DataRow label="Delivery margin" value="0.00" />
            <DataRow label="Exposure" value="0.00" />
            <DataRow label="Options premium" value="0.00" />

            <hr />

            <DataRow label="Collateral (Liquid funds)" value="0.00" />
            <DataRow label="Collateral (Equity)" value="0.00" />
            <DataRow label="Total Collateral" value="0.00" />
          </div>
        </div>

        {/* Commodity Section */}
        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;