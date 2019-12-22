import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./facebook"
import Twitter from "./twitter"

const SEO = ({ title, desc, banner, pathName, article, node }) => {
  const { site } = useStaticQuery(querySEO)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook
    }
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathName || ''}`
  }

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Person',
      name: author
    },
    datePublished: '2019-12-18T10:00:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`
    }
  }

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'HomePage',
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
    }

    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        { !article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script> }
        { article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script> }
        <script type="application/ld+json">{ JSON.stringify(breadcrumb) }</script>
      </Helmet>
      <Facebook
        locale={ ogLanguage }
        desc={ seo.description }
        image={ seo.image }
        title={ seo.title }
        url={ seo.url }
        type={ article ? 'article': 'website' }
        name={ facebook }
        />
      <Twitter image={ seo.image } title={ seo.title } desc={ seo.description } username={ twitter } />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathName: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathName: null,
  article: false,
  node: null
}

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: logo
        headLine
        siteLanguage
        ogLanguage
        author
        social {
          twitter
          facebook
        }
      }
    }
  }
`
