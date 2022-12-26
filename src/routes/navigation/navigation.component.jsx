import { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { NavigationContainer, NavLinks, LogoContainer } from "./navigation.styles";

const Navigation = () => {
    let activeStyle = {
        color: "red",
    };
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    Najme Miri
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : {}
                        }>
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