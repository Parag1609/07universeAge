import { useEffect,useState } from "react"

export default function get_date(){
    const[date,setdate]=useState(new Date())
    
    /* console.log(date);
    console.log(date.getFullYear())
    console.log(date.getMonth()+1)
    console.log(date.getDate()) */
    return date
}