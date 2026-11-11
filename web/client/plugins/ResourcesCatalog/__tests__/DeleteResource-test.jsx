import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { Provider } from 'react-redux';
import DeleteResourcePlugin from '../DeleteResource';
import { getPluginForTest } from '../../__tests__/pluginsTestUtils';

const TestButton = ({ glyph, onClick }) => <button className={`glyphicon-${glyph}`} onClick={onClick} />;

describe('DeleteResource plugin', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="container"></div>';
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('container'));
        document.body.innerHTML = '';
    });

    it('renders the delete button for administrators', () => {
        const { store, containers } = getPluginForTest(DeleteResourcePlugin, {
            security: { user: { role: 'ADMIN' } }
        });
        const Component = containers.ResourcesGrid.Component;

        ReactDOM.render(
            <Provider store={store}>
                <Component resource={{ id: 1 }} component={TestButton} />
            </Provider>,
            document.getElementById('container')
        );

        expect(document.querySelector('.glyphicon-trash')).toBeTruthy();
    });

    it('does not render the delete button for non-administrators', () => {
        const { store, containers } = getPluginForTest(DeleteResourcePlugin, {
            security: { user: { role: 'USER' } }
        });
        const Component = containers.ResourcesGrid.Component;

        ReactDOM.render(
            <Provider store={store}>
                <Component resource={{ id: 1 }} component={TestButton} />
            </Provider>,
            document.getElementById('container')
        );

        expect(document.querySelector('.glyphicon-trash')).toNotExist();
    });
});
