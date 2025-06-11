/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  defaultShowCopyCode: true,
})

const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

module.exports = withNextra({
  images: {
    unoptimized: isGithubPages,
  },
  basePath: isGithubPages ? '/chozr7.github.io' : '',
  trailingSlash: true,
  output: 'export',
})
