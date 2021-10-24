import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Botao() {
    return (
        <div className="container">
            <div>
                <Stack spacing={2} direction="row">
                    <Button variant="text">Texto</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
            </div>
            <br/>
            <div>
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => { alert('clicado') }}>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#text-buttons">Link</Button>
                </Stack>
            </div>
            <div>
                <Stack direction="row" spacing={2}>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="outlined" color="error">Error</Button>
                </Stack>
            </div>
        </div>
    );
}