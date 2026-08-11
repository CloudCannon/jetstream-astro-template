---
_schema: blog-index
permalink:
title: Blog
description: >-
  Read our latest articles and insights on web development, design, and
  technology.
keywords: []
heroSections:
  - _component: page-sections/heroes/hero-card
    _uuid: 2f9ee893-ba32-4a0a-b063-4f7dd07a38d7
    id:
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      _uuid: ff6799dc-4c45-4874-ba8e-d04bdfe4f742
      name: newspaper
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: start
    heading: The engineering journal
    subtext: >-
      Insights, updates, and occasional technical deep-dives from the team that
      keeps the internet running.
    card:
      usePost: false
      post: /src/content/blog/why-we-rebuilt-our-dns-resolver-from-scratch-again.mdx
      eyebrowText:
      heading: >-
        Why we rebuilt our DNS resolver from scratch (<span
        class="highlight-text">again</span>)
      subtext: >-
        Sometimes good enough isn't good enough, especially when our engineers
        have strong opinions about query optimization.
      metaText:
      buttonSections:
        - _component: building-blocks/core-elements/button
          _uuid: d353cfdf-967b-447d-85af-1bcfdb391d8d
          text: Learn why we did it
          hideText: false
          link: /blog/why-we-rebuilt-our-dns-resolver-from-scratch-again
          iconName: arrow-right
          iconPosition: after
          variant: secondary
          size: md
      image:
        source: /src/assets/images/blog-dns-resolver.png
        alt: >-
          There seems no limit to what the printed circuit could have told you
          (if you had tried to find out); a revelation  trembles just past the
          threshold of your understanding.
        rounded: true
      counters:
        - counter:
            number: 47
            prefix:
            suffix: ms
          subtext: Previous resolver response time (unacceptable)
        - counter:
            number: 1.2
            prefix:
            suffix: ms
          subtext: New resolver response time (acceptable)
        - counter:
            number: 840
            prefix:
            suffix: K+
          subtext: Lines of code written, deleted, rewritten
        - counter:
            number: 3
            prefix:
            suffix:
          subtext: All-hands meetings to convince management
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    verticalOffset:
      size: xl
      direction: front
    rounded: false
ctaSections:
  - _component: page-sections/ctas/cta-center
    _uuid: 7db52143-7dee-4ca3-9015-4531e5614fc9
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: Let's build your next tech breakthough together
    subtext:
    buttonSections:
      - _component: building-blocks/core-elements/button
        _uuid: 02cd2bbb-bf93-447c-8ad1-7906f73ade56
        text: Or talk to us about fiber optics instead
        hideText: false
        link: ''
        iconName: arrow-long-right
        iconPosition: after
        variant: primary
        size: md
    maxContentWidth: xl
    paddingVertical: 2xl
    colorScheme: dark
    backgroundColor: highlight-radial-gradient
    contentBackground: false
    rounded: false
---
