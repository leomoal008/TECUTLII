import React from 'react';
import './SymbolGenerator.css';

/**
 * Componente principal del Generador de Símbolos.
 * Por ahora, solo muestra un título para verificar que el plugin se carga.
 */
const SymbolGenerator = () => {
    return (
        <div className="symbol-generator-container">
            <h1>Generador de Símbolos MSAyTM</h1>
            <p>Plugin cargado correctamente.</p>
        </div>
    );
};

export default SymbolGenerator;
