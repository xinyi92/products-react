import type { NewProductForm, ProductRespondModel } from "../models/products"

interface FetchProductParams {
    limit?: number
    skip?: number
    searchValue?: string
}

// TODO: move to utils folder
const generateQuery = (params?: FetchProductParams): URLSearchParams => {
    const query = new URLSearchParams()
    if (params?.limit != null) query.append('limit', params.limit.toString())
    if (params?.skip != null) query.append('skip', params.skip.toString())
    if (params?.searchValue) query.append('q', params.searchValue)
    query.append('sortBy', 'id')
    query.append('order', 'desc')
    return query
}

export const fetchProducts = async (
    params?: FetchProductParams
): Promise<ProductRespondModel> => {
    const query = generateQuery(params)

    const res = await fetch(`https://dummyjson.com/products?${query}`)

    if (!res.ok) throw new Error('Failed to fetch products')

    return res.json()
}

export const searchProducts = async (params?: FetchProductParams): Promise<ProductRespondModel> => {
    const query = generateQuery(params)
    const res = await fetch(`https://dummyjson.com/products/search?${query}`)

    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }

    return res.json()
}

export const addProducts = async (data: NewProductForm) => {
    const res = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        throw new Error('Failed to add product')
    }

  return res.json()
}