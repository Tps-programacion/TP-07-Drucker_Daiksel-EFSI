import type { Usuarios } from '../../../types/Usuario';
import PerfilPrincipal from '../perfilPrincipal/PerfilPrincipal';
import SugerenciaItem from '../sugerenciaItem/SugerenciaItem';
import './sidebarDerecho.css';

interface SidebarDerechoProps {
    usuarios: Usuarios[];
}

export default function SidebarDerecho({ usuarios }: SidebarDerechoProps) {
    

    if (!usuarios || usuarios.length === 0) {
        return null; 
    }

    const miUsuario = usuarios[0];
    const usuariosSugeridos = usuarios.slice(1, 6);

    return (
        <div className="sidebar-derecho">
            {/* 1. Tarjeta de tu perfil */}
            <PerfilPrincipal usuario={miUsuario} />
            
            {/* 2. Título de Sugerencias */}
            <div className="sugerencias-header">
                <span className="titulo-sugerencias">Sugerencias para ti</span>
                <button className="btn-ver-todo">Ver todo</button>
            </div>

            {/* 3. Lista de tarjetas de sugerencias */}
            <div className="sugerencias-lista">
                {/* Ahora podemos mapear tranquilos porque sabemos que usuariosSugeridos tiene datos */}
                {usuariosSugeridos.map((user) => (
                    <SugerenciaItem key={user.id} usuario={user} />
                ))}
            </div>

            {/* 4. Footer de Instagram */}
            <footer className="sidebar-footer">
                <p>Información · Ayuda · Prensa · API · Empleo · Privacidad · Condiciones · Ubicaciones · Idioma · Meta Verified</p>
                <p>© 2024 INSTAGRAM FROM META</p>
            </footer>
        </div>
    );
}