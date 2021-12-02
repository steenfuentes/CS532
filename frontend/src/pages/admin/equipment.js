import React from 'react'
import GridContainer from '../../components/Grid/GridContainer';
import { Typography } from '@material-ui/core';
import Admin from '../../layouts/Admin';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

function Equipment() {
    return (
        <GridContainer>
            <Typography variant="h4">Equipment Inventory and Maintenance</Typography>
        </GridContainer>
    )
}

Equipment.layout = Admin;
export default Equipment;
