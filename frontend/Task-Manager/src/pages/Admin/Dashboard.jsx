import React, { useContext } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext);
  return (
    <div>
      Dashboard
      {JSON.stringify(user)}
    </div>
  );
};

export default Dashboard;
