import React from 'react'
import GridContainer from '../../components/Grid/GridContainer'
import { Typography } from '@material-ui/core';
import PharmacyForm from '../../components/Forms/PharmacyForm'


import Admin from '../../layouts/Admin';

function Pharmacy() {
    return (
        <div>
            <GridContainer>
                <Typography variant="h4">Pharmacy Order Tracking</Typography>
                <PharmacyForm/>
            </GridContainer>

        </div>
    )
}

Pharmacy.layout = Admin;
export default Pharmacy;
