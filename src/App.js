import './App.css';
import Navbar from './components/Navbar';
// import AdminLoginPage from './pages/AdminLoginPage';
import Router from './routers/Router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      {/* <AdminLoginPage /> */}
    </div>
  );
}

export default App;
