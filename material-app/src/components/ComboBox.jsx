import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    return (
        <Autocomplete disablePortal id="combo-box-demo"
            options={filmes}
            sx={{
                width: 300, alignItems: 'center', display: 'flex',
                flexDirection: 'column'
            }}
            renderInput={(params) => <TextField {...params} label="Filme" />} />
    );
}


const filmes = [
    { label: "The Batman" },
    { label: "The Flash" },
    { label: "Homem Aranha Sem Volta para Casa" },
    { label: "Godzilla vs Kong" },
    { label: "Venom 2: Tempo de Carnificina" },
    { label: "A Lenda de Cadman" },
    { label: "Shang Chi: A lenda dos 10 anéis" },
    { label: "Viuva Negra" },
]