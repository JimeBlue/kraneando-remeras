import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const useSanity = () => {
  const client = createClient({
    projectId: 'psg4o6my', // Your project ID
    dataset: 'production',
    apiVersion: '2025-11-03',
    useCdn: true, // Use CDN for faster responses
  })

  // Helper to generate image URLs
  const urlFor = (source: any) => {
    return imageUrlBuilder(client).image(source)
  }

  return {
    client,
    urlFor,
  }
}