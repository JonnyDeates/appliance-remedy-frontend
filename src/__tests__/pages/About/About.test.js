import { render, screen} from '@testing-library/react';
import About from "../../../pages/About/About";

describe('About.js',() => {
    it('Should render banner for the about page.', ()=>{
        //Assign
        render(<About/>);

        const banner = screen.getByRole('img');

        // Assessment
        expect(banner).toBeVisible();

    })
});