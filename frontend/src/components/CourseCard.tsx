import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  price: number;
}

export default function CourseCard({ title, description, image, slug, price }: CourseCardProps) {
  return (
    <div className="el-course-card">
      <img src={image} alt={title} className="el-course-img" />
      <div className="el-course-content">
        <h3 className="el-course-title">{title}</h3>
        <p className="el-course-desc">{description}</p>
        <div className="el-course-bottom">
          <span className="el-course-price">₹{price}</span>
          <Link href={`/courses/${slug}`} className="el-course-btn">View</Link>
        </div>
      </div>
    </div>
  );
}