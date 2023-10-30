type MainPageState = {
    dataValue: Planet[]
}
type Planet = {
    name: string
    diameter: string
}

type SearchResult = {
    count: number;
    next: null;
    previous: null;
    results: Planet[];
}

type TopBarProps = {
    changeValueFunction: (data: Planet[]) => void
}

export type {MainPageState, Planet, SearchResult, TopBarProps}