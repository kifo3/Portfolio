import { Avatar, Divider, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Sidebar } from 'src/components'
import Layout from 'src/layout/layout';
import { format } from 'date-fns';
import { calculateEstimatedTimeToRead } from 'src/helpers/time.format';
import { CategoryType } from 'src/interfaces/categories.interface';
import SEO from 'src/layout/seo/seo';
import { BlogsType } from '@/src/interfaces/blogs-interface';
import { BlogsService } from '@/src/services/blog-services';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';


const DetailedBlogsPage = ({ blog, latestBlogs, categories }: DetailedBlogsPageProps) => {
	const routeLink = useRouter();

	return (
		<SEO metaTitle={blog.title}>
			<Layout>
				<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
					<Box width={{ xs: '100%', md: '70%' }}>
						<Box
							sx={{
								backgroundColor: 'black',
								padding: '20px',
								borderRadius: '8px',
								boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)',
							}}
							position={'relative'}
							width={'100%'}
							height={{ xs: '30vh', md: '50vh' }}
							marginBottom={'20px'}
						>
							<Image src={blog.image.url} alt={blog.title} fill style={{ objectFit: 'cover', borderRadius: '10px' }} />
						</Box>
						<Box display={'flex'} flexDirection={'column'} rowGap={'10px'}>
							<Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
								<Avatar alt={blog.author.name} src={blog.author.avatar.url} />
								<Box>
									<Typography>{blog.author.name}</Typography>
									<Box color={'gray'}>
										{format(new Date(blog.createdAt), 'dd MMM, yyyy')} &#x2022;{' '}
										{calculateEstimatedTimeToRead(blog.description.html)}
										min read
									</Box>
								</Box>
							</Box>
							<Typography variant='h3'>{blog.title}</Typography>
							<Typography color={'gray'}>{blog.excerpt}</Typography>
							<Link sx={{fontSize: '20px', cursor: 'pointer'}} onClick={() => routeLink.push(`${blog.link.link}`)} underline="hover">
  								Link {blog.slug}
							</Link>
							<Divider />
							<div style={{ opacity: '.8' }} dangerouslySetInnerHTML={{ __html: blog.description.html }} />
						</Box>
					</Box>
					<Sidebar latestBlogs={latestBlogs} categories={categories} />
				</Box>
			</Layout>
		</SEO>
	);
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({ query }) => {
	const blog = await BlogsService.getDetailedBlogs(query.slug as string);
	const latestBlogs = await BlogsService.getLatestBlog();
	const categories = await BlogsService.getCategories();

	return {
		props: {
			blog,
			latestBlogs,
			categories,
		},
	};
};

interface DetailedBlogsPageProps {
	blog: BlogsType;
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}














