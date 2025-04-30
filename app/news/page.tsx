
import Link from "next/link"
import Image from "next/image"
import { client } from "@/lib/sanity"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


async function getArticles() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    "authorName": author->name
  }`

  return client.fetch(query)
}


export default async function NewsPage() {

  const articles = await getArticles()

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: any) => (
          <Card key={article._id} className="h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={article.mainImage?.asset?.url || "/placeholder.svg?height=200&width=400"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <CardDescription>
                {new Date(article.publishedAt).toLocaleDateString()} • By {article.authorName}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/articles/${article.slug.current}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      </main>
    </div>
  )
}
