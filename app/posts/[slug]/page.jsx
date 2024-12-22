import RenderFromMd from '../../components/RenderFromMd'
import blogData from '../blogData.js';

export async function generateStaticParams() {
    return blogData.map((blog) => ({
      slug: blog.slug,
    }))
  }

export async function generateMetadata({ params }){

  const blog = blogData.find((blog) => blog.slug === params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    }
  }

  const result = {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      article: {
        publishedTime: blog.date, 
        authors: [blog.author], 
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  }

  return result;
}

export default async function Page({ params }) {
    const slug = (await params).slug;
    const blog = blogData.filter((blog) => blog.slug === slug);
    const filePath = blog[0].blogFile;
    return (
      <>
        <RenderFromMd filePath={filePath} />
      </>  
    )
}
