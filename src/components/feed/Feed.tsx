import { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import { getCats } from "../../services/catApi";
import users from "../../data/users";
import  descs  from "../../data/descs";

function Feed() {

    const [cats, setCats] = useState([]);

    useEffect(() => {

        async function loadCats() {

            const data = await getCats();

            const posts = data.map((cat) => {

                const randomUser =
                    users[Math.floor(Math.random() * users.length)];

                const randomDesc =
                    descs[Math.floor(Math.random() * descs.length)];

                return {
                    ...cat,
                    username: randomUser.username,
                    fotoPerfil: randomUser.fotoPerfil,
                    caption: randomDesc,
                    likes: Math.floor(Math.random() * 5000) + 100
                };
            });

            setCats(posts);
        }

        loadCats();

    }, []);

    return (
        <div className="feed">

            {cats.map((cat) => (

                <PostCard
                    key={cat.id}
                    image={cat.url}
                    username={cat.username}
                    fotoPerfil={cat.fotoPerfil}
                    caption={cat.caption}
                    likes={cat.likes}
                />

            ))}

        </div>
    );
}

export default Feed;