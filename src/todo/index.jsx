import React, { useEffect, useState } from 'react'


// addListToLocalStorage 
const addListToLocalStorage = (liststorage) => {
localStorage.setItem('liststorage', JSON.stringify(liststorage));
};


// removeTodoFromLocalStorage 
const removeTodoFromLocalStorage = (id) => {
const storedList = JSON.parse(localStorage.getItem('liststorage')) || [];
const updatedList = storedList.filter(item => item.id !== id);
localStorage.setItem('liststorage', JSON.stringify(updatedList));
};


// getUserFromLocalStorage  
export const getUserFromLocalStorage = () => {
    const storedList = JSON.parse(localStorage.getItem('liststorage')) || [];

    return storedList
}
  
  

let nextId = 1;
const Todo = () => {

    const initialState = {
        name: '',
        number: '',
        address:{
            city: '',
            pincode: '',
        }
    }

    const [values, setValues] = useState(initialState)
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)

    const handleChange = (e) =>{
       const {name, value} = e.target;
       if(name.startsWith('address.')){
          const addresField = name.split('.')[1]
          setValues((prevValues) => ({
            ...prevValues,
            address: {
                ...prevValues.address,
                [addresField]: value
            }
          }))
       } else {
        setValues((prevValues) =>({
            ...prevValues,
            [name]: value
        }))
       }
    }

    const handleSubmit = (e) =>{
       e.preventDefault()

       if(editId !== null){
        const updateTodo = list.map((item) => {
            if(item.id === editId){
                return {...item, ...values} 
            } else{
                return item
            }
        })
        setList(updateTodo)
        setEditId(null)
       } else{
        // Retrieve existing list from local storage
        const result = getUserFromLocalStorage()

        // add Todo
        const listItem = {id: nextId++, ...values}
        addListToLocalStorage([...result, listItem]);
        setList([...result, listItem]) 
       }

   // Clear values
   setValues({
    ...initialState,
    address:{
        ...initialState.address,
    }
    })
    }


    // local storage 
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('liststorage')) || [];
        setList(storedList);
    }, []);


    // handleDelete 
    const handleDelete = (id) =>{
        removeTodoFromLocalStorage(id);
        setList(list.filter((item) => item.id !== id))
    } 

    // handleEdit 
    const handleEdit = (item) =>{
        setEditId(item.id)
        setValues({
            name: item.name, 
            number: item.number,
            address:{
                city: item.address.city, 
                pincode: item.address.pincode
            }
        })
    }

 
  return (
    <div className="container my-5">
       <h4 className='mb-3 text-uppercase'>Add Todo {editId}</h4>
       <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className='form-control mb-3' 
            placeholder='Enter Name'
            name="name"
            value={values.name}
            onChange={handleChange}
            />
            <input 
            type="number"
            placeholder='Enter Number'
            className='form-control mb-3'
            name="number"
            value={values.number}
            onChange={handleChange}
            />
            <input 
            type="name"
            placeholder='Enter City'
            className='form-control mb-3'
            name="address.city"
            value={values.address.city}
            onChange={handleChange}
            />
            <input 
            type="number"
            placeholder='Enter Pincode'
            className='form-control mb-2'
            name="address.pincode"
            value={values.address.pincode}
            onChange={handleChange}
            />
            <button type='submit' className='btn btn-danger mt-2' 
            disabled={!values.name || !values.number || !values.address.city || !values.address.pincode}>
              {editId ? 'Update' : 'Submit'}
            </button>
       </form>    
       {/* list */}
       <div className="row">
        {list.map((item) =>{
            return(
            <div className="col-lg-4" key={item.id}>
            <div className='card px-3 mt-3'>
               <div className="d-flex justify-content-between pt-3">
               <p>Name: {item.name}</p>
               <p>Number: {item.number}</p>
               </div>
               <div className="d-flex justify-content-between pt-3">
               <p>Location: {item.address.city}</p>
               <p>Pincode: {item.address.pincode}</p>
               </div>
               <div className="d-flex justify-content-between pt-3">
               {editId ? <button type='submit' className="btn btn-success" 
               onClick={handleSubmit}>
                Update
               </button> : 
               <button className="btn btn-success" 
               onClick={()=> handleEdit(item)}>
                Edit
               </button>
               }
               <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
               </div>
            </div>
        </div>
        )
       })}
       </div>
    </div>
  )
}

export default Todo