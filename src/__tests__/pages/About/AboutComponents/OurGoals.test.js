import { render, screen, within} from '@testing-library/react';
import OurGoals from "../../../../pages/About/components/OurGoals/OurGoals";
import React from "react";


describe('Our Goals', () => {
    it('Should render heading, list of goals and image', () => {
        //Assign
        render(<OurGoals />);

        const ourGoal = screen.getByRole('heading', {name:'Our Goals'});
        const goalList = screen.getAllByRole('listitem');
        const li1 = within(goalList[0]).getByText('To provide cutting edge solutions to all your appliance repair problems.');
        const li2 = within(goalList[1]).getByText('We do not believe in recommending unnecessary repairs.');
        const li3 = within(goalList[2]).getByText('We always strive hard to give our 110% and ensure complete customer satisfaction.');
        const li4 = within(goalList[3]).getByText('Our aim is to provide consistent services to our customers and carve a niche with our honest and good work.');
        const li5 = within(goalList[4]).getByText('We are here to build trustworthy relationship with our customers. We treat customers with great respect.');
        const li6 = within(goalList[5]).getByText('And last but not the least; endless customer service is our top priority.');
        const img = screen.getByRole('img');

        expect(ourGoal).toBeVisible();
        expect(li1).toBeVisible();
        expect(li2).toBeVisible();
        expect(li3).toBeVisible();
        expect(li4).toBeVisible();
        expect(li5).toBeVisible();
        expect(li6).toBeVisible();
        expect(img).toBeVisible();
    })
});