import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import { Content, Hero, Sidebar } from "../components";
import { BlogsType } from "../interfaces/blogs-interface";
import { CategoryType } from "../interfaces/categories.interface";
import Layout from "../layout/layout";
import SEO from "../layout/seo/seo";
import { BlogsService } from "../services/blog-services";

const IndexPage = ({blogs, latestBlogs, categories}: HemePageProps) => {

  return (
    
    <SEO>
      <Layout>
        <Hero />
        <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row'}, padding: '20px'}}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
    
      </Layout>
      
    </SEO>
    )
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HemePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blogs,
      latestBlogs,
      categories
    }
  }
}

interface HemePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}