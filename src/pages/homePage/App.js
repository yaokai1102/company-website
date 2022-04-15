import './App.scss';
import Header from '../../components/HomeComponent/Header/index'
import SecurityModule from '../../components/HomeComponent/securityModule/index'
import Product from '../../components/HomeComponent/product';
import Advantage from '../../components/HomeComponent/advantage';
import Footer from '../../components/HomeComponent/footer';
import Other from '../../components/HomeComponent/otherpage';

function App() {
  return (
    <>
      <Header />
      <SecurityModule />
      <Product />
      <Advantage />
      <Other />
      <Footer />
    </>
  );
}

export default App;