import { useEffect, useState } from 'react'
import type { Usuarios } from './components/types/Usuario';
import type { Post } from './components/types/Post';
import StoryBar from './components/historias/storyBar/StoryBar';
import './App.css'
import { catApi } from './components/services/catApi';
import Nav from "./components/nav/Nav";
import Feed from "./components/feed/Feed";
import users from "./data/users"; 
import descs from "./data/descs";

function App() {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    function getUsers () : Usuarios[]{
      const usuariosParaHistorias: Usuarios[] = users.map((user, index) => ({
      id: index.toString(),
      username: user.username,
      fotoPerfil: user.fotoPerfil
    }));

    return usuariosParaHistorias;
  }
    
    async function getPosts(usuariosParaHistorias : Usuarios[]) {
      try {
        // Llamamos a la API usando la función que tenían armada
        const data = await catApi.getCat();
        const postsGenerados: Post[] = data.map((cat: any) => {
          
          // índice al azar basado en los usuarios que ya armaste
          const randomIndexUser = Math.floor(Math.random() * usuariosParaHistorias.length);
          // Agarramos el usuario completo (que ya tiene el ID, nombre y foto)
          const randomUser = usuariosParaHistorias[randomIndexUser];
          // Elegimos una descripción al azar de tu archivo descs.js
          const randomIndexDesc = Math.floor(Math.random() * descs.length);
          const randomDesc = descs[randomIndexDesc];

          // Retornamos el objeto Post cumpliendo con la interfaz
          return {
            id: cat.id,
            url: cat.url, 
            usuario: randomUser, 
            caption: randomDesc,
            likes: Math.floor(Math.random() * 5000) + 100
          };
        });

      } catch (error) {
        console.error("Error al traer los gatos para los posts:", error);
      }
    }
    const usuariosParaHistorias = getUsers();
    setUsuarios(usuariosParaHistorias);
    const posts : Post[] = getPosts(usuariosParaHistorias);
    setPosts();
    
  }, []);

  return (
    <>
      <Nav />
      <StoryBar usuarioStory={usuarios} />

      <main className="main-content">
        <Feed />
      </main>
    </>
  )
}

export default App;