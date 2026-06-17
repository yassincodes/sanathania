import { Link } from 'react-router-dom'
import { teacher } from '../data/stories'
import './Header.css'

export default function Header({ showBack = false }) {
  return (
    <header className="library-header">
      {showBack && (
        <Link to="/" className="back-btn rise">
          <span className="back-arrow">→</span> رجوع للمكتبة
        </Link>
      )}
      <div className="header-text rise">
        <p className="header-subtitle">مكتبة السنة الثانية</p>
        <h1 className="header-title">مكتبة الصفّ</h1>
        <p className="header-credit">
          من إعداد المعلم <strong>{teacher.name}</strong> وتلاميذه
        </p>
      </div>
    </header>
  )
}
