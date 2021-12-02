import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from '../../components/Forms/UseForm';
import { Typography } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    address: '',
    insurance: '',
    dob: new Date(),
    gender: 'male',
    pcpId: '',
    medications: '',
    appointments: '',
    labOrders: '',
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
                        <Controls.Input
                            name="address"
                            label="Address"
                            value={values.address}
                            onChange={handleInputChange}
                            error={errors.address}
                        />
                        <Controls.Input
                            name="insurance"
                            label="Insurance"
                            value={values.insurance}
                            onChange={handleInputChange}
                            error={errors.insurance}
                        />
                        <Controls.RadioGroup
                            name="gender"
                            label="Gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.DatePicker
                            name="dob"
                            label="Date of Birth"
                            value={values.dob}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            name="pcpId"
                            label="Primary Physician ID"
                            value={values.pcpId}
                            onChange={handleInputChange}
                            error={errors.pcpId}
                        />
                        <Controls.Input
                            name="medications"
                            label="Medications"
                            value={values.medications}
                            onChange={handleInputChange}
                            error={errors.medications}
                        />
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