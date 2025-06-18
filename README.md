# Geer.in - Full Stack Intern Assignment

This project is a simple e-commerce product listing application built as part of an internship assignment. It includes a frontend for displaying products and a backend API for managing them.
![screencapture-localhost-3000-2025-06-18-20_09_14](https://github.com/user-attachments/assets/c217429b-564a-44ea-8483-b5fb88a9f78e)
![screencapture-localhost-3000-products-2025-06-18-20_07_38](https://github.com/user-attachments/assets/ded7533e-ec8f-4160-a30f-60de65ddcaab)

## How to Run the Project

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Saikumar1801/Geer-Intern-Assignment.git
    cd Geer-Intern-Assignment
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a local environment file:**
    Create a `.env.local` file in the root of the project and add the following line:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000/products](http://localhost:3000/products) in your browser to see the product listing page.

## Tech Stack Used

*   **Framework:** Next.js (with App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Backend:** Next.js API Routes
*   **Data Storage:** Local JSON file (`/data/products.json`)
*   **Linting:** ESLint

## Notes or Assumptions

*   The project uses the integrated Next.js API routes (Option A from the assignment).
*   Product data is stored in a simple JSON file for persistence between server restarts.
*   IDs for new products are generated sequentially based on the highest existing ID.
*   **Bonus Features Implemented:**
    *   A dynamic single product page at `/products/[id]`.
    *   API endpoints for `GET /api/products/:id` and `DELETE /api/products/:id`.
