import {act, render, screen, within} from '@testing-library/react';
import Testimonials from "../../../../../pages/Home/components/Testimonials/Testimonials";
import userEvent from "@testing-library/user-event";
import React from "react";
import {waitForElementToBeRemoved} from "@testing-library/dom";

describe('Testimonials', () => {
    const testimonial1 = "I was impressed by the fast response time and expert repair skills of the technician. My refrigerator is running like new again! Highly recommend this company.";
    const testimonial2 = "The team at the appliance repair company fixed my oven quickly and efficiently. I am so grateful for their exceptional service!";
    const testimonial3 = "I was pleasantly surprised by the affordability and quality of service from this appliance repair company. My dishwasher has never worked better!";
    const testimonial4 = "The technician who came to fix my washing machine was professional, knowledgeable, and courteous. I will definitely be using this company again in the future.";

    it('should render the first testimonial and two buttons', () => {
        render(<Testimonials/>);

        expect(screen.getByText(testimonial1)).toBeVisible();
        expect(screen.getByRole('button', {name: '<'})).toBeVisible();
        expect(screen.getByRole('button', {name: '>'})).toBeVisible()
    });

    it('should go through the other options for the testimonials', () => {
        // Assign
        render(<Testimonials/>);

        const rightButton = screen.getByRole('button', {name: '>'});

        expect(screen.getByText(testimonial1)).toBeVisible();
        expect(screen.queryByText(testimonial2)).toBeNull();
        expect(screen.queryByText(testimonial3)).toBeNull();
        expect(screen.queryByText(testimonial4)).toBeNull();

        // Action
        userEvent.click(rightButton);

        expect(screen.queryByText(testimonial1)).toBeNull();
        expect(screen.getByText(testimonial2)).toBeVisible();
        expect(screen.queryByText(testimonial3)).toBeNull();
        expect(screen.queryByText(testimonial4)).toBeNull();


        userEvent.click(rightButton);

        expect(screen.queryByText(testimonial1)).toBeNull();
        expect(screen.queryByText(testimonial2)).toBeNull();
        expect(screen.getByText(testimonial3)).toBeVisible();
        expect(screen.queryByText(testimonial4)).toBeNull();


        userEvent.click(rightButton);

        expect(screen.queryByText(testimonial1)).toBeNull();
        expect(screen.queryByText(testimonial2)).toBeNull();
        expect(screen.queryByText(testimonial3)).toBeNull();
        expect(screen.getByText(testimonial4)).toBeVisible();
    });
    it('should cycle back to the start when right button is clicked 5 times', () => {
        // Assign
        render(<Testimonials/>);

        const rightButton = screen.getByRole('button', {name: '>'});

        expect(screen.getByText(testimonial1)).toBeVisible();
        expect(screen.queryByText(testimonial2)).toBeNull();
        expect(screen.queryByText(testimonial3)).toBeNull();
        expect(screen.queryByText(testimonial4)).toBeNull();

        userEvent.click(rightButton);
        userEvent.click(rightButton);
        userEvent.click(rightButton);
        userEvent.click(rightButton);


        expect(screen.getByText(testimonial1)).toBeVisible();
        expect(screen.queryByText(testimonial2)).toBeNull();
        expect(screen.queryByText(testimonial3)).toBeNull();
        expect(screen.queryByText(testimonial4)).toBeNull();
    })
    it('should cycle back to the end when left button is clicked', () => {
        // Assign
        render(<Testimonials/>);

        const leftButton = screen.getByRole('button', {name: '<'});

        userEvent.click(leftButton);

        expect(screen.queryByText(testimonial1)).toBeNull();
        expect(screen.getByText(testimonial4)).toBeVisible();

    })
    it('should advance time for slideshow to goto the next option',async () => {
        jest.useFakeTimers();
        // Assign
        render(<Testimonials/>);

        expect(screen.getByText(testimonial1)).toBeVisible();
        expect(screen.queryByText(testimonial2)).toBeNull();

        await act(()=>{
            jest.advanceTimersByTime(15001);
        });

        expect(screen.queryByText(testimonial1)).toBeNull();
        expect(screen.getByText(testimonial2)).toBeVisible();


        await act(()=>{
            jest.advanceTimersByTime(15001);
        });

        expect(screen.queryByText(testimonial2)).toBeNull();
        expect(screen.getByText(testimonial3)).toBeVisible();


    })
});