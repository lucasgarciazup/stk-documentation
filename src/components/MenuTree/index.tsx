import React from 'react';
import { Text, Flex, IconBox } from '@citric/core';
import { Link, withPrefix, } from 'gatsby';
import { Menu } from '../../types/routes.interface';
import { ChevronDown  } from '@citric/icons/dist';

interface Props {
  menus: Menu[]
  location: Location
}

const sx = {
  li: {
    '&:not(.collapsed) ul': {
      display: 'none',
      transition: 'opacity 0.5s linear'
    },
    '&.collapsed a[aria-expanded="true"] i': {
      transform: 'rotate(180deg)'
    }
  },
  link: {
    mb: 5,
    color: 'light.contrastText',
    textDecoration: 'none',
    '&:hover': {
      color: 'primary'
    },
    '&.active': {
      fontWeight: '600'
    },
    '&.active[aria-current="page"]': {
      fontWeight: '600',
      color: 'primary'
    }
  },
}
const MenuTree: React.FC<Props> = ({ menus, location }) => {
  const currentPage = (slug: string) => location.pathname.includes(slug.toLowerCase())
  const classCollapse = (slug: string) => currentPage(slug) ? 'collapsed' : ''
  const createTree = (menus: Menu[]) => {
    return (
      <Flex as="ul" sx={{ pl: 5 }} flexDirection='column'>
        {menus.map((route, index) => (
          <Flex
            key={route.title! + index}
            id={route.slug!}
            as="li"
            flexDirection='column'
            className={classCollapse(route.slug!)}
            sx={sx.li as any}
          >
            {route.slug ? (
              <>
                <Flex justifyContent="space-between" pr={5}>
                  <Text
                    appearance="body1"
                    sx={sx.link}
                    as={(props: any) => (
                      <Link
                        {...props}
                        to={withPrefix(route.slug!.toLowerCase())}
                        activeClassName='active'
                        partiallyActive
                      />
                    )}
                  >
                    {route.title}
                  </Text>
                  {!!route.menu?.length && (
                    <Text
                      as="a"
                      sx={{ cursor: 'pointer', userSelect: 'none' }}
                      aria-expanded={currentPage(route.slug)}
                      onClick={(e) => {
                        e.preventDefault();
                        const link = document.getElementById(route.slug!)
                        if (link) {
                          link.classList.toggle('collapsed')
                          e.currentTarget.setAttribute('aria-expanded', `${!(e.currentTarget.getAttribute('aria-expanded') === 'true')}`)
                        }
                      }}
                    >
                      <IconBox >
                        <ChevronDown />
                      </IconBox>
                    </Text>
                  )}

                </Flex>
                {!!route.menu?.length && createTree(route.menu)}
              </>
            ) : (
              <>
                <Text>
                  {route.title}
                </Text>
                {!!route.menu?.length && createTree(route.menu)}
              </>
            )}
          </Flex>
        ))}
      </Flex>
    )
  }

  return createTree(menus)
}

export default MenuTree;