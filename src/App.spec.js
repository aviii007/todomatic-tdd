import {  configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { render,shallow } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from "react";
import App from "./App";

const test_data = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Study", completed: true }
  ];
describe("Basic rendering of ToDO list" , () => {
it("Should have heading", () =>{

    const heading = render(<App tasks={test_data} />);

    const headingValue = heading.getByTestId("heading-todomatic");

    expect(headingValue).toHaveTextContent("TodoMatic");
});

});