import type { Usuarios } from "./Usuario";

export interface Post {
  id: string;
  url: string;           // La imagen del gato que viene de la API
  usuario: Usuarios;      // El usuario random que se le asignó
  caption: string;       // La descripción random
  likes: number;         // Los likes random
}