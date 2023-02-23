import {gql} from '@apollo/client'

//get all information to display blog post
const GET_BLOG_POSTS = gql`
query blogPosts {
    blogPosts {
      id,
      title,
      authors {
        id,
        name,
        profilePic{
          url,
          id
        },
        aboutAuthor{
          html
        }
      },
      content {
        html
      },
      blogPhoto {
        id,
        url
      },
      blogCategories{
        blogCategoryTitle,
        slug,
        id
      },
      datePublished,
      
    }
  }
  

`
const GET_BLOG_CATEGORY = gql`
query blogCategories {
    blogCategories {
        blogCategoryTitle
        id
        slug
      }
      blogPosts {
        authors {
          id
          name
          aboutAuthor {
            html
          }
          profilePic {
            id
            url
          }
        }
        content {
          html
        }
        blogPhoto {
          id
          url
        }
        slug
        title
        id
        datePublished
      }
    }
  
`
const GET_AUTHORS = gql`
query authors {
    authors {
      id
      name
      profilePic {
        id
        url
      }
      aboutAuthor {
        html
      }
    }
  }
`

const GET_RESOURCES = gql`
query resources {
    resources{
      title,
      slug,
      id,
      resourcePhoto{
        id,
        url
      },
      websiteUrl,
      content{
        html
      },
      resourceCategories{
        resourceCategoryTitle,
        id,
        slug
      }
    }
  }
  
`

const GET_RESOURCE_CATEGORY = gql`
query resourceCategory {
    resourceCategories {
      resourceCategoryTitle
      id
      slug
      resources {
        id
        slug
        title
        websiteUrl
        resourcePhoto {
          id
          url
        }
        content {
          html
        }
      }
    }
  }
`