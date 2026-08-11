---
title: Primary Bento Box
spacing: null
blocks:
  _component: building-blocks/wrappers/bento-box
  layout: center
  gap: md
  items:
    - columnSpan: 6
      rowSpan: 2
      contentSections:
        - _component: building-blocks/wrappers/card
          backgroundColor: accent
          paddingHorizontal: lg
          paddingVertical: lg
          contentSections:
            - _component: building-blocks/core-elements/heading
              text: Large Feature
              level: h3
            - _component: building-blocks/core-elements/text
              text: This item spans 6 columns and 2 rows, making it a prominent feature in the grid.
    - columnSpan: 6
      rowSpan: 1
      contentSections:
        - _component: building-blocks/wrappers/card
          backgroundColor: surface
          paddingHorizontal: md
          paddingVertical: md
          contentSections:
            - _component: building-blocks/core-elements/heading
              text: Medium Item
              level: h3
            - _component: building-blocks/core-elements/text
              text: A 6-column, 1-row card.
    - columnSpan: 3
      rowSpan: 1
      contentSections:
        - _component: building-blocks/wrappers/card
          backgroundColor: highlight
          paddingHorizontal: md
          paddingVertical: md
          contentSections:
            - _component: building-blocks/core-elements/heading
              text: Small
              level: h3
            - _component: building-blocks/core-elements/text
              text: 3-column item.
    - columnSpan: 3
      rowSpan: 1
      contentSections:
        - _component: building-blocks/wrappers/card
          backgroundColor: highlight
          paddingHorizontal: md
          paddingVertical: md
          contentSections:
            - _component: building-blocks/core-elements/heading
              text: Small
              level: h3
            - _component: building-blocks/core-elements/text
              text: Another 3-column item.
---
