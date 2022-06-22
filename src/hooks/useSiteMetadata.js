import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`query SiteMetaDataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return site.siteMetaData
}
