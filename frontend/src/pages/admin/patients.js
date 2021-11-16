import React, { useState, useEffect } from 'react'
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
    const [data, setData] = useState([])
    // const columns = [
    //     { title: "ID", field: "id" },
    //     { title: "Name", field: "name" },
    // ]
    const columns = ["ID", "Name", "Insurance", "DOB", 'Physician']

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const current = new Date;
    const dateNow = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setData(resp)
            })

    }, [])

    return (
        <GridContainer>
            <Typography variant="h4">Electronic Patient Record</Typography>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Active patients as of {dateNow}</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="warning"
                            tableHead={columns}
                            tableData={[
                                ["1", "Dakota Rice", "EPO", "10/20/1990", "Dr.Frankenstein"],
                                ["2", "Minerva Hooper", "HMO", "04/22/2000", "Dr. Drew"],
                                ["3", "Sage Rodriguez", "PPO", "01/05/1999", "Dr. Frankenstein"],
                                ["4", "Philip Chaney", "EPO", "05/12/1981", "Dr. Frankenstein"],
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