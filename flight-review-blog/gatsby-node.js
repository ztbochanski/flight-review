exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/content",
    component: require.resolve("./src/templates/content.js"),
    context: {},
    defer: true,
  })
}
