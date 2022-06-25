import React from "react";

const Hotel=({img,titles,texts,btnTexts})=>{
    return(
        <>
            <div className="hotelCards">
                <img src={img} alt="image1" />
                <h2 className="title">{titles}</h2>
                <p>{texts}</p>
                <div className="btn">
                     <button>{btnTexts}</button>
                </div>
            </div>
        </>
    )
}
export default Hotel;