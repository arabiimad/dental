# Simple Dental Supply Website

This project is a simple static website for a hypothetical dental supply business. It includes a homepage, about page, products page, and a contact page.

## Structure

The website is structured as follows:

-   `index.html`: The main homepage.
-   `about.html`: Page describing the company.
-   `products.html`: Page showcasing product categories.
-   `contact.html`: Page with contact information and a form.
-   `css/`: Folder containing the stylesheet.
    -   `style.css`: Main CSS file for styling all pages.
-   `js/`: Folder containing JavaScript files.
    -   `main.js`: Main JavaScript file, currently used for fade-in animations on scroll.
-   `images/`: (Currently contains placeholder references, actual image files would go here)
    -   `logo_placeholder.png` (Referenced in HTML, actual file not present)
    -   `product_placeholder.png` (Referenced in HTML, actual file not present)

## How to View Locally

To view this website locally:

1.  **Clone or Download:** If this were a Git repository, you would clone it. Otherwise, ensure all files (`.html` files, `css` folder, `js` folder) are downloaded and kept in their respective directory structure.
2.  **Navigate to the Directory:** Open your file explorer and navigate to the root directory where `index.html` is located.
3.  **Open in Browser:**
    *   Right-click on any of the `.html` files (e.g., `index.html`).
    *   Choose "Open with" and select your preferred web browser (e.g., Chrome, Firefox, Safari, Edge).
    *   Alternatively, you can open your web browser and then use the "File" > "Open File..." menu to navigate to and select an `.html` file.

The website should now display in your browser. You can navigate between pages using the links in the header.

## Key Features Implemented

*   Responsive design basics (via viewport meta tag).
*   Consistent header, navigation, and footer across pages.
*   CSS Flexbox for layout.
*   Modern color palette and typography (Open Sans, Montserrat via Google Fonts).
*   Hover effects on navigation links and buttons.
*   Fade-in animations for main content sections on scroll (using Intersection Observer API in `js/main.js`).
*   SEO-friendly unique titles and meta descriptions for each page.
*   Placeholder `alt` attributes for all images.
*   Basic HTML structure for a contact form.

## Placeholder Content

Much of the content (company name, specific product details, team member info, contact details) is placeholder text (e.g., "[Your Company Name]", "123 Dental Avenue"). This would need to be replaced with actual business information. Image `src` attributes also point to non-existent placeholder image files.
