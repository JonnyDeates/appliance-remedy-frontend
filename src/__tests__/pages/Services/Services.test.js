import {render, screen} from "@testing-library/react";
import Service from "../../../pages/Service/Services";
import ServiceSlide from "../../../pages/Service/components/ServiceSlide/ServiceSlide";

describe('Services.js',() => {
    it('Should render banner for the service page.', ()=>{
        //Assign
        render(<Service/>);

        const images = screen.getAllByRole('img');
        const headers = screen.getAllByRole('heading');

        // Assessment
        expect(images).toHaveLength(5);
        expect(headers).toHaveLength(5);

    })
    it.each(['REFRIGERATOR REPAIR','WASHER REPAIR','DISHWASHER REPAIR','DRYER REPAIR','OVEN REPAIR'])('should render the service \'%s\' name ', (service)=>{
        // Assignment
        render(<Service/>);
        const serviceHeader = screen.getByRole('heading',{name: service});
        const Contenting = screen.getByRole('img',{name: service});
        const serviceText = screen.getByText(service);
        // Actions

        // Assessment
        expect(serviceHeader).toBeVisible();
        expect(Contenting).toBeVisible();
        expect(serviceText).toBeVisible();
    })
});