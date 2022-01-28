import React from "react";
import UserContext from "./UserContext";

interface ContextInterface {
  auth: boolean;
  dashboards: boolean;
  setDashboards: any;
  alerts: {
    raceAlerts: boolean;
    changesInTrackConditions: boolean;
    runnerBetsWithinTimeSpan: boolean;
    eventsAreDelayed: boolean;
    changesInMarketMovement: boolean;
    jockeysWithSelectRunners: boolean;
    wagesOverXAmount: boolean;
    marketCoverageFalls: boolean;
  };
  setAlerts: any;
}

export const ContextProvider: React.FC = (props) => {
  const [auth, setAuth] = React.useState<boolean>(true);
  const [dashboards, setDashboards] = React.useState<boolean>(false);
  const [alerts, setAlerts] = React.useState({
    raceAlerts: false,
    changesInTrackConditions: false,
    runnerBetsWithinTimeSpan: false,
    eventsAreDelayed: false,
    changesInMarketMovement: false,
    jockeysWithSelectRunners: false,
    wagesOverXAmount: false,
    marketCoverageFalls: false,
  });
  const ContextProviderValue: ContextInterface = {
    auth,
    dashboards,
    setDashboards,
    alerts,
    setAlerts,
  };
  return (
    <UserContext.Provider value={ContextProviderValue}>
      {props.children}
    </UserContext.Provider>
  );
};
