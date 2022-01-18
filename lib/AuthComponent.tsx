import React, { FC } from "react";
import UserContext from "../store/UserContext";
import Navigation from "../components/Navigation";

const AuthComponent = (WrappedComponent: any) => {
  return function NewComponent(props: FC) {
    const { auth } = React.useContext(UserContext);
    return (
      <React.Fragment>
        {auth ? (
          <Navigation>
            <WrappedComponent {...props} />
          </Navigation>
        ) : (
          <h2>You are not logged in</h2>
        )}
      </React.Fragment>
    );
  };
};
export default AuthComponent;
