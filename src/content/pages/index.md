---
_schema: default
title: Jetstream | Astro Template for CloudCannon
description: >-
  An Astro template built for CloudCannon with visual editing, flexible
  components, and an exceptional developer experience. Deploy your next project
  with speed and style.
keywords: []
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrowIcon: {}
    eyebrowText:
    heading: Introducing<br /><span class="highlight-text">Jetstream</span>
    headingSize: 4xl
    subtext: >-
      A new Astro template by CloudCannon, built with our [Astro Component
      Starter](https://lemon-pear.cloudvent.net/) for top performance, true
      visual editing, and an ideal developer experience.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Deploy Jetstream on CloudCannon
        hideText: false
        link: >-
          https://app.cloudcannon.com/register#sites/connect/github/cloudcannon/jetstream-astro-template
        iconName: arrow-up-right
        iconColor: default
        iconPosition: after
        variant: primary
        size: md
      - _component: building-blocks/core-elements/button
        text: Check out the Component Starter
        hideText: false
        link: https://github.com/CloudCannon/astro-component-starter
        iconName: arrow-up-right
        iconColor: default
        iconPosition: after
        variant: tertiary
        size: md
    image:
      source: /src/assets/images/hero-1.svg
      alt: Dashboard overview image rounded
      rounded: true
    icons:
      - name: globe-asia-australia
        color: '#f40f0f'
        background: true
        size: 4xl
      - name: rocket-launch
        color: '#000000'
        background: true
        size: 4xl
    backgroundDecoration: true
    sectionHeight: full
    maxContentWidth: lg
    colorScheme: inherit
    backgroundColor: highlight-grid
    contentBackground: true
    verticalOffset:
      size: nav-height
      direction: back
    rounded: false
    paddingVertical: md
  - _component: page-sections/features/logo-strip
    heading: >-
      We’ve solved the internet for the world’s most ambitious engineering
      teams.
    images:
      - source: /src/assets/images/apex.svg
        alt: Apex logo
        link: ''
      - source: /src/assets/images/aura.svg
        alt: Aura logo
        link: ''
      - source: /src/assets/images/business2.svg
        alt: Fake Business logo
        link: ''
      - source: /src/assets/images/businesss.svg
        alt: Vantage logo
        link: ''
      - source: /src/assets/images/dental.svg
        alt: Align logo
        link: ''
      - source: /src/assets/images/fake-uni.svg
        alt: Fake University logo
        link: ''
      - source: /src/assets/images/fintech.svg
        alt: Fintech logo
        link: ''
      - source: /src/assets/images/medical.svg
        alt: Omnia logo
        link: ''
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: light
    backgroundColor: surface-linear-gradient
    contentBackground: false
    lockColorScheme: true
    verticalOffset:
      size: 2xl
      direction: front
    rounded: true
  - _component: page-sections/features/feature-grid
    id: services
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: light-bulb
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: center
    eyebrowText:
    heading: 'Jetstream protects what matters most: <br />your uptime percentage'
    subtext: >-
      Everything you need to scale from boutique team to a global enterprise
      without the operational friction —&nbsp;or the science fiction.
    featureGrid:
      features:
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-1.svg
            alt: Dashboard accelerate
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: Content delivery acceleration
          description: >-
            Your websites will load faster than human perception allows. We're
            not saying we've broken the laws of physics, but our CDN operates at
            speeds that would make light jealous.
          columnSpan: 5
          rowSpan: 1
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: ''
            alt: ''
            rounded: false
          eyebrowIcon: {}
          eyebrowText: We've got this.
          title: DDoS mitigation that never sleeps
          description: >-
            Bad actors don't stand a chance against our behavioral analysis
            engines, which have been trained on every known attack pattern, plus
            several we invented just to be thorough.
          columnSpan: 3
          rowSpan: 1
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-2.svg
            alt: Dashboard queries
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: Zero-trust security framework
          description: >-
            We trust nothing and verify everything, twice. Sometimes three times
            if it's Tuesday. Our security team operates under the principle that
            paranoia isn't a bug — it's a feature we bill for.
          columnSpan: 4
          rowSpan: 1
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-3.svg
            alt: Dashboard global
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: Automated SSL / TLS management
          description: >-
            Our automated certificate lifecycle system renews your SSL
            certificates before they even think about expiring. We've eliminated
            the 3am renewal panic entirely.
          columnSpan: 3
          rowSpan: 1
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-4.svg
            alt: Dashboard uptime
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: DNS resolution bordering on prescient
          description: >-
            Our global DNS infrastructure responds in fractions of milliseconds
            that require new units of measurement. Your domain names resolve
            before users finished typing them.
          columnSpan: 7
          rowSpan: 1
      backgroundColor: highlight-radial-gradient
      gridBackgroundMaxWidth: none
      gridMaxWidth: 2xl
      rounded: false
      overhang: true
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    contentBackground: false
    verticalOffset:
      size: none
      direction: front
    rounded: false
  - _component: page-sections/info-blocks/tabbed-content
    id: solutions
    eyebrowIcon: {}
    eyebrowText:
    heading: Customer solutions that solve themselves
    subtext: >-
      We don't just provide infrastructure — we provide infrastructure that
      understands your business. And your heart.
    tabs:
      - _component: building-blocks/wrappers/content-selector/content-selector-item
        title: MediConnect
        subtext: Telemedicine platform connecting 15K+ providers
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/simple-text
                text: >-
                  We implemented our low-latency routing protocol and deployed
                  dedicated health sector edge nodes with HIPAA-compliant
                  encryption that doesn't slow things down.

                  Doctors can read patient expressions in real-time, and medical
                  care is delivered at the speed of actual conversation — which,
                  our research indicates, is how medical care should work.
                alignmentHorizontal: start
                size: md
            secondColumnContentSections: []
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/image
                source: /src/assets/images/medi-connect.png
                alt: Person thinking
                sizes: '(max-width: 1280px) 100vw, 1280px'
                widths:
                  - 640
                  - 1280
                  - 2560
                rounded: false
                aspectRatio: none
                positionVertical: center
                positionHorizontal: center
                priority: false
                id: ''
            secondColumnContentSections:
              - _component: building-blocks/core-elements/counter
                number: 94
                prefix:
                suffix: '%'
                alignmentHorizontal: start
                size: xl
              - _component: building-blocks/core-elements/text
                text: '**Reduction in connection quality complaints**'
                alignmentHorizontal: start
                size: md
              - _component: building-blocks/core-elements/counter
                number: 340
                prefix:
                suffix: x
                alignmentHorizontal: start
                size: xl
              - _component: building-blocks/core-elements/text
                text: '**More numbers than other companies**'
                alignmentHorizontal: start
                size: md
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
      - _component: building-blocks/wrappers/content-selector/content-selector-item
        title: FinTrust Bank
        subtext: Digital banking institution processing transactions for 8M customers
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/simple-text
                text: >-
                  FinTrust needed transaction speeds that matched customer
                  expectations and security that exceeded regulatory paranoia.
                  Their customers now experience instantaneous transfers while
                  attempted attacks are neutralized before they even realize
                  they've failed. Banking infrastructure that's faster than
                  fraud and more reliable than gravity.
                alignmentHorizontal: start
                size: md
            secondColumnContentSections: []
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/image
                source: /src/assets/images/fin-trust.png
                alt: Fintrust dashboard
                sizes: '(max-width: 1280px) 100vw, 1280px'
                widths:
                  - 640
                  - 1280
                  - 2560
                rounded: false
                aspectRatio: none
                positionVertical: center
                positionHorizontal: center
                priority: false
                id: ''
            secondColumnContentSections:
              - _component: building-blocks/core-elements/counter
                number: 2.3
                prefix:
                suffix: s
                alignmentHorizontal: start
                size: xl
              - _component: building-blocks/core-elements/text
                text: '**Average transaction completion time**'
                alignmentHorizontal: start
                size: md
              - _component: building-blocks/core-elements/counter
                number: 100
                prefix:
                suffix: '%'
                alignmentHorizontal: start
                size: xl
              - _component: building-blocks/core-elements/text
                text: '**Mitigation rate against 12,000+ daily attack attempts**'
                alignmentHorizontal: start
                size: md
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
    navigationPosition: top
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: light
    backgroundColor: highlight-grid
    verticalOffset:
      size: none
      direction: ''
    rounded: false
  - _component: page-sections/people/testimonial-section
    text: >-
      Downtime used to be a weekly crisis. Now it's a theoretical concept we
      vaguely remember.
    authorName: Dr. Liz Vante
    authorDescription: CTO, MediConnect Healthcare
    authorImage: /src/assets/images/testimonial.png
    maxContentWidth: xl
    paddingVertical: 2xl
    colorScheme: dark
    backgroundColor: highlight-radial-gradient
    background:
      type: image
      positionVertical: top
      positionHorizontal: center
      priority: false
      imageSource: ''
      imageAlt: ''
      overlay: 0
  - _component: page-sections/features/feature-grid
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: presentation-chart-line
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: center
    eyebrowText:
    heading: Pricing that scales with your ambition
    subtext: >-
      Choose the plan that matches your current infrastructure needs, then
      upgrade when your inevitable success makes it necessary. We'll be here,
      ready with congratulations and additional bandwidth.
    featureGrid:
      features:
        - _component: page-sections/features/feature-grid/pricing-item
          title: Standard
          price:
            prefix: $
            amount: '49'
            suffix: /mo
          subtext: 'For organizations that need reliability '
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Global CDN with 800+ edge nodes
                iconName: check-circle
                iconColor: purple
                link: ''
              - text: Automated SSL certificate management
                iconName: check-circle
                iconColor: purple
                link: ''
              - text: "Complimentary network topology consult with\Lour most artistic engineer"
                iconName: check-circle
                iconColor: purple
                link: ''
            direction: vertical
            alignmentHorizontal: start
            size: md
            listType: icon
          button:
            _component: building-blocks/core-elements/button
            text: Get started
            hideText: false
            link: https://cloudcannon.com/templates/jetstream/
            iconName: arrow-right
            iconColor: default
            iconPosition: after
            variant: secondary
            size: md
          columnSpan: 5
          rowSpan: 1
        - _component: page-sections/features/feature-grid/pricing-item
          title: Team
          price:
            prefix: $
            amount: '300'
            suffix: /mo
          subtext: For organizations that refuse to accept the concept of downtime
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Priority traffic routing
                iconName: check-circle
                iconColor: purple
                link: ''
              - text: Dedicated customer success specialist
                iconName: check-circle
                iconColor: purple
                link: ''
              - text: "Annual infrastructure health assessment conducted by our senior architects,\Lcomplete with a 40-page report bound in a collectible presentation folder"
                iconName: check-circle
                iconColor: purple
                link: ''
            direction: vertical
            alignmentHorizontal: start
            size: md
            listType: icon
          button:
            _component: building-blocks/core-elements/button
            text: Get started
            hideText: false
            link: https://cloudcannon.com/templates/jetstream/
            iconName: arrow-right
            iconColor: default
            iconPosition: after
            variant: secondary
            size: md
          columnSpan: 7
          rowSpan: 1
      backgroundColor:
      gridBackgroundMaxWidth: none
      gridMaxWidth: 2xl
      rounded: false
      overhang: false
    maxContentWidth: md
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: surface-linear-gradient
    contentBackground: false
    verticalOffset:
      size: 6xl
      direction: back
    rounded: false
  - _component: page-sections/ctas/cta-center
    eyebrowIcon: {}
    eyebrowText:
    heading: Ready for performance that defies conventional wisdom?
    subtext:
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Book a strategy session
        hideText: false
        link: ''
        iconName: calendar
        iconColor: default
        iconPosition: before
        variant: primary
        size: md
    maxContentWidth: xl
    paddingVertical: 4xl
    colorScheme: dark
    backgroundColor: highlight-radial-gradient
    contentBackground: false
    rounded: true
---
