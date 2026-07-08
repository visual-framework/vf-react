export const componentSearchIndex = [
  {
    name: "vf-badge",
    path: "/vf-react/components/vf-badge",
    description: "vf-badge"
  },
  {
    name: "vf-back-to-top",
    path: "/vf-react/components/vf-back-to-top",
    description: "vf-back-to-top"
  },
  {
    name: "vf-button",
    path: "/vf-react/components/vf-button",
    description: "vf-button"
  },
  {
    name: "vf-card",
    path: "/vf-react/components/vf-card",
    description: "vf-card"
  },
  {
    name: "vf-blockquote",
    path: "/vf-react/components/vf-blockquote",
    description: "vf-blockquote"
  },
  {
    name: "vf-hero",
    path: "/vf-react/components/vf-hero",
    description: "vf-hero"
  },
  {
    name: "vf-banner",
    path: "/vf-react/components/vf-banner",
    description: "vf-banner"
  },
  {
    name: "vf-tabs",
    path: "/vf-react/components/vf-tabs",
    description: "vf-tabs"
  },
  {
    name: "chatbot",
    path: "/vf-react/chatbot",
    description: "chatbot"
  }
];

export function searchComponents(rawQuery) {
  const query = (rawQuery || "").trim().toLowerCase();

  if (!query) {
    return [];
  }

  return componentSearchIndex.filter((component) => {
    const haystack = [component.name, component.description]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}
