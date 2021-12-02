import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";


const ownedItems = [
    { id: 'owned', title: 'Owned' },
    { id: 'leased', title: 'Leased' },
]

const departmentOptions = [
    {id: 'MD', title: 'Medical Department'},
    {id: 'LD', title: 'Lab Department'},
    {id: 'PD', title: 'Pharmacy Department'},
    {id: 'AD', title: 'Admin Department'},

]

const initialFValues = {
    equipmentId: 0,
    equipmentType: '',
    equipmentDescription: '',
    department: '',
    ownStatus: 'Owned',
    purchaseDate: new Date()
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
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
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Equipment Type"
                        name="equipmentType"
                        value={values.equipmentType}
                        onChange={handleInputChange}
                        error={errors.equipmentType}
                    />
                    <Controls.Input
                        label="Equipment Description"
                        name="equipmentDescription"
                        value={values.equipmentDescription}
                        onChange={handleInputChange}
                        error={errors.equipmentDescription}
                    />
                    <Controls.RadioGroup
                        name="department"
                        label="department"
                        value={values.department}
                        onChange={handleInputChange}
                        items={departmentOptions}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="ownedStatus"
                        label="Status"
                        value={values.ownStatus}
                        onChange={handleInputChange}
                        items={ownedItems}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
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
            </Grid>
        </Form>
    )
}