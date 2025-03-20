"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "./PetDetails.css"

// This would normally come from an API
const allPets = [
  {
    _id: "1",
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: 2,
    gender: "Male",
    size: "Large",
    color: "Golden",
    traits: ["Friendly", "Playful", "Good with kids", "Good with other dogs", "Trained"],
    description:
      "Max is a loving and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets, and he's already house-trained. Max is looking for an active family who can give him plenty of exercise and attention.",
    imageUrl: "https://via.placeholder.com/600x400?text=Max",
    additionalImages: [
      "https://via.placeholder.com/300x200?text=Max+1",
      "https://via.placeholder.com/300x200?text=Max+2",
      "https://via.placeholder.com/300x200?text=Max+3",
    ],
    adoptionFee: 250,
    location: "Pet City Shelter",
    address: "123 Adoption Street, Pet City, PC 12345",
    medicalInfo: "Neutered, Vaccinated, Microchipped",
    story:
      "Max was found as a stray wandering near a park. He was thin and scared but friendly. After being brought to our shelter, he quickly became a staff favorite with his playful personality. Now he's healthy and ready for his forever home!",
  },
  {
    _id: "2",
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: 1,
    gender: "Female",
    size: "Medium",
    color: "Cream with brown points",
    traits: ["Calm", "Independent", "Affectionate", "Vocal", "Intelligent"],
    description:
      "Luna is a beautiful Siamese cat with striking blue eyes. She's quite vocal and will let you know when she wants attention. Luna enjoys playing with toys and lounging in sunny spots. She's looking for a quiet home where she can be the queen of the castle.",
    imageUrl: "https://via.placeholder.com/600x400?text=Luna",
    additionalImages: [
      "https://via.placeholder.com/300x200?text=Luna+1",
      "https://via.placeholder.com/300x200?text=Luna+2",
      "https://via.placeholder.com/300x200?text=Luna+3",
    ],
    adoptionFee: 150,
    location: "Pet City Shelter",
    address: "123 Adoption Street, Pet City, PC 12345",
    medicalInfo: "Spayed, Vaccinated, Microchipped",
    story:
      "Luna was surrendered to our shelter when her previous owner had to move to a place that didn't allow pets. She's a sweet girl who loves attention and would make a wonderful companion.",
  },
]

const PetDetails = () => {
  const { id } = useParams()
  const [pet, setPet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState("")

  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      const foundPet = allPets.find((p) => p._id === id)
      if (foundPet) {
        setPet(foundPet)
        setActiveImage(foundPet.imageUrl)
      }
      setLoading(false)
    }, 500) // Simulate network delay
  }, [id])

  if (loading) {
    return (
      <div className="container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading pet details...</p>
        </div>
      </div>
    )
  }

  if (!pet) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Pet Not Found</h2>
          <p>Sorry, we couldn't find the pet you're looking for.</p>
          <Link to="/pets" className="btn btn-primary">
            Browse Available Pets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pet-details-page">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <Link to="/pets">Pets</Link> &gt; <span>{pet.name}</span>
        </div>

        <div className="pet-details-grid">
          <div className="pet-images">
            <div className="main-image">
              <img src={activeImage || "/placeholder.svg"} alt={pet.name} />
            </div>
            <div className="thumbnail-images">
              <img
                src={pet.imageUrl || "/placeholder.svg"}
                alt={pet.name}
                className={activeImage === pet.imageUrl ? "active" : ""}
                onClick={() => setActiveImage(pet.imageUrl)}
              />
              {pet.additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`${pet.name} ${index + 1}`}
                  className={activeImage === img ? "active" : ""}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="pet-info">
            <div className="pet-header">
              <h1 className="pet-name">{pet.name}</h1>
              <span className="pet-type-badge">{pet.type}</span>
            </div>

            <div className="pet-attributes">
              <div className="attribute">
                <span className="attribute-label">Breed:</span>
                <span className="attribute-value">{pet.breed}</span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Age:</span>
                <span className="attribute-value">
                  {pet.age} {pet.age === 1 ? "year" : "years"}
                </span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Gender:</span>
                <span className="attribute-value">{pet.gender}</span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Size:</span>
                <span className="attribute-value">{pet.size}</span>
              </div>
              <div className="attribute">
                <span className="attribute-label">Color:</span>
                <span className="attribute-value">{pet.color}</span>
              </div>
            </div>

            <div className="pet-traits">
              {pet.traits.map((trait, index) => (
                <span key={index} className="trait-badge">
                  {trait}
                </span>
              ))}
            </div>

            <div className="pet-description">
              <h2>About {pet.name}</h2>
              <p>{pet.description}</p>
            </div>

            <div className="adoption-info">
              <div className="adoption-fee">
                <h3>Adoption Fee</h3>
                <p className="fee">${pet.adoptionFee}</p>
              </div>

              <div className="shelter-info">
                <h3>Location</h3>
                <p>{pet.location}</p>
                <p>{pet.address}</p>
              </div>
            </div>

            <div className="medical-info">
              <h3>Medical Information</h3>
              <p>{pet.medicalInfo}</p>
            </div>

            <div className="adoption-actions">
              <button className="btn btn-primary">Start Adoption Process</button>
              <button className="btn btn-secondary">Schedule a Visit</button>
            </div>
          </div>
        </div>

        <div className="pet-story">
          <h2>{pet.name}'s Story</h2>
          <p>{pet.story}</p>
        </div>

        <div className="adoption-steps">
          <h2>Adoption Process</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Submit Application</h3>
              <p>Fill out our adoption application to express your interest in {pet.name}.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Meet & Greet</h3>
              <p>Schedule a time to meet {pet.name} in person at our shelter.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Home Check</h3>
              <p>We'll conduct a brief home check to ensure it's a safe environment for {pet.name}.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Finalize Adoption</h3>
              <p>Pay the adoption fee, sign the adoption contract, and welcome {pet.name} to your family!</p>
            </div>
          </div>
        </div>

        <div className="similar-pets">
          <h2>You May Also Like</h2>
          <div className="similar-pets-grid">
            {allPets
              .filter((p) => p._id !== id)
              .slice(0, 3)
              .map((pet) => (
                <div key={pet._id} className="similar-pet-card">
                  <img src={pet.imageUrl || "/placeholder.svg"} alt={pet.name} />
                  <div className="similar-pet-info">
                    <h3>{pet.name}</h3>
                    <p>
                      {pet.breed} • {pet.age} {pet.age === 1 ? "year" : "years"}
                    </p>
                    <Link to={`/pets/${pet._id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetDetails

