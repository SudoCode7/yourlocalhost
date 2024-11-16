export default function Paragraph({children, ...props}) {
  return (
    <p {...props}>
        {children}
        <br />
    </p>
  )
}
