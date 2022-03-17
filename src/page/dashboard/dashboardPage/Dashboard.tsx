import axios from "axios";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Header from "../../../components/Header/Header";
import User from "../../../components/UserCard/User";
import { authentication, tokenAuth } from "../../../store";
import "./Dashboard.css";

const Dashboard = () => {
  const isAuthentication = useRecoilValue(authentication);
  // const token = useRecoilValue(tokenAuth);
  console.log(localStorage.token);
  let tokenA = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      let token = `Bearer ${tokenA}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      console.log(config);
      try {
        let { data } = await axios.get(
          "https://melandas.ilios.id/api/v1/users/me",
          config
        );

        console.log(data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, [tokenA]);

  return isAuthentication ? (
    <div>
      <Header />

      <User />
      <div className="d-flex justify-content-between" style={{}}>
        <div className="d-flex align-items-center">
          <img
            src="/Asset/Report.png"
            alt="report"
            style={{ width: "17px", height: "22px", marginRight: "13px" }}
          />
          <h3
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              /* identical to box height */
              margin: "0",
              color: "#313132",
            }}
          >
            Report
          </h3>
        </div>
        <div className="d-flex">
          <select
            className="form-select"
            name="service"
            style={{ marginLeft: "10px", height: "41px" }}
          >
            <option defaultValue={""}>Select Company</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IT Service">IT Service</option>
          </select>
          <select
            className="form-select"
            name="service"
            style={{ marginLeft: "10px", height: "41px" }}
          >
            <option defaultValue={""}>Select Company</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IT Service">IT Service</option>
          </select>
          <select
            className="form-select"
            name="service"
            style={{ marginLeft: "10px", height: "41px" }}
          >
            <option defaultValue={""}>Select Company</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IT Service">IT Service</option>
          </select>
          <select
            className="form-select"
            name="service"
            style={{ marginLeft: "10px", height: "41px" }}
          >
            <option defaultValue={""}>Select Company</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IT Service">IT Service</option>
          </select>
          <select
            className="form-select"
            name="service"
            style={{ marginLeft: "10px", height: "41px" }}
          >
            <option defaultValue={""}>Select Company</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IT Service">IT Service</option>
          </select>
        </div>
      </div>

      <div>
        <table className="data" style={{ margin: "30px 0" }}>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Revenue</th>
              <th>Target</th>
              <th>Meet Goal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales Revenue</td>
              <td>Rp 60.000.000</td>
              <td>Rp 100.000.000</td>
              <td>60%</td>
              <td>
                <img
                  src="/Asset/eye.png"
                  style={{ marginRight: "5px" }}
                  alt="eye"
                />
                See Detail
              </td>
            </tr>
            <tr>
              <td>Interior Design</td>
              <td>Rp 10.000.000</td>
              <td>-</td>
              <td>-</td>
              <td>
                <img
                  src="/Asset/eye.png"
                  style={{ marginRight: "5px" }}
                  alt="eye"
                />
                See Detail
              </td>
            </tr>
            <tr>
              <td>Settlement</td>
              <td>5</td>
              <td>15</td>
              <td>10%</td>
              <td>
                <img
                  src="/Asset/eye.png"
                  style={{ marginRight: "5px" }}
                  alt="eye"
                />
                See Detail
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className="row">
          <div className="col-5">
            <table className="data" style={{ margin: "30px 0" }}>
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rp 60.000.000</td>
                  <td>Rp 100.000.000</td>
                </tr>
                <tr>
                  <td>Rp 10.000.000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Dashboard;
