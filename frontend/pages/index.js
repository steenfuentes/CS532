import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import HomeLayout from '../components/layouts/HomeLayout';


const Index = () => (
  <HomeLayout>


  </HomeLayout>
);


Index.getInitialProps = function (ctx) {
  initialize(ctx);
};


export default withRedux(initStore)(Index);
