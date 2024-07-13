import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div>
            <header className='bg-primary p-3'>
                <h1 className='text-center text-white'>Agenda</h1>
            </header>

            <Link className="btn" to="/cadastro" >Cadastro</Link>
            <Link className="btn" to="/consulta" >Consulta</Link>
        </div>
        
    )
}