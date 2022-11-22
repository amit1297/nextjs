import react from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = (props) => {
    const { children, footerstatus } = props; 
    return (
      <>
        {true ? (
          <div>
   
            <Navigation/>
            {children}
            {!footerstatus && <Footer />}
          </div>
        ) : (
          <div className="container">
       
            <Navigation/>
            {children}
            {!footerstatus && <Footer />}
          </div>
        )}
      </>
    );
  };
export default Layout;
