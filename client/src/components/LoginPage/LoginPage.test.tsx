import React from 'react';
import { mount } from 'enzyme';
import LoginPage from './LoginPage';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

const defaultStore = {
    currentTicket: {
        organization_id: 1234
    }
};
const mockedStore = configureMockStore()(defaultStore)
const mountWithProvider = (children: any) => (store = mockedStore) => mount(<Provider store={store}>{children}</Provider>)

const props = {};

describe('Test for LoginPage component', () => {
    it('renders without crashing', () => {
        mountWithProvider(<LoginPage {...props} />)()
    });

    
});