import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../service/api";

export default function Lista() {

    const [usuarios, setUsuarios] = useState([]);

    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const idUsuario = localStorage.getItem('idUsuario');

    useEffect(() => {
        api.get('usuarios', {
            headers: {
                Authorization: onpagehide,
            }
        }).then(response => {
            setUsuarios(response.data);
        })
    }, [idUsuario]);

    async function handleDeleteUsuario(id) {
        try {
            await api.delete(`usuarios/${id}`, {
                headers: {
                    Authorization: idUsuario,
                }
            });
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div className="container">
            <header>
                <span>Bem vindo {nomeUsuario} </span>
            </header>
            <p className="h2">Lista de Usuários</p>
            <br/>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Login de Usuário</th>
                        <th scope="col">Senha</th>
                        <th scope="col">Ativo ?</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr>
                            <th>{usuario.id}</th>
                            <th>{usuario.nome}</th>
                            <th>{usuario.login}</th>
                            <th>{usuario.senha}</th>
                            <th>{usuario.ativo}</th>
                            <button type="button" className="btn btn-danger" onClick={() => handleDeleteUsuario(usuario.id)}></button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}