import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
