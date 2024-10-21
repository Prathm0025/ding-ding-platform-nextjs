"use client";
import { useEffect, useRef } from "react";

const DeleteUser = ({ deleteToken }: any) => {
  const deleteTokensRef = useRef(deleteToken);

  useEffect(() => {
    deleteTokensRef.current = deleteToken;
  });

  useEffect(() => {
    deleteTokensRef.current();
  }, []);

  return null;
};

export default DeleteUser;
