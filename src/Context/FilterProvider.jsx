import { createContext, useState } from "react";

export const FilterContext = createContext()

const FilterProvider = ({children}) => {

    const [filters, setFilters] = useState({
        brand: '',
        category: '',
        priceMin: '',
        priceMax: ''
    });

    console.log("Filter..../.", filters);
    

    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;