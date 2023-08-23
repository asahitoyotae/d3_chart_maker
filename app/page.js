import Bars from "./bar-chart-race/page";
import Navbar from "./components/nav";
import Options from "./components/options";
import Footer from "./components/footer";
import Head from "next/head";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/faveicon.png" />
      </Head>
      <main className="h-full flex flex-col items-center justify-between">
        <Navbar />
        <Bars />
        <Options />
        <Footer />
        <Helmet>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8659384252547972"
            crossorigin="anonymous"
          ></script>
        </Helmet>
      </main>
    </>
  );
}
