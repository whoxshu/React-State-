import { useState } from "react";

export default function LikeButton(){
    let [isLiked , setIsLiked] = useState(false);
    let toggleLike = () =>{
        setIsLiked(!isLiked);
    };

    let likeStyles ={
        color: "red"
    }

    return(
        <div>
            <p onClick={toggleLike}>
                {isLiked ?(
                    <i className="fa-solid fa-heart" style = {likeStyles}></i>
                ):(
                    <i className="fa-regular fa-heart"></i>
                )}

            </p>
        </div>
    )
}