import { Content, Sidebar } from "@/src/components";
import { BlogsType } from "@/src/interfaces/blogs-interface";
import { CategoryType } from "@/src/interfaces/categories.interface";
import Layout from "@/src/layout/layout"
import SEO from "@/src/layout/seo/seo";
import { BlogsService } from "@/src/services/blog-services";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const CategoryDetailedPage = ({blogs, categories, latestBlogs}: CategoryDetailedPage) => {
    const router = useRouter();
 
    return (
        <SEO metaTitle={`${router.query.slug}-category`}>
            <Layout>
                <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row'}, padding: '20px'}}>
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                    <Content blogs={blogs} />
                </Box>
        </Layout>
        </SEO>
        
    )
}

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<CategoryDetailedPage> = async ({query}) => {
    const blogs = await BlogsService.getDetailedCategoriesBlog(query.slug as string);
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();


    return {
        props: {
            blogs,
            latestBlogs,
            categories,
        }
    }
}

interface CategoryDetailedPage {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}