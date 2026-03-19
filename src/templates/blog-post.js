import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {post.frontmatter.title}
        </h1>
        <time className="text-sm text-gray-500 block mb-8">
          {post.frontmatter.date}
        </time>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          &larr; Back to all posts
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title} | Dong Yeop Lee</title>
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
