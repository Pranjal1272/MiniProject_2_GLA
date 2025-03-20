"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SearchFilter from "../components/SearchFilter"
import PetCard from "../components/PetCard"
import "./PetListing.css"

// This would normally come from an API
const allPets = [
  {
    _id: "1",
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: 2,
    traits: ["Friendly", "Playful", "Good with kids"],
    imageUrl: "https://via.placeholder.com/300x200?text=Max",
  },
  {
    _id: "2",
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: 1,
    traits: ["Calm", "Independent", "Affectionate"],
    imageUrl: "https://via.placeholder.com/300x200?text=Luna",
  },
  {
    _id: "3",
    name: "Buddy",
    type: "Dog",
    breed: "Beagle",
    age: 3,
    traits: ["Energetic", "Curious", "Friendly"],
    imageUrl: "https://via.placeholder.com/300x200?text=Buddy",
  },
  {
    _id: "4",
    name: "Oliver",
    type: "Cat",
    breed: "Tabby",
    age: 4,
    traits: ["Playful", "Gentle", "Good with other cats"],
    imageUrl: "https://via.placeholder.com/300x200?text=Oliver",
  },
  {
    _id: "5",
    name: "Charlie",
    type: "Dog",
    breed: "Labrador",
    age: 1,
    traits: ["Energetic", "Friendly", "Trainable"],
    imageUrl: "https://via.placeholder.com/300x200?text=Charlie",
  },
  {
    _id: "6",
    name: "Milo",
    type: "Cat",
    breed: "Maine Coon",
    age: 3,
    traits: ["Gentle", "Sociable", "Intelligent"],
    imageUrl: "https://via.placeholder.com/300x200?text=Milo",
  },
  {
    _id: "7",
    name: "Daisy",
    type: "Dog",
    breed: "Poodle",
    age: 2,
    traits: ["Smart", "Active", "Affectionate"],
    imageUrl: "https://via.placeholder.com/300x200?text=Daisy",
  },
  {
    _id: "8",
    name: "Bella",
    type: "Cat",
    breed: "Persian",
    age: 5,
    traits: ["Quiet", "Gentle", "Affectionate"],
    imageUrl: "https://via.placeholder.com/300x200?text=Bella",
  },
]

const PetListing = () => {
  const location = useLocation()
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call with the query params
    const queryParams = new URLSearchParams(location.search)
    const type = queryParams.get("type")
    const breed = queryParams.get("breed")
    const age = queryParams.get("age")

    // Simulate API call
    setTimeout(() => {
      let filteredPets = [...allPets]

      if (type) {
        filteredPets = filteredPets.filter((pet) => pet.type.toLowerCase() === type.toLowerCase())
      }

      if (breed) {
        filteredPets = filteredPets.filter((pet) => pet.breed.toLowerCase().includes(breed.toLowerCase()))
      }

      if (age) {
        // This is a simplification. In a real app, you'd have more complex age filtering
        if (age === "baby") {
          filteredPets = filteredPets.filter((pet) => pet.age < 1)
        } else if (age === "young") {
          filteredPets = filteredPets.filter((pet) => pet.age >= 1 && pet.age <= 2)
        } else if (age === "adult") {
          filteredPets = filteredPets.filter((pet) => pet.age > 2 && pet.age <= 8)
        } else if (age === "senior") {
          filteredPets = filteredPets.filter((pet) => pet.age > 8)
        }
      }

      setPets(filteredPets)
      setLoading(false)
    }, 500) // Simulate network delay
  }, [location.search])

  return (
    <div className="pet-listing-page">
      <div className="container">
        <h1 className="page-title">Available Pets</h1>

        <SearchFilter />

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading pets...</p>
          </div>
        ) : pets.length === 0 ? (
          <div className="no-results">
            <h2>No pets found</h2>
            <p>Try adjusting your search filters to find more pets.</p>
          </div>
        ) : (
          <>
            <p className="results-count">{pets.length} pets found</p>
            <div className="pets-grid">
              {pets.map((pet) => (
                <PetCard key={pet._id} pet={pet} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PetListing

