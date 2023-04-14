import ServiceSlide from "../ServiceSlide/ServiceSlide";
import fridge from "../../../../assets/appliances/fridge.png";
import washer from "../../../../assets/appliances/washer.png";
import dryer from "../../../../assets/appliances/dryer.png";
import dishwasher from "../../../../assets/appliances/dishwasher.png";
import oven from "../../../../assets/appliances/oven.png";
import useIsMobile from "../../../../utils/useIsMobile/useIsMobile";

const TypesOfMachines = () => {
    const services = [
        {
            heading: 'Refrigerator Repair',
            paragraph: 'A refrigerator is a vital kitchen appliance that plays a crucial role in preserving your food and maintaining its quality. With its ability to keep food cold and fresh for an extended period, it has become an essential gadget in every household. However, like any other machine, a refrigerator may encounter problems that require immediate attention. \n' +
                'That\'s why we offer swift and reliable refrigerator repair services to ensure that your appliance continues to function optimally. \n' +
                '\n',
            imageSrc: fridge
        },
        {
            heading: 'Washer Repair',
            paragraph: 'Washing machines are one of the most significant inventions of the modern era, revolutionizing the way we do laundry and changing our daily lives. Given their importance, it is crucial to have a reliable washer repair service that you can trust to keep your appliance in top-notch condition. \n' +
                '\n' +
                'We understand the value of a functional washing machine, and our team of skilled technicians is dedicated to providing quality repair services. As a trusted repair service provider in Austin, we strive to offer efficient and reliable repairs to ensure your washing machine operates smoothly and efficiently for longer.\n' +
                '\n',
            imageSrc: washer
        },
        {
            heading: 'Dryer Repair',
            paragraph: 'We are a dedicated team focused on providing expert solutions to all your domestic appliance problems.\n' +
                '\n' +
                ' Our skilled technicians are known for their accurate dryer repairs, with a track record of resolving issues on the first visit.',
            imageSrc: dryer
        },
        {
            heading: 'Dishwasher Repair',
            paragraph: 'Count on us to provide exceptional, reliable, and courteous service for all your domestic appliances, including dishwashers.\n' +
                '\n' +
                'Before you consider replacing your malfunctioning dishwasher, give us a call. We offer robust repairs that can save you from having to buy a new one.',
            imageSrc: dishwasher
        },
        {
            heading: 'Oven Repair',
            paragraph: 'We offer professional oven repair services that can quickly fix your old oven and get it back in working order.\n' +
                '\n' +
                'Our efficient team has experience repairing all brands of ovens. Count on Appliance Remedy to help you keep your oven in excellent condition.',
            imageSrc: oven
        }
    ];
    const isMobile = useIsMobile();

    return <>
        <h1>Types of Machines</h1>
        {services.map((service, index) => <ServiceSlide key={index} {...service}
                                                        isFlipped={index % 2 === 0 && !isMobile}/>)}
    </>
}
export default TypesOfMachines