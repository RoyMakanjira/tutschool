interface PreviewSelection {
  title?: string;
  subtitle?: string;
  active?: boolean;
}

export default {
  name: "promotionalBanner",
  title: "Promotional Banner",
  type: "document",
  fields: [
    {
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Toggle to show or hide the banner",
      initialValue: true,
    },
    {
      name: "linkUrl",
      title: "Link URL",
      type: "string",
      description: "URL for the details button",
      initialValue: "/contact",
    },
    {
      name: "ru",
      title: "Russian Content",
      type: "object",
      fields: [
        {
          name: "badge",
          title: "Badge Text",
          type: "string",
          description: 'Text displayed in the badge (e.g., "SPRING SPECIAL")',
          initialValue: "ВЕСЕННЯЯ АКЦИЯ",
        },
        {
          name: "shortTitle",
          title: "Short Title",
          type: "string",
          description: "Short title for mobile view",
          initialValue: "40% СКИДКА на все языковые курсы!",
        },
        {
          name: "fullTitle",
          title: "Full Title",
          type: "string",
          description: "Full title for desktop view",
          initialValue: "Экономия до 40% на курсах английского и китайского языков",
        },
        {
          name: "untilDate",
          title: "Until Date",
          type: "string",
          description: "Date until the promotion is valid",
          initialValue: "До 31 мая",
        },
        {
          name: "location",
          title: "Location",
          type: "string",
          description: "Location information",
          initialValue: "Онлайн или очно",
        },
        {
          name: "detailsButton",
          title: "Details Button Text",
          type: "string",
          description: "Text for the details button",
          initialValue: "Подробнее",
        },
        {
          name: "dismiss",
          title: "Dismiss Text",
          type: "string",
          description: "Text for the dismiss button (screen reader only)",
          initialValue: "Закрыть",
        },
      ],
    },
    {
      name: "en",
      title: "English Content",
      type: "object",
      fields: [
        {
          name: "badge",
          title: "Badge Text",
          type: "string",
          description: 'Text displayed in the badge (e.g., "SPRING SPECIAL")',
          initialValue: "SPRING SPECIAL",
        },
        {
          name: "shortTitle",
          title: "Short Title",
          type: "string",
          description: "Short title for mobile view",
          initialValue: "40% OFF all language courses!",
        },
        {
          name: "fullTitle",
          title: "Full Title",
          type: "string",
          description: "Full title for desktop view",
          initialValue: "Save up to 40% OFF on English & Chinese courses",
        },
        {
          name: "untilDate",
          title: "Until Date",
          type: "string",
          description: "Date until the promotion is valid",
          initialValue: "Until May 31",
        },
        {
          name: "location",
          title: "Location",
          type: "string",
          description: "Location information",
          initialValue: "Online or In-person",
        },
        {
          name: "detailsButton",
          title: "Details Button Text",
          type: "string",
          description: "Text for the details button",
          initialValue: "Details",
        },
        {
          name: "dismiss",
          title: "Dismiss Text",
          type: "string",
          description: "Text for the dismiss button (screen reader only)",
          initialValue: "Dismiss",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "ru.badge",
      subtitle: "ru.shortTitle",
      active: "active",
    },
    prepare(selection: PreviewSelection) {
        const {title, subtitle, active} = selection;
      return {
        title: title || "Promotional Banner",
        subtitle: `${active ? "✅ Active" : "❌ Inactive"} - ${subtitle || ""}`,
      }
    },
  },
}
