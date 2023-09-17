import Bars from "./bar-chart-race/page";
import Navbar from "./components/nav";
import Options from "./components/options";
import Footer from "./components/footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <main className="h-full flex flex-col items-center justify-between">
        <Navbar />
        <Bars />
        <Options />
        <Footer />
        <Helmet>
          <meta
            name="google-site-verification"
            content="cLQeOK02aLCmDS7rHdPpuMNkgw6fYFgjJRerpEB1NVY"
          />
        </Helmet>
      </main>
    </>
  );
}
