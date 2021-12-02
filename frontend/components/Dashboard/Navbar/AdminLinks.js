import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Home from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
// core components
import UserInput from "../UserInput/UserInput";
import Button from "../CustomButtons/Button";
import useWindowSize from "../../../hooks/useWindowSize";

import styles from "../../../assets/styling/components/Navbar/headerLinks";
import { useRouter } from "next/router";

export default function AdminLinks() {
    const size = useWindowSize();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const router = useRouter();

    function handleLogout(event) {
        event.preventDefault();
        router.push('/login')
    }
    const [openNotification, setOpenNotification] = React.useState(null);
    const [openProfile, setOpenProfile] = React.useState(null);
    const handleClickNotification = (event) => {
        if (openNotification && openNotification.contains(event.target)) {
            setOpenNotification(null);
        } else {
            setOpenNotification(event.currentTarget);
        }
    };
    const handleCloseNotification = () => {
        setOpenNotification(null);
    };
    const handleClickProfile = (event) => {
        router.push("/admin/profile")
    };
    const handleCloseProfile = () => {
        setOpenProfile(null);
    };
    return (
        <div>
            <div className={classes.searchWrapper}>
                <UserInput
                    formControlProps={{
                        className: classes.margin + " " + classes.search,
                    }}
                    inputProps={{
                        placeholder: "Search",
                        inputProps: {
                            "aria-label": "Search",
                        },
                    }}
                />
                <Button color="white" aria-label="edit" justIcon round>
                    <Search />
                </Button>
            </div>
            <Button
                color={size.width > 959 ? "transparent" : "white"}
                justIcon={size.width > 959}
                simple={!(size.width > 959)}
                aria-label="Dashboard"
                className={classes.buttonLink}
            >
                <Home className={classes.icons} />
                <Hidden mdUp implementation="css">
                    <p className={classes.linkText}>Dashboard</p>
                </Hidden>
            </Button>
            <div className={classes.manager}>
                <Button
                    color={size.width > 959 ? "transparent" : "white"}
                    justIcon={size.width > 959}
                    simple={!(size.width > 959)}
                    aria-owns={openNotification ? "notification-menu-list-grow" : null}
                    aria-haspopup="true"
                    onClick={handleClickNotification}
                    className={classes.buttonLink}
                >
                    <Notifications className={classes.icons} />
                    <span className={classes.notifications}>3</span>
                    <Hidden mdUp implementation="css">
                        <p onClick={handleCloseNotification} className={classes.linkText}>
                            Notification
                        </p>
                    </Hidden>
                </Button>
                <Poppers
                    open={Boolean(openNotification)}
                    anchorEl={openNotification}
                    transition
                    disablePortal
                    className={
                        classNames({ [classes.popperClose]: !openNotification }) +
                        " " +
                        classes.popperNav
                    }
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="notification-menu-list-grow"
                            style={{
                                transformOrigin:
                                    placement === "bottom" ? "center top" : "center bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleCloseNotification}>
                                    <MenuList role="menu">

                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            A new medication has been ordered
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            Another Notification
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotification}
                                            className={classes.dropdownItem}
                                        >
                                            Another One
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>
            </div>
            <div className={classes.manager}>
                <Button
                    color={size.width > 959 ? "transparent" : "white"}
                    justIcon={size.width > 959}
                    simple={!(size.width > 959)}
                    aria-owns={openProfile ? "profile-menu-list-grow" : null}
                    aria-haspopup="true"
                    onClick={handleClickProfile}
                    className={classes.buttonLink}
                >
                    <Person className={classes.icons} />
                    <Hidden mdUp implementation="css">
                        <p className={classes.linkText}>Profile</p>
                    </Hidden>
                </Button>
                <Poppers
                    open={Boolean(openProfile)}
                    anchorEl={openProfile}
                    transition
                    disablePortal
                    className={
                        classNames({ [classes.popperClose]: !openProfile }) +
                        " " +
                        classes.popperNav
                    }
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="profile-menu-list-grow"
                            style={{
                                transformOrigin:
                                    placement === "bottom" ? "center top" : "center bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleCloseProfile}>
                                    <MenuList role="menu">
                                        <MenuItem
                                            onClick={handleCloseProfile}
                                            className={classes.dropdownItem}
                                        >
                                            Profile
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseProfile}
                                            className={classes.dropdownItem}
                                        >
                                            Settings
                                        </MenuItem>
                                        <Divider light />
                                        <MenuItem
                                            onClick={handleLogout}
                                            className={classes.dropdownItem}
                                        >
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>
            </div>
        </div>
    );
}
