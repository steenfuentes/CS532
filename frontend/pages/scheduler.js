import router from "next/router";
import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';
import React from "react";

const Scheduler = ({ token }) => {
    !token ? router.push('/login') : null;


    return (
        <HomeLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Scheduler</h1>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

Scheduler.getInitialProps = async (ctx) => {
    initialize(ctx);
    const token = ctx.store.getState().authentication.token;

    return { token };
}


export default withRedux(initStore)(Scheduler);