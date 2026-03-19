import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Welcome! I write about web development, open source, and developer tools.
      </p>

      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.fields.slug} className="group">
            <Link to={post.fields.slug} className="block">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.frontmatter.title}
              </h2>
              <time className="text-sm text-gray-500 dark:text-gray-500 mt-1 block">
                {post.frontmatter.date}
              </time>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {post.frontmatter.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Dong Yeop Lee</title>

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`
