import { render, screen, within} from '@testing-library/react';
import Home from "../../../pages/Home/Home";

describe('Home.js', () => {

    it('should show a button with Schedule Online', () => {
        render(<Home/>)

        const button = screen.getByRole('button', {name: "Schedule Online"})

        expect(button).toBeVisible()
    });

});