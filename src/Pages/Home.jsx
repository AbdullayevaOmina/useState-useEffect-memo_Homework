import { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="main-title">
        <h2>DASHBOARD</h2>
      </div>

      <div className="main-cards">
        <Link to="/users">
          <div className="card">
            <div className="card-inner">
              <h3>USERS</h3>
              <span className="material-icons-outlined">groups</span>
            </div>
            <h1 id="users-count">0</h1>
          </div>
        </Link>

        <Link to="/products">
          <div className="card">
            <div className="card-inner">
              <h3>PRODUCTS</h3>
              <span className="material-icons-outlined">inventory_2</span>
            </div>
            <h1 id="products-count">0</h1>
          </div>
        </Link>

        <Link to="/orders">
          <div className="card">
            <div className="card-inner">
              <h3>ORDERS</h3>
              <span className="material-icons-outlined">dvr</span>
            </div>
            <h1 id="orders-count">0</h1>
          </div>
        </Link>
      </div>

      <div className="charts">
        <div className="charts-card">
          <h2 className="chart-title">Top 5 Products</h2>
          <div id="bar-chart"></div>
        </div>

        <div className="charts-card">
          <h2 className="chart-title">Purchase and Sales Orders</h2>
          <div id="area-chart"></div>
        </div>
      </div>
    </main>
  );
};

export default memo(Home);
