import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import Menu from '../client/src/components/Menu.jsx';

const setUp = (props={}) => {
	const component = shallow(<Menu {...props} />);
	return component;
};

const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};

describe('Menu Component', () => {

	let component;
	beforeEach(() => {
		component = setUp();
});

it('It should render a nav bar', () => {
	const wrapper = findByTestAttr(component, "nav-bar");
	expect(wrapper.length).toBe(1);
});

it('It should render a menu', () => {
	const wrapper = findByTestAttr(component, "menu");
	expect(wrapper.length).toBe(1);
});

it('It should render menu items container', () => {
	const wrapper = findByTestAttr(component, "menu-items");
	expect(wrapper.length).toBe(1);
});


});