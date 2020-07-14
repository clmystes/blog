import React, { useEffect } from "react"
import Layout from "gatsby-theme-blog/src/components/layout"

export default ({ children, ...props }) => {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("theme-ui-color-mode") == null) {
      localStorage.setItem("theme-ui-color-mode", "dark")
    }
  })

  return (
    <>
      <Layout {...props}>
        {children}
      </Layout>
    </>
  )
}
