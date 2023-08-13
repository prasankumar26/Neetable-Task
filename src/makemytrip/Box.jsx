import React, { useEffect, useState } from 'react'

let order = 0;
let isAllClicked = false;
const Box = () => {
    const [boxState, setBoxState] = useState(getBoxes("initial"))

    useEffect(() =>{
       if(boxState.some((box) => !box.isClicked)){
        isAllClicked = false;
       } else {
        isAllClicked = true;
       }

       if(isAllClicked) {
        boxState.forEach((item, index) =>{
            return setTimeout(() => {
                let tempBox = [...boxState]
                tempBox[index].isClicked = false;
                setBoxState(tempBox)
            }, 1000 * (index + 1));
        })
       }
    }, [boxState])

    // console.log(isAllClicked, "isAllClicked");

    function getBoxes(type) {
        let boxesData = [];
        const boxes = [0,1,2].map((i) =>{
            return [0,1,2].map((j, index) =>{
                if(!(i === 1 && j > 0)){

                    if(type === 'initial'){
                      return boxesData.push(
                        {i, j, isClicked:false, order:null})
                    }

                    return <div 
                    style={{backgroundColor: boxState.find((item) => item.i === i && item.j === j)?.isClicked && 'green'}}
                    className="box" 
                    key={index} 
                    onClick={()=> changeColor(i, j)}>
                    </div>
                } else {
                   return <div key={index}></div>
                }
            })
        })
        if(type === 'initial'){
            return boxesData
        }
        return boxes;
    }

    // changeColor 
    const changeColor = (i, j) =>{
        let temp = [...boxState]
        const selectBox = temp.find((item) => item.i === i && item.j === j)
        selectBox.isClicked = true;
        selectBox.order = ++order;
        temp.sort((a,b)=> a.order - b.order)
        setBoxState(temp)
    }

    // console.log(boxState, "boxState");

  return (
    <div style={{backgroundColor: 'rgb(166 160 160 / 9%)'}}>
       <div className="row" style={{height: '100vh'}}>
        <div className="d-flex justify-content-center align-items-center">
       <div className='box-container'>
        {getBoxes()}
        </div>
        </div>
       </div>
    </div>
  )
}

export default Box


// Reference Video 
// https://www.youtube.com/watch?v=HPnGF2qIwWQ