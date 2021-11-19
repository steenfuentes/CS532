<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
=======
import React from 'react'
>>>>>>> origin/rework
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
<<<<<<< HEAD
    const [data, setData] = useState([])
    // const columns = [
    //     { title: "ID", field: "id" },
    //     { title: "Name", field: "name" },
    // ]
    const columns = ["ID", "Name", "Insurance", "DOB", 'Physician']

=======
>>>>>>> origin/rework
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const current = new Date;
    const dateNow = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

<<<<<<< HEAD
    useEffect(() => {
        fetch('http://localhost:5000/records/')
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setData(resp)
            })

    }, [])

=======
>>>>>>> origin/rework
    return (
        <GridContainer>
            <Typography variant="h4">Electronic Patient Record</Typography>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Active patients as of {dateNow}</h4>
<<<<<<< HEAD
=======
                        <p className={classes.cardCategoryWhite}>nbc

                        </p>
>>>>>>> origin/rework
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="warning"
<<<<<<< HEAD
                            tableHead={columns}
                            tableData={data}
=======
                            tableHead={["ID", "Name", "Insurance", "Physician"]}
                            tableData={[
                                ["1", "Dakota Rice", "EPO", "Dr. Frankenstein"],
                                ["2", "Minerva Hooper", "HMO", "Dr. Drew"],
                                ["3", "Sage Rodriguez", "PPO", "Dr. Frankenstein"],
                                ["4", "Philip Chaney", "EPO", "Dr. Frankenstein"],
                            ]}
>>>>>>> origin/rework
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}

Patient.layout = Admin;
export default Patient;