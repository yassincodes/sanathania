import { Link } from 'react-router-dom'
import './Book.css'

export default function Book({ story }) {
  return (
    <Link to={`/story/${story.id}`} className="book-link">
      <div className="book" style={{ '--book-color': story.color, '--spine-color': story.spineColor }}>
        <div className="book-spine">
          <span className="spine-title">{story.title}</span>
        </div>
        <div className="book-cover">
          <span className="book-emoji">{story.emoji}</span>
          <h3 className="book-title">{story.title}</h3>
          <p className="book-author">بقلم: {story.author}</p>
          <div className="book-decoration">✏️</div>
        </div>
      </div>
    </Link>
  )
}
