import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import Todo from "./Todo";

// Configuring the Enzyme Adapter
configure({ adapter: new Adapter() });
const props = {
  id: "todo-1",
  name: "Eat",
  completed: false,
  updateTasks: jest.fn(),
  deleteTask: jest.fn(),
};
// Testing the Todo component rendering
describe("Basic rendering test for Todo component", () => {
  it("Should have a checkbox", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.find("input[type='checkbox']").length).toBe(1);
  });

  it("Should have a name", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.find("label").length).toBe(1);
  });

  it("Should have an edit & a delete button", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.find("button").length).toBe(2);
  });
});

// Testing the Todo component interaction
describe("Todo component functionality testing", () => {
  it("Should call the updateTasks function when the checkbox is clicked", () => {
    const wrapper = shallow(<Todo {...props} />);
    wrapper.find("input").simulate("change", {
      target: { value: true },
    });
    expect(props.updateTasks).toHaveBeenCalled();
  });

  //   it("Should change isEditing to true when the edit button is clicked", () => {
  //     // the function setEditing should be called
  //     const wrapper = shallow(<Todo {...props} />);
  //     wrapper.find("button").at(0).simulate("click");
  //     expect(wrapper.instance().state("isEditing")).toBe(true);
  //   });

  it("Should call the deleteTask function when the delete button is clicked", () => {
    const wrapper = shallow(<Todo {...props} />);
    wrapper.find("button").at(1).simulate("click");
    expect(props.deleteTask).toHaveBeenCalled();
  });
});