import ArticlesInfo from "@/components/ArticlesInfo";

const ArticleDetail = ({ params }) => {
  const {id} = params;

  return (
    <ArticlesInfo id={id} />
  );
}

export default ArticleDetail