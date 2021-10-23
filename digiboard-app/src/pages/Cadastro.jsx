import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../service/api";

export default function Cadastro() {

    const[nome, setNome] = useState('');
    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');
    const [ativo, setAtivo] = useState(true);
    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();
        const data = { nome, login, senha, ativo };

        try {
            const response = await api.post('usuarios', data);
            console.log(`Seu id é: ${response.data.id}`);
        } catch(err) {
            alert ('Erro: ', err);
        }
    }


    return(
       <div className="container">
           <p className="h2">Cadastro</p>
           <br/>
           <form onSubmit={handleCadastro}>
               <div className="mb-3">
                   <label for="exampleInputNameUser" className="form-label">Nome Completo</label>
                   <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="form-control" id="exampleInputNameUser" required/>
               </div>
               <div className="mb-3">
                   <label for="exampleInputUser" className="form-label">Login de Usuário</label>
                   <input type="text" value={login} onChange={e => setLogin(e.target.value)} className="form-control" id="exampleInputUser" required/>
               </div>
               <div className="mb-3">
                   <label for="exampleInputSenhaUser" className="form-label">Senha</label>
                   <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className="form-control" id="exampleInputSenhaUser" required/>
               </div>
               <div className="form-check">
                   <input class="form-check-input" type="checkbox" value={ativo} onChange={e => setAtivo(e.target.value)} id="flexCheckDefault" required/>
                   <label class="form-check-label" for="flexCheckDefault">Ativo</label>
               </div>
               <button type="submit" className="btn btn-primary" onClick={()=>history.push("/")}>Cadastrar</button>
           </form>
       </div>
    );
}