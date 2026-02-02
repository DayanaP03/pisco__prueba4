import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
      Bienvenido a la Gestión de Inventario
      </Typography>
       
      <Typography color="text.secondary">
      Consulta, registra y realiza cálculos sobre los productos del inventario.
      </Typography>

          
    
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscE0mhRWoPn-6pM47xzqB1x53MYMbdo2QEg&s"></img>
 
    
        
    
      <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography color="text.secondary">
      Listado de Productos
      Ahora se llena dinámicamente con personajes de Dragon Ball (con fotos).
      </Typography> 
      </Paper>
      <br></br>



      <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography color="text.secondary">
       Registrar Producto
        Agrega nuevos productos (locales) al arreglo.
      </Typography>
      <br></br>
    </Paper>

    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography color="text.secondary">
       Cálculos de Inventario
        Calcula valores comerciales básicos.
      </Typography>
      </Paper>
      <br></br>


      
    </Paper>
  );
}


