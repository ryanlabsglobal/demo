import React from "react";

interface ContextInterface {
  auth?: boolean;
  dashboards?: boolean;
  setDashboards?: any;
}

const UserContext = React.createContext<ContextInterface>({});

export default UserContext;
