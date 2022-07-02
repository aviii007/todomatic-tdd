import {  configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { render,shallow } from '@testing-library/react';
import '@testing-library/jest-dom';

import Todo from "./Todo";


describe("Basic rendering test of todo component" , () => {
    it("should render checkbox",()=>{
        const {getByTestId} = render(<Todo/>);
        
        expect(getByTestId("checkbox-id")).toBeVisible();
    });
    it("should render edit button",()=>{
        const {getByTestId} = render(<Todo/>);
        
        expect(getByTestId("edit-btn")).toBeVisible();
    });
    it("should render delete button",()=>{
        const {getByTestId} = render(<Todo/>);
        
        expect(getByTestId("delete-btn")).toBeVisible();
    });
});