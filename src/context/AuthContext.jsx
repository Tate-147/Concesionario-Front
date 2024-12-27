import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const backurl = import.meta.env.VITE_BACK_URL;

  const [isLogged, setIsLogged] = useState(() => {
    const storedValue = localStorage.getItem('isLogged');
    return storedValue === 'true';
  });

  // Executed when modifying isLogged
  useEffect(() => {
    localStorage.setItem('isLogged', isLogged);
  }, [isLogged]);

  // Id User
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  // Executed when modifying userId
  useEffect(() => {
    if (userId) {localStorage.setItem("userId", userId)}
    else {localStorage.removeItem("userId")}}, [userId]);

  // Tokens
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));

  // Executed when modifying accessToken
  useEffect(() => {
    if (accessToken) {localStorage.setItem("accessToken", accessToken)}
    else {localStorage.removeItem("accessToken")}}, [accessToken]);
  
  // Executed when modifying refreshToken
  useEffect(() => {
    if (refreshToken) {localStorage.setItem("refreshToken", refreshToken)}
    else {localStorage.removeItem("refreshToken")}}, [refreshToken]);

  // New refresh token 
  const handleRefreshToken = async () => {
    const response = await fetch(backurl + "users/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-refresh-token": refreshToken,
      },
    });
    const responsejson = await response.json();
    const Token = responsejson.data.accessToken;
    if (response.ok) { setAccessToken(Token) }
    else {setIsLogged(false); setUserId(null); setAccessToken(null); setRefreshToken(null); return -1}};

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, userId, setUserId, handleRefreshToken, accessToken, setAccessToken, setRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};