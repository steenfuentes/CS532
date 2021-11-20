/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/styling/components/Footer/footerStyle";

export default function Footer(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a href="#home" className={classes.block}>
                                Home
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="/login" className={classes.block}>
                                Login
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
<<<<<<< HEAD
                            <a href="/admin" className={classes.block}>
=======
                            <a href="/admin/dashboard" className={classes.block}>
>>>>>>> d8aeada99fa7f1d4b86feb9b34925368df3732fb
                                Dashboard
                            </a>
                        </ListItem>
                    </List>
                </div>
                <p className={classes.right}>
                    <span>
                        &copy; {1900 + new Date().getYear()}{" "}
                        <a
                            href="/"
                            target="_blank"
                            className={classes.a}
                        >
                            BSEG
                        </a>
                        , HealthTrack CS532
                    </span>
                </p>
            </div>
        </footer>
    );
}
