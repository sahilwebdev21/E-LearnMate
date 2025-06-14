type Props = {
  name: string
  image: string
  specialization: string
}

export const InstructorCard = ({ name, image, specialization }: Props) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full mx-auto object-cover mb-2"
    />
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{specialization}</p>
  </div>
)
