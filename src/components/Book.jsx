import { Link } from 'react-router-dom'
import './Book.css'

export default function Book({ story, index = 0 }) {
  return (
    <Link
      to={`/story/${story.id}`}
      className="book-link rise"
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <div
        className="book"
        style={{
          '--book-color': story.color,
          '--spine-color': story.spineColor,
        }}
      >
        <div className="book-glow" />
        <div className="book-spine">
          <span className="spine-title">{story.title}</span>
        </div>
        <div className="book-cover">
          <div className="cover-shine" />
          <span className="book-emoji">{story.emoji}</span>
          <h3 className="book-title">{story.title}</h3>
          <p className="book-author">بقلم: {story.author}</p>
          <span className="book-open-hint">افتح الكتاب ✦</span>
        </div>
      </div>
    </Link>
  )
}
