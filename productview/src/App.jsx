import ProductDetails from "./Elements/ProductDetails/ProductDetails";
import SelectedProduct from "./Elements/SelectedProduct/SelectedProduct";

export default function App(){
  return(
    <>
      <section className="">
        <div className="w-[1320px] grid grid-cols-[repeat(2,_630px)] gap-x-[60px] mx-auto">
          <SelectedProduct/>
          <ProductDetails/>
        </div>
      </section>
    </>
  )
}