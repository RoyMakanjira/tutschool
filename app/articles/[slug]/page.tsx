import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

async function getArticle(slug: any) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "authorName": author->name,
    "authorImage": author->image
  }`

  const article = await client.fetch(query, { slug })

  if (!article) {
    notFound()
  }

  return article
}

export default async function ArticlePage({ params }: {params: any}) {
  const article = await getArticle(params.slug)

  return (
    <div className="container mx-auto py-8">
      <Link href="/" className="inline-block mb-6">
        <Button variant="ghost" size="sm" className="gap-2">
          <ChevronLeft className="h-4 w-4" />
          Back to Articles
        </Button>
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
          <Image
            src={article.mainImage?.asset?.url || "/placeholder.svg?height=400&width=800"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <div className="flex items-center gap-3 mb-8">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={article.authorImage?.asset?.url || "/placeholder.svg?height=40&width=40"}
              alt={article.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{article.authorName}</p>
            <p className="text-sm text-muted-foreground">{new Date(article.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="prose prose-blue max-w-none">
          <PortableText value={article.body} />
        </div>
      </article>
    </div>
  )
}

