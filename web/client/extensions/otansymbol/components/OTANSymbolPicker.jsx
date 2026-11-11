import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OTANSymbolPicker = ({ show, onClose, onSelect }) => {

    // Función para convertir SVG a PNG
    const svgToPng = (svgString) => {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                URL.revokeObjectURL(url);
                resolve(canvas.toDataURL('image/png'));
            };

            img.onerror = () => {
                console.error('Error al cargar el SVG');
                URL.revokeObjectURL(url);
                resolve(null);
            };

            img.src = url;
        });
    };

    // Función para recibir el mensaje del iframe
    const handleMessage = (event) => {
        // Verificar origen por seguridad
        if (event.origin !== window.location.origin) return;

        if (event.data && event.data.type === 'SYMBOL_SELECTED') {
            const { svg, sidc } = event.data;
            if (svg) {
                // Convertir SVG a PNG
                svgToPng(svg).then(dataUrl => {
                    if (dataUrl) {
                        onSelect(dataUrl, sidc);
                        onClose();
                    }
                });
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <Modal show={show} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Selector de Símbolo OTAN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe
                    src="../assets/generator/index.html"
                    style={{ width: '100%', height: '600px', border: 'none' }}
                    title="Generador de Símbolos OTAN "
                />
            </Modal.Body>
        </Modal>
    );
};

export default OTANSymbolPicker;
