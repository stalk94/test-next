import React from "react";
import { UserData, Filters, Sorters } from './type';



export default function ({ filters, useSetFilters }) {


    return(
        <div style={{}}>
            <label>
                Возраст: от
                <input style={{width:'5%', marginLeft:'2%', marginRight:'2%', marginTop:'0.8%'}}
                    type="number"
                    value={filters?.age?.diapason?.[0] || ""}
                    onChange={(e) =>
                        useSetFilters((prev) => ({
                            ...prev,
                            age: { ...prev.age, diapason: [+e.target.value, prev.age.diapason?.[1] || 100] },
                        }))
                    }
                />
                до
                <input style={{width:'5%', marginLeft:'2%', marginRight:'4%'}}
                    type="number"
                    value={filters?.age?.diapason?.[1] || ""}
                    onChange={(e) =>
                        useSetFilters((prev) => ({
                            ...prev,
                            age: { ...prev.age, diapason: [prev.age.diapason?.[0] || 0, +e.target.value] },
                        }))
                    }
                />
            </label>

            <label>
                Имя:
                <input style={{marginLeft:'2%', marginRight:'2%'}}
                    type="text"
                    value={filters?.name?.findString || ""}
                    onChange={(e) =>
                        useSetFilters((prev) => ({
                            ...prev,
                            name: { ...prev.name, findString: e.target.value },
                        }))
                    }
                />
            </label>
        </div>
    );
}