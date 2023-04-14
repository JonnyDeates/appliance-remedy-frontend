import {render, screen} from '@testing-library/react';
import ServiceSlide from "../../../../pages/Service/components/ServiceSlide/ServiceSlide";


describe('ServiceSlide', () => {
    it('should Render its props', () => {

        render(<ServiceSlide heading={'test heading'} paragraph={'yeet'} imageSrc={'test/src'}/>)

        expect(screen.getByRole('heading', {name: 'test heading'})).toBeVisible();
        expect(screen.getByRole('img', {name: 'test heading'})).toHaveAttribute('src', 'test/src');
        expect(screen.getByText('yeet')).toBeVisible();
    })

})