import React from "react";
import UserContext from "./UserContext";

interface ContextInterface {
  auth: boolean;
  dashboards: boolean;
  setDashboards: any;
}

export const ContextProvider: React.FC = (props) => {
  const [auth, setAuth] = React.useState<boolean>(true);
  const [dashboards, setDashboards] = React.useState<boolean>(false);
  const ContextProviderValue: ContextInterface = {
    auth,
    dashboards,
    setDashboards,
  };
  return (
    <UserContext.Provider value={ContextProviderValue}>
      {props.children}
    </UserContext.Provider>
  );
};
