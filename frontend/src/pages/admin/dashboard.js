import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import ScheduleIcon from '@mui/icons-material/Schedule';
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from '../../layouts/Admin';
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

import styles from "../../assets/styling/views/dashboardStyle.js";

function Dashboard() {
    const useStyles = makeStyles(styles);
    const current = new Date;
    const dateNow = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color="dark" stats icon>
                            <CardIcon color="dark">
                                <ScheduleIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}>Appointments Today</p>
                            <h3 className={classes.cardTitle}>5</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Last 24 Hours
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <MedicationOutlinedIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}>New Medications</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer />
                                Tracked from Pharmacy
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Patients</p>
                            <h3 className={classes.cardTitle}>+15</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                        title="Lab Orders:"
                        headerColor="dark"
                        tabs={[
                            {
                                tabName: "Patient",
                                tabIcon: BugReport,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={"bugs"}
                                    />
                                ),
                            },
                            {
                                tabName: "Date",
                                tabIcon: Code,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0]}
                                        tasksIndexes={[0, 1]}
                                        tasks={"website"}
                                    />
                                ),
                            },
                            {
                                tabName: "Phsycian",
                                tabIcon: Cloud,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[1]}
                                        tasksIndexes={[0, 1, 2]}
                                        tasks={"server"}
                                    />
                                ),
                            },
                        ]}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>View Patients</h4>
                            <p className={classes.cardCategoryWhite}>
                                Active patients as of {dateNow}
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Name", "Insurance", "Physician"]}
                                tableData={[
                                    ["1", "Dakota Rice", "EPO", "Dr. Frankenstein"],
                                    ["2", "Minerva Hooper", "HMO", "Dr. Drew"],
                                    ["3", "Sage Rodriguez", "PPO", "Dr. Frankenstein"],
                                    ["4", "Philip Chaney", "EPO", "Dr. Frankenstein"],
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

Dashboard.layout = Admin;

export default Dashboard;