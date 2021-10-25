import * as React from 'react';
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'



export default function ButtonAppBar() {
    return (
        <AppBar position="inherit">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>

                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    BSEG
                </Typography>
                <Link href='/login'>
                    <Button color="inherit">
                        <Typography variant="h6">
                            Login
                        </Typography></Button></Link>
                <Button color="inherit">
                    <Typography variant="h6">
                        Register
                    </Typography></Button>
            </Toolbar>
        </AppBar>
    );
}