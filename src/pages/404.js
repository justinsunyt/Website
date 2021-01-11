import React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout coloredHeader={true}>
    <div className="not-found">
      <h1 style={{ fontSize: 36 }}>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

export default NotFoundPage
