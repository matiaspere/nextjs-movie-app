import style from '@styles/index.module.scss';
import HomeLayout from '@layout/HomeLayout.jsx'

export default function Home() {
  return (
    <div className={style.Content}>
      <HomeLayout />
    </div>
  )
}
