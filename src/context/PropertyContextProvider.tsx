import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getProperties } from "../services/data-service";

export const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

type PropertyContextType = {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
};

export interface Property {
  id: number | null;
  address: string;
  suburb: string;
  state: string;
  purchasePrice: number | null;
  weeklyRent: number | null;
}

type PropertyContextProviderProps = {
  children: ReactNode;
};

const PropertyContextProvider = ({
  children,
}: PropertyContextProviderProps) => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    getProperties().then((data) => {
      if (data) setProperties(data);
    });
  }, []);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
