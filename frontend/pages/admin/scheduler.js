import React from 'react'
import GridContainer from '../../components/Grid/GridContainer';
import { Typography } from '@material-ui/core';
import Admin from '../../layouts/Admin';

function Scheduler() {
    return (
        <GridContainer>
            <Typography variant="h4">Physician Scheduler</Typography>


        </GridContainer>
    )
}

Scheduler.layout = Admin;
export default Scheduler
