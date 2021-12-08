import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import HomeLayout from '../components/layouts/HomeLayout';
import router from 'next/router';


const Index = ({ token }) => {
  !token ? router.push('/login') : null;


  return (

    <HomeLayout>
      <div style={{ height: '80vh' }}>
        <div style={{

          height: "200px",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          margin: "auto",
          maxWidth: "800px",
          padding: "1em"
        }}>
          <Link href="/patients">
            <button style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
              padding: "20px",
              height: "10vh",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "bold",

              margin: "1em",
            }} class="grid-item">Patients</button></Link>
          <Link href="/lab"><button style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            borderRadius: "5px",
            padding: "20px",
            height: "10vh",

            fontSize: "30px",
            textAlign: "center",
            margin: "1em",
            fontWeight: "bold",



          }} class="grid-item">Lab</button></Link>
          <Link href="/scheduler"><button style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            padding: "20px",
            fontSize: "30px",
            textAlign: "center",
            height: "10vh",

            borderRadius: "5px",

            margin: "1em",
            fontWeight: "bold",


          }} class="grid-item">Scheduler</button></Link>
          <Link href="/pharmacy"><button style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            padding: "20px",
            fontSize: "30px",
            textAlign: "center",
            height: "10vh",

            borderRadius: "5px",

            margin: "1em",
            fontWeight: "bold",


          }} class="grid-item">Pharmacy</button></Link>
          <Link href="/billing"><button style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            padding: "20px",
            fontSize: "30px",
            borderRadius: "5px",
            height: "10vh",

            textAlign: "center",
            fontWeight: "bold",
            margin: "1em",

          }} class="grid-item">Billing</button></Link>
          <Link href="/equipment"><button style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            padding: "20px",
            borderRadius: "5px",
            height: "10vh",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "1em",

          }} class="grid-item">Equipment</button></Link>
        </div>
      </div>



    </HomeLayout >
  );
}

Index.getInitialProps = async (ctx) => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  return { token };

};

export default withRedux(initStore)(Index);
