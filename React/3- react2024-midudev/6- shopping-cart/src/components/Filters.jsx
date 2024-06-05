import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  // trae los productos filtrados
  const { filters, setFilters } = useFilters()
  // Esto no sirve para utilizarlo como 'index' (key)
  // en algo que se está iterando, porque se podria estar
  // creando un nuevo ID o puede se malenteder (explayar)

  // Esto no seria la ID de un elemento, sino del 
  // orden de llamada dentro del componente
  // Es perfecto para este tipo de ID, es lo ideal.
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      categoty: event.target.value
    }))
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type="range"
          id= {minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptos">Portatiles</option>
          <option value="smarthphone">Celulares</option>
        </select>
      </div>
    </section>
  );
}
