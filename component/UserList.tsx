import React, { useState, useEffect, useMemo } from "react";
import FilterComponent from './Filters';
import SorterComponent from './Sorters';
import { UserData, Filters, Sorters } from './type';


/**
 * Есть одна гадкая проблема (блять как я ее ненавижу)
 * Неверно расчет идет скрол области, обычно я такое решаю через ResizeObserver (не разумно для данной задачи)
 * фильтрацию надо бы сделать мошнее (бейджи отмены на поля на которых филтры висят)
 */
export default function({ items }: { items: UserData[] }) {
    const [filters, setFilters] = useState<Filters>();
    const [sorters, setSorters] = useState<Sorters>();
    const [scrollTop, setScrollTop] = useState(0);


    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(e.currentTarget.scrollTop);
    }
    // Загружаем фильтры и сортировки из localStorage
    useEffect(()=> {
        const savedFilters = localStorage.getItem("filters");
        const savedSorters = localStorage.getItem("sorters");

        if (savedFilters) setFilters(JSON.parse(savedFilters));
        else setFilters({
            age: {},
            name: {},
            city: {}
        });

        if (savedSorters) setSorters(JSON.parse(savedSorters));
        else setSorters({});
    }, []);
    // Сохраняем фильтры в localStorage
    useEffect(()=> {
        if(filters) localStorage.setItem("filters", JSON.stringify(filters));
    }, [filters]);
    // Сохраняем сортировки в localStorage
    useEffect(()=> {
        if(sorters) localStorage.setItem("sorters", JSON.stringify(sorters));
    }, [sorters]);


    // Фильтрация и сортировка данных
    const filteredAndSortedItems = useMemo(()=> {
        let data = [...items];

        // Фильтрация по возрасту
        if (filters?.age?.diapason) {
            const [min, max] = filters.age.diapason;
            data = data.filter((user) => user.age >= min && user.age <= max);
        }
        // Фильтрация по name
        if (filters?.name?.findString) {
            data = data.filter((user) =>
                user.name.toLowerCase().includes(filters.name.findString!.toLowerCase())
            );
        }
        // Фильтрация по city
        if (filters?.city?.findString) {
            data = data.filter((user) =>
                user.city.toLowerCase().includes(filters.city.findString!.toLowerCase())
            );
        }

        // Сортировка age
        if (sorters?.age) {
            data.sort((a, b) =>
                sorters.age === "asc" 
                    ? a.age - b.age 
                    : b.age - a.age
            );
        }
        // Сортировка city
        if (sorters?.city) {
            data.sort((a, b) =>
                sorters.city === "asc"
                    ? a.city.localeCompare(b.city)
                    : b.city.localeCompare(a.city)
            );
        }

        return data;
    }, [items, filters, sorters]);


    return (
        <div className="UserList">
            {/* панель филтрлв */}
            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginBottom: 5
             }}>
                {/* Фильтры */}
                <FilterComponent 
                    filters={filters ?? {}}
                    useSetFilters={setFilters}
                />

                {/* Сортировка */}
                <SorterComponent
                    sorters={sorters}
                    useSetSorters={setSorters}
                    useSetFilters={setFilters}
                />
            </div>

            {/* Таблица */}
            <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    height: '95%',
                    width: "100%", 
                    border: "1px solid #00000036" 
                }}
            >
                {/* Заголовок таблицы */}
                <div style={{ 
                            display: "flex", 
                            flexDirection: 'row',
                            background: "#2b324794", 
                            fontWeight: "bold", 
                            padding: "10px 0",
                            color: 'silver'
                        }}
                    >
                    <div style={{ flex: "1", textAlign: "center" }}>ID</div>
                    <div style={{ flex: "2", textAlign: "center" }}>Имя</div>
                    <div style={{ flex: "1", textAlign: "center" }}>Возраст</div>
                    <div style={{ flex: "2", textAlign: "center" }}>Город</div>
                </div>

                {/* Контейнер для скролла */}
                <div
                    style={{ 
                        overflowY: "auto", 
                        display: "flex", 
                        flexDirection: "column", 
                        height: '100%',
                        flexGrow: 1
                    }}
                    onScroll={handleScroll}
                >
                    { filteredAndSortedItems.map((user) => (
                        <div key={user.id} className="Row">
                            <div 
                                className="Cell" 
                                id="id" 
                                style={{ flex: "1", textAlign: "center" }}
                            >
                                { user.id }
                            </div>
                            <div 
                                className="Cell" 
                                id="name" 
                                style={{ flex: "2", textAlign: "center" }}
                            >
                                { user.name }
                            </div>
                            <div 
                                onClick={()=> {
                                    setFilters((prev)=> {
                                        if(user.age !== prev.age.diapason?.[0]) return {
                                            ...prev,
                                            age: { ...prev.age, diapason: [user.age, user.age] },
                                        }
                                         return {
                                            ...prev,
                                            age: { ...prev.age, diapason: [0, 100] },
                                        }
                                    });
                                }}
                                className="Cell" 
                                id="age" 
                                style={{ flex: "1", textAlign: "center" }}
                            >
                                { user.age }
                            </div>
                            <div 
                                onClick={()=> {
                                    setFilters((prev)=> {
                                        if(user.city !== prev.city.findString) return {
                                            ...prev,
                                            city: { ...prev.city, findString: user.city },
                                        }
                                         return {
                                            ...prev,
                                            city: { ...prev.city, findString: undefined },
                                        }
                                    });
                                }}
                                className="Cell" 
                                id="city" 
                                style={{ flex: "2", textAlign: "center" }}
                            >
                                { user.city }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}