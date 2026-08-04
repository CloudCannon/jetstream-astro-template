---
_schema: blog-index
title: Blog
description: >-
  Read our latest articles and insights on web development, design, and
  technology.
keywords: []
heroSections:
  - _component: page-sections/heroes/hero-card
    id:
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
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
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: Let's build your next tech breakthough together
    subtext:
    buttonSections:
      - _component: building-blocks/core-elements/button
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
