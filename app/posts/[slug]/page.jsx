import RenderFromMd from '../../components/RenderFromMd'
import blogData from '../blogData.js';

export async function generateStaticParams() {
    return blogData.map((blog) => ({
      slug: blog.slug,
    }))
  }

export default async function Page({ params }) {
    const slug = (await params).slug;
    const blog = blogData.filter((blog) => blog.slug === slug);
    const filePath = blog[0].blogFile;
    return (
        <RenderFromMd filePath={filePath} />
    )
}
