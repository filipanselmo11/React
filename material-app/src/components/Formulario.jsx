import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Formulario () {
    return(
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Nome"
                    defaultVlue="Hello World"
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Deafault Value"
                    helperText="Some important text"
                />
            </div>
            <div>
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
            </div>
        </Box>
    );
}