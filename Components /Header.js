import Header from '../components/Header';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to SelfMadePicks</h1>
        <p>Advanced AI betting picks, insights, and overlays.</p>
      </main>
    </div>
  );
}
