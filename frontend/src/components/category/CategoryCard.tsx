type Props = {
  name: string
  image: string
}

export const CategoryCard = ({ name, image }: Props) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
    <img src={image} alt={name} className="w-full h-32 object-cover rounded mb-3" />
    <h3 className="text-center font-semibold">{name}</h3>
  </div>
)
