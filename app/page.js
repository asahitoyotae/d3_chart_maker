import Bars from "./bar-chart-race/page";
import Navbar from "./components/nav";
import Options from "./components/options";
import Footer from "./components/footer";
import Head from "next/head";

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
      </main>
    </>
  );
}
