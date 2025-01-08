import { Outlet } from "react-router-dom";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="min-h-screen bg-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow px-4 md:px-0 container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
export default App;
