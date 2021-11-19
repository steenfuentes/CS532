import React from 'react'
import GridContainer from '../../components/Grid/GridContainer'
import { Typography } from '@material-ui/core';


import Admin from '../../layouts/Admin';

function Pharmacy() {
    return (
        <div>
            <GridContainer>
                <Typography variant="h4">Pharmacy Order Tracking</Typography>

            </GridContainer>

        </div>
    )
}

Pharmacy.layout = Admin;
export default Pharmacy;