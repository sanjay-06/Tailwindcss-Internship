
import articleStyles from '../styles/Article.module.css'
import Gridcard from '../components/Gridcard'

const ArticleItem = ({ article }) => {
  return (
    <>
      <Gridcard img={article.img} title={article.title} href={`/article/${article.id}`}/>
      
    </>
  )
}

export default ArticleItem