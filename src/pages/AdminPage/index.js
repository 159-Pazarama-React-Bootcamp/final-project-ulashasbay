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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAppId } from "../../redux/appId/appIdSlice";
import { updateUserInfo } from "../../redux/userInfo/userInfoSlice";

function AdminPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const userColRef = collection(db, "applications");

  const getUser = async (id) => {
    const noteSnapshot = await getDoc(doc(db, "applications", id));
    if (noteSnapshot.exists()) {
      dispatch(updateAppId(id));
      dispatch(updateUserInfo(noteSnapshot.data()));
      navigate(`/admin/basvuru/${id}`);
    } else {
      console.log("Böyle bir kullanıcı bulunmuyor");
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "applications", id);
    await deleteDoc(userDoc);
  };

  const [selectValue, setSelectValue] = useState("Bekliyor");
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(userColRef, (snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsubscribe;
  }, []);

  return (
    <>
      <div className="select-dropdown">
        <select defaultValue="Bekliyor" onChange={handleSelectChange}>
          <option value="Yanıtlandı">Yanıtlanan</option>
          <option value="Bekliyor">Yanıtlanmayan</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Başvuru Tarihi</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yaş</th>
            <th>Başvuru Nedeni</th>
            <th>Başvuru Durumu</th>
            <th>Başvuru Sonucu</th>
            <th>Başvuru No</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            if (item.basvuruDurumu === selectValue) {
              return (
                <tr key={item.id}>
                  <td data-label="Başvuru Tarihi">{item.basvuruTarihi}</td>
                  <td data-label="Ad">{item.ad}</td>
                  <td data-label="Soyad">{item.soyad}</td>
                  <td data-label="Yaş">{item.yas}</td>
                  <td data-label="Başvuru Nedeni">{item.basvuruNedeni}</td>
                  <td data-label="Başvuru Durumu">{item.basvuruDurumu}</td>
                  <td data-label="Başvuru Sonucu">{item.basvuruSonuc}</td>
                  <td data-label="Başvuru No">{item.id}</td>
                  <td data-label="İşlemler">
                    <button
                      className="table-delete-btn"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="table-view-btn"
                      onClick={() => getUser(item.id)}
                    >
                      Görüntüle
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default AdminPage;
