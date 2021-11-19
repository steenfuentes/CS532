import React from 'react'
import GridContainer from '../../components/Grid/GridContainer';
import { Typography } from '@material-ui/core';
import Admin from '../../layouts/Admin';

function Equipment() {
    return (
        <GridContainer>
            <Typography variant="h4">Equipment Inventory and Maintenance</Typography>

        </GridContainer>
    )
}

Equipment.layout = Admin;
export default Equipment;