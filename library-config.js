/**
 * ============================================================
 * ICF-SL DIGITAL LIBRARY - BOOK CONFIGURATION FILE
 * ============================================================
 * 
 * HOW TO ADD BOOKS:
 * -----------------
 * 1. Find the section where you want to add the book (english, mathematics, etc.)
 * 2. Add a new book object to the "books" array with:
 *    - title: The display name of the book
 *    - url: Direct link to the PDF file (must be publicly accessible)
 * 
 * SUPPORTED PDF SOURCES:
 * ----------------------
 * - GitHub raw files (recommended): https://raw.githubusercontent.com/...
 * - Google Drive (with direct link): Must be shared publicly
 * - Dropbox (with direct link): Change ?dl=0 to ?dl=1
 * - Any direct PDF URL that allows CORS or can be proxied
 * 
 * EXAMPLE BOOK ENTRY:
 * -------------------
 * {
 *   title: 'My Book Title',
 *   url: 'https://raw.githubusercontent.com/username/repo/main/book.pdf'
 * }
 * 
 * ============================================================
 */

const libraryConfig = {
  
  // ============================================================
  // LIBRARY SECTIONS
  // ============================================================
  // Each section appears as a tab in the library navigation
  // The 'all' section automatically aggregates books from all sections
  
  sections: [
    
    // ----------------------------------------------------------
    // ALL BOOKS (Auto-generated - do not add books here)
    // ----------------------------------------------------------
    {
      id: 'all',
      name: 'All Books',
      icon: '📚',
      description: 'Browse all publications'
      // No books array - this section auto-aggregates from other sections
    },
    
    // ----------------------------------------------------------
    // ENGLISH / LANGUAGE ARTS
    // ----------------------------------------------------------
    {
      id: 'english',
      name: 'English',
      icon: '📖',
      description: 'Language and literacy resources',
      books: [
        {
          title: 'Colouring Book for Kids',
          url: 'https://raw.githubusercontent.com/mohamedsillahkanu/book-shelf/c8b67ee6bd33025f8a9575008947d1ab97b12930/COLOURING%20BOOK%20FOR%20KIDS%20(2).pdf'
        },
        // ADD MORE ENGLISH BOOKS BELOW:
        // {
        //   title: 'Book Title Here',
        //   url: 'https://example.com/path/to/book.pdf'
        // },
      ]
    },
    
    // ----------------------------------------------------------
    // MATHEMATICS
    // ----------------------------------------------------------
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '📐',
      description: 'Math concepts and exercises',
      books: [
        // ADD MATHEMATICS BOOKS BELOW:
        // {
        //   title: 'Basic Arithmetic Workbook',
        //   url: 'https://example.com/math-workbook.pdf'
        // },
      ]
    },
    
    // ----------------------------------------------------------
    // SCIENCE
    // ----------------------------------------------------------
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      description: 'Science and experiments',
      books: [
        // ADD SCIENCE BOOKS BELOW:
        // {
        //   title: 'Introduction to Biology',
        //   url: 'https://example.com/biology.pdf'
        // },
      ]
    },
    
    // ----------------------------------------------------------
    // HEALTH
    // ----------------------------------------------------------
    {
      id: 'health',
      name: 'Health',
      icon: '🏥',
      description: 'Health education resources',
      books: [
        // ADD HEALTH BOOKS BELOW:
        // {
        //   title: 'Malaria Prevention Guide',
        //   url: 'https://example.com/malaria-guide.pdf'
        // },
        // {
        //   title: 'Nutrition Handbook',
        //   url: 'https://example.com/nutrition.pdf'
        // },
      ]
    },
    
    // ----------------------------------------------------------
    // TECHNOLOGY
    // ----------------------------------------------------------
    {
      id: 'technology',
      name: 'Technology',
      icon: '💻',
      description: 'IT and digital skills',
      books: [
        // ADD TECHNOLOGY BOOKS BELOW:
        // {
        //   title: 'Computer Basics for Beginners',
        //   url: 'https://example.com/computer-basics.pdf'
        // },
      ]
    },
    
    // ----------------------------------------------------------
    // ADD NEW SECTIONS BELOW
    // ----------------------------------------------------------
    // Copy this template to add a new section:
    // {
    //   id: 'unique-section-id',
    //   name: 'Section Display Name',
    //   icon: '📚',  // Use any emoji
    //   description: 'Brief description of section',
    //   books: [
    //     {
    //       title: 'Book Title',
    //       url: 'https://example.com/book.pdf'
    //     }
    //   ]
    // },
    
  ]
};

// ============================================================
// EXPORT FOR USE IN MAIN APPLICATION
// ============================================================
// If using as ES6 module:
// export default libraryConfig;

// If using as regular script (current setup):
// The main HTML file should reference this config
