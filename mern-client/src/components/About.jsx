import React from 'react'

const about = () => {
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>About Us</h2>
      <div className='mt-16 py-12 bg-yellow-100 px-4 lg:px-24'>
        <p>Welcome to our Book Store, your go-to destination for insightful buying/selling book, book reviews, and the latest literary news. Whether you're an avid reader or a casual book lover, we have something for everyone.
        Our mission is to cultivate a community where readers can discover new books, share their favorite reads, and engage in thoughtful discussions. We believe in the transformative power of literature and strive to bring you the best of the literary world.
        </p>
        <p><span className='font-bold'>Our Story</span> was born out of a lifelong passion for books. Founded by [Your Name], an avid reader and aspiring author, the site started as a personal blog and has grown into a vibrant community for book enthusiasts.</p>
      </div>

      <br/>
      <br/>
      <ul>
        <li><strong>Book Reviews:</strong> Honest and in-depth reviews of the latest releases and timeless classics.</li>
        <li><strong>Author Interviews:</strong> Exclusive conversations with authors about their work and creative process.</li>
        <li><strong>Reading Lists:</strong> Curated lists to help you find your next great read.</li>
      </ul>
      <br/>
      <hr/>
      <br/>
      <p>Join our community of book lovers! Subscribe to our newsletter for the latest updates, follow us on social media, and participate in our lively discussions.</p>
      
    </div>
  )
}

export default about