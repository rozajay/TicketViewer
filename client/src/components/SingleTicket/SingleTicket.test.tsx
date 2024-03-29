import React from 'react';
import { mount } from 'enzyme';
import SingleTicket from './SingleTicket';
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

describe('Test for Single Ticket component', () => {
    it('renders without crashing', () => {
        mountWithProvider(<SingleTicket {...props} />)()
    });
});