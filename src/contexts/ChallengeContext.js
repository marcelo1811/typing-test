import { createContext, useState } from "react";
import allWords from '../../words.json';

const mappedWords = allWords.map(item => item.word)

export const ChallengeContext = createContext({})


export function ChallengeProvider({ children, ...rest }) {
  const [wordList, setWordList] = useState(mappedWords.slice(0, 20))
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')

  function currentWord() {
    return wordList[currentWordIndex]
  }

  function isCurrentWord(index) {
    return (
      currentWordIndex == index
    )
  }

  function incrementCurrentWordIndex() {
    setCurrentWordIndex(currentWordIndex + 1)
  }

  function resetChallenge() {
    setInputValue('')
    setCurrentWordIndex(0)
  }

  function isCurrentWordCorrect() {
    let currentWord = wordList[currentWordIndex]
    return currentWord.includes(inputValue)
  }

  return (
    <ChallengeContext.Provider
      value={{
        wordList,
        isCurrentWord,
        incrementCurrentWordIndex,
        inputValue,
        setInputValue,
        resetChallenge,
        currentWordIndex,
        isCurrentWordCorrect
      }}>
      {children}
    </ChallengeContext.Provider>
  )
}