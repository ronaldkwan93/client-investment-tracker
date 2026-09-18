import type { Property } from "../context/PropertyContextProvider";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProperties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/property`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export const getPropertyById = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/property/${id}`);
    if (!response.ok) {
      throw new Error("failed to get property data");
    }
    const result = await response.json();
    return result;
  } catch (error) {}
};

export const addNewInvestment = async (data: Property) => {
  const response = await fetch(`${API_BASE_URL}/property`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
     const message = result?.message || "Unknown error occurred";
    throw new Error(message);
  }

  return result;
};

export const updateInvestment = async(id: number, data:Property) => {
    const response = await fetch(`${API_BASE_URL}/property/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
     const message = result?.message || "Unknown error occurred";
    throw new Error(message);
  }

  return result;
}

export const getRecentProperties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/property/recent-added`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};