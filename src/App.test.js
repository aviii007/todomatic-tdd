import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";

import App from "./App";

// List of all the todos
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
// Configuring the Enzyme Adapter
configure({ adapter: new Adapter() });

// Testing the App component rendering
describe("Basic rendering test for TodoMatic!", () => {
  it("Should have the title", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("h1").text()).toBe("TodoMatic");
  });

  it("Should have the form component", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("Form").length).toBe(1);
  });

  it("Should have remaining tasks element", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("h2").length).toBe(1);
  });

  it("Should have three FilterButton components", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("FilterButton").length).toBe(3);
  });

  it("Should have a todo list", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("ul").length).toBe(1);
  });

  it("Should have Todo components", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("Todo").length).toBeGreaterThanOrEqual(0);
  });
});

// Testing the App component functionality
describe("App component functionality", () => {
  it("Should have the correct number of tasks", () => {
    const wrapper = shallow(<App tasks={DATA} />);
    expect(wrapper.find("Todo").length).toBe(3);
  });
  // should be able to add a new task
  it("Should add a new task", async () => {
    const wrapper = mount(<App tasks={DATA} />);
    wrapper.find("#new-todo-input").simulate("change", {
      target: { value: "Eat" },
    });
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(wrapper.find("Todo").length).toBe(4);
  });
});