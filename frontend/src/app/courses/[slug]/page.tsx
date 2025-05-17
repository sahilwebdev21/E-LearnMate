import { courses } from '@/lib/dummyCourses';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) return notFound();

  return (
    <section className="el-course-detail">
      <div className="el-course-detail-wrapper">
        <Image
          src={course.image}
          alt={course.title}
          width={800}
          height={450}
          className="el-course-detail-img"
        />

        <div className="el-course-detail-content">
          <h1 className="el-course-detail-title">{course.title}</h1>
          <p className="el-course-detail-desc">{course.details}</p>
          <div className="el-course-detail-bottom">
            <span className="el-course-detail-price">Price: ₹{course.price}</span>
            <button className="el-course-enroll-btn">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}