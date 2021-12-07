import Head from 'next/head'
import Card from '../components/Card'

export default function Home({articles}){
  
  const article=articles.articles
  return(
    <div>
      <Head>
        <title>Webdev News</title>
        <meta name="keywords" content='web development,programming' />
      </Head>
      {
        article.map((art)=>(
                
  
          // console.log(typeof art.source.name)
          <Card id={art.author} author={art.author} title={art.title} desc={art.description} urlimg={art.urlToImage} publishedAt={art.publishedAt}/>
          // <Card author={String(art.source.name)} />
        ))
       
      }

      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=cce56d34d393466092fa2cd1d5053cc3&_limit=2`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

