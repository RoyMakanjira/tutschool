import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

export async function getPromotionalBanner(language = "ru") {
  try {
    const query = `*[_type == "promotionalBanner" && active == true][0]{
      "translations": {
        "ru": {
          "badge": ru.badge,
          "shortTitle": ru.shortTitle,
          "fullTitle": ru.fullTitle,
          "untilDate": ru.untilDate,
          "location": ru.location,
          "detailsButton": ru.detailsButton,
          "dismiss": ru.dismiss
        },
        "en": {
          "badge": en.badge,
          "shortTitle": en.shortTitle,
          "fullTitle": en.fullTitle,
          "untilDate": en.untilDate,
          "location": en.location,
          "detailsButton": en.detailsButton,
          "dismiss": en.dismiss
        }
      },
      active,
      linkUrl
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error("Error fetching promotional banner:", error)
    return null
  }
}
