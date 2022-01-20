import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
// import AdminLoginPage from './pages/AdminLoginPage';
import Router from './routers/Router';
import { db } from './config/firebase';
import { collection, getDocs } from "firebase/firestore"

function App() {
  const [users, setUsers] = useState({})
  const userColRef = collection(db, "applications")
  
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userColRef)
      data.docs.map((doc) => setUsers({ ...doc.data(), id: doc.id }))
      
    }
    getUser();
    console.log(users)
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <Router />
      {/* <AdminLoginPage /> */}
    </div>
  );
}

export default App;
