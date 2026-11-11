import React from 'react';
import { forward as mgrsForward } from 'mgrs';
import PropTypes from 'prop-types';

/**
 * Muestra la coordenada MGRS calculada a partir de lat/lon (WGS84).
 * @param {Object} props
 * @param {Object} props.position - Debe tener lat y lng en grados decimales.
 */
class MousePositionLabelMGRS extends React.Component {
    static propTypes = {
        position: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number
        })
    };
    render() {
        const { position } = this.props;
        let mgrsCoord = '';
        if (position && typeof position.lat === 'number' && typeof position.lng === 'number') {
            mgrsCoord = mgrsForward([position.lng, position.lat], 5); // 1m precision
        }
        return (
            <span className="mapstore-mouse-mgrs">
                <b>MGRS:</b> {mgrsCoord || '-'}
            </span>
        );
    }
}

export default MousePositionLabelMGRS;
