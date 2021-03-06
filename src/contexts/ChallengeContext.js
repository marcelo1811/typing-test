import { createContext, useState } from "react";
import allWords from '../../words.json';

const mappedWords = allWords.map(item => item.word)

export const ChallengeContext = createContext({})

export function ChallengeProvider({ children, ...rest }) {
  const [wordList, setWordList] = useState(mappedWords.slice(0, 20))
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [correctWordIndexList, setCorrectWordIndexList] = useState([])

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
    setCorrectWordIndexList([])
  }

  function isCurrentWordCorrect() {
    let currentWord = wordList[currentWordIndex]
    return currentWord.includes(inputValue)
  }
  
  function checkWord() {
    let currentWord = wordList[currentWordIndex]
    if (inputValue == currentWord) {
      setCorrectWordIndexList([...correctWordIndexList, currentWordIndex])
    }
  }

  function wasWordCorrect(index) {
    return correctWordIndexList.includes(index)
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
        isCurrentWordCorrect,
        checkWord,
        wasWordCorrect,
      }}>
      {children}
    </ChallengeContext.Provider>
  )
}