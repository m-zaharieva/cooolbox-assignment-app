# Company Browser App

A React + TypeScript + Vite application for searching, filtering, and sorting an in-memory dataset of companies and their structured information.

---

## 🚀 Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/m-zaharieva/cooolbox-assignment-app.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. **Open the app:**
    - Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Features

-   **Search:**

    -   Reacts after 3+ characters.
    -   Searches across all fields (including nested fields like CEO name, revenue, etc.).
    -   Supports partial matches, exact matches, and numeric comparisons (e.g., `founded_year > 2000`).
    -   Debounced input for performance.

-   **Sorting:**

    -   Sort by name, revenue, founded year, or company type.
    -   Custom comparator functions for different data types.

-   **Filtering:**

    -   Filter by industry and company type using dropdowns.
    -   Multiple filters can be applied at once.

-   **Responsive UI:**

    -   Clean, responsive layout.
    -   “No results found” message when no companies match.

-   **Bonus Extensions:**
    -   **Advanced search:** Supports logical operators in queries (e.g., `industry:Finance AND revenue>1000000`).
    -   **Debounced search input:** Reduces unnecessary filtering while typing.
    -   **Extended data model:** Includes board members, offices, and stock info for each company.
    -   **Testable logic:** Core search, filter, and sort logic is separated into utility functions for easy maintaining.

---

## 📝 Notes on Complex Logic & Extensions

-   **Custom Search Algorithm:**  
    The search logic parses the query to support partial matches, exact matches, and numeric comparisons. It also supports logical operators like `AND` for advanced queries.

-   **Debounced Search:**  
    The search input uses a debounce hook to delay filtering until the user stops typing, improving performance and UX.

-   **Extensible Data Model:**  
    The company data includes related models such as `board_members`, `offices`, and `stock_info`, making the app easily extensible for future requirements.

-   **Testability:**  
    Core logic for searching, sorting, and filtering is extracted into utility files, making it easy to write and run unit tests.

---

## 📂 Project Structure

```
src/
  components/
    CompanyBrowser/
      CompanyItem/...
      SearchBar/...
    Header/...
    Icons/...
  data/
    data.json
  hooks/
    useDebouncedValue.ts
  types/
    dataTypes.ts
  utils/
    searchUtils.ts
    sortUtils.ts
    utils.ts
  App.tsx
  main.tsx
```

---

## 📢 Feedback & Improvements

-   The app is designed for easy extensibility and testability.
-   For further improvements, consider adding more filters, advanced query parsing, or integrating a state management library for larger datasets.

---
