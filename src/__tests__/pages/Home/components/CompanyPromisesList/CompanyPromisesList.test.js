import {render, screen, within} from "@testing-library/react";
import CompanyPromiseList from "../../../../../pages/Home/components/CompanyPromisesList/CompanyPromisesList";

describe('company-promises-list.js',() =>{
it('should render message for why customers should use CTRL ALT Fixed', ()=>{
    //Assign
    render(<CompanyPromiseList/>);

    const question = screen.getByRole('heading', {name:'Why choose us?'})
    const listItems = screen.getAllByRole('listitem')
    const li1 = within(listItems[0]).getByText('Expertise You Can Rely On')
    const li2 = within(listItems[1]).getByText('High-Quality Parts and Techniques')
    const li3 = within(listItems[2]).getByText('Comprehensive Guarantee')
    const button = screen.getByRole('button', {name: 'Schedule Today!'})

    expect(question).toBeVisible();
    expect(li1).toBeVisible();
    expect(li2).toBeVisible();
    expect(li3).toBeVisible();
    expect(button).toBeVisible();
})
});