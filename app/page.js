import Bars from "./bar-chart-race/page";
import Navbar from "./components/nav";
import Options from "./components/options";
import Footer from "./components/footer";
import Head from "next/head";
//import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <main className="h-full flex flex-col items-center justify-between">
        <Navbar />
        <Bars />
        <Options />
        <Footer />
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8659384252547972"
            crossorigin="anonymous"
          ></script>
        </Head>
      </main>
    </>
  );
}
