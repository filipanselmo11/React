import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardFoto from "../components/CardFoto";

const cards = [1,2,3,4,5,6,7,8,9];

export default function ListaFotos() {
    return(
        <main>
            <Box>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Lista de Fotos
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <CardFoto
                                titulo={"titulo"}
                                imagem={"imagem"}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}