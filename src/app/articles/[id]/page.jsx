import ArticlesInfo from "@/components/ArticlesInfo";

const ArticleDetail = async({ params }) => {
  const {id} = await params;

  return (
    <ArticlesInfo id={id} />
  );
}

export default ArticleDetail