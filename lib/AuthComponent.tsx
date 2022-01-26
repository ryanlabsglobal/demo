import React, { FC } from "react";
import UserContext from "../store/UserContext";
import Navigation from "../components/Navigation/Navigation";

//This component is responsible for Authentication and wrapping the Navbar around pages that are logged in.
//This will need to be imported into any page that required authentication and wrapped around the export
//eg export default AuthComponent(home);

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
