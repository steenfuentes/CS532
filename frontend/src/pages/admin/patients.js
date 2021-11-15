import React from 'react'
import GridContainer from '../../components/Grid/GridContainer';
import Admin from '../../layouts/Admin';

function Patient() {
    return (
        <GridContainer>
            Patients
        </GridContainer>
    )
}

Patient.layout = Admin;
export default Patient;