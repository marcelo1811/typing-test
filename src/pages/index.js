import Head from 'next/head'
import SideBar from '../components/SideBar'
import ChallengeSection from '../components/ChallengeSection'
import { HomePageContainer } from '../styles/pages/HomePageStyles'
import { ChallengeProvider } from '../contexts/ChallengeContext'

export default function Home() {
  return (
    <HomePageContainer>
      <SideBar />
      <ChallengeProvider>
        <ChallengeSection />
      </ChallengeProvider>
    </HomePageContainer>
  )
}
