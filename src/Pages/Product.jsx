import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { brands, categories } from "../data/data";
import {
  setBrand,
  setCategory,
  applyFilters,
} from "../features/products/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { filtered } = useSelector((state) => state.products);

  return (
    <div className="layout">
      <Navbar />

      <main>
        <div className="filters">
          <select onChange={(e) => dispatch(setBrand(e.target.value))}>
            <option>All</option>
            {brands.map(b => <option key={b}>{b}</option>)}
          </select>

          <select onChange={(e) => dispatch(setCategory(e.target.value))}>
            <option>All</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>

          <button onClick={() => dispatch(applyFilters())}>
            Apply Filters
          </button>
        </div>

        <div className="grid">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
