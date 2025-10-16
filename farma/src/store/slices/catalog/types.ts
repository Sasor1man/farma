export interface BrandFilter {
    checkboxes: string[]
    availability: boolean
    priceMin: number
    priceMax: number
}

export interface ICatalogState {
    filter: BrandFilter
    isLoading: boolean
}