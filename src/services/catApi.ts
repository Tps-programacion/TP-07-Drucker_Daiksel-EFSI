import axios from "axios";

// Exportamos la interfaz (Nombrada) para poder usarla como tipo en App.tsx
export interface CatImage {
  id: string;
  url: string;
}

// Exportamos la función (Nombrada)
export async function getCats(): Promise<CatImage[]> {
  // Acá le decimos a Axios que lo que va a recibir (la respuesta) es un array de CatImage
  const response = await axios.get<CatImage[]>(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  return response.data;
}