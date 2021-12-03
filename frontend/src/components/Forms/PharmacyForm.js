import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from '../../components/Forms/UseForm';
import { Typography } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';

const testTypes = [
    { id: 'CBC', title: 'add link to medications database here' },
]

const initialFValues = {
    patientId: '',
    medication: '',
    pharmacist: '',
    dosage: '',
    orderDate: new Date(),
    pickupDate: new Date(),
    filledDate: new Date(),
}

export default function LabOrderForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            //employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
            <Form onSubmit={handleSubmit}>
                <GridContainer>
                    <Grid item xs={6}>
                        <Controls.Input
                            name="patientId"
                            label="Patient ID"
                            value={values.patientId}
                            onChange={handleInputChange}
                            error={errors.patientId}
                        />
                        <Controls.Input
                            name="pharmacist"
                            label="Pharmacist"
                            value={values.pharmacist}
                            onChange={handleInputChange}
                            error={errors.pharmacist}
                        />
                        <Controls.Select
                            name="medication"
                            label="Medication(s)"
                            value={values.medication}
                            onChange={handleInputChange}
                            items={testTypes}
                        />
                        <Controls.Input
                            name="dosage"
                            label="Dosage"
                            value={values.dosage}
                            onChange={handleInputChange}
                            error={errors.dosage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.DatePicker
                            name="orderDate"
                            label="Order Date"
                            value={values.orderDate}
                            onChange={handleInputChange}
                        />
                        <Controls.DatePicker
                            name="pickupDate"
                            label="Pickup Date"
                            value={values.pickupDate}
                            onChange={handleInputChange}
                        />
                        <Controls.DatePicker
                            name="filledDate"
                            label="Filled Date"
                            value={values.filledDate}
                            onChange={handleInputChange}
                        />
                        <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                    </Grid>
                </GridContainer>
            </Form>
    )}