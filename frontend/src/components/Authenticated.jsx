import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Authenticated = (props) => {
  const { children } = props;
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/Login" />;
  } else {
    return children;
  }
};

export default Authenticated;
