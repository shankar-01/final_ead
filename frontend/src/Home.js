import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function(props){
    const [receipes, setReceipes] = useState(null)
    useMemo(async()=>{
        const data = await fetch('http://localhost:4000/receipes').then(data=>data.json())
        setReceipes(data)
        console.log(data)
    }, [props])
    return receipes&&RenderReceipes(receipes)
}
function RenderReceipes(arr){
    return <table>
        <tbody>
            <tr>
                <th>
                    title
                </th>
                <th>
                    description
                </th>
                <th>
                    thumbnail
                </th>
            </tr>
            {arr.map((receipe)=><tr>
                <td><Link to={`/receipe/${receipe._id}`}>{receipe.title}</Link></td>
                <td>{receipe.description}</td>
                <td><img src={`http://localhost:4000/uploads/${receipe.image}`} width="20px"/></td>
                <td><a href={`http://localhost:4000/deleteReceipe/${receipe._id}`}>delete</a></td>
                <td><Link to={`/update/${receipe._id}`}>update</Link></td>
            </tr>)}
        </tbody>
    </table>
}