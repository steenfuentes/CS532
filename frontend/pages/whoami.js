import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import HomeLayout from '../components/layouts/HomeLayout';

const Whoami = ({ user }) => (
  <HomeLayout title="Who Am I">
    {(user && <h3 className="title is-3">You are logged in as <strong className="is-size-2 has-text-primary">{user.label}</strong> and your email is <strong>{user.mail}</strong></h3>) ||
      <h3 className="title is-3 has-text-danger	">You are {user}</h3>}
    {(user && <div>
      <strong>Your skills are:</strong>
      <ul className="skills">
        {user.skills.map(({ id, label }) => (
          <li key={id} className="skill">
            {label}
          </li>
        ))}
      </ul>
    </div>
    )}
    {(user && <div>
      <strong>You are following:</strong>
      <ul className="groups">
        {user.groups.map(({ id, label }) => (
          <li key={id} className="group">
            {label}
          </li>
        ))}
      </ul>
    </div>
    )}
  </HomeLayout>
);

Whoami.getInitialProps = async (ctx) => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    const response = await axios.get(`${API}/records/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const user = await response.data.da;
    console.log(user);
  }

};


export default withRedux(initStore)(Whoami);
