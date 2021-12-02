import React from 'react'
import GridContainer from '../../components/Grid/GridContainer';
import { Typography } from '@material-ui/core';
import Admin from '../../layouts/Admin';
import EquipmentForm from '../../components/Forms/EquipmentForm'

function Equipment() {
    return (
        <GridContainer>
            <Typography variant="h4">Equipment Inventory and Maintenance</Typography>
              <EquipmentForm>
              </EquipmentForm>
        </GridContainer>
    )
}

Equipment.layout = Admin;
export default Equipment;
