/**
 * Plugin para el Generador de Símbolos MSAyTM.
 * Exporta el componente principal y su configuración.
 */
import SymbolGenerator from './SymbolGenerator';

export default {
    // Nombre del plugin, debe coincidir con el usado en localConfig.json
    name: 'SymbolGenerator',
    // El componente que se renderizará
    component: SymbolGenerator,


    // Puedes añadir más configuración si es necesario, como reducers o epics
    // reducers: {},
    // epics: {}
};
