import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is a blog to showcase our project and portfolios</p>

      {/* <Gallery/> */}
      <StaticImage
        style={{ width: "300px", height: "300px" }}
        alt="Sumit's profile picture"
        src="../images/sumit.jpg"
      />
      <StaticImage
        style={{ width: "300px", height: "300px" }}
        alt="Shakhawat's profile picture"
        src="../images/shakhawat.png"
      />
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>


export default IndexPage;