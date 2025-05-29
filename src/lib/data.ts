export interface Hotel {
    id: number
    name: string
    location: string
    image: string
    price: number
    rating: number
    reviews: number
    facilities: string[]
    type: string
    discount?: number
    featured?: boolean
  }
  
  export const hotels: Hotel[] = [
    {
      id: 1,
      name: "The Saffron Hotel",
      location: "Lekki Phase 1, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 135000,
      rating: 4.8,
      reviews: 45,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Hotels",
    },
    {
      id: 2,
      name: "Grand Crest Hotel",
      location: "Ikeja, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 70000,
      rating: 4.5,
      reviews: 45,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Hotels",
      discount: 20,
    },
    {
      id: 3,
      name: "Limeridge Signature Hotel",
      location: "Victoria Island, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 85000,
      rating: 4.7,
      reviews: 45,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Hotels",
      featured: true,
    },
    {
      id: 4,
      name: "The Saffron Hotel",
      location: "Lekki Phase 1, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 135000,
      rating: 4.8,
      reviews: 45,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Hotels",
    },
    {
      id: 5,
      name: "The Atrium Hotel",
      location: "Ikeja, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 70000,
      rating: 4.9,
      reviews: 45,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Hotels",
      discount: 20,
    },
    {
      id: 6,
      name: "Limeridge Signature Hotel",
      location: "Victoria Island, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 85000,
      rating: 4.7,
      reviews: 45,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Hotels",
      featured: true,
    },
    {
      id: 7,
      name: "Oceanview Apartments",
      location: "Lekki, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 95000,
      rating: 4.6,
      reviews: 38,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool"],
      type: "Apartments",
    },
    {
      id: 8,
      name: "Skyline Residences",
      location: "Victoria Island, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 120000,
      rating: 4.4,
      reviews: 29,
      facilities: ["Free WiFi", "Pool", "Breakfast", "Gym"],
      type: "Apartments",
      discount: 15,
    },
    {
      id: 9,
      name: "Lakeside Guesthouse",
      location: "Ikoyi, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 45000,
      rating: 4.2,
      reviews: 22,
      facilities: ["Free WiFi", "Breakfast"],
      type: "Guesthouses",
    },
    {
      id: 10,
      name: "Palm Villa Resort",
      location: "Badagry, Lagos",
      image: "https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 180000,
      rating: 4.9,
      reviews: 56,
      facilities: ["Bar", "Gym", "Free WiFi", "Pool", "Breakfast"],
      type: "Villas",
      featured: true,
    },
  ]
  