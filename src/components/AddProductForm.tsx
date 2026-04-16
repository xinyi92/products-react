import { useState } from "react"
import type { NewProductForm } from "../models/products"

interface Props {
    onClose: () => void
    onSubmit: (product: NewProductForm) => void
}

function AddProductForm({ onClose, onSubmit }: Props) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [formError, setFormError] = useState<string | null>(null)
    const handleSubmit = () => {
        if (!title || !price) {
            setFormError('Title and price are required')
            return
        }
        setFormError(null)
        onSubmit({ title, price: Number(price) })
        setTitle('')
        setPrice('')
    }
    const handleClose = () => {
        setTitle('')
        setPrice('')
        onClose()
    }

    return (
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add Product</h2>
            <button className="close-button" onClick={handleClose}>X</button>
            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
            {formError && <p style={{ color: 'red', fontSize: '14px' }}>{formError}</p>}
            <div className="modal-actions">
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

export default AddProductForm