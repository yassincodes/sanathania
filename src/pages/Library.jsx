import Header from '../components/Header'
import Book from '../components/Book'
import { stories, students } from '../data/stories'
import './Library.css'

export default function Library() {
  return (
    <div className="library-page">
      <Header />

      <section className="students-section">
        <h2 className="section-title">✨ تلاميذنا المبدعون</h2>
        <div className="students-list">
          {students.map((name) => (
            <span key={name} className="student-badge">
              {name}
            </span>
          ))}
        </div>
        <p className="students-note">
          كل كتاب من هالكتب كتبه تلميذ أو تلميذة من صفنا بمساعدة المعلم
        </p>
      </section>

      <section className="shelf-section">
        <h2 className="section-title">📖 اختر كتاباً واقرأ قصته</h2>

        <div className="bookshelf">
          <div className="shelf-board top-shelf" />
          <div className="books-row">
            {stories.map((story) => (
              <Book key={story.id} story={story} />
            ))}
          </div>
          <div className="shelf-board bottom-shelf" />
        </div>
      </section>

      <footer className="library-footer">
        <p>صُنع بحب من تلاميذ الصف الثاني 💛</p>
        <p className="footer-small">اقرأ كل يوم واكتشف عالماً جديداً</p>
      </footer>
    </div>
  )
}
