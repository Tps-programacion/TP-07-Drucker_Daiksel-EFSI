import { useState } from 'react';
import type { Usuarios } from '../../../types/Usuario';
import './sugerenciaItem.css';

interface SugerenciaItemProps {
    usuario: Usuarios;
}

export default function SugerenciaItem({ usuario }: SugerenciaItemProps) {
    // Estado inicial: NO lo estamos siguiendo (false)
    const [siguiendo, setSiguiendo] = useState(false);

    // Función que se ejecuta al tocar el botón
    const handleSeguirClick = () => {
        setSiguiendo(!siguiendo); // Si era false pasa a true, y viceversa
    };

    return (
        <div className="sugerencia-item">
            <div className="info-sugerencia">
                <img src={usuario.fotoPerfil} alt={usuario.username} className="foto-chica" />
                <div className="textos-sugerencia">
                    <span className="username-sugerencia">{usuario.username}</span>
                    <span className="motivo-sugerencia">Sugerencias para ti</span>
                </div>
            </div>
            
            {/* Si siguiendo es true -> clase gris y dice 'Siguiendo'. Si es false -> clase azul y dice 'Seguir' */}
            <button 
                className={`btn-accion ${siguiendo ? 'gris' : 'azul'}`}
                onClick={handleSeguirClick}
            >
                {siguiendo ? 'Siguiendo' : 'Seguir'}
            </button>
        </div>
    );
}