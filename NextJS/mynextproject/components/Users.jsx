"use client"
import { useEffect } from "react";

function Users() {
  useEffect(() => {
    alert('Loaded!')
  }, [])

  return <div> users </div>;
}
export default Users;
