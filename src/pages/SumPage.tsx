import { useMemo, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

export default function SumPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const result = useMemo(() => a + b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Registrar Nuevo Producto (local)
      </Typography>

      <TextField
        label="Nombre "
        type="string"
        value={a}
        onChange={(e) => setB((e.target.value))}
        sx={{ mb: 2 }}

      />
      <br></br>

      <TextField
        label="Precio"
        type="string"
        value={b}
        onChange={(e) => setB((e.target.value))}
        sx={{ mb: 2 }}
      />

      <br></br>

      <TextField
        label="Stock"
        type="string"
        value={b}
        onChange={(e) => setB((e.target.value))}
        sx={{ mb: 2 }}
      />
      <br></br>
 

 <Button>resultado</Button>
   
      

    
    </Paper>
  );
}