import React, { useEffect, useState } from 'react'
import usePasswordGenerator from './hooks/usePasswordGenerator'
import StrengthChecker from './components/StrengthChecker'

 // checkbox data 
 const checkboxdata = [
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]

const PasswordGenerator = () => {

    const [length, setLength] = useState(0)
    const [checkboxData, setCheckboxData] = useState(checkboxdata)
    const [copied, setCopied] = useState(false)

    
    const handleCheckboxChange = (index) =>{
    //   const newCheckboxData = [...checkboxData]
    //   newCheckboxData[index].state = !newCheckboxData[index].state;

    const newCheckboxData = checkboxData.map((item, i) =>{
       if(i === index){
        return {
            ...item, state: item.state= !item.state,
        }
       } else{
        return item;
       }
    })
      setCheckboxData(newCheckboxData)
    }


    // usePasswordGenerator custom hook
    const {password, errorMessage, generatePassword } = usePasswordGenerator()


    // handlecopy
    const handleCopy = () =>{
       navigator.clipboard.writeText(password)
       setCopied(true)
    }

    useEffect(() =>{
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }, [copied])
    

  return (
    <div className="container my-5">
        <div className="bg-dark p-3">
            {/* password text and copy */}
            {password &&  <div className="header d-flex justify-content-between">
            <div className="title text-white">{password}</div>
            <button className="btn bg-info" onClick={handleCopy}>
                {copied ? 'Copied' : 'Copy'}
            </button>
          </div>}
         
        {/* Character Length */}
        <div className="charLength mt-4">
            <div className='d-flex justify-content-between'>
            <label className='text-white'>Charater Length</label>
            <label className='text-white'>{length}</label>
            </div>
            <input 
            className='mt-3 w-100'
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e)=> setLength(e.target.value)}
            />
        </div>
        {/* CheckBoxes */}
         <div className="checkboxes mb-2">
        {checkboxData.map((checkbox, index) =>{
        return <div key={index} className='mt-3'> 
        <input 
        type="checkbox"
        className='form-check-input'
         checked={checkbox.state}
         onChange={()=>handleCheckboxChange(index)}
         />
        <label className='text-white ms-2'>{checkbox.title}</label>
        </div>
            })}
         </div>
        {/* Strength */}
        <StrengthChecker password={password} />

        {/* Error Handling */}
        <span className='text-danger'>{errorMessage && errorMessage}</span>

        {/* Generate Button */}
        <button 
        className="btn btn-info w-100 text-dark py-3 mt-2"
        onClick={()=> generatePassword(checkboxData, length)}
        >
            Generate Password 
        </button>
        </div>
    </div>
  )
}

export default PasswordGenerator