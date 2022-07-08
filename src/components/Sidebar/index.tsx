import React from 'react';
import MdxRoutes from '../MdxRoutes';
import MenuTree from '../MenuTree';

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <MdxRoutes>{(_, menus) => <MenuTree menus={menus}/>}</MdxRoutes>
  );
}

export default Sidebar;