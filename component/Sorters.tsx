import React from "react";
import { UserData, Filters, Sorters } from './type';



export default function ({ sorters, useSetSorters, useSetFilters }) {
    const useChangeValueSort =(type: 'age' | 'city')=> {
        useSetSorters((prev) => {
            if (prev[type] === "asc") return { ...prev, [type]: "desc" };
            else if (prev[type] === "desc") return { ...prev, [type]: undefined };
            else return { ...prev, [type]: "asc" };
        });
    }


    return(
        <div style={{marginLeft:'auto', marginRight:'40px'}}>
            <button className="sort-button" 
                onClick={()=> useChangeValueSort('age')}
            >
                по возрасту 
                { sorters?.age === "asc" && "↓" }
                { sorters?.age === "desc" && "↑" }
            </button>

            <button className="sort-button" 
                onClick={()=> useChangeValueSort('city')}
            >
                по городу 
                { sorters?.city === "asc" && "↓" }
                { sorters?.city === "desc" && "↑" }
            </button>

            <button className="reset-button" onClick={() => {
                useSetFilters({ age: {}, name: {}, city: {} });
                useSetSorters({});
            }}>
                🗑️
            </button>
        </div>
    );
}