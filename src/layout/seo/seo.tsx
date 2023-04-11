import { siteConfig } from "@/src/config/site.config";
import Head from "next/head";
import { SeoProps } from "./seo.props";

const SEO = ({
        children, 
        author = siteConfig.author, 
        metaDescription = siteConfig.metaDescription, 
        metaKeywords = siteConfig.metaKeywords, 
        metaTitle = siteConfig.metaTitle
    }: SeoProps) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" /> 
            <meta name="viewport" content="width=device-width, initial-slace=1, maximum-slace=5" />
            <title>{metaTitle}</title>

            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="keyword" content={metaKeywords} />
            <meta name="author" content={author} />
            <meta name="descripton" content={metaDescription} />
            <link rel="shortcut icon" href={'/next.svg'} type="image/x-icon" />
        </Head>
        {children}
        </>
    )
}

export default SEO;