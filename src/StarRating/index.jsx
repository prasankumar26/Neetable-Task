import React, { useState } from 'react'

const StarRating = () => {

    const [starCount, setStarCount] = useState(0)
    const [hoverStar, setHoverStar] = useState(0)

  return (
    <div className='container my-5'>
     <div className="row ">
        <div className="card d-flex flex-column justify-content-center align-items-center" style={{height: '90vh', overflowY: 'hidden'}}>
        <h1 className='text-uppercase'>Star Rating</h1>
          <div className="stars">
    {[...Array(5)].map((_, index) =>{
        let holy = ""
        console.log(holy, "holy");
        if(starCount <= 2){
            holy = "yellow"
        } else if (starCount <= 4){
            holy = "red"
        } else if(starCount <=5){
            holy = "green"
        } 
        return <span 
        className={`${index+1 <= starCount ? holy : ''} 
        ${index+1 <= hoverStar ? holy : ''}`}
        onMouseOver={()=>{
            setHoverStar(index+1)
        }}
        onMouseOut={()=>{
            setHoverStar(0)
        }}
        onClick={() =>{
            setStarCount(index + 1)
        }}
        key={index}
        >&#9733;</span>
    })}
          </div>
          <div className="count mt-4">
            <h4>Total Count: {hoverStar ? hoverStar :starCount}</h4>
          </div>
          </div>
     </div>
    </div>
  )
}

export default StarRating