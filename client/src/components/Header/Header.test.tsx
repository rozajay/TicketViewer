import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header.ui';

describe('Test for Header component', () => {
    it('renders without crashing', () => {
        shallow(<Header />)
    });
});