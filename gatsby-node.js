/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { languages } = require('./src/i18n/locales')

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  
  const { createPage, deletePage } = actions
  return graphql(`
    {
      allDataJson {
        edges {
          node {
            slug
            ru {
              title
              description
            }
            uk {
              title
              description
            }
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allDataJson.edges.forEach(({ node }) => {
      const redirect = path.resolve('src/i18n/redirect.js')
      const redirectPage = {
        path: node.slug,
        component: redirect,
        context: {
          languages,
          locale: '',
          routed: false,
          redirectPage: `node.slug`,
        },
      }
      createPage(redirectPage)
      
      languages.forEach(({value}) => {
        createPage({
          path: `/${value}/${node.slug}`,
          component: path.resolve(`./src/templates/product-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            languages,
            locale: value,
            routed: true,
            originalPath: `/${node.slug}`,
            slug: node.slug,
            langRu: node.ru,
            langUk: node.uk
          },
        })
      })
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }
 console.log(page.path)
  return new Promise(resolve => {
    const redirect = path.resolve('src/i18n/redirect.js')
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
      },
    }
    deletePage(page)
    createPage(redirectPage)

    languages.forEach(({ value }) => {
      const localePage = {
        ...page,
        originalPath: page.path,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          routed: true,
          originalPath: page.path,
        },
      }
      createPage(localePage)
    })

    resolve()
  })
}

// exports.createPages = ({ graphql, actions }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const { createPage } = actions
//   return graphql(`
//     {
//       allDataJson {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `
//   ).then(result => {
//     result.data.allDataJson.edges.forEach(({ node }) => {
//       createPage({
//         path: node.slug,
//         component: path.resolve(`./src/templates/product-page.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.slug,
//         },
//       })
//     })
//   })
// }
