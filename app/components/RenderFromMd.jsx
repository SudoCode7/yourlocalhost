'use client'

import { useEffect, useState } from 'react';

import Markdown from 'markdown-to-jsx';

import Socials from "../components/Socials";
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import HeadingThree from "../components/HeadingThree";
import Paragraph from "../components/Paragraph";
import Anchor from "../components/Anchor";
import Img from "../components/Img";
import UnOrderedList from "../components/UnOrderedList";
import OrderedList from "../components/OrderedList";
import List from "../components/List";

export default function RenderFromMd({ filePath }) {

    const [content, setContent] = useState(undefined);

    const fetchContent = async () => {
        const data = await fetch(filePath).then(res => res.text());
        setContent(data);
    }
    
    useEffect(() => {
        fetchContent().catch(console.error);
    }, []);

  return (
    <div className='mt-20 md:mt-9 max-w-2xl'>
        <Markdown
            options={{
                overrides: {
                    h1: {
                        component: HeadingOne,
                        props: {
                            className: "text-4xl font-bold uppercase mb-6"
                        }
                    },
                    h2: {
                        component: HeadingTwo,
                        props: {
                            className: "text-2xl font-semibold my-6 uppercase"
                        }
                    },
                    h3: {
                        component: HeadingThree,
                        props: {
                            className: "text-xl font-semibold my-4 uppercase"
                        }
                    },
                    p: {
                        component: Paragraph,
                        props: {
                            className: "text-lg mb-8"
                        }
                    },
                    a: {
                        component: Anchor,
                        props: {
                            className: "underline"
                        }
                    },
                    img: {
                        component: Img,
                        props: {
                            className: "rounded-lg shadow-lg max-w-full"
                        }
                    },
                    ol: {
                        component: OrderedList,
                        props: {
                            className: "list-decimal pl-6 text-lg"
                        }
                    },
                    ul: {
                        component: UnOrderedList,
                        props: {
                            className: "list-none pl-6 text-lg"
                        }
                    },
                    li: {
                        component: List,
                        props: {
                            className: "my-1 before:content-['-'] before:mr-2"
                        }
                    }
                }
            }}
        >
            {content}
        </Markdown>
        <div className="grid place-content-center my-6">
            <Socials />
        </div>
    </div>
  )
}