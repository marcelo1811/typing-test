import { createContext, useState } from "react";
import allWords from '../../words.json';

const mappedWords = allWords.map((word, index) => {
  return ({
    word: word.word,
    index: index,
  })
})

export const ChallengeContext = createContext({})


export function ChallengeProvider({ children, ...rest }) {
  const [wordList, setWordList] = useState(mappedWords.slice(0, 20))
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')

  function isActiveWord(word) {
    return (
      activeWordIndex == word.index
    )
  }

  function incrementActiveWordIndex() {
    setActiveWordIndex(activeWordIndex + 1)
  }

  function resetChallenge() {
    setInputValue('')
    setActiveWordIndex(0)
  }

  return (
    <ChallengeContext.Provider
      value={{
        wordList,
        isActiveWord,
        incrementActiveWordIndex,
        inputValue,
        setInputValue,
        resetChallenge,
      }}>
      {children}
    </ChallengeContext.Provider>
  )
}