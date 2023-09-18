import React, {useState} from "react";
import { fetchUser } from "../../Services/ClientService";
import "./Login.css";

interface LoginProps {
    onLogin: (username: string, password:string) => void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Chame a função fetchUser com o nome de usuário (username) como argumento
        fetchUser(username)
          .then((response) => {
            // Verifique se a resposta tem dados e se a senha corresponde
            if (response.data && response.data[0] && response.data[0].password === password) {
                console.log("if");
                console.log(username, password);
                onLogin(username, password);
            } else {
              console.log("else");  
              console.log(username, password);
              alert("Usuário ou senha inválidos");
            }
          })
          .catch((error) => {
            console.log("error");
            console.error("Erro ao fazer login:", error);
            alert("Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.");
          });
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