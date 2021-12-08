import router from "next/router";
import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';
import React from "react";

const Pharmacy = ({ medication }) => {
    const orders = !medication ? router.push("/login") : medication.map(laborder => { return medication })


    return (
        <HomeLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Pharmacy</h1>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

Pharmacy.getInitialProps = async (ctx) => {
    initialize(ctx);
    const token = ctx.store.getState().authentication.token;
    if (token) {
        const response = await axios.get(`${API}/equipment/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const medication = await response.data;

        return { medication, token };
    }

};
export default withRedux(initStore)(Pharmacy);