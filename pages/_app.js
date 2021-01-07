import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

function MyApp({ Component, pageProps }) {
  const isHome = () => Component.name === "Home";
  return (
    <div className="portfolio-app">
      <Navbar />
      {/* {pageProps.appData} */}
      {isHome() && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
      {isHome() && (
        <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
          <div className="container text-center">
            <small>Copyright &copy; Your Website</small>
          </div>
        </footer>
      )}
    </div>
  );
}

// MyApp.getInitialProps = async (context) => {
//   const initialProps =
//     App.getInitialProps && (await App.getInitialProps(context));
//   return {
//     pageProps: { appData: "Hello _App Component", ...initialProps.pageProps },
//   };
// };

export default MyApp;
