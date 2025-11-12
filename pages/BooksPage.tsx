import React, { useEffect } from 'react';
import { books } from '../constants';

const BooksPage: React.FC = () => {
 
   useEffect(() => {
       document.title = "Authored Books | Dr. Ashutosh Mishra | Supreme Court Advocate | Professor of Management & Law | Author | Psychologist | NLP Master Practitioner | PhD Guide | PMP | IIM Ahmedabad Alumnus";
       const metaDescription = document.querySelector('meta[name="description"]');
       if (metaDescription) {
         metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
       }
     }, []);

  return (
    <div className="bg-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="page-heading-books">
          <h1 id="page-heading-books" className="text-4xl font-extrabold font-heading text-primary">Authored Books</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A collection of literary works by Dr. Ashutosh Mishra, spanning law, social issues, education, and more.
          </p>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8" aria-labelledby="page-heading-books">
          {books.map((book) => (
            <article key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300" aria-labelledby={`book-title-${book.id}`}>
              <div className="aspect-[2/3] w-full">
                <img src={book.image} alt={`Cover of ${book.title}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 id={`book-title-${book.id}`} className="text-sm md:text-md font-bold font-heading text-secondary flex-grow leading-tight">{book.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-2">{book.description}</p>
                <a 
                  href={book.buyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 w-full text-center bg-primary text-white hover:bg-primary/90 font-semibold py-2 px-3 rounded-full text-xs md:text-sm transition duration-300"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BooksPage;