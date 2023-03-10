import {GraphQLClient, gql} from 'graphql-request'


export const graphcms = new GraphQLClient(process.env.REACT_APP_API)

//blog queries

const blogCategory = `
    id,
    title,
    slug
`

const posts = `
    id,
    slug,
    title,
    content { html },
    image   { url },
    datePublished,
    authors {
            name,
            id,
            content { html },
            image   { url },
            },
    preview
`

//resource queries

const resourceCategory = `
    id,
    slug,
    title
`

const resources = `
    id,
    slug,
    title,
    url,
    content { html },
    image { url },
    category { title, slug} 
`


export const QUERY_SLUG_BLOG_CATEGORIES = gql`
    {
        categories(){
            title,
            slug
        }
    }
`