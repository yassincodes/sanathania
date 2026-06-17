import CosmicBackground from '../components/CosmicBackground'
import Header from '../components/Header'
import Book from '../components/Book'
import { stories, students } from '../data/stories'
import './Library.css'

function chunk(arr, size) {
  const rows = []
  for (let i = 0; i < arr.length; i += size) {
    rows.push(arr.slice(i, i + size))
  }
  return rows
}

export default function Library() {
  const shelves = chunk(stories, 4)

  return (
    <div className="library-page">
      <CosmicBackground />
      <Header />

      <section className="students-section rise" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title">كتّابنا الصغار</h2>
        <div className="students-list">
          {students.map((name, i) => (
            <span
              key={name}
              className="student-badge"
              style={{ animationDelay: `${0.15 + i * 0.05}s` }}
            >
              {name}
            </span>
          ))}
        </div>
        <p className="students-note">
          كلُّ كتابٍ قصةٌ من خيال تلميذٍ من صفّنا — فيها حيوانات، كائنات فضائية، وأبطالٌ من عوالمٍ مختلفة
        </p>
      </section>

      <section className="shelf-section">
        <div className="bookcase rise" style={{ animationDelay: '0.2s' }}>
          <div className="bookcase-top" />
          {shelves.map((row, idx) => (
            <div className="shelf" key={idx}>
              <div className="shelf-books">
                {row.map((story, i) => (
                  <Book key={story.id} story={story} index={i} />
                ))}
              </div>
              <div className="shelf-plank" />
            </div>
          ))}
          <div className="bookcase-base" />
        </div>
      </section>

      <footer className="library-footer rise">
        <p className="footer-main">صُنع بحبٍّ من تلاميذ الصفّ الثاني</p>
        <p className="footer-small">اقرأ كلَّ يومٍ تكتشفْ عالماً جديداً</p>
      </footer>
    </div>
  )
}
