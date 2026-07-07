---
_schema: default
title: Pricing
description: ''
keywords: []
pageSections:
  - _component: page-sections/heroes/hero-center
    id:
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: document-currency-dollar
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: center
    eyebrowText:
    heading: >-
      Pricing designed<br />by <span class="highlight-text">engineers</span><br
      />who know value
    headingSize: 2xl
    subtext: >-
      We’ve eliminated the confusion typically associated with infrastructure
      pricing <br>through a strategy we call "being straightforward about what
      things cost."
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Book a demo
        hideText: false
        link: ''
        iconName: arrow-long-right
        iconColor: default
        iconPosition: after
        variant: primary
        size: md
    icons:
      - name: globe-asia-australia
        color: brand-gradient
        background: true
        size: 4xl
      - name: rocket-launch
        color: brand-gradient
        background: true
        size: 4xl
    backgroundDecoration: false
    sectionHeight: content
    maxContentWidth: 2xl
    colorScheme: inherit
    backgroundColor: highlight-grid
    contentBackground: true
    verticalOffset:
      size: nav-height
      direction: back
    rounded: false
  - _component: page-sections/features/feature-grid
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: ''
    subtext:
    featureGrid:
      features:
        - _component: page-sections/features/feature-grid/pricing-item
          title: Standard
          price:
            prefix: $
            amount: '49'
            suffix: /mo
          subtext: For organizations that need reliability
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Global CDN with 800+ edge nodes
                iconName: globe-americas
                iconColor: default
                link: ''
              - text: Automated SSL certificate management
                iconName: shield-check
                iconColor: default
                link: ''
              - text: "Complimentary network topology consult with\Lour most artistic engineer"
                iconName: heart
                iconColor: default
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
                iconName: adjustments-horizontal
                iconColor: default
                link: ''
              - text: Dedicated customer success specialist
                iconName: chat-bubble-left-right
                iconColor: default
                link: ''
              - text: "Annual infrastructure health assessment conducted by our senior architects,\Lcomplete with a 40-page report bound in a collectible presentation folder"
                iconName: heart
                iconColor: default
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
        - _component: page-sections/features/feature-grid/pricing-item
          title: Enterprise
          price:
            prefix:
            amount: Custom to your needs
            suffix:
          subtext: >-
            For organizations that consider infrastructure a competitive
            advantage
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Custom API rate limits
                iconName: chart-bar
                iconColor: default
                link: ''
              - text: Dedicated Slack channel with our operations team
                iconName: chat-bubble-bottom-center-text
                iconColor: default
                link: ''
              - text: Quarterly capacity planning sessions
                iconName: clipboard-document-list
                iconColor: default
                link: ''
              - text: Custom security rules
                iconName: lock-closed
                iconColor: default
                link: ''
              - text: Priority feature requests
                iconName: question-mark-circle
                iconColor: default
                link: ''
              - text: Private peering arrangements
                iconName: globe-alt
                iconColor: default
                link: ''
              - text: Daily infrastructure audits
                iconName: clipboard-document-check
                iconColor: default
                link: ''
              - text: Contractual response times
                iconName: clock
                iconColor: default
                link: ''
              - text: Access to ‘experimental’ features
                iconName: heart
                iconColor: default
                link: ''
            direction: vertical
            alignmentHorizontal: start
            size:
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
          columnSpan: 12
          rowSpan: 1
      backgroundColor: brand-linear-gradient-muted
      gridBackgroundMaxWidth: 3xl
      gridMaxWidth: 2xl
      rounded: true
      overhang: true
    maxContentWidth: 2xl
    paddingVertical: xl
    colorScheme: inherit
    backgroundColor: base
    contentBackground: false
    verticalOffset: {}
    rounded: false
  - _component: page-sections/info-blocks/table
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: Compare plan features
    subtext:
    table:
      headers:
        - hideText: true
          text: ''
        - hideText: true
          text: ''
        - hideText: false
          text: Standard
        - hideText: false
          text: Team
        - hideText: false
          text: Enterprise
      sections:
        - sectionName: Performance and delivery
          rows:
            - cells:
                - Global edge nodes
                - 847 locations
                - 847 locations + priority routing
                - Custom dedicated nodes
            - cells:
                - Bandwidth included
                - 10TB/month
                - 50TB/month
                - Custom allocation
            - cells:
                - DNS query response time
                - <5ms average
                - <2ms average
                - <1ms guaranteed
        - sectionName: Security and reliability
          rows:
            - cells:
                - DDoS protection
                - Up to 10Tbps
                - Up to 50Tbps
                - Custom mitigation
            - cells:
                - SSL certificate management
                - 100+ domains
                - Unlimited domains
                - Custom certificates and private CA integration
            - cells:
                - Uptime SLA
                - 99.9%
                - 99.99%
                - 99.999% with financial guarantees
        - sectionName: Security and reliability
          rows:
            - cells:
                - Support availability
                - Business hours, 4-hour response
                - 24/7, 1-hour response
                - 25/8, 15-minute response with dedicated team
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    contentBackground: false
    verticalOffset:
      size: xl
      direction: front
    rounded: false
  - _component: page-sections/info-blocks/faq-section
    heading: Common questions
    items:
      - _component: building-blocks/wrappers/accordion/accordion-item
        title: How quickly can I get started?
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/text
                text: >-
                  Approximately seven minutes for basic setup, assuming you can
                  type reasonably fast and don't get distracted.


                  Our onboarding process involves pointing your DNS at our
                  nameservers and letting our automation handle the rest.


                  For more complex migrations requiring custom configurations,
                  our team can have you operational within 24 hours.


                  We've timed it. Multiple times. With stopwatches.
                alignmentHorizontal: start
              - _component: building-blocks/wrappers/button-group
                label:
                buttonSections:
                  - _component: building-blocks/core-elements/button
                    text: Get started
                    hideText: false
                    link: https://cloudcannon.com/templates/jetstream/
                    iconName: arrow-right
                    iconColor: default
                    iconPosition: after
                    variant: secondary
                    size: md
                direction: row
                alignmentHorizontal: start
            secondColumnContentSections:
              - _component: building-blocks/core-elements/image
                id: ''
                source: /src/assets/images/card-1.svg
                alt: ''
                rounded: true
                aspectRatio: none
                positionVertical:
                positionHorizontal: center
                priority: false
            distributionMode: half
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
      - _component: building-blocks/wrappers/accordion/accordion-item
        title: What happens if I exceed my bandwidth limit?
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/text
                text: >-
                  We'll send you a polite notification and continue serving your
                  traffic without interruption, because throttling your users
                  mid-session seems counterproductive to everyone involved.


                  You'll be billed for overage at a reasonable per-GB rate that
                  we've listed clearly in our documentation.


                  If you're consistently exceeding your plan limits, we'll
                  suggest upgrading to a tier that matches your actual usage —
                  our billing team considers surprises a sign of poor
                  communication.
                alignmentHorizontal: start
              - _component: building-blocks/wrappers/button-group
                label:
                buttonSections:
                  - _component: building-blocks/core-elements/button
                    text: Get started
                    hideText: false
                    link: https://cloudcannon.com/templates/jetstream/
                    iconName: arrow-right
                    iconColor: default
                    iconPosition: after
                    variant: secondary
                    size: md
                direction: row
                alignmentHorizontal: start
            secondColumnContentSections:
              - _component: building-blocks/core-elements/image
                id: ''
                source: /src/assets/images/card-2.svg
                alt: ''
                rounded: true
                aspectRatio: none
                positionVertical:
                positionHorizontal: center
                priority: false
            distributionMode: half
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
      - _component: building-blocks/wrappers/accordion/accordion-item
        title: What if I need to cancel my service?
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/text
                text: >-
                  You can cancel anytime from your dashboard without talking to
                  a retention specialist who's been trained to make you feel
                  guilty.


                  We'll continue service through the end of your billing period,
                  provide export tools for your configuration data, and part
                  ways professionally.


                  Our cancellation process takes approximately 90 seconds, which
                  our legal team insists is still too generous but our
                  engineering team considers appropriately respectful of
                  people's time.
                alignmentHorizontal: start
              - _component: building-blocks/wrappers/button-group
                label:
                buttonSections:
                  - _component: building-blocks/core-elements/button
                    text: Get started
                    hideText: false
                    link: https://cloudcannon.com/templates/jetstream/
                    iconName: arrow-right
                    iconColor: default
                    iconPosition: after
                    variant: secondary
                    size: md
                direction: row
                alignmentHorizontal: start
            secondColumnContentSections:
              - _component: building-blocks/core-elements/image
                id: ''
                source: /src/assets/images/fin-trust.png
                alt: ''
                rounded: true
                aspectRatio: none
                positionVertical:
                positionHorizontal: center
                priority: false
            distributionMode: half
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    id:
    eyebrowIcon: {}
    eyebrowText: ''
    subtext: ''
    singleOpen: true
    openFirst: false
    maxContentWidth: xl
    contentBackground: false
    verticalOffset:
      size: xl
      direction: front
    rounded: false
  - _component: page-sections/ctas/cta-form
    id: contact
    eyebrowIcon: {}
    eyebrowText: ''
    heading: Need more info?<br /><span class="highlight-text">Contact us</span>
    subtext: >-
      Our solutions team stands ready with answers and an appropriate level of
      enthusiasm.
    formAction: ./
    formBlocks:
      - _component: building-blocks/forms/input
        label: Name
        name: name
        type: text
        required: true
        iconColor: default
        iconPosition: before
      - _component: building-blocks/forms/input
        label: Email
        name: email
        type: email
        required: true
        iconColor: default
        iconPosition: before
      - _component: building-blocks/forms/textarea
        label: Message
        name: message
        required: true
      - _component: building-blocks/forms/submit
        text: Send message
        variant: primary
        size: md
        iconColor: default
        iconPosition: before
        hideText: false
        disabled: false
    buttonSections: []
    reverse: false
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: highlight-grid
    contentBackground: true
    verticalOffset:
      size: xl
      direction: front
    rounded: false
---
