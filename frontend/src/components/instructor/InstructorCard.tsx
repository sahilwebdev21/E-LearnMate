import Link from "next/link"

type Props = {
  id: number
  name: string
  image: string
  specialty: string
}

export const InstructorCard = ({ id, name, image, specialty }: Props) => (
  <Link href={`/instructor/${id}`}>
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded mb-3" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{specialty}</p>
    </div>
  </Link>
)
