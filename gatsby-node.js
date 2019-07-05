/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({getConfig, stage}) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};

const path = require(`path`);
const {languages} = require('./src/i18n/locales');
const redirect = path.resolve('src/i18n/redirect.js');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const dataQuery = graphql(`
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
  `);

  return dataQuery.then(result => {
    if (result.errors) {
      console.log(result.errors);
    }
    result.data.allDataJson.edges.forEach(({node}) => {
      const redirectPage = {
        path: node.slug,
        component: redirect,
      };
      createPage(redirectPage);

      languages.forEach(({value}) => {
        createPage({
          path: `/${value}/${node.slug}`,
          component: path.resolve(`./src/templates/product-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            languages,
            locale: value,
            originalPath: `/${node.slug}`,
            slug: node.slug,
            langRu: node.ru,
            langUk: node.uk,
          },
        });
      });
    });
  });
};

exports.onCreatePage = ({page, actions}) => {
  const {createPage} = actions;
  return new Promise(resolve => {
    const redirectPage = {
      path: page.path,
      component: redirect,
    };
    createPage(redirectPage);
    languages.forEach(({value}) => {
      const localePage = {
        component: page.component,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          originalPath: page.path,
        },
      };
      createPage(localePage);
    });
    resolve();
  });
};
