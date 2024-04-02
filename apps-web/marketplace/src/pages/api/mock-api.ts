// api.ts
const API_BASE_URL = "https://6603c2582393662c31cf914a.mockapi.io/api/v1";

// Define types for the expected responses
export type Banner = {
  id: string;
  imageUrl: string;
  altText: string | null;
  linkUrl: string;
};

export type Tutor = {
  id: string;
  tutorId: string;
  imageUrl: string;
  altText: string | null;
};

// General function to fetch data from the API
async function fetchData<T>(endpoint: string): Promise<T> {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `An error occurred while fetching the data: ${response.statusText}`
    );
  }
  return response.json() as Promise<T>;
}

// Specific function to fetch banners
export function fetchBanners() {
  return fetchData<Banner[]>("banner");
}

// Specific function to fetch tutors
export function fetchTutors() {
  return fetchData<Tutor[]>("tutor");
}
