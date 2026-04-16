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

| Decision | Reasoning |
|---|---|
| Server-side search | Backend search is suitable if records more than 1000. |
| Use popup dialog for insert | Users can do everything in single page. |
| Reusable Components | SearchBar, Pagination, etc are reusable components that can be used in other pages. Reduces development time. |



## What Would Be Improved With More Time

| Improvement | Details |
|---|---|
| Table component enhancement | Dynamic table headers, sortable and more. |
| Responsive design | Implement SCSS, handle different screen size layout. |
| Improve file structure designs | Considering featured base slicing for pages. |
| State Management | Considering using state management if implemented logins, permission, chat / notifications, etc. |



## Demo Link
https://xinyiproductsreact.netlify.app/
