import React from "react";


function Card({Restaurants}){
    
    
    return(
        <div className="cards">
            <div className="img">

                <img
                    src={Restaurants.imageUrl}
                />
        </div>
    <div className="text"> 
    <h1>
          <h3> עיר:{Restaurants.name}</h3>  
             <br />
               {Restaurants.restaurant}
               <br />
               {Restaurants.price}
               <br />
               {Restaurants.type}
               <br/>
               <a  href="App.js"></a>
            
               <button >remov</button>
            
            
            </h1>
            </div>
                </div>
    );
}

export default Card;