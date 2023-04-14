import { render, screen} from '@testing-library/react';
import OurPrinciples from "../../../../pages/About/components/OurPrincinciples/OurPrinciples";

describe('OurPrinciples.js',() => {
    it('Should render headers and text for OurPrinciples', ()=>{
        //Assign
        render(<OurPrinciples/>);

        const principleHeader = screen.getByRole('heading', {name:'Our Principles'});
        const principleText = screen.getByRole('paragraph',{value:'We offer honest advice. We will never replace the part of your appliance, only to earn profit. Our price estimations do not contain any hidden cost.'});
        const clockServiceHeader = screen.getByRole('heading', {name:'AROUND-THE-CLOCK SERVICE'});
        const clockServiceText = screen.getByRole('paragraph',{value:'We offer honest advice. We will never replace the part of your appliance, only to earn profit. Our price estimations do not contain any hidden cost.'});
        const ourPrinciplesImg = screen.getByRole('img');

        // Assessment
        expect(principleHeader).toBeVisible();
        expect(principleText).toBeVisible();
        expect(clockServiceHeader).toBeVisible();
        expect(clockServiceText).toBeVisible();
        expect(ourPrinciplesImg).toBeVisible();

    })
});