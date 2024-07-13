import { useState } from "react"
import { Link } from "react-router-dom"

export default function Cadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function handleInserir() {
        let contato = { nome, email }
        fetch("http://localhost:3000/contatos", {
            method: "post",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(contato)
        })
    }
        function handleCancelar() {
            setNome('')
            setEmail('')
        }

    
    return (
        <div className="container">
            <h2 className="text-center bg-secondary p-2 ">Novo contato</h2>
            <div className="m-2">

                <label htmlFor="nome">Nome</label>
                <input className="form-control" value={nome} onChange={e => setNome(e.target.value)} type="text" name="nome" id="nome" placeholder="Nome" />

                <label htmlFor="email">Email</label>
                <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />

            </div>
            <div className="d-flex justify-content between">
                <button onClick={handleInserir} className="btn btn-primary">Inserir</button>
                <button onClick={handleCancelar} className="btn btn-danger">Cancelar</button>
            </div>
            <hr />
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/consulta">Consulta</Link>
        </div>
    )
}