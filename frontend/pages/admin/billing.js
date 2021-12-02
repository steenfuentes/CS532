import React from 'react'
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import { Typography } from '@material-ui/core';


import Admin from '../../layouts/Admin';

function Billing() {
    return (
        <div>
            <GridContainer>
                <Typography variant="h4">Insurance Billing</Typography>


            </GridContainer>

        </div>
    )
}

Billing.layout = Admin;
export default Billing;
