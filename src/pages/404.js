import React from "react"
import SEO from "../components/seo"
import Container from '../components/container'

const NotFoundPage = () => (
    <Container>
    <SEO title="404: Not found" />
    <h1>Сторінка не існує</h1>
    <p>Ви перейшли на сторінку яка не існує</p>
  </Container>
)

export default NotFoundPage
