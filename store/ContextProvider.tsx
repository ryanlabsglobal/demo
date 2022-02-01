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
  businessIntelTabs: number;
  setBusinessIntelTabs: any;
}

export const ContextProvider: React.FC = (props) => {
  //This will be used to store auth details, not currently in use
  const [auth, setAuth] = React.useState<boolean>(true);
  //The open and closed state of the Dashboards tab (now called the reports tab) in the side bar, names need to be changed
  const [dashboards, setDashboards] = React.useState<boolean>(false);
  const [businessIntelTabs, setBusinessIntelTabs] = React.useState<number>(0);
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
    businessIntelTabs,
    setBusinessIntelTabs,
  };
  return (
    <UserContext.Provider value={ContextProviderValue}>
      {props.children}
    </UserContext.Provider>
  );
};
