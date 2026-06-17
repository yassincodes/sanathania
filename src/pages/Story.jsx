import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { stories } from '../data/stories'
import './Story.css'

export default function Story() {
  const { id } = useParams()
  const story = stories.find((s) => s.id === id)

  if (!story) {
    return (
      <div className="story-page">
        <Header showBack />
        <div className="story-not-found">
          <p>😢 الكتاب مو موجود!</p>
          <Link to="/" className="back-home-btn">ارجع للمكتبة</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="story-page">
      <Header showBack />

      <article className="story-book" style={{ '--book-color': story.color }}>
        <div className="story-cover">
          <span className="story-emoji">{story.emoji}</span>
          <h1 className="story-title">{story.title}</h1>
          <p className="story-author">
            ✍️ كتبها: <strong>{story.author}</strong>
          </p>
          <p className="story-grade">الصف الثاني — مكتبة السنة الثانية</p>
        </div>

        <div className="story-pages">
          <div className="page-lines" />
          {story.content.map((paragraph, index) => (
            <p key={index} className="story-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="story-end">
          <p>— نهاية القصة —</p>
          <span className="end-stars">⭐ ⭐ ⭐</span>
        </div>
      </article>

      <div className="story-nav">
        <Link to="/" className="back-home-btn">📚 ارجع للمكتبة</Link>
      </div>
    </div>
  )
}
