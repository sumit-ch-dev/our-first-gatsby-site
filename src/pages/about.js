import React from "react"
import Layout from "../components/layout"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
        <p>We are Making this site to showcase our skills</p>

        <h3>BitBandits</h3>
        <h4>we are a group of developers embarking on a journey</h4>

        <div>
          <h5>Group Members</h5>
          <ul>
            <li>Sumit chakraborty</li>
            <li>Shakhawat Shihab</li>
            <li>Pallob Poddar</li>
            <li>Nahid Parvez</li>
            <li>Mubashir Zahid</li>
          </ul>
        </div>
    </Layout>
  )
}

export const Head = () => (
    <>
    <title>About Me</title>
    <meta name='description' content='Your Description'/>
    </>
)

export default AboutPage