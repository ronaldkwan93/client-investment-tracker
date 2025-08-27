const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProperties = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/property`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result;
  } catch (error) {}
};
