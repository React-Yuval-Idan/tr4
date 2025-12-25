import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h1>404 Not found</h1>
        <Link to="/">חזרה לעמוד הבית </Link>
    </div>
  )
}
export default NotFound