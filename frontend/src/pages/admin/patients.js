import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import Admin from '../../layouts/Admin';
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import Table from '../../components/Table/Table'
import Card from '../../components/Card/Card';
import { Typography } from '@mui/material';
import styles from "../../assets/styling/views/dashboardStyle.js";


function Patient() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const current = new Date;
    const dateNow = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <GridContainer>
            <Typography variant="h4">Electronic Patient Record</Typography>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Active patients as of {dateNow}</h4>
                        <p className={classes.cardCategoryWhite}>nbc

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
    )
}

Patient.layout = Admin;
export default Patient;