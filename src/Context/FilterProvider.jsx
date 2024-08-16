import { createContext, useState } from "react";

export const FilterContext = createContext()

const FilterProvider = ({children}) => {

    const [filters, setFilters] = useState({
        brand: '',
        category: '',
        priceMin: '',
        priceMax: ''
    });
    const [Search, setSearch] = useState('')

    // console.log("Filter..../.", filters, Search);

    

    return (
        <FilterContext.Provider value={{filters, setFilters, Search, setSearch}}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;