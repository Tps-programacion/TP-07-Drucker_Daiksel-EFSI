import type { Usuarios } from '../../../types/Usuario';
import './perfilPrincipal.css';

interface PerfilPrincipalProps {
    usuario: Usuarios;
}

export default function PerfilPrincipal({ usuario }: PerfilPrincipalProps) {
    return (
        <div className="perfil-principal">
            <div className="info-perfil-principal">
                <img src={usuario.fotoPerfil} alt="Mi Perfil" className="foto-grande" />
                <div className="textos-perfil">
                    <span className="username-principal">{usuario.username}</span>
                    <span className="nombre-real">Gaston Daiksel</span> {/* Podés poner tu nombre acá */}
                </div>
            </div>
            <button className="btn-accion azul">Cambiar</button>
        </div>
    );
}