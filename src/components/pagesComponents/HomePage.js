import { PagesContext } from "@/appContext/PagesContext"
import { useContext } from "react"
import { v4 } from "uuid"

export const HomePage = () => {

    const pages = useContext(PagesContext)
    
    function getLetters(word) {
        const arrLetters = word.split('')
        const pageLetters = []
        for (const letter of arrLetters) {
            pageLetters.push(
                { key: v4(), letter }
            )
        }
        return pageLetters
    }

    console.log(getLetters(pages[0].pageName))

    return (
        <>
        sdth
                    {pages.map(page => (
                        <div key={page.pageName}>
                            {getLetters(page.pageName).map(letter => (
                                <span key={letter.key}>{letter.letter}</span>
                            ))}
                        </div>
                    ))
                    }
        </>
    )
}