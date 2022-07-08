import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { recursiveMenu } from "./utils/recursiveMenu"
import { Menu, Route } from '../../types/routes.interface'

interface Props {
  navigationOrder?: string[]
  children: (routes: Route[], menus: Menu[]) => React.ReactNode
}

const MdxRoutes: React.FC<Props> = ({ children, navigationOrder }) => {
  const data = useStaticQuery(graphql`
    query getAllMdx {
      allMdx(
        filter: {frontmatter: {toc_hide: {nin: true}}}
        sort: {fields: frontmatter___weight, order: ASC}
      ) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const { nodes } = data.allMdx

  const sortOrder = (array: Route[]) => {
    if (navigationOrder) {
      return array.sort((a,b) => {
        return (
          navigationOrder.indexOf(a.title) -
          navigationOrder.indexOf(b.title)
        )
      })
    }

    return array.reduce((routes: any, route: any) => {
      if (route.slug === "/") {
        return [route, ...routes]
      }
      return [...routes, route]
    }, [])
  }

  const mdxData: Route[] = nodes.map(
    (data: any): Route => {
      const { frontmatter, slug } = data
      return {
        title: frontmatter.title,
        slug: slug,
      }
    }
  )

  const routes = sortOrder(mdxData)
  const menus = sortOrder(recursiveMenu(mdxData) as Route[])

  return <Fragment>{children(routes, menus)}</Fragment>
}

export default MdxRoutes