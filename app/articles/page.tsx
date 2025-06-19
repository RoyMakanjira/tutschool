import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// Static articles data
const articles = [
    {
        slug: "welcome-to-tut-school",
        title: "Welcome to Tut School",
        mainImage: "https://images.pexels.com/photos/8500251/pexels-photo-8500251.jpeg",
        publishedAt: "2024-03-20",
        authorName: "Tut School Team",
        authorImage: "https://images.pexels.com/photos/8500251/pexels-photo-8500251.jpeg",
        excerpt: "Welcome to Tut School, your premier destination for language learning and artistic development. Our school combines modern teaching methodologies with a nurturing environment to help students achieve their full potential."
    },
    {
        slug: "benefits-of-learning-chinese",
        title: "Benefits of Learning Chinese",
        mainImage: "https://images.pexels.com/photos/8500291/pexels-photo-8500291.jpeg",
        publishedAt: "2024-03-19",
        authorName: "Tut School Team",
        authorImage: "https://images.pexels.com/photos/8500251/pexels-photo-8500251.jpeg",
        excerpt: "Discover the numerous advantages of learning Chinese, from career opportunities to cognitive benefits. Our comprehensive guide explores why Chinese is becoming an increasingly important language in today's globalized world."
    }
]

export default function ArticlesPage() {
    return (
        <div className="container mx-auto py-16">
            <h1 className="mb-12 text-4xl font-bold">Articles</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {articles.map((article) => (
                    <article key={article.slug} className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={article.mainImage}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image
                                        src={article.authorImage}
                                        alt={article.authorName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium">{article.authorName}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(article.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
                            <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                            <Link href={`/articles/${article.slug}`}>
                                <Button variant="ghost" className="group/button gap-2">
                                    Read More
                                    <ChevronRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
