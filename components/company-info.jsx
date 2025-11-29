"use client";

export function CompanyInfo({ name, tagline, about, products, contact }) {
  return (
    <div className="company-info">
      <header className="header">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </header>

      <main className="main">
        <section className="about">
          <h2>About Us</h2>
          <p>{about}</p>
        </section>

        <section className="products">
          <h2>Our Products</h2>
          <p>{products}</p>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 {name}. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .company-info {
          max-width: 960px;
          margin: 0 auto;
          padding: 20px;
          font-family: sans-serif;
        }
        .header {
          background-color: #f0f0f0;
          padding: 20px;
          text-align: center;
        }
        .main {
          padding: 20px;
        }
        .about,
        .products,
        .contact {
          margin-bottom: 20px;
        }
        .footer {
          background-color: #f0f0f0;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
