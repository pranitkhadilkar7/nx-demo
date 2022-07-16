import styles from './header.module.scss'

type headerProps = {
  text: string
}

export function Header({ text }: headerProps) {
  return (
    <div className={styles['container']}>
      <h1>{text}</h1>
    </div>
  )
}

export default Header
