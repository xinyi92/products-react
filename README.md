# Products React App

A React + TypeScript application that fetches and displays products from [DummyJSON](https://dummyjson.com/), with search, pagination, and the ability to add new products.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/xinyi92/products-react.git
   cd products-react
   ```

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open http://localhost:5173 in your browser



## Folder Structure

```
src/
├── api/
│   └── productsApi.ts       # All API calls to DummyJSON
├── components/
│   ├── AddProductForm.tsx   # Modal form for adding a new product
│   ├── Pagination.tsx       # Windowed pagination component
│   ├── SearchBar.tsx        # Controlled search input
│   └── Table.tsx            # Product data table
├── hooks/
│   └── useDebounce.ts       # Generic debounce hook
├── models/
│   └── products.ts          # TypeScript interfaces for API shapes
├── pages/
│   └── Home.tsx             # Main page — orchestrates state and layout
├── App.tsx
├── main.tsx
└── index.css
```


## Key Technical Decisions

### Server-side search instead of client-side filtering
DummyJSON contains a `/products/search` endpoint, so search queries are sent to the API rather than filtering a locally cached list.

### Debounced search (500ms)
A custom `useDebounce` hook delays the API call until the user stops typing, reducing unnecessary network requests on every keystroke.

### Native `<dialog>` element for the modal
Used the browser-native `<dialog>` with `showModal()` instead of a CSS-only overlay / library.

### Optimistic UI for new products
On successful POST, the new product is prepended to local state immediately instead of refetching the full list. This is because DummyJSON is a mock API, the added product won't persist.


## What Would Be Improved With More Time

- **Custom `useFetch` hook** — extract the loading/error/data state pattern from `Home.tsx` into a reusable hook to keep the page component leaner

- **Form error feedback after modal close** — currently if the POST request fails, the modal has already closed before the error is surfaced. A toast notification or keeping the modal open on failure would improve the UX

- **Dynamic table headers** — column headers are currently hardcoded in `Table.tsx`; accepting a column config as a prop would make the component reusable

- **Common reusable components** — input fields and buttons are not yet extracted into shared components, which would allow centralised styling and future validation logic

- **Environment variable for base URL** — the API base URL is hardcoded in `productsApi.ts` and should live in `.env` for easier environment switching

- **Better CSS** — styling is intentionally minimal; a component-level approach (CSS modules or a utility library) would scale better


## Demo Link
https://xinyiproductsreact.netlify.app/
