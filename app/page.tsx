import Footer from "./componentes/footer";
import Header from "./componentes/header";
import Nav from "./componentes/nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}
