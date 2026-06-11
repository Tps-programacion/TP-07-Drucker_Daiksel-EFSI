import { useEffect, useState } from 'react'
import type { Usuarios } from './types/Usuario.ts';
import type { Post } from './types/Post.ts';
import StoryBar from './components/historias/storyBar/StoryBar';
import './App.css'
import Nav from "./components/nav/Nav";
import Feed from "./components/feed/Feed";
import users from "./data/users"; 
import descs from "./data/descs";
import {getCats}  from './services/catApi.ts';
import type {CatImage} from "./services/catApi.ts"

function App() {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    function getUsers (){
      const usuariosParaHistorias: Usuarios[] = users.map((user, index) => ({
      id: index.toString(),
      username: user.username,
      fotoPerfil: user.fotoPerfil
    }));
    return usuariosParaHistorias
  }
    
   async function fetchAndSetPosts(usuariosParaHistorias : Usuarios[]) {
      try {
        const data = await getCats();
        const postsGenerados: Post[] = data.map((cat: CatImage) => {
          
          const randomIndexUser = Math.floor(Math.random() * usuariosParaHistorias.length);
          const randomUser = usuariosParaHistorias[randomIndexUser];
          
          const randomIndexDesc = Math.floor(Math.random() * descs.length);
          const randomDesc = descs[randomIndexDesc];

          return {
            id: cat.id,
            url: cat.url, 
            usuario: randomUser, 
            caption: randomDesc,
            likes: Math.floor(Math.random() * 5000) + 100
          };
        });

        //Guardamos los posts listos en el estado directamente acá
        setPosts(postsGenerados);

      } catch (error) {
        console.error("Error al traer los gatos para los posts:", error);
      }
    }
    const usuariosListos = getUsers();
    setUsuarios(usuariosListos); // Guardamos en el estado para que se dibujen las historias
    fetchAndSetPosts(usuariosListos);
    
  }, []);

  return (
    <div className="app"> {/* Aseguramos un contenedor general */}
      <Nav />

      <main className="main-content">
        <div className="feed-and-suggestions-wrapper">
          
          {/* LADO IZQUIERDO: Historias y Feed */}
          <div className="feed-container">
            <StoryBar usuarioStory={usuarios} />
            <Feed posts={posts}/>
          </div>

          {/* LADO DERECHO: El hueco perfecto para tu próximo componente */}
          <div className="right-sidebar-placeholder">
             {/* Cuando crees el componente nuevo, lo vas a poner acá */}
          </div>

        </div>
      </main>
    </div>
  )
}

export default App;