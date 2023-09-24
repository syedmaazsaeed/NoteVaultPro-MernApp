

  const About = () => {
    return (
      <div className="about-container">
        <h1 className="about-title">Welcome to NoteVaultPro</h1>
        <p className="about-description">
          Discover the power of organized note-taking with NoteVaultPro, your trusted companion for productivity and creativity.
        </p>
        <div className="about-features">
          <h2 className="feature-title">Key Features:</h2>
          <ul className="feature-list">
            <li>Effortless note creation and organization</li>
            <li>Customizable tags for easy categorization</li>
            <li>Quick search for instant access to your notes</li>
            <li>Secure cloud-synced storage for peace of mind</li>
          </ul>
        </div>
        <p className="about-contribution">
          Developed with passion by <b>Syed Maaz Saeed</b>
        </p>
        <p className="about-contact">
        Contact our customer support at <a href="mailto:syedmaazsaeeddev@gmail.com"
        style={{ textDecoration:"none"}}
        >syedmaazsaeeddev@gmail.com</a>
        </p>
      </div>
    );
  }
export default About;
