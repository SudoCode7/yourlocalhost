export default function OrderedList({children, ...props}) {
    return (
      <ol {...props}>{children}</ol>
    )
}