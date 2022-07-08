import { Route, Menu } from '../../../types/routes.interface'

export const recursiveMenu = (routes: Route[]) => {
  const createItemsFromSlugs = routes
    .map((route) => {
      const paths = route.slug.split("/").filter(Boolean)
      return {
        ...route,
        id: paths.length >= 1 ? paths[paths.length - 1] : "",
        parent: paths.length > 1 ? paths[paths.length - 2] : null,
        slug: route.slug.endsWith('/') ? route.slug.slice(0, -1) : route.slug,
        paths: paths,
        menu: null,
      } as Menu
    })
    .reduce((items: any, item: Menu, index: number) => {
      items.push(item)
      if (items[index].id && items[index].id !== item.parent) {
        const { paths } = item
        items.push({
          id: item.parent,
          slug: null,
          paths: null,
          parent: paths && paths.length > 2 ? paths[paths.length - 3] : null,
        })
      }
      return items
    }, [])
    .filter((route: Route) => route.title)

  const createRecursiveMenu = (array: Menu[], parent: string | null) => {
    const menus: Menu[] = []
    array
      .filter((menu: Menu) => {
        return menu.parent === parent
      })
      .forEach((menu: Menu) => {
        menu.menu = createRecursiveMenu(array, menu.id)
        return menus.push(menu)
      })
    return menus
  }
  return createRecursiveMenu(createItemsFromSlugs, null)
}