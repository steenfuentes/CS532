import React from 'react'
import Admin from '../../layouts/Admin';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import Tasks from '../../components/Tasks/Tasks';

import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
import PersonIcon from '@mui/icons-material/Person';
import LabForm from '../../components/Forms/LabOrderForm'

function Lab() {
    return (
        <GridContainer>
            <Typography variant="h4">Lab Order Tracking</Typography>
            <LabForm/>
        </GridContainer>
    )
}

Lab.layout = Admin;
export default Lab
