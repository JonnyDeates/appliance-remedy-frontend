import {brands} from "../../../../assets/Info";
import React from "react";

const BrandsWeService = () => {

    return <>
        <h1>Brands we Service</h1>
        <div className='ServiceBrands'> {brands.map((brand, index) => <img key={brand.alt + index} src={brand.src}
                                                                           alt={brand.alt}/>)}</div>
    </>;
};
export default BrandsWeService