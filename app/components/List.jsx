export default function List({children, ...props}) {
    return (
      <li {...props}>{children}</li>
    )
}