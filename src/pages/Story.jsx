import { Link, useParams } from 'react-router-dom'
import CosmicBackground from '../components/CosmicBackground'
import Header from '../components/Header'
import { stories } from '../data/stories'
import './Story.css'

export default function Story() {
  const { id } = useParams()
  const story = stories.find((s) => s.id === id)

  if (!story) {
    return (
      <div className="story-page">
        <CosmicBackground />
        <Header showBack />
        <div className="story-not-found rise">
          <p>😔 لم نجد هذا الكتاب على الرفّ.</p>
          <Link to="/" className="magic-btn">ارجع للمكتبة</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="story-page" style={{ '--book-color': story.color }}>
      <CosmicBackground />
      <Header showBack />

      <article className="story-book rise">
        <div className="story-cover">
          <span className="story-emoji">{story.emoji}</span>
          <h1 className="story-title">{story.title}</h1>
          <p className="story-author">
            ✍️ تأليف: <strong>{story.author}</strong>
          </p>
          <p className="story-grade">قصةٌ من كتابة تلميذ الصفّ الثاني</p>
        </div>

        <div className="story-pages">
          {story.content.map((paragraph, index) => (
            <p
              key={index}
              className="story-paragraph rise"
              style={{ animationDelay: `${0.1 + index * 0.06}s` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="story-end">
          <p>✦ نهاية الحكاية ✦</p>
          <span className="end-stars">⭐ 🌟 ⭐</span>
        </div>
      </article>

      <div className="story-nav rise">
        <Link to="/" className="magic-btn">📚 ارجع للمكتبة</Link>
      </div>
    </div>
  )
}
