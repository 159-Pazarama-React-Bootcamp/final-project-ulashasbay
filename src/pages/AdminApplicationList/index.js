import React from "react";
import { useState, useEffect } from "react";
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
import "./index.css";

function AdminApplicationList() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const userColRef = collection(db, "applications");

  // Admin sayfasındaki görüntüle butonuna tıklandığında çalışan fonksiyon
  const getUserApplicationInfo = async (id) => {
    const noteSnapshot = await getDoc(doc(db, "applications", id));
    if (noteSnapshot.exists()) {
      dispatch(updateAppId(id));
      dispatch(updateUserInfo(noteSnapshot.data()));
      navigate(`/admin/basvuru/${id}`);
    } else {
      console.log("Böyle bir kullanıcı bulunmuyor");
    }
  };

  // Kullanıcı başvurusunu firebase den silen fonksiyon
  const deleteUserApplication = async (id) => {
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
          <option value="Yanıtlandı">Yanıtlanmış</option>
          <option value="Bekliyor">Yanıtlanmamış</option>
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
            if (item.applicationStatus === selectValue) {
              return (
                <tr key={item.id}>
                  <td data-label="Başvuru Tarihi">{item.applicationDate}</td>
                  <td data-label="Ad">{item.name}</td>
                  <td data-label="Soyad">{item.surname}</td>
                  <td data-label="Yaş">{item.age}</td>
                  <td data-label="Başvuru Nedeni">{item.applicationReason}</td>
                  <td data-label="Başvuru Durumu">{item.applicationStatus}</td>
                  <td data-label="Başvuru Sonucu">{item.applicationResult}</td>
                  <td data-label="Başvuru No">{item.id}</td>
                  <td data-label="İşlemler">
                    <button
                      className="table-view-btn"
                      onClick={() => getUserApplicationInfo(item.id)}
                    >
                      Görüntüle
                    </button>
                    <button
                      className="table-delete-btn"
                      onClick={() => deleteUserApplication(item.id)}
                    >
                      Sil
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

export default AdminApplicationList;
