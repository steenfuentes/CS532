import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from '../../components/Forms/UseForm';
import { Typography } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';

const initialFValues = {
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    address: '',
    appointments: '',
    labOrders: '',
}

export default function LabOrderForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
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
                            name="firstName"
                            label="First Name"
                            value={values.firstName}
                            onChange={handleInputChange}
                            error={errors.firstName}
                        />
                        <Controls.Input
                            name="lastName"
                            label="Last Name"
                            value={values.lastName}
                            onChange={handleInputChange}
                            error={errors.lastName}
                        />
                        <Controls.Input
                            name="number"
                            label="Mobile"
                            value={values.number}
                            onChange={handleInputChange}
                            error={errors.number}
                        />
                        <Controls.Input
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.Input
                            name="appointments"
                            label="Appointments"
                            value={values.appointments}
                            onChange={handleInputChange}
                            error={errors.appointments}
                        />
                        <Controls.Input
                            name="labOrders"
                            label="Lab Orders"
                            value={values.labOrders}
                            onChange={handleInputChange}
                            error={errors.labOrders}
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