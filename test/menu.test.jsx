import React from "react";
import Enzyme from "enzyme";
import ReactDOM from "react-dom";
import Menu from "../client/src/components/Menu.jsx";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render, configure } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Menu {...props} />);
  return component;
};

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Menu Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Renders a menu component", () => {
    const div = document.createElement("menu");
    ReactDOM.render(<Menu />, div);
  });

  it("It should render a nav bar", () => {
    const wrapper = findByTestAttr(component, "nav-bar");
    expect(wrapper.length).toBe(1);
  });

  it("It should render 7 nav buttons", () => {
    const wrapper = findByTestAttr(component, "nav-button");
    expect(wrapper.length).toBe(7);
  });

  it("It should render menu content", () => {
    const wrapper = findByTestAttr(component, "menu");
    expect(wrapper.length).toBe(1);
  });

  it("It should render menu items container", () => {
    const wrapper = findByTestAttr(component, "menu-items");
    expect(wrapper.length).toBe(1);
  });
});
