import { useDispatch } from 'react-redux'
import { alterarUsuario } from "../Store/Usuarios/usuarioSlice";

export function handleCredentialResponse(response) {
    
    console.log("Encoded JWT ID token: " + response.credential);
    var token = parseJwt(response.credential);    
    localStorage.setItem('tokenGoogle', JSON.stringify(token));       
    window.location.replace('http://localhost:3000/MeusClientes');
}

export function Load(){
    
    window.onload = function () {
        window.google.accounts.id.initialize({
          client_id: "58617903465-2ls6ppmjka8skkvesie8kgs7msr78ohm.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export default Load;