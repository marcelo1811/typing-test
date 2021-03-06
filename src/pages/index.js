import Head from 'next/head'
import SideBar from '../components/SideBar'
import ChallengeSection from '../components/ChallengeSection'
import { HomePageContainer } from '../styles/pages/HomePageStyles'
import { ChallengeProvider } from '../contexts/ChallengeContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import ResultsSection from '../components/ResultsSection'

export default function Home() {
  return (
    <HomePageContainer>
      <SideBar />
      <ChallengeProvider>
        <CountdownProvider>
          <ChallengeSection />
          <ResultsSection />
        </CountdownProvider>
      </ChallengeProvider>
    </HomePageContainer>
  )
}
