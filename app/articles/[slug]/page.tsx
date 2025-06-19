import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// Static articles data
const articles = [
    {
        slug: "welcome-to-tut-school",
        title: "Welcome to Tut School",
        mainImage: "https://images.pexels.com/photos/8500251/pexels-photo-8500251.jpeg",
        publishedAt: "2024-03-20",
        authorName: "Tut School Team",
        authorImage: "https://images.pexels.com/photos/8500251/pexels-photo-8500251.jpeg",
        body: [
            {
                _type: "block",
                children: [
                    {
                        _type: "span",
                        text: "Welcome to Tut School, your premier destination for language learning and artistic development. Our school combines modern teaching methodologies with a nurturing environment to help students achieve their full potential."
                    }
                ]
            },
            {
                _type: "block",
                children: [
                    {
                        _type: "span",
                        text: "Whether you're interested in English, Chinese, or various art forms, our experienced teachers are here to guide you on your learning journey."
                    }
                ]
            }
        ]
    }
]

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = articles.find(a => a.slug === params.slug)

    if (!article) {
        notFound()
    }

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
                        src={article.mainImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

                <div className="flex items-center gap-3 mb-8">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                            src={article.authorImage}
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
                    {article.body.map((block, i) => (
                        <p key={i}>{block.children[0].text}</p>
                    ))}
                </div>
            </article>
        </div>
    )
} 