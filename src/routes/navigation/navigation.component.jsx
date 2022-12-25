import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    Najme Miri
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/projects">
                        Work
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;