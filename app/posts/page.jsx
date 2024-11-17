import Link from 'next/link.js';
import Socials from '../components/Socials.jsx';
import blogData from './blogData.js';

export default function Posts() {
  return (
    <div className='mt-20 md:mt-9 max-w-2xl'>
        <div>
          <ul className='flex flex-col gap-7'>
            {blogData.map((blog) => (
              <li key={blog.id}>
                <Link href={`/posts/${blog.slug}`}>
                  <h1 className='text-2xl'>{blog.title}</h1>
                  <p className='text-gray-600 text-sm'>{blog.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid place-content-center my-6">
            <Socials />
        </div>
    </div>
  );
}
