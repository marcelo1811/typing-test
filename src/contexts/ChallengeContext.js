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
  const [wordList, setWordList] = useState(mappedWords.slice(0, 100))
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  function isActiveWord(word) {
    return (
      activeWordIndex == word.index
    )
  }

  return (
    <ChallengeContext.Provider
      value={{
        wordList,
        isActiveWord
      }}>
      {children}
    </ChallengeContext.Provider>
  )
}