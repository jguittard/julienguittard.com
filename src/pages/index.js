import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/SEO"
import styled from "styled-components"

const FluidImg = styled(Img)`
  width: 100%;
  height: auto !important;
`

const Card = styled.section`
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`

const Portrait = styled.header`
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: -30px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

const Name = styled.h4`
  font-weight: 700;
  color: #333;
`

const Job = styled.h6`

`

const Table = styled.section`
  padding: 15px 30px;
  margin-top: 15px;
  margin-bottom: 0;
`

export default () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          job
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Welcome" pathName="/" />
      <Row className="justify-content-md-center">
        <Col xs lg={4} md={12}>
          <Card>
            <Portrait>
              <FluidImg fixed={data.file.childImageSharp.fluid} />
            </Portrait>
            <Table>
              <Name>{data.site.siteMetadata.author}</Name>
              <h6 className="category text-gray">{data.site.siteMetadata.job}</h6>
              <footer className="ftr">
                <Link to={`https://twitter.com/`} className="btn btn-just-icon btn-twitter btn-round" rel="noopener, noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link to={`https://linkedin.com/in/`} className="btn btn-just-icon btn-linkedin btn-round" rel="noopener, noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link to={`https://github.com/`} className="btn btn-just-icon btn-github btn-round" rel="noopener, noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </footer>
            </Table>
          </Card>

        </Col>
      </Row>
    </Layout>
  )
}
