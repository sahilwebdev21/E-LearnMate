type Props = {
  name: string
  image: string
}

export const CategoryCard = ({ name, image }: Props) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
    <img src={image} alt={name} className="w-20 h-20 mx-auto mb-2 object-contain" />
    <h3 className="font-medium">{name}</h3>
  </div>
)
