import { useMemo, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

export default function Calculos() {
  const [a, setA] = useState("");
  const [b, setB] = useState();

  const result = useMemo(() => a * b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Cálculos de Inventario
      </Typography>

      <Typography variant="h9" fontWeight={900} gutterBottom>
      1. Valor Total de un Producto
      </Typography>
      <br></br>

      <TextField
        label="Precio Unitario:"
        type="sting"
        value={a}
        onChange={(e) => setA((e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
    <br></br>
      <TextField
        label="Cantidad en Stock:"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
      <br></br>

<Button>Calcular Valor total </Button>

<br></br> <br></br>
<Typography variant="h9" fontWeight={900} gutterBottom>
    2. Calcular IVA (12%)
      </Typography>
      <br></br>

      <TextField
        label="Precio del Producto:"
        type="sting"
        value={a}
        onChange={(e) => setA((e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
    <br></br>
    <Button>Calcular Iva  </Button>



    <br></br> <br></br>
<Typography variant="h9" fontWeight={900} gutterBottom>
3. Calcular Precio con Descuento
      </Typography>
      <br></br>

      <TextField
        label="Precio Original:"
        type="sting"
        value={a}
        onChange={(e) => setA((e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <br></br>
      <TextField
        label="Porcentaje de Descuento:"
        type="sting"
        value={a}
        onChange={(e) => setA((e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
    <br></br>
    <Button>  Calcular Precio Final  </Button>
    </Paper>

    
  );
}