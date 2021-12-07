import React, { useState } from 'react';
import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import Head from 'next/head';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';


const Patients = ({ user, token }) => {

  const patients = user.Patients.map(patient => { return patient })
  // const [id, setId] = useState('');
  const columns = [
    { title: "ID", field: "" },
    { title: "Name", field: "first_name" }

  ]

  const handleSubmit = (e) => {
    initialize
    e.preventDefault();

  }



  return (


    < HomeLayout title="Patients" >
      <p>You are authorized via {!token ? "not signed in" : " authenticaed via ", token}</p>

      <div style={{ display: "inline-block" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", paddingLeft: "40px", float: "left" }}>Patients</h1>
        </div>
        <div className="update-patient" style={{ float: "left", paddingLeft: "40px", display: "inline-block" }}>
          <form
            onSubmit={handleSubmit}
            className="container"
            style={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              width: '540px'
            }}
          >
            <div className="style.field">
              <p className="control has-icons-left has-icons-right">
                <input
                  style={{
                    verticalAlign: "middle",
                    margin: "5px 10px 5px 0",
                    padding: "10px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                  }}
                  type="text"
                  placeholder="id"
                  required
                  value={"id"}
                  onChange={e => setId(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
            </div>
            <div style={{ marginBottom: "0px" }} className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  style={{
                    verticalAlign: "middle",
                    margin: "5px 10px 5px 0",
                    padding: "10px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                  }}
                  type="text"
                  placeholder="id"
                  required
                  value={"id"}
                  onChange={e => setId(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
            </div>
            <div style={{ display: "inline-block" }}>
              <p className="control has-text-centered">
                <button type="submit" className="button is-success">
                  Update Patient Info
                </button>
              </p>
            </div>
          </form>
        </div>
        {!user
          ?
          <p>You are not signed in</p>
          :
          (<div style={{ margin: "auto", padding: "0 40px" }}>
            <table style={{
              margin: "auto", fontfamily: "arial, sans - serif",
              borderCollapse: "collapse",
              width: "100%",
            }}>
              <tr>
                <th className={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}>ID</th>
                <th>Name</th>
                <th>Number</th>
                <th style={{ paddingLeft: "10px" }}>Email</th>
                <th style={{ paddingLeft: "10px" }}>Address</th>
                <th>Insurance</th>
                <th>DOB</th>
                <th style={{ paddingLeft: "10px" }}>Gender</th>
              </tr>
              {patients.map(patient => {
                return (
                  <tr>
                    <td>{patient.id}</td>
                    <td>{patient.first_name + " " + patient.last_name}</td>
                    <td>{patient.number}</td>
                    <td style={{ paddingLeft: "10px" }}>{patient.email}</td>
                    <td style={{ paddingLeft: "10px" }}>{patient.address}</td>
                    <td>{patient.insurance}</td>
                    <td>{patient.dob}</td>
                    <td style={{ paddingLeft: "10px" }}>{patient.gender}</td>

                  </tr>
                )
              })}
            </table>
          </div>
          )}

      </div>
      {
        !user
          ?
          <h3>Error loading patient information, please try again</h3>
          : null
      }
      < div >

      </div>



    </HomeLayout >

  )
};

Patients.getInitialProps = async (ctx) => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    const response = await axios.get(`${API}/records/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const user = await response.data;

    return { user, token };
  }

};


export default withRedux(initStore)(Patients);
