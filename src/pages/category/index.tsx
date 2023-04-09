import { CategoryType } from "@/src/interfaces/categories.interface";
import Layout from "@/src/layout/layout";
import SEO from "@/src/layout/seo/seo";
import { BlogsService } from "@/src/services/blog-services";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const CategoriyPage = ({categories}: CategoryPageProps) => {
    const router = useRouter();

    return(
        <SEO metaTitle="All Categories">
            <Layout>
                <Box 
                    height={{ xs: '30vh', md: '50vh'}}
                    width={{ xs: '100%', md: '80%'}} 
                    marginX={'auto'}
                    marginTop={'10vh'}
                    borderRadius={'8px'}
                    rowGap={'10px'}
                    sx={{backgroundColor: '#2b2d42', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                >
                    <Typography variant="h3" color={'white'} fontFamily={'cursive'} >All Categories</Typography>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        {categories.map(item => (
                            <Button onClick={() => router.push(`/category/${item.slug}`)} key={item.slug}># {item.label}</Button>
                        ))}
                    </ButtonGroup>
                </Box>
        </Layout>
        </SEO>
        
    )
}

export default CategoriyPage;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async () => {
    const categories = await BlogsService.getCategories();

    return {
        props: {categories}
    }
}

interface CategoryPageProps {
    categories: CategoryType[];
}