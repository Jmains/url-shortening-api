import Navbar from "../navbar/Navbar.jsx";
import Footer from "../../sections/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
