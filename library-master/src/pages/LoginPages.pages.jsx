// src/pages/LoginPage.jsx
import Header from '../components/Header.component';
import Banner from '../components/Banner.component';
import Footer from '../components/Footer.component';

const LoginPage = () => {
  return (
    <div className="flex-col min-h-screen bg-white w-full">
      {/* Header */}
      <Header />

      {/* Nội dung trang */}
      <div className="flex flex-col items-center pt-20">
        <Banner />
      </div>
      <Footer/>
    </div>
  );
};

export default LoginPage;
