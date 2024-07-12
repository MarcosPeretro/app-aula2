import { useEffect, useState } from "react"


const linha = (item:any) =>{
    return(
        <tr>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.email}</td>
        </tr>
    )
}

export default function Consulta(){
    const[contatos,setContatos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/contatos")
        .then(response => response.json())
        .then(dados => setContatos(dados))
        .catch(error => alert(error))
    },[])
    
    return(
        <div>
            <h2>Lista de contatos</h2>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        contatos.map(ct => linha(ct))
                    }
                </tbody>
            </table>
        </div>
    )
}