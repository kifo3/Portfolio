import { request, gql } from 'graphql-request';
import { BlogsType } from '../interfaces/blogs-interface';
import { CategoryType } from '../interfaces/categories.interface';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
    async getAllBlogs() {
        const query = gql `
            query GetBlogs {
                blogs {
                  id
                  excerpt
                  slug
                  title
                  description {
                    html
                    text
                  }
                  author {
                    name
                    avatar {
                      url
                    }
                  }
                  category {
                    label
                    slug
                  }
                  image {
                    url
                  }
                  createdAt
                }
             }
          
        `;

        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query);
        return result.blogs;
    },
    async getLatestBlog() {
      const query = gql `
            query GetLatestBlog {
                blogs(last: 2) {
                  id
                  slug
                  title
                  excerpt
                  createdAt
                  description {
                    html
                    text
                  }
                  image {
                    url
                  }
                  author {
                    name
                    avatar {
                      url
                    }
                  }
                }
             }
          
        `;

        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query);
        return result.blogs;
    },
    async getCategories() {
      const query = gql `
        query GetCategories {
          categories {
            slug
            label
          }
        }
      `;

      const result = await request<{ categories: CategoryType[] }>(graphqlAPI, query);
      return result.categories;
    },

    async getDetalidBlogs(slug: string) {
      const query = gql `
        query GetDetailedBlog($slug: String!){
          blog(where: { slug: $slug }) {
            id
            excerpt
            slug
            title
            createdAt
            description {
               html
               text
            }
            image {
              url
            }
            author {
              name
              avatar {
                url
              }
            }
          }
        }
      `;

      const result = await request<{ blog: BlogsType[] }>(graphqlAPI, query, { slug });
      return result.blog;
    },

    async getDetailedCategoriesBlog(slug: String) {
      const query = gql`
        query getCategoriesBlog($slug: String!) {
          blogs(where: { category: { slug: $slug }}) {
            id
            excerpt
            slug
            title
            description {
              html
              text
            }
            author {
              name
              avatar {
                url
              }
            }
            category {
              label
              slug
            }
            image {
              url
            }
            createdAt
          }
        }
      `;

      const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query, {slug});
      return result.blogs;
    }
}