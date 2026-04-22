
import ArticleCards from "@/components/ArticleCards";
// import useArticles from "../utils/useArticles"

const articles = [
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

export default function Articles() {
  // const articles = useArticles();
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      
      <h3 className="text-5xl font-semibold mb-10">
        All Articles
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {articles.map((article) => (
          <ArticleCards key={article.id} article={article} />
        ))}
      </div>

    </section>
  );
}
