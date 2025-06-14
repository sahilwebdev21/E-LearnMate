type Props = {
  title: string
  image: string
  price: number
  category: string
}

export const FeaturedCourseCard = ({ title, image, price, category }: Props) => (
  <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">{category}</p>
    <p className="text-indigo-600 font-bold mt-2">${price}</p>
  </div>
)
