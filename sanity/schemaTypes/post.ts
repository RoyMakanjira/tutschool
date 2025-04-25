export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "author",
        title: "Author",
        type: "reference",
        to: { type: "author" },
      },
      {
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
      },
      {
        name: "excerpt",
        title: "Excerpt",
        type: "text",
        rows: 3,
      },
      {
        name: "body",
        title: "Body",
        type: "blockContent",
      },
    ],
    preview: {
      select: {
        title: "title",
        author: "author.name",
        media: "mainImage",
      },
      prepare(selection: any) {
        const { author } = selection
        return { ...selection, subtitle: author && `by ${author}` }
      },
    },
  }
  
  