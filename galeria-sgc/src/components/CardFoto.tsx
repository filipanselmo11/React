import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  titulo: string;
  imagem: string;
}

export default function CardFoto(props: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <CardMedia component="img" image={props.imagem} alt="foto"/>
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
                {props.titulo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Ver Foto</Button>
        </CardActions>
    </Card>
  );
}
