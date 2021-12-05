import React from 'react'
import GridContainer from '../../components/Grid/GridContainer'
import { Typography } from '@material-ui/core';
import PhysicianForm from '../../components/Forms/PhysicianForm'


import Admin from '../../layouts/Admin';

function Billing() {
    return (
        <div>
            <GridContainer>
                <Typography variant="h4">Insurance Billing</Typography>
                <PhysicianForm/>

            </GridContainer>

        </div>
    )
}

Billing.layout = Admin;
export default Billing;
