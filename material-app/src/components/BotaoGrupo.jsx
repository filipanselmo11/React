import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function BotaoGrupo() {

    const buttons = [
        <Button key="1">1</Button>,
        <Button key="2">2</Button>,
        <Button key="3">3</Button>,
    ];

    return (
        <div className="container">
            <div>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </ButtonGroup>
            </div>
            <br />
            <div>
                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </ButtonGroup>
            </div>
            <br />
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup size="small" aria-label="small button group">
                        { buttons }
                    </ButtonGroup>
                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                        { buttons }
                    </ButtonGroup>
                    <ButtonGroup size="large" aria-label="large button group">
                        { buttons }
                    </ButtonGroup>
                </Box>
            </div>
        </div>
    );
}