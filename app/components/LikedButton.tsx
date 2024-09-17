import { Button } from "@mui/material";
import { useState } from "react";

export default function LikedButton() {
    const [liked, setLiked] = useState(false);

    const toggleLiked = () => {
        setLiked(!liked);
    }

    return(
        <Button onClick={toggleLiked}>
            {liked? "❤️" : "🤍"}
        </Button>
    );
}



