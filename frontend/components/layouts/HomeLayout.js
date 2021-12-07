import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const HomeLayout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
    </Head>
    <div className="tabs is-centered">
      <ul>
        <Link href="/"><a>Home</a></Link>
        <Link href="/patients"><a>Patients</a></Link>
        <Link href="/lab"><a>Lab</a></Link>
        <Link href="/pharmacy"><a>Pharmacy</a></Link>
        <Link href="/scheduler"><a>Billing</a></Link>
        <Link href="/patients"><a>Equipment</a></Link>
        <div style={{ marginLeft: "5vh" }}>
          {!isAuthenticated && <Link href="/login"><a>Sign In</a></Link>}
          {isAuthenticated && <li onClick={deauthenticate}><a>Sign Out</a></li>}
        </div>



      </ul>
    </div>

    <div className="has-text-centered">
      {children}
    </div>
    <div className="navbar-brand is-right">
      <a className="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
        <span className="icon"><i className="mdi mdi-dots-vertical"></i></span>
      </a>
    </div>
  </div>
);

const mapStateToProps = (state) => (
  { isAuthenticated: !!state.authentication.token }
);

export default connect(mapStateToProps, actions)(HomeLayout);