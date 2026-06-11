// Ya no necesitamos importar hooks de React ni archivos de datos
import PostCard from "../postCard/PostCard";
import type { Post } from "../../types/Post";

// 1. Definimos claramente qué recibe el componente
interface FeedProps {
  posts: Post[];
}

// 2. Destructuramos 'posts' y le asignamos la interfaz FeedProps
function Feed({ posts }: FeedProps) {
  
  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          image={post.url} // Usamos la url de la imagen del gato
          username={post.usuario.username} // Entramos al objeto usuario
          fotoPerfil={post.usuario.fotoPerfil} // Entramos al objeto usuario
          caption={post.caption}
          likes={post.likes}
        />
      ))}
    </div>
  );
}

export default Feed;