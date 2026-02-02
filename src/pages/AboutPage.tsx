import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Información del Sistema
      </Typography>

      <Typography color="text.secondary">
      Este sistema permite gestionar productos y realizar cálculos básicos como valor total, IVA y descuentos. En la sección “Productos”, se consume una API pública de Dragon Ball que incluye imágenes en el campo image.

        Detalle didáctico: El listado trabaja con paginación (page/limit), manejo de errores y renderizado dinámico. Luego puedes pedir a los estudiantes que migren esta lógica a React usando estado y efectos.
      </Typography>


      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOYikvxPTxHRR9c9PZioMcauVA3w3dCtxcA&s"></img>

    </Paper>
  );
}
