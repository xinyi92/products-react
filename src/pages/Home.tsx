import { useEffect, useRef, useState } from "react"
import type { NewProductForm, ProductRespondModel } from "../models/products"
import { addProducts, fetchProducts, searchProducts } from "../api/productsApi"
import { useDebounce } from "../hooks/useDebounce"
import Table from "../components/Table"
import Pagination from "../components/Pagination"
import AddProductForm from "../components/AddProductForm"
import SearchBar from "../components/SearchBar"

function Home() {
    const [data, setData] = useState<ProductRespondModel | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState(1)
    const pageSize = 30

    const dialogRef = useRef<HTMLDialogElement>(null)

    function toggleDialog() {
        if (!dialogRef.current) return
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        dialogRef.current.hasAttribute('open') ? dialogRef.current.close() : dialogRef.current.showModal()
    }

    async function addNewProduct(newProduct: NewProductForm) {
        try {
            const result = await addProducts(newProduct)
            setData(prev => {
                if (!prev) return prev
                return { ...prev, products: [result, ...prev.products], total: prev.total + 1 }
            })
        } catch (error) {
            setError(`Failed to add product: ${error}`)
        }
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true)
                setError(null)

                const skip = (page - 1) * pageSize
                const result = debouncedSearch
                    ? await searchProducts({limit: pageSize, skip: skip, searchValue: debouncedSearch})
                    : await fetchProducts({limit: pageSize, skip: skip})

                setData(result)
            } catch (error) {
                setError(`Error: ${error}`)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [debouncedSearch, page])

    useEffect(() => {
        setPage(1)
    }, [debouncedSearch])

    return (
        <>
            <h1>Products Page</h1>

            <section id="action-section">
                <SearchBar value={search} onChange={setSearch}/>
                <button onClick={toggleDialog}>
                    Add Products
                </button>
            </section>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Loading...</p>}

            {!loading && data?.products && <Table data={data.products} />}

            {!loading && data && (
                <Pagination
                    page={page}
                    totalPages={Math.ceil(data.total / pageSize)}
                    onPageChange={setPage}
                />
            )}

            <dialog style={{width: '50%', height: '50%'}} ref={dialogRef}>
                <AddProductForm
                    onClose={toggleDialog}
                    onSubmit={(product) => {
                        addNewProduct(product)
                        toggleDialog()
                    }}
                />
            </dialog>
        </>
    )
}

export default Home