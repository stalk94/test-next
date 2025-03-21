

export type UserData = {
    id: number
    name: string
    age: number
    city: string
}

export type PreinstalVariant = 1 | 2 | 3;


export type Filters = {
    age: {
        diapason?: [number, number]
        preinstall?: PreinstalVariant
    }
    name: {
        findString?: string
        preinstall?: string
    }
    city: {
        findString?: string
        preinstall?: string
    }
}

export type Sorters = {
    age?: "asc" | "desc"
    city?: "asc" | "desc"
}