import React from "react";

interface ContextInterface {
  auth?: boolean;
  dashboards?: boolean;
  setDashboards?: any;
  alerts?: {
    raceAlerts: boolean;
    changesInTrackConditions: boolean;
    runnerBetsWithinTimeSpan: boolean;
    eventsAreDelayed: boolean;
    changesInMarketMovement: boolean;
    jockeysWithSelectRunners: boolean;
    wagesOverXAmount: boolean;
    marketCoverageFalls: boolean;
  };
  setAlerts?: any;
}

const UserContext = React.createContext<ContextInterface>({});

export default UserContext;
