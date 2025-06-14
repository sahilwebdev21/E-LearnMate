import { FaHeart, FaShoppingCart } from "react-icons/fa"

type Props = {
  title: string
  image: string
  category: string
  price: number
}

export const CourseCard = ({ title, image, category, price }: Props) => (
  <div className="bg-white rounded-md shadow p-4 hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">{category}</p>
    <div className="mt-2 flex justify-between items-center">
      <span className="text-indigo-600 font-bold">${price}</span>
      <div className="flex gap-3 text-gray-500">
        <FaHeart className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </div>
  </div>
)
