import {render, screen} from "@testing-library/react";
import OwnersMessage from "../../../../../pages/Home/components/OwnersMessage/OwnersMessage";

describe('Owners Message', () => {
    it( 'Should renderMessage from owner', ()=> {
        //Assign
        render(<OwnersMessage/>);

        const statement = screen.getByRole('heading',{name:'message from'});
        const owner = screen.getByRole('heading',{name:'The Owner'})
        const message = screen.getByRole('paragraph', {value: '"At our appliance repair company, we pride ourselves on providing quick and efficient service for all of your appliance needs. Whether you have a refrigerator that\'s not cooling or a dishwasher that\'s leaking, our experienced technicians can diagnose and fix the problem in no time. We understand that your appliances are an important part of your daily routine, and we work hard to get them up and running as soon as possible. Trust us to get the job done right, and get your appliances back in working order quickly and efficiently."'})
        //Action

        //Assessment
        expect(statement).toBeVisible();
        expect(owner).toBeVisible();
        expect(message).toBeVisible();
    });
});