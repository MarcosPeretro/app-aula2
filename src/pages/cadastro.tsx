import { useState } from "react"

export default function Cadastro(){
    const[nome, setNome] = useState("")
    const[email, setEmail] = useState("")
    
    function handleInsirir(){
        let contato = {nome, email}
        fetch("http://localhost:3000/contatos", {
            method: "post",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(contato)
        })
            
        
    }
    return(
        <div>
            <h2>Novo contato</h2>
            
            <label htmlFor="nome">Nome</label>
            <input className="form-control" type="text" name="nome" id="nome" placeholder="Nome" />

            <label htmlFor="email">Email</label>
            <input className="form-control" type="email" name="email" id="email" placeholder="Email" />

            <button onClick={handleInsirir}>Inserir</button>
        </div>
    )
}