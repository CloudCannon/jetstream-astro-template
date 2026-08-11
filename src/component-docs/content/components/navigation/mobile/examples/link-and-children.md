---
title: 'Link and children on the same item'
spacing: ''
blocks:
  _component: 'navigation/mobile'
  logoSource:
  logoAlt:
  navData:
    - name: 'Home'
      path: '/'
      children: []
    - name: 'Component library'
      path: '/component-docs/'
      children:
        - name: 'Project tour'
          path: '/component-docs/project-tour/'
          subtext: 'Find your way around the starter.'
          iconName: 'rocket-launch'
          iconPosition: 'before'
          children: []
        - name: 'Customizing your brand'
          path: '/component-docs/customizing-your-brand/'
          subtext: 'Swap colors, fonts, and spacing.'
          iconName: 'swatch'
          iconPosition: 'before'
          children: []
    - name: 'Support hub'
      path: '/why/'
      children:
        - name: 'Guides'
          path: '/why/'
          children:
            - name: 'Site search'
              path: '/search/'
            - name: 'Blog'
              path: '/blog/'
        - name: 'Blog listing'
          path: ''
          children:
            - name: 'Blog Post'
              path: '/'
    - name: 'Label-only parent'
      path: '#'
      children:
        - name: 'Opens from row tap only'
          path: '/search/'
          children: []
        - name: 'Another link'
          path: '/why/'
          children: []
  buttonSections:
    - _component: 'building-blocks/core-elements/button'
      text: 'Search'
      hideText: true
      link: '/search/'
      iconName: 'magnifying-glass'
      iconPosition: 'before'
      variant: 'secondary'
      size: 'md'
    - _component: 'building-blocks/core-elements/button'
      text: 'Get started'
      link: '/'
      iconName: 'arrow-right'
      iconPosition: 'after'
      variant: 'primary'
      size: 'md'
---

When a node has **both** a real URL in `path` and a `children` array, the drawer shows the title as a link and uses a separate chevron control for the submenu. Placeholder paths such as `#` keep the whole row as the toggle (see **Label-only parent**).

Any `buttonSections` are pinned to the bottom of the panel, below the scrolling list, so calls-to-action stay reachable no matter how long the navigation gets.
