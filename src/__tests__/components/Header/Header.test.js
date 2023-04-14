import {render, screen} from "@testing-library/react";
import Header from "../../../components/Wallpaper/components/Header/Header";

describe('Header.js', () => {

    it('should render Volta Header', () => {

        // Assignment (Test Setup)
        render(<Header/>);

        const header = screen.getByRole('heading', {name: "Ctrl Alt Fixed"});
        const phoneNumber = screen.getByText("(111) 111-1111");
        const address = screen.getByText("1217 Stepp Bnd, Cedar Park, TX, 78613");

        // Action (User Action)


        // Assessment (Test Expectations)
        expect(header).toBeVisible();
        expect(phoneNumber).toBeVisible()
        expect(address).toBeVisible()
    });

    it.each(['HOME', 'ABOUT', 'SERVICES', 'REVIEWS', 'CONTACT'])('should render NavBar with link %s', (link) => {
        //ASS
        render(<Header/>);

        const navbar = screen.getByRole('navigation')
        const linkElement = screen.getByText(link)

        //ACT

        //ASSEST
        expect(navbar).toBeVisible();
        expect(linkElement).toBeVisible()

        if(link === 'HOME') {
            expect(linkElement).toHaveAttribute('href', '/' )

        } else {
            expect(linkElement).toHaveAttribute('href', '/' + link.toLowerCase())
        }
    });
});
