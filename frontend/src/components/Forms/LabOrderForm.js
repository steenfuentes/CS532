import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from '../../components/Forms/UseForm';
import { Typography } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';

const testTypes = [
    { id: 'CBC', title: 'Complete Blood Count' },
    { id: 'WBC', title: 'White Blood Cell Count' },
    { id: 'hCG', title: 'Pregnancy Test' },
    { id: 'GGT', title: 'Gamma-glutamyl Transferase Print' },
    { id: 'FE', title: 'Iron Test' },
    { id: 'CRP', title: 'C-reactive Protein Test' },
    { id: 'PT', title: 'Prothrombin Time' },
    { id: 'BMP', title: 'Basic Metabolic Panel' },
    { id: 'CMP', title: 'Comprehensive Metabolic Panel' },
    { id: 'LP', title: 'Lipid Panel' },
    { id: 'HP', title: 'Liver panel' },
    { id: 'TSH', title: 'Thyroid Stimulating Hormone' },
    { id: 'HA1C', title: 'Hemoglobin A1C' },
    { id: 'U', title: 'Urinalysis' },
    { id: 'C', title: 'Cultures' }
]

const initialFValues = {
    id: 0,
    testType: '',
    patientId: '',
    physicanId: '',
    datePerformed: new Date(),
    performedBy: '',
    results: ''
}

export default function EmployeeForm() {

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
                <Grid item xs={12}>
                    <Controls.Select
                        label="Test Type"
                        name="testType"
                        value={values.testType}
                        onChange={handleInputChange}
                        items={testTypes}
                    />
                    <Controls.Input
                        label="Patient ID"
                        name="patientId"
                        value={values.patientId}
                        onChange={handleInputChange}
                        error={errors.patientId}
                    />
                    <Controls.Input
                        label="Physican ID"
                        name="physicanId"
                        value={values.physicanId}
                        onChange={handleInputChange}
                        error={errors.physicanId}
                    />
                    <Controls.DatePicker
                        name="datePerformed"
                        label="Date Performed"
                        value={values.datePerformed}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="PerformedBy"
                        name="performedBy"
                        value={values.performedBy}
                        onChange={handleInputChange}
                        error={errors.performedBy}
                    />
                    <Controls.Input
                        label="Results"
                        name="results"
                        value={values.results}
                        onChange={handleInputChange}
                        error={errors.results}
                    />
                </Grid>
            </Form>
    )}