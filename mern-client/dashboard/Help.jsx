import React from 'react'

const Help = () => {
  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col shadow-2xl bg-white py-8 px-4'>
      <h1 className='text-3xl font-bold text-center text-red-700'>Help Guidelines!</h1>
        <br/>
      <section>
        <p>Welcome to our Help Guidelines! Here you'll find information on how to navigate and use our site, as well as answers to common questions. Our goal is to ensure you have a seamless experience.</p>
      </section>
        <br/>
      <section>
        <h2>1. Getting Started</h2>
        <p>To get started, you need to create an account. Click on the 'Sign Up' button, fill in your details, and submit. After registering, log in using your email and password.</p>
      </section>
        <hr/>
        <br/>
      <section>
        <h2>2. Navigating the Site</h2>
        <p>Our homepage features the latest blog posts, popular categories, and a search bar for easy access to content. Use the navigation bar at the top to explore different sections like <a href="/About" className='text-1xl font-bold text-red-700'>About</a>, <a href="/Shop" className='text-1xl font-bold text-red-700'>Shop</a> and <a href="/admin/dashboard" className='text-1xl font-bold text-red-700'>Sell Your Books</a>.</p>
      </section>
        <hr/>
        <br/>
      <section>
        <h2>FAQ</h2>
        <p><strong>Q: How do I subscribe to the newsletter?</strong></p>
        <p>A: Enter your email in the subscription box at the bottom of any page and click 'Subscribe.'</p>
        <p><strong>Q: How can I contact customer support?</strong></p>
        <p>A: Visit our 'Contact' page and fill out the contact form, or email us at support@example.com.</p>
      </section>

      <section>
        <h2>Privacy and Security</h2>
        <p>We value your privacy and security. Read our full privacy policy <a href="/privacy">here</a>. We use industry-standard security measures to protect your personal information.</p>
      </section>

      <section>
        <h2>Feedback and Suggestions</h2>
        <p>We welcome your feedback and suggestions! Please visit our 'Contact' page and fill out the feedback form to share your thoughts.</p>
      </section>
    </div>
  )
}

export default Help