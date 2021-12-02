import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from '../../components/Forms/UseForm';
//import * as employeeService from "../../services/employeeService";


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
        if ('equipmentType' in fieldValues)
            temp.equipmentType = fieldValues.equipmentType ? "" : "This field is required."
        if ('equipmentDescription' in fieldValues)
            temp.equipmentDescription = fieldValues.equipmentDescription ? "" : "This field is required."
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
                        name="ownStatus"
                        label="Status"
                        value={values.ownStatus}
                        onChange={handleInputChange}
                        items={ownedItems}
                    />
                    <Controls.DatePicker
                        name="purchaseDate"
                        label="Purchase Date"
                        value={values.purchaseDate}
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