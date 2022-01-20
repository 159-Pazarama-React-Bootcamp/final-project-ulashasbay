import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
    // başvuru sonrası id no
  const [appId, setAppId] = useState("")

    // başvuru sonrası userstate
    const [appInfo, setAppInfo] = useState({});
    // Admin alanından girilen user
    const [userInfo, setUserInfo] =useState({})
  const value = {
    appId,
    setAppId,
    appInfo,
    setAppInfo,
    userInfo,
    setUserInfo
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
