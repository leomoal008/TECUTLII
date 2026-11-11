import OTANSymbolPicker from './components/OTANSymbolPicker';
import { createPlugin } from '@mapstore/framework/plugins/utils';

export default createPlugin('OTANSymbol', {
    component: OTANSymbolPicker,
    reducers: {},
    epics: {}
});
