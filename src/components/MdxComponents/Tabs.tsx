import { Tabs as TabsCitric, TabsItem } from '@citric/core/dist';
import { TabItemProps } from '@citric/core/dist/Tabs';
import React from 'react';

// import { Container } from './styles';
interface TabsProps {
    name: string
    children: React.ReactElement<TabItemProps>[];
}

const Tabs: React.FC<TabsProps> = ({ name, children }) => {
    const [tabActive, setTabActive] = React.useState(0)
    const changeActiveTab = (newActiveTab: number) => {
        setTabActive(newActiveTab)
    }  
    return (
        <TabsCitric activeIndex={tabActive} onChange={changeActiveTab} id={name}>
             {children}
        </TabsCitric>
    );
}

const TabItem: React.FC<TabItemProps> = ({ title, children }) => {
    return (
        <TabsItem title={title}>
            {children}
        </TabsItem>
    );
}

export {
    Tabs,
    TabItem
};