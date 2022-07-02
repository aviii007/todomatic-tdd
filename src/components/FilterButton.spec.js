import {  configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { render,shallow } from '@testing-library/react';
import '@testing-library/jest-dom';

import FilterButton from "./FilterButton";

describe("Testing functionality of filter button",() => {
it("should render filter button" , () =>{
        const {getByTestId} = render(<FilterButton name="All" isPressed={false} />);
        
        const filterButton = getByTestId("btn toggle-btn-id");

        expect(filterButton).toBeVisible();

});

it("should render span elements", () => {
    const {getAllByTestId} = render(<FilterButton name="All" isPressed={false} />);
        
        const filterSpan = getAllByTestId("span-id");

        expect(filterSpan).toHaveLength(3);

})
});