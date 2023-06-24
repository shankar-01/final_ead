import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"

export default function(){
    const {_id} = useParams()
    const [receipe, setReceipe] = useState(null)
    useMemo(async()=>{
        const data = await fetch(`http://localhost:4000/receipe/${_id}`).then(data=>data.json());
        setReceipe(data)
    }, [])
    return <>
        <p>
            {JSON.stringify(receipe)}
        </p>
    </>
}