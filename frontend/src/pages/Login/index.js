import React, { useState } from 'react';
import api from '../../services/api';
import Alert from '../../components/Alert';
import { Link } from 'react-router-dom';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ issubmit, setIssubmit] = useState(true);

    function clear(){
        setPassword('');
        setEmail('');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', { email, password });
            Alert('top-end', 3000, false, 'success', 'Logado com sucesso!');

            const { token } = response.data;
            localStorage.setItem('token', token);

            const { name } = response.data.user;
            localStorage.setItem('user', name);

            localStorage.setItem('authenticated', true);

            clear();

            history.push("/dashboard");

        } catch (err) {
            Alert('top-end', 5000, false, 'error', 'Login incorreto, verifique suas credenciais!');
            console.log(err)
            clear();
        }

    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to="#"><b>Desafio</b> do Keven</Link>
                </div>
                <div className="card mb-5">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg"> Seja <b>Bem-vindo!</b></p>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between">
                                <div className="col-md-4">
                                    <button className="btn btn-primary btn-block" disabled={issubmit} type="submit">Entrar</button>
                                </div>
                                <div className="col-md-4">
                                    <p >
                                        <Link to="#">Registrar-se</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
