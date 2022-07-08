const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query Query {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }
  
  const mdxFiles = result.data.allMdx.nodes;
  mdxFiles.forEach(({id, slug}) => {
    actions.createPage({
      path: slug.toLowerCase(),
      component: path.resolve('./src/layouts/mdx.tsx'),
      context: { id }
    })
  })
}
