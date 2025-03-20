import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">About PawFriends</h1>
          <p className="about-subtitle">Our mission is to find loving homes for pets in need</p>
        </div>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              PawFriends was founded in 2010 by a group of animal lovers who saw a need for a better way to connect
              homeless pets with loving families. What started as a small local initiative has grown into a nationwide
              network of shelters and foster homes, all working together to save animals and enrich human lives through
              adoption.
            </p>
            <p>
              Over the years, we've helped thousands of pets find their forever homes. We believe that every animal
              deserves love, care, and respect, and we work tirelessly to ensure that each pet in our care receives the
              attention they need until they find their perfect match.
            </p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/500x300?text=Our+Story" alt="PawFriends volunteers with pets" />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              At PawFriends, our mission is to end pet homelessness through adoption, education, and spay/neuter
              programs. We strive to create a world where every pet has a loving home and where people understand the
              importance of responsible pet ownership.
            </p>
            <p>
              We believe in treating each animal as an individual, understanding their unique needs, and finding them
              homes where they will thrive. We also work to educate the public about animal welfare issues and provide
              resources to help people be the best pet parents they can be.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://via.placeholder.com/500x300?text=Our+Mission"
              alt="Happy adopted pets with their families"
            />
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/200x200?text=Jane+Doe" alt="Jane Doe" className="team-photo" />
              <h3>Jane Doe</h3>
              <p className="team-role">Founder & Executive Director</p>
              <p className="team-bio">
                Jane has over 15 years of experience in animal welfare and is passionate about creating sustainable
                solutions to pet homelessness.
              </p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/200x200?text=John+Smith" alt="John Smith" className="team-photo" />
              <h3>John Smith</h3>
              <p className="team-role">Shelter Manager</p>
              <p className="team-bio">
                John oversees the day-to-day operations of our main shelter facility and ensures all animals receive
                proper care.
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/200x200?text=Emily+Johnson"
                alt="Emily Johnson"
                className="team-photo"
              />
              <h3>Emily Johnson</h3>
              <p className="team-role">Adoption Coordinator</p>
              <p className="team-bio">
                Emily works directly with potential adopters to help them find their perfect pet match and ensure
                successful adoptions.
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/200x200?text=Michael+Brown"
                alt="Michael Brown"
                className="team-photo"
              />
              <h3>Michael Brown</h3>
              <p className="team-role">Veterinarian</p>
              <p className="team-bio">
                Dr. Brown provides medical care for all the animals in our shelter and ensures they're healthy before
                adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Pets Adopted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Volunteers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Partner Shelters</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of Service</div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2 className="section-title">What Adopters Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Adopting Max from PawFriends was the best decision we ever made. The process was smooth, and the
                  staff was incredibly helpful in finding us the perfect match for our family."
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60?text=Sarah" alt="Sarah" className="author-photo" />
                <div>
                  <h4>Sarah & Max</h4>
                  <p>Adopted 2 years ago</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "I was nervous about adopting a cat, but the team at PawFriends made it so easy. They matched me with
                  Luna, who has been the perfect companion. I couldn't imagine life without her now!"
                </p>
              </div>
              <div className="testimonial-author">
                <img src="https://via.placeholder.com/60x60?text=John" alt="John" className="author-photo" />
                <div>
                  <h4>John & Luna</h4>
                  <p>Adopted 1 year ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

