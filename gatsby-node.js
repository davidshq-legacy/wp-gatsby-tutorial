const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
            title
            excerpt
            content
            slug
        }
      }
    }
  `).then(result => {
    console.log(JSON.stringify(result, null, 4))
    process.exit()
  })
}
