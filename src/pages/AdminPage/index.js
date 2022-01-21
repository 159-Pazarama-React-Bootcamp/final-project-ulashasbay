import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useApp } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const userColRef = collection(db, "applications");
  const { setAppInfo, setAppId } = useApp();

  const getUser = async (id) => {
    const noteSnapshot = await getDoc(doc(db, "applications", id));
    if (noteSnapshot.exists()) {
      await setAppId(id);
      await setAppInfo(noteSnapshot.data());
      navigate(`/admin/basvuru/${id}`);
    } else {
      console.log("Böyle bir kullanıcı bulunmuyor");
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "applications", id);
    await deleteDoc(userDoc);
  };

  //   useEffect(() => {
  //     const getUser = async () => {
  //       const data = await getDocs(userColRef);
  //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };
  //     return getUser();
  //   }, []);

  // snapshot
  useEffect(() => {
    const unsubscribe = onSnapshot(userColRef, (snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsubscribe;
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Ad</th>
          <th>Soyad</th>
          <th>Başvuru No</th>
          <th>Başvuru Durumu</th>
          <th>Görüntü</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => {
          return (
            <tr key={item.id}>
              <td data-label="S.No">{users.indexOf(item) + 1}</td>
              <td data-label="Ad">{item.ad}</td>
              <td data-label="Soyad">{item.soyad}</td>
              <td data-label="Başvuru No">{item.id}</td>
              <td data-label="Başvuru Durumu">{item.basvuruSonuc}</td>
              <td data-label="Görüntü">
                <button onClick={() => deleteUser(item.id)}>delete</button>
                <button onClick={() => getUser(item.id)}>View</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AdminPage;
