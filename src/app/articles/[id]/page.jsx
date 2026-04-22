const mockArticles = [
  {
    id: 1,
    title: "Understanding Client-Side Rendering (CSR)",
    description:
      "Learn how client-side rendering works in modern React apps, including its advantages, limitations, and performance impact.",
  },
  {
    id: 2,
    title: "Server-Side Rendering (SSR) Explained",
    description:
      "Explore how SSR improves initial load time and SEO by rendering content on the server before sending it to the browser.",
  },
  {
    id: 3,
    title: "CSR vs SSR: A Practical Comparison",
    description:
      "Compare client-side and server-side rendering with real-world examples and understand when to use each approach.",
  },
  {
    id: 4,
    title: "Improving Web Performance with SSR",
    description:
      "Discover how SSR can enhance performance, reduce load times, and provide a better user experience.",
  },
  {
    id: 5,
    title: "Hydration in React and Next.js",
    description:
      "Understand what hydration means, how it works, and why it is important in server-rendered applications.",
  },
  {
    id: 6,
    title: "SEO Benefits of Server Rendering",
    description:
      "Learn why SSR is better for search engine optimization and how it helps improve visibility.",
  },
];

export default async function ArticleDetail({ params }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  const article = mockArticles.find((item) => item.id === id);

  if (!article) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Article not found
      </p>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {article.title}
      </h1>

      <p className="text-gray-600 text-center px-4 md:px-10 text-lg pt-3 pb-10">
        {article.description}
      </p>

     <div className="bg-gray-100/90 rounded-xl p-8 shadow-sm text-gray-700 leading-relaxed text-justify">
        <p>
          This is a placeholder for the full article content. In a real
          application, this section would display detailed information fetched
          from a backend API.
        </p>

        <p className="py-4">
          The purpose of this project is to demonstrate how different rendering
          techniques affect performance and user experience in modern web
          applications.
        </p>

        <p>
          You can extend this by adding real content, images, and code examples
          when your backend API is ready.
        </p>
      </div>
    </section>
  );
}