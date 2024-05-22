import React, { useEffect } from 'react';

const Blog = () => {
  // Sample data for demonstration
  const blogs = [
    {
      id: 11,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      summary: 'A powerful story of racial injustice and moral growth set in the American South.',
      imageUrl: 'https://th.bing.com/th/id/OIP.2GMxAqCpItxai1LYbPlmJwHaJJ?rs=1&pid=ImgDetMain',
    },
    {
      id: 10,
      title: '1984',
      author: 'George Orwell',
      genre: 'Science Fiction',
      summary: 'A dystopian novel set in a totalitarian society, exploring themes of surveillance and control.',
      imageUrl: 'https://th.bing.com/th/id/R.f1b4e91832c4615a43955f2d0f5d1795?rik=MW2%2bzNXYZBR9hw&riu=http%3a%2f%2fwww.bookerworm.com%2fimages%2f1984.jpg&ehk=l8MIFhiWt69hsoMix5qeAYOzlObLECDEUWhhsiywKk4%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 1,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      summary: 'A classic romantic novel set in the English countryside, exploring themes of love, marriage, and social class.',
      imageUrl: 'https://i.pinimg.com/originals/3b/47/d1/3b47d124002685f2a3c67e47383232c7.jpg',
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      summary: 'A tragic love story set in the Roaring Twenties, depicting the decadence and disillusionment of the American Dream.',
      imageUrl: 'https://th.bing.com/th/id/OIP.fFaX7nKq5_5gf2nSI3QEUgHaLK?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Coming-of-Age',
      summary: 'A controversial novel following the adventures of Holden Caulfield, a disenchanted teenager navigating the complexities of adulthood.',
      imageUrl: 'https://th.bing.com/th/id/OIP.EvyjZUdEEE2inLY2SpjqRwHaMP?rs=1&pid=ImgDetMain',
    },
    {
      id: 4,
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      summary: 'The first book in the Harry Potter series, following the young wizard Harry as he discovers his magical heritage and battles the dark wizard Voldemort.',
      imageUrl: 'https://images.thenile.io/r1000/9780747554561.jpg',
    },
    {
      id: 5,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      summary: 'An adventure novel set in Middle-earth, following the hobbit Bilbo Baggins on his quest to reclaim a treasure guarded by the dragon Smaug.',
      imageUrl: 'https://images.thenile.io/r1000/9780007458424.jpg',
    },
    {
      id: 6,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      summary: 'A high fantasy epic following the quest to destroy the One Ring and defeat the Dark Lord Sauron, set in the fictional world of Middle-earth.',
      imageUrl: 'https://th.bing.com/th/id/OIP.g_viGXf8jLoK3YdPtufJ2QHaLG?rs=1&pid=ImgDetMain',
    },
    {
      id: 7,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      genre: 'Adventure',
      summary: 'A novel exploring themes of obsession, revenge, and the nature of humanity, following Captain Ahab\'s quest for vengeance against the white whale.',
      imageUrl: 'https://th.bing.com/th/id/OIP.TP3Z8f_8cYTDcPcBgWYFtwHaJl?rs=1&pid=ImgDetMain',
    },
    {
      id: 8,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      genre: 'Gothic Fiction',
      summary: 'A philosophical novel examining the nature of beauty, morality, and the consequences of vanity, centered around the character of Dorian Gray.',
      imageUrl: 'https://th.bing.com/th/id/OIP.BcXkB9A8jtJr5jBcrN9UwAAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 9,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      genre: 'Dystopian',
      summary: 'A dystopian novel set in a patriarchal society called Gilead, where women are oppressed and used for reproduction, following the story of Offred.',
      imageUrl: 'https://th.bing.com/th/id/R.2ae9ecd9cd0c77bf0c8933c8bee6254f?rik=MOrJ9%2ff3s9kdWg&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9780385490818_p0_v5_s1200x630.jpg&ehk=7Y8YXUUUdDOP3al9xnGDV2AFUoxe1ZPoq%2fm2tnFXEZU%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 10,
      title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      author: 'C.S. Lewis',
      genre: 'Fantasy',
      summary: 'The first book in The Chronicles of Narnia series, following four siblings who discover a magical world through a wardrobe and join the fight against the White Witch.',
      imageUrl: 'https://images.thenile.io/r1000/9780060234812.jpg',
    },  
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Welcome to Our Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <a className="block w-full h-96">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-full  object-fill" />
              </a>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{blog.author}</p>
                <p className="text-sm text-gray-600 mb-4">{blog.genre}</p>
                <p className="text-gray-700">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;