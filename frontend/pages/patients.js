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
  const columns = [
    { title: "ID", field: "" },
    { title: "Name", field: "first_name" }

  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const style = {
    table: {
      fontfamily: "arial, sans - serif",
      borderCollapse: "collapse",
      width: "100%",
    },

    //     td, th {
    //       border: 1px solid #dddddd;
    //   text - align: left;
    //   padding: 8px;
    // },

    //   tr: nth - child(even) {
    //   background - color: #dddddd;
  }


  return (


    < HomeLayout title="Patients" >
      <p>You are authorized via {!token ? "not signed in" : " authenticaed via ", token}</p>
      <div>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", paddingLeft: "40px", float: "left" }}>Patients</h1>
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
                <th>Email</th>
                <th>Address</th>
                <th>Insurance</th>
                <th>DOB</th>
                <th>Gender</th>
              </tr>
              {patients.map(patient => {
                return (
                  <tr>
                    <td>{patient.id}</td>
                    <td>{patient.first_name + " " + patient.last_name}</td>
                    <td>{patient.number}</td>
                    <td>{patient.email}</td>
                    <td>{patient.address}</td>
                    <td>{patient.insurance}</td>
                    <td>{patient.dob}</td>
                    <td>{patient.gender}</td>




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
        <div className="update-patient">
          <form
            onSubmit={handleSubmit}
            className="container"
            style={{ width: '540px' }}
          >
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
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
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
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
            <div className="field">
              <p className="control has-text-centered">
                <button type="submit" className="button is-success">
                  Update Patient Info
                </button>
              </p>
            </div>
          </form>
        </div>
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
