import React from 'react';
import SEO from '../SEO';
import { books } from '../constants';

const BooksPage: React.FC = () => {
  return (
    <div className="bg-light-bg py-16">
      <SEO 
        title="Authored Books - Dr. Ashutosh Mishra"
        description="Explore a collection of books authored by Dr. Ashutosh Mishra on topics ranging from law and social issues to education and management."
        keywords="Dr. Ashutosh Mishra books, law books, education books, social issues books, management books, authored books"
        pathname="/books"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-heading text-primary">Authored Books</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A collection of literary works by Dr. Ashutosh Mishra, spanning law, social issues, education, and more.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[2/3] w-full">
                <img src={book.image} alt={`Cover of ${book.title}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm md:text-md font-bold font-heading text-secondary flex-grow leading-tight">{book.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-2">{book.description}</p>
                <a 
                  href={book.buyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 w-full text-center bg-primary text-white hover:bg-primary/90 font-semibold py-2 px-3 rounded-full text-xs md:text-sm transition duration-300"
                >
                 Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
