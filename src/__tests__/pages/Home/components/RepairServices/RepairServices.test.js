import { render, screen, within} from '@testing-library/react';
import RepairServices from "../../../../../pages/Home/components/RepairServices/RepairServices"

describe('Repair Services', ()=>{

    it.each(['Dryer','Washing Machine','Fridge','Oven','Dish Washer'])('should render the service \'%s\' name ', (service)=>{
        // Assignment
        render(<RepairServices/>)
        const serviceText = screen.getByText(service)
        const img = screen.getByRole('img',{name: service})
        // Actions

        // Assessment
        expect(serviceText).toBeVisible();
        expect(img).toBeVisible();
    })
})