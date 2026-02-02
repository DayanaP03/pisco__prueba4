import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function ProductsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        // Sin paginación en UI: pedimos un page_size grande y mostramos lo que venga
        const url =
          "https://dragonball-api.com/api/characters?page=1&limit=10";
        const res = await fetch(url);
        const data = await res.json();

        // La API suele devolver { count, next, previous, results: [] }
       
        const list = Array.isArray(data?.items) ? data.items : Array.isArray(data.results) ? data.results : Array.isArray(data)?data :[];

        // Agregar precio y stock simulados ya que la API de Dragon Ball no los tiene
        const listWithPriceStock = list.map((item: any) => ({
          ...item,
          price: Math.floor(Math.random() * 100) + 10, // Precio aleatorio entre 10-110
          stock: Math.floor(Math.random() * 50) + 1, // Stock aleatorio entre 1-50
        }));

        setItems(listWithPriceStock);
      } catch (e: any) {
        console.error(e);
        setError("No se pudo cargar productos (revisa consola / red).");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Productos
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 2 }}>
        API: /products/?page=1&page_size=100 (sin paginación en la interfaz)
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : items.length === 0 ? (
        <Alert severity="info">No hay productos para mostrar.</Alert>
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell >Precio</TableCell>
              <TableCell >Stock</TableCell>
              <TableCell>Foto</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((p, idx) => (
              <TableRow key={p?.id ?? idx} hover>
                <TableCell>{p?.id ?? "-"}</TableCell>
                <TableCell>{p?.name ?? "-"}</TableCell>
                <TableCell>{p.price?? "-"}</TableCell>
                <TableCell>{p.stock?? "0"}</TableCell>
        
                <TableCell>
                  {p?.url_image ? (
                    <img
                      src={p.url_image}
                      alt={p?.name ?? "producto"}
                      style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8, border: "1px solid rgba(0,0,0,.15)" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://via.placeholder.com/80?text=No+Img";
                      }}
                    />
                  ) : (
                    <span style={{ color: "#667085" }}>—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}