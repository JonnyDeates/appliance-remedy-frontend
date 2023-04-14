import { render, screen} from '@testing-library/react';
import LandingPageIntroVideo from "../../../../../pages/Home/components/LandingPageIntroVideo/LandingPageIntroVideo";

describe('LandingPageIntroVideo.js', () => {

    it('should show a button with Schedule Online', () => {
        render(<LandingPageIntroVideo/>);

        const button = screen.getByRole('button', {name: "Schedule Online"})

        expect(button).toBeVisible()
    });
});