import React, {useState} from "react";
import "./Login.css";

interface LoginProps {
    onLogin: (username: string, password:string) => void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
       if(username === "usuario" && password === "senha") {
        onLogin(username, password);
       } else {
            alert("Usuário ou senha inválidos");
       }
    };

    return (
        <>
        <div className="LoginForm">
            <div className="LoginInputs">
                <label className="userLabel">Usuário</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            
                <label className="senhaLabel">Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="buttonMargin" onClick={handleLogin}>Entrar</button>
        </div>
        </>
    );
};

export default Login;