import Footer from "../components/footer";
import Navbar from "../components/nav";
import Options from "../components/options";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Options />
        <Footer />
      </body>
    </html>
  );
}
