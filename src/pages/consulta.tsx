import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const linha = (item: any) => {
    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.email}</td>
        </tr>
    )
}

export default function Consulta() {
    const [contatos, setContatos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/contatos")
            .then(response => response.json())
            .then(dados => setContatos(dados))
            .catch(error => alert(error))
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">Lista de contatos</h2>
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
            <hr />
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/cadastro">Cadastro</Link>
        </div>
    )
}