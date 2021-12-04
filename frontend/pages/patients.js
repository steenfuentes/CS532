import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';



const Patients = ({ user, token }) => {
  console.log(user);
  console.log(user[1]);
  return (
    < HomeLayout title="Patients" >
      <h3>You are {!token ? "not signed in" : " authenticaed via ", token}</h3>
      <div>
        <h2>Patients</h2>
        <h3 className="names">      {user.first_name} {user.last_name} </h3>
        {/* <h3 className="number">      {user[1].first_name} {user[1].last_name} </h3>
        <h3 className="email">      {user[2].first_name} {user[2].last_name} </h3> */}

      </div>






    </HomeLayout >
  )
};

Patients.getInitialProps = async (ctx) => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    const response = await axios.get(`${API}/records/5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const user = await response.data;

    return { user, token };
  }

};


export default withRedux(initStore)(Patients);
