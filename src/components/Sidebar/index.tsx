import React from 'react';
import MdxRoutes from '../MdxRoutes';
import MenuTree from '../MenuTree';

interface Props {
  location: Location
}

const Sidebar: React.FC<Props> = ({ location }) => {
  return (
    <MdxRoutes>{(_, menus) => <MenuTree menus={menus} location={location}/>}</MdxRoutes>
  );
}

export default Sidebar;