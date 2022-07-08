import React, { Fragment } from "react"
import { Link } from "gatsby"
import MdxRoutes from '../components/MdxRoutes'
import MenuTree from '../components/MenuTree'

interface Props {
   children?: React.ReactNode
}
const LayoutDefault: React.FC<Props> = ({ children }) => {
   return (
    <Fragment>
      <nav>
        <MdxRoutes>{(_, menus) => <MenuTree menus={menus}/>}</MdxRoutes>
      </nav>
      <main>{children}</main>
    </Fragment>
  )
}

export default LayoutDefault