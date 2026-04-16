interface Props {
    page: number
    totalPages: number
    onPageChange: (page: number) => void
}


function Pagination({ page, totalPages, onPageChange }: Props) {

    const getPages = () => {
        const pages: (number | '...')[] = []
        const delta = 1 // pages on each side of current

        const left = page - delta   // window start
        const right = page + delta  // window end

        // always add page 1
        pages.push(1)

        // left ellipsis — if window starts far from page 1
        if (left > 2) pages.push('...')

        // window around current page (skip 1 and totalPages, handled separately)
        for (let i = Math.max(2, left); i <= Math.min(totalPages - 1, right); i++) {
            pages.push(i)
        }

        // right ellipsis — if window ends far from last page
        if (right < totalPages - 1) pages.push('...')

        // always add last page (if more than 1 page)
        if (totalPages > 1) pages.push(totalPages)

        return pages
    }
    return (
        <div className="pagination-wrapper">
            <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>‹</button>

            {getPages().map((p, index) => (
                <button
                    key={index}
                    disabled={p === '...' || page === p}
                    onClick={() => typeof p === 'number' && onPageChange(p)}
                >
                    {p}
                </button>
            ))}

            <button disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>›</button>
        </div>
    )
}

export default Pagination