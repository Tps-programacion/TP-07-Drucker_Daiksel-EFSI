import "./PostCard.css";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

// 1. Definimos el contrato: qué información NECESITA esta tarjeta para funcionar
interface PostCardProps {
    image: string;
    username: string;
    fotoPerfil: string;
    caption: string;
    likes: number;
}

// 2. Desestructuramos las variables directamente en los parámetros
function PostCard({ image, username, fotoPerfil, caption, likes }: PostCardProps) {
    return (
        <div className="post-card">
            <div className="post-header">
                <img
                    className="profile-pic"
                    src={fotoPerfil} // Ya no hace falta usar "props.fotoPerfil"
                    alt="perfil"
                />
                <span className="username">
                    {username}
                </span>
            </div>

            <img
                className="post-image"
                src={image}
                alt="gato"
            />

            <div className="post-actions">
                <div className="left-actions">
                    <FaRegHeart />
                    <FaRegComment />
                    <FiSend />
                </div>
                <FaRegBookmark />
            </div>

            <p className="likes">
                {likes} likes
            </p>

            <p className="caption">
                <strong>{username}</strong> {caption}
            </p>
        </div>
    );
}

export default PostCard;