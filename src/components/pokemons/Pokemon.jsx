import React, { memo } from "react";

const Pokemon = ({ id, name, img, type, likes, onLike }) => {

    console.log("Render:", name); // Para demostrar optimización

    return (
        <div className="col-lg-4">
            <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                    
                    <div className="thumb-lg member-thumb mx-auto">
                        <img
                            src={img}
                            className="rounded-circle img-thumbnail"
                            alt={name}
                        />
                    </div>

                    <div>
                        <h4>{name}</h4>
                        <p className="text-muted">{type}</p>

                        <p>❤️ Likes: {likes}</p>

                        <button 
                            className="btn btn-danger"
                            onClick={() => onLike(id)}
                        >
                            Me gusta
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default memo(Pokemon);