import { useState, memo } from "react";

function likeButton({ name }) {
    const [likes, setLikes] = useState(0);

    console.log("Render:", name);

    return (
        <li>
        {name} ❤️ {likes}
        <button onClick={() => setLikes(likes + 1)}>
            Like
        </button>
        </li>
    );
}

export default memo(likeButton);
