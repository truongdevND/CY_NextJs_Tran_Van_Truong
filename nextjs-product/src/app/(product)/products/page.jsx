
import ItemProduct from './components/ItemProduct'
import { getProductsbyFilter } from '../service/products'

export default async function ProductPage() {
  let products = await getProductsbyFilter()

  return (
    <div className=" py-8 antialiased md:py-12">
      <div className="mx-auto max-w-[90%] px-4 2xl:px-0">
        <div
          className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8"
        >
          <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
            Products
          </h2>
        </div>

        <div
          className="grid gap-7 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-5"
        >
          {products.data.data.map((product, index) => (
            <ItemProduct key={index} product={product} />
          ))}

        </div>


        <div

          className="text-center cursor-pointer py-8"
        >
          {!products.data.data.map && (
            <p className="text-gray-500">No products found.</p>
          )}

        </div>
      </div>
    </div>
  )
}

