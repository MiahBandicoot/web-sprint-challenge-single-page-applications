import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as yup from 'yup'
import formschema from './formschema'
// import {Link, useHistory} from 'react-router-dom'

const initial = {
    name:'',
    toppings:{
        Pepperoni:false,
        Pineapple:false,
        Bacon:false,
        Mushrooms:false,
    },
    specInst:'',
    size:'',
}
const errors = {
    name:'',
    size:'',
}

const Form = (props) =>{
    const [content, setContent] = useState(initial)
    const [contentError,setContentError] = useState(errors)
    const [disb,setdisb] = useState(true)

    function handleC(event){
        const {name,value} = event.target
            yup
            .reach(formschema,name)
            .validate(value)
            .then(valid => {
                setContentError({
                    ...contentError, 
                    [name]:'',
                })
                
            })
            .catch(error => {
                setContentError({
                    ...contentError,
                    [name]:error.errors[0]
                })
            })
    
            setContent({
                ...content,
                [name]:value,
            })
        }
    
        function handleBox(event){
            const {name, checked} = event.target
            setContent({
                ...content,
                toppings:{
                    ...content.toppings,
                   [name]:checked, 
                }
                
            })
        }
    function Submit(event){
        event.preventDefault()
        const newOrder = {
            name:content.name.trim(),
            specInst:content.specInst.trim(),
            size:content.size,
            toppings:Object.keys(content.toppings).filter(top=>content.toppings[top])
        }
        if(!newOrder.name||!newOrder.specInst)
        {return}
        postOrder(newOrder)
        setContent(initial)
    }
    const postOrder = (useOrder) => {
        axios.post('https://reqres.in/api/users',useOrder)
        .then(response => {
            console.log(response.data)
            
        })
        }
        useEffect(()=>{
            formschema.isValid(content)
            .then(valid =>{
                setdisb(!valid)
            })
        })
    return(
        <form onSubmit = {Submit}>
            <input
            name = 'name'
            type = 'text'
            placeholder = 'Enter Name'
            value = {content.name}
            onChange = {handleC}
            />
            <div>
            <input
            name = 'Pepperoni'
            type = 'checkbox'
            checked = {content.toppings.Pepperoni === true}
            onChange = {handleBox}
            />
            <label for = 'toppings'>Pepperoni</label>
            <input
            name = 'Pineapple'
            type = 'checkbox'
            checked = {content.toppings.Pineapple === true}
            onChange = {handleBox}
            />
            <label for = 'toppings'>Pineapple</label>
            <input
            name = 'Bacon'
            type = 'checkbox'
            checked = {content.toppings.Bacon === true}
            onChange = {handleBox}
            />
            <label for = 'toppings'>Bacon</label>
            <input
            name = 'Mushrooms'
            type = 'checkbox'
            checked = {content.toppings.Mushrooms === true}
            onChange = {handleBox}
            />
            <label for = 'toppings'>Mushrooms</label>
            </div>
            <input
            name = 'specInst'
            type = 'text'
            placeholder = 'Special instructions'
            value = {content.specInst}
            onChange = {handleC}
            />
            <select
            name = 'size'
            value = {content.size}
            onChange = {handleC}
            >
                <option value = ''>Select a Size</option>
                <option value = '12"'>12"</option>
                <option value = '16"'>16"</option>
                <option value = '24"'>24"</option>
            </select>
            <div>
                <button disabled = {disb} type = 'submit'>Add to Order</button>
            </div>
            <div>
                {contentError.name}
                {contentError.size}
            </div>
        </form>
)
}

export default Form;