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
import Code from "../components/Code";
import Pre from "../components/Pre";

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
                            className: "list-decimal pl-8 text-lg mb-6 ml-8"
                        }
                    },
                    ul: {
                        component: UnOrderedList,
                        props: {
                            className: "hyphen pl-8 text-lg mb-6"
                        }
                    },
                    li: {
                        component: List,
                        props: {
                            className: "my-1"
                        }
                    },
                    code: {
                        component: Code,
                        props: {
                            className: "bg-gray-100 text-slate-800 px-2 py-1 rounded font-mono text-sm"
                        }
                    },
                    pre: {
                        component: Pre,
                        props: {
                            className: "bg-gray-100 text-white p-4 rounded-lg overflow-x-auto text-sm font-mono shadow-md border border-gray-700 whitespace-pre-line"
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