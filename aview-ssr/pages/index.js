
import Background from '../components/landingPage/Background'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo1 from '../img/logoTop.svg'
import { style } from '@mui/system'

export default function Home() {
  return (
    <div>
       <Background></Background>
       <header className={styles.LandingLogo}><Image src={logo1} /></header>
       <MenuBar/>
    </div>
  )
}
