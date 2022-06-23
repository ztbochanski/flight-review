import React from "react"
import { useMarkdownNodes } from "../hooks/useMarkdownNodes.js"
import { Link } from "gatsby"

const SideBar = () => {

  const nodes = useMarkdownNodes()
  const  menuItems = tree(nodes)
  
  return(
    <div className="block p-2 m-2">
      <aside className="menu">
        {menuItems.map((item, key) => (
          <div key={key}>
            <div><p className="menu-label">{item.menuParent}</p></div>
            <ul className="menu-list">
              {item.items.map(link => (
                <div key={link.id}>
                  <li><Link activeClassName="is-active" to={link.slug}>{link.name}</Link></li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  )
}

export default SideBar

const tree = (nodes) => {
  const parents = new Set()
  nodes.forEach(node => (
    parents.add(node.frontmatter.parent)
  ))

  const tree = []
  parents.forEach(parent => (
    tree.push({ menuParent: parent, items: [] })
  ))
  
  nodes.forEach(node => {
    const slug = node.fields.slug
    const id = node.id
    const title = node.frontmatter.title
    const parent = node.frontmatter.parent
    tree.forEach(item => {
      if (parent === item.menuParent)
        item.items.push({ name: title, slug: slug, id: id})
    })
  })
  return tree
}
