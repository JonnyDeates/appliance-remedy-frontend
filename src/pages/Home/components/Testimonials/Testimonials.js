import React, {useEffect, useState} from 'react';
import "./assets/Testimonials.css"
import arrow from "./assets/arrow.svg"
import StarRating from "./components/StarRating/StarRating";

const Testimonials = () => {
    const testimonial1 = "I was impressed by the fast response time and expert repair skills of the technician. My refrigerator is running like new again! Highly recommend this company.";
    const testimonial2 = "The team at the Appliance Remedy fixed my oven quickly and efficiently. I am so grateful for their exceptional service!";
    const testimonial3 = "I was pleasantly surprised by the affordability and quality of service from this appliance repair company. My dishwasher has never worked better!";
    const testimonial4 = "The technician who came to fix my washing machine was professional, knowledgeable, and courteous. I will definitely be using this company again in the future.";
    const testimonialArray = [{testimonial: testimonial1, rating: 4, name: 'Jake Smith'}, {testimonial: testimonial2, rating: 5, name: 'Kennedy Griffen'}, {testimonial: testimonial3, rating: 5, name: 'Alex Holland'}, {testimonial: testimonial4, rating: 5, name:  "Jane S."}];
    const [index, setIndex] = useState(0);


    const testimonialRight = () => {
        if (index === testimonialArray.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const testimonialLeft = () => {
        if (index === 0) {
            setIndex(testimonialArray.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setIndex((index) => {
                if (index < testimonialArray.length - 1) {
                    return index + 1;
                }
                return 0;
            });
        }, 15000);
        return () => clearInterval(testimonialInterval);
    }, [testimonialArray.length]);

    const currentTestimonial = testimonialArray[index]

    return <div className={'Testimonials'}>
        <div>
        <h1>What Clients Are Saying</h1>
        <div className={'Testimonial'}>
            <img src={arrow} className={'Left-button'} alt={'<'} onClick={testimonialLeft}/>
            <div>
                <p>{currentTestimonial.testimonial}
                    <StarRating rating={currentTestimonial.rating}/>
                </p>
                <h4>{currentTestimonial.name}</h4>
            </div>

            <img src={arrow} className={'Right-button'} alt={'>'} onClick={testimonialRight}/>
        </div>
        </div>
    </div>;
};
export default Testimonials;


