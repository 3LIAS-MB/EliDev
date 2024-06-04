import { createContext , useState} from "react";

// useContext como estado global está pensado para estados muy pequeños, que
// cambien con poca frecuencia o muy pequeños, por ej, usario con sesión iniciada, 

// 1. Crear el contexto
// 2. Proveer el contexto
// 3. Consumir el contexto

// Este es el que tenemos que consumir
// Singleton -> Modulo de JavaScripts
// Solo se crea una vez
export const FiltersContext = createContext(); 

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    categorya: "all",
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
    {children}
    </FiltersContext.Provider>
  );
}
// Consumir el contexto
