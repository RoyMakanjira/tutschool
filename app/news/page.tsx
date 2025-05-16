import Link from "next/link"
import Image from "next/image"
import { client } from "@/lib/sanity"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"


async function getArticles() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    "authorName": author->name,
    "category": categories[0]->title
  }`

  return client.fetch(query)
}

export default async function NewsPage() {
  const articles = await getArticles()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest articles, announcements, and insights
            </p>
          </div>

          {/* Articles Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {articles.map((article: any) => (
                <Card key={article._id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4 px-6 pt-6">
                    <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={article.mainImage?.asset?.url || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {article.category && (
                      <span className="text-sm font-medium text-primary mb-2">
                        {article.category}
                      </span>
                    )}
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} • By {article.authorName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow px-6 pb-2">
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Link href={`/articles/${article.slug.current}`} className="w-full">
                      <Button variant="outline" className="w-full" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}