import {  configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { render,shallow } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from "./Form";

describe("Basic rendering test of form component", () => {
    it("Should have todo input form",()=>{
        const {getByTestId} = render(<Form />);
        
        expect(getByTestId("todo-form")).toBeVisible;
    });
    it("Should have input field",()=>{
        const {getByTestId} = render(<Form />);
        
        expect(getByTestId("todo-input-id")).toBeVisible;
    });
    it("Should have input label ",()=>{
        const {getByTestId} = render(<Form />);
        
        expect(getByTestId("todo-input-label")).toHaveTextContent("What needs to be done?");
    });
it("should have add button", () => {
    const {getByTestId} = render(<Form/>);
    expect(getByTestId("add-btn")).toBeVisible;
});
});