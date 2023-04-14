import { render, screen} from '@testing-library/react';
import React from "react";

describe('AboutUs.js',() => {
    it('Should render text and images for the about us section.', ()=>{
        //Assign
        render(<AboutUs/>);

        const aboutHeader = screen.getByRole('heading', {name:'About Us'});
        const aboutText = screen.getByRole('paragraph',{value:'A&R Appliance Repair was created by appliance technicians who believe in running an honest professional service company that does not seek to profit by cutting corners, or recommending unnecessary repairs. Our focus is on going the extra mile to ensure complete customer satisfaction. We also believe that a good reputation and providing consistent service will reap bigger rewards in the long run. By being trustworthy, we seek to enjoy a long term profitable business that serves our community, our family and our customers.'})
        const img = screen.getByRole('img');

        // Assessment
        expect(aboutHeader).toBeVisible();
        expect(aboutText).toBeVisible();
        expect(img).toBeVisible();

    })
});