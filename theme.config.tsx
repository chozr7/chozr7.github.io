import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const siteName = 'Zen Development';
const siteUrl = 'https://chozr7.github.io';

function useHead() {
    const { asPath } = useRouter();
    const description = `Documentation for ${siteName}\'s resources for FiveM`;

    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link rel="icon" type="image/png" href="https://users-cdn.versescripts.net/26f8b7e84a37d879bbf9d98289238c20.png"/>
            <meta httpEquiv='Content-Language' content='en' />
            <meta name='description' content={description} />
            <meta name='og:title' content={siteName} />
            <meta name='og:description' content={description} />
            <meta name='og:url' content={`${siteUrl}${asPath}`} />
        </>
    );
}

const capitalizeWords = (str: string) => str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());

function useNextSeoProps() {
    const { asPath } = useRouter();
    const segments = asPath.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
    const category = capitalizeWords((segments[0] || siteName).replace(/[-_]/g, ' '));
    
    return { titleTemplate: segments.length === 1 ? `${category} - Documentation` : `%s - ${category}` };
}

const config: DocsThemeConfig = {
    logo: <img src="https://users-cdn.versescripts.net/26f8b7e84a37d879bbf9d98289238c20.png" width={36} height={36} alt="Zen Development" />,
    chat: { link: 'https://discord.gg/chozr' },
    project: { link: 'https://github.com/chozr7/chozr7.github.io' },
    docsRepositoryBase: 'https://github.com/chozr7/chozr7.github.io',
    footer: { component: () => null },
    primaryHue: 210,
    darkMode: true,
    head: useHead,
    useNextSeoProps: useNextSeoProps,
}

export default config
