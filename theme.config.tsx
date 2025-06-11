import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span style={{ fontWeight: 'bold' }}>Zen Development</span>,
    project: {
        link: 'https://github.com/chozr7/chozr7.github.io',
    },
    docsRepositoryBase: 'https://github.com/chozr7/chozr7.github.io',
    footer: { component: () => null },
    primaryHue: 150,
    darkMode: true,
}

export default config
