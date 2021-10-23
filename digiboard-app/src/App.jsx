import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Routes from "./routes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <Routes />
      <Footer />
    </div>
  );
}

