import React from "react";
import './index.css';
import Hotel from "./Hotel";
import HotelData from "./HotelData";
const App=()=>{
    return(
        <>
            <div className="container">
                <h1 className="heading">Hotel Rooms</h1>
                {HotelData.map((values)=>{
                    return(
                        <>
                            <Hotel
                            key={values.id}
                            img={values.imgsrc}
                            titles={values.title}
                            texts={values.text}
                            btnTexts={values.btnText}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default App;