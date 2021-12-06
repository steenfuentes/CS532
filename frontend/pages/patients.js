import React, { useState } from 'react';
import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';

//     id = fields.Integer()
//     first_name = fields.String()
//     last_name = fields.String()
//     number = fields.String()
//     email = fields.Email()
//     address = fields.String()
//     insurance = fields.String()
//     dob = fields.String()
//     gender = fields.String()
//     pcp_id = fields.Integer()
//     medications = fields.String()
//     appointments = fields.List(fields.Nested(AppointmentSchema()))
//     lab_orders = fields.List(fields.Nested(LabOrderSchema()))



const Patients = ({ user, token }) => {
  console.log(user.Patients)
  const patientName = user.Patients.map(patient => { return patient.first_name + " " + patient.last_name })
  const patientNumber = user.Patients.map(patient => { return patient.number })
  const patientEmail = user.Patients.map(patient => { return patient.email })
  const patientAddress = user.Patients.map(patient => { return patient.address })
  patientName.map(name => { console.log(name) })
  console.log(patientName, patientNumber, patientEmail);
  const columns = [
    { title: "ID", field: "" },
    { title: "Name", field: "first_name" }

  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    < HomeLayout title="Patients" >
      <h3>You are {!token ? "not signed in" : " authenticaed via ", token}</h3>
      <div>
        <h2>Patients</h2>
        <h3>Hello {patientName.map(name => (<h3>{name}</h3>))}</h3>
      </div>
      {!user
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
        <h3 className="names"> {patientName[0]}  </h3>
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
