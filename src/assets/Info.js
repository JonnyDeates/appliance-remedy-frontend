import GE from "./brands/ge-logo.png";
import LG from "./brands/lg-logo.png";
import maytag from "./brands/maytag-logo.png";
import whilpool from "./brands/whilpool-logo.png";
import kitchenaid from "./brands/kitchenaid.png";
import samsung from "./brands/samsung-logo.png";
import jennair from "./brands/jennair-logo.png";
import cafe from "./brands/cafe-logo.png";
import bosch from "./brands/bosch-logo.png";
import magicChef from "./brands/magic-chef-logo.png";
import bertazzoni from "./brands/bertazzoni-logo.png";
import subZero from "./brands/sub-zero-logo.png";
import wolf from "./brands/wolf-logo.png";
import haier from "./brands/haier-logo.png";
import thermador from "./brands/thermador-logo.png";
import dryer from "./appliances/dryer.png";
import washer from "./appliances/washer.png";
import fridge from "./appliances/fridge.png";
import oven from "./appliances/oven.png";
import dishwasher from "./appliances/dishwasher.png";

export const services = [
    {heading: "Dryer", imageSrc: dryer}, {heading: "Washing Machine", imageSrc: washer},
    {heading: 'Fridge', imageSrc: fridge}, {heading: 'Oven', imageSrc: oven},
    {heading: 'Dish Washer', imageSrc: dishwasher}
];

export const brands = [{src: GE, alt: "GE"}, {src: LG, alt: "LG"}, {src: maytag, alt: "MayTag"},
    {src: whilpool, alt: "Whil-pool"}, {src: kitchenaid, alt: "kitchen-aid"}, {src: samsung, alt: "Samsung"},
    {src: jennair, alt: "Jenn-air"}, {src: cafe, alt: "CAFE"}, {src: bosch, alt: "BOSCH"},
    {src: magicChef, alt: "MAGIC CHEF"}, {src: bertazzoni, alt: "berazzatoni"}, {src: subZero, alt: "SUB ZERO"},
    {src: wolf, alt: "WOLF"}, {src: haier, alt: "HAIER"}, {src: thermador, alt: "THERMADOR"}];

export const telephone = '(512) 882 1267';
export const email = "ApplianceRemedyService@gmail.com";

export const BusinessHours = () => <div className='BusinessHours'>
    <p><b>Business Hours</b></p>
    <p>Mon - Fri <span> 8am - 5pm</span></p>
    <p>Sat - Sun <span>Closed</span></p>
</div>;


