import React, { useState } from 'react';
import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';


const Lab = ({ orders, token }) => {
    console.log(orders);

    return (
        < HomeLayout title="Lab Orders" >
            <div>
                <h2>Lab Orders</h2>


            </div>
            {
                !user
                    ?
                    <h3>Error loading information, please try again</h3>
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
                            <p className="control has-text-centered">
                                <button type="submit" className="button is-success">
                                    Search Lab Info
                                </button>
                            </p>
                        </div>
                    </form>

                </div>
            </div>

        </HomeLayout >
    )
};

Lab.getInitialProps = async (ctx) => {
    initialize(ctx);
    const token = ctx.store.getState().authentication.token;
    if (token) {
        const response = await axios.get(`${API}/laborder/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const laborders = await response.data;

        return { laborders, token };
    }

};


export default withRedux(initStore)(Lab);
