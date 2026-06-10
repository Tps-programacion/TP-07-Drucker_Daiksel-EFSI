import "./PostCard.css";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function PostCard(props) {

    return (

        <div className="post-card">

            <div className="post-header">

                <img
                    className="profile-pic"
                    src={props.fotoPerfil}
                    alt="perfil"
                />

                <span className="username">
                    {props.username}
                </span>

            </div>

            <img
                className="post-image"
                src={props.image}
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
                {props.likes} likes
            </p>

            <p className="caption">
                <strong>{props.username}</strong> {props.caption}
            </p>

        </div>

    );
}

export default PostCard;