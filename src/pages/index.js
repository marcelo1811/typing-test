import Head from 'next/head'
import ChallengeSection from '../components/ChallengeSection'
import { HomePageContainer } from '../styles/pages/HomePageStyles'
import { ChallengeProvider } from '../contexts/ChallengeContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import ResultsSection from '../components/ResultsSection'
import Header from '../components/Header'

export default function Home() {
  return (
    <HomePageContainer>
      <Header /> 
      <ChallengeProvider>
        <CountdownProvider>
          <ChallengeSection />
          <ResultsSection />
        </CountdownProvider>
      </ChallengeProvider>
    </HomePageContainer>
  )
}
