import { categories } from "@/data/categories"
import { CategoryCard } from "@/components/category/CategoryCard"

export default function CategoryPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Course Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </main>
  )
}
