import React from 'react'
import { useState,useReducer } from 'react'

export default function Form() {
    const inputvalue = (state,action) =>{
        switch (action.type){
            case "first":
                return state = [...state,action.payload]
            case "scond":
                return state = [...state,action.payload]
        }
    }

   const [state,dispatch] = useReducer(inputvalue, '') 
  return (
    <div>
        <form>
            <h2>{state}</h2>
            <h2>{state}</h2>
            <input type="text" name="First Name" onChange={(e)=>dispatch({type:"first",payload:e.target.value})}/>
            <input type="text" name="Last Name" onChange={(e)=>dispatch({type:"scond",payload:e.target.value})}/>
        </form>
    </div>
  )

}
