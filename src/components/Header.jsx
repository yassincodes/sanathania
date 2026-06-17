import { Link } from 'react-router-dom'
import { teacher } from '../data/stories'
import './Header.css'

export default function Header({ showBack = false }) {
  return (
    <header className="library-header">
      <div className="header-inner">
        {showBack && (
          <Link to="/" className="back-btn">
            ← رجوع للمكتبة
          </Link>
        )}
        <div className="header-text">
          <p className="header-subtitle">مكتبة السنة الثانية</p>
          <h1 className="header-title">📚 مكتبتنا الصغيرة</h1>
          <p className="header-credit">
            من إعداد المعلم <strong>{teacher.name}</strong> وتلاميذه
          </p>
        </div>
      </div>
    </header>
  )
}
