import Head from 'next/head'
import Jumbotron from '../components/jumbotron'
import Articel from '../components/articel'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Post from '../data-dummy/post.json'

export default function Home({ props }) {
  return (
    <Layout>
      <Jumbotron />
      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
      </h3>
        {
          props.post.map(t => (
            <Articel key ={t.id} post = {t} />
            )
          )
        }    
        </div>
        <Sidebar />
      </div>
    </Layout>
  )
}
Home.getInitialProps = () => {
  return{
    props : {
      post :Post
    }
  }
}