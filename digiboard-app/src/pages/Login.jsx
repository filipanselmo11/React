import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../service/api";

export default function Login() {

    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        const data = { login, senha };
        try {
            const response = await api.post('usuarios', {data});
            localStorage.setItem('loginUsuario', response.data.login);
            localStorage.setItem('senhaUsuario', response.data.senha);

        } catch(err) {
            alert(err);
        }
    }
    
    return (
        <div className="container">
            <p className="h2">Login</p>
            <br/>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputUser1" className="form-label">Usuário</label>
                    <input type="text" value={login} onChange={e => setLogin(e.target.value)} className="form-control" id="exampleInputUser1" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>history.push("/lista")}>Entrar</button>
            </form>
            <br/>
            <p>Ainda não possui cadastro ? Clique aqui <a href="/cadastro">aqui.</a> para realizar o cadastro</p>

        </div>


    );
}