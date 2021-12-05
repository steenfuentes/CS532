import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from '../../components/Forms/UseForm';
//import * as employeeService from "../../services/employeeService";

const initialFValues = {
    brandName: '',
    referenceStandard: '',
    dosageForm: '',
    route: '',
    marketingStatus: '',
    medicineStock: '',
}

export default function EquipmentForm() {

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
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Brand Name"
                        name="brandName"
                        value={values.brandName}
                        onChange={handleInputChange}
                        error={errors.brandName}
                    />
                    <Controls.Input
                        label="Reference Standard"
                        name="referenceStandard"
                        value={values.referenceStandard}
                        onChange={handleInputChange}
                        error={errors.referenceStandard}
                    />
                    <Controls.Input
                        label="Dosage Form"
                        name="dosageForm"
                        value={values.dosageForm}
                        onChange={handleInputChange}
                        error={errors.dosageForm}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Route"
                        name="route"
                        value={values.route}
                        onChange={handleInputChange}
                        error={errors.route}
                    />
                    <Controls.Input
                        label="Marketing Status"
                        name="marketingStatus"
                        value={values.marketingStatus}
                        onChange={handleInputChange}
                        error={errors.marketingStatus}
                    />
                    <Controls.Input
                        label="Medicine Stock"
                        name="medicineStock"
                        value={values.medicineStock}
                        onChange={handleInputChange}
                        error={errors.medicineStock}
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