export type Menu = {
    id: string | null
    title: string | null
    slug: string | null
    parent: string | null
    paths: string[] | null
    menu: Menu[] | null
}

export type Route = {
    title: string,
    slug: string
}