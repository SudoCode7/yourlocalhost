export default function HeadingTwo({children, ...props}) {
  return (
    <h2 {...props}><span className="font-sans font-normal text-gray-500"># </span>{children}</h2>
  )
}
