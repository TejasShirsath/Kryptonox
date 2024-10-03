import { Navbar, Welcome, Footer, Services} from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
  </div>
);

export default App;
