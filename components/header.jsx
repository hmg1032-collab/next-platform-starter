---
const logoSrc = "/abhimanyu-logo.png"; // Make sure this image is inside the public/ folder
const tagline = "Your wholesale partner in purity";
---

<div class="logo-section">
  <a href="/" class="logo-link" aria-label="Abhimanyu 3 Ltd">
    <img src={logoSrc} alt="Abhimanyu 3 logo" class="logo-image" />
  </a>
  <p class="tagline">{tagline}</p>
</div>

<style>
  .logo-section {
    background-color: indigo;
    background-image: url(/coffee-background.jpg); /* Optional: add this image to public/ */
    background-size: cover;
    background-position: center;
    padding: 2rem;
    text-align: center;
    border-bottom: 4px solid #fff;
  }

  .logo-image {
    height: 120px;
    width: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
  }

  .tagline {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: white;
    font-style: italic;
    font-weight: 500;
    letter-spacing: 1px;
  }
</style>
