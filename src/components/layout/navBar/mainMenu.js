import gsap from "gsap"
import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { v4 } from "uuid"

const animationTime = 300

export const MainMenuButton = styled(Link)`
    display: block;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    margin: 0 10px;
    &:before {
        opacity 1;
        transform: translate3d(-100%, 0, 0);
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: black;
        opacity: 0;
        transition: opacity ${animationTime}ms, transform ${animationTime}ms;
     }
    &:hover:before,
    &:focus:before {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
        transform: translate3d(0, 0, 0);
    }
}`

const SpanLetter = styled.span`
    &.WTF {
        color: red;
        opacity: 1;
        transition: opacity 0.5s
    }
    &:after {
        opacity: 0;
        color: red
    }
    &:hover {
        font-weight: bold
    } 
`
function func(pageName) {
    let sdrfg = document.getElementById(pageName)

}

const style = {

}

// if (typeof window !== 'undefined') {
//     const buttons = document.getElementsByClassName('lettersWrapper');
//     [...buttons].forEach(el => {
//         letterAnimation(el);
//       });

// }


// function letterAnimation(el) {
//     const tl = gsap.to({ paused: true });
//     const characters = el.querySelectorAll(`lettersWrappe_inner`);
//     const duration = 0.3;
//     const stagger = 0.03;

//     el.animation = tl.staggerTo(characters, duration, {
//         y: '-100%',
//         ease: Power4.easeOut
//     }, stagger);

//     el.addEventListener('mouseenter', (event) => event.currentTarget.animation.play());
//     el.addEventListener('mouseout', (event) => el.animation.reverse());
// }

function getLetters(word) {
    const arrLetters = word.split('')
    const pageLetters = []
    let i = 1
    for (const letter of arrLetters) {
        pageLetters.push(
            { key: i, letter }
        )
        i++
    }
    return pageLetters
}

export function MainMenu({ pages, handleMenuSelectedItem }) {

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function animationStart(event, pageName) {
        console.log(event)
        const el = document.getElementById(pageName)
        const characters = el.getElementsByClassName('lettersWrapper_inner')
        let index = characters.length;
        let reversedCharacters = {
            next: function () {
                index--;
                return {
                    done: index < 0,
                    value: characters[index]
                }
            }
        }
        reversedCharacters[Symbol.iterator] = function () {
            return this;
        }

        for (const char of characters) {
            if(event.type === 'mouseenter') {char.classList.add('WTF')} 
            await timer(animationTime / characters.length)
        }
        for (const char of reversedCharacters) {
            if(event.type === 'mouseleave') {char.classList.remove('WTF')} else break
            await timer(animationTime / characters.length)
        }
    }

    async function animationStop(event, pageName) {
        console.log(event)
        const el = document.getElementById(pageName)
        const characters = el.getElementsByClassName('lettersWrapper_inner')
        let index = characters.length;
        let reversedCharacters = {
            next: function () {
                index--;
                return {
                    done: index < 0,
                    value: characters[index]
                }
            }
        }
        reversedCharacters[Symbol.iterator] = function () {
            return this;
        }

        for (const char of reversedCharacters) {
            if(event.type === 'mouseleave') {char.classList.remove('WTF')}
            await timer(animationTime / characters.length)
        }
    }

    return (
        pages.map((page) => (
            <MainMenuButton
                onMouseEnter={(event) => animationStart(event, page.href)}
                onMouseLeave={(event) => animationStart(event, page.href)}
                id={page.href}
                key={page.href}
                onClick={() => handleMenuSelectedItem(page.pageName)}
                href={page.href}
                className={`lettersWrapper_${page.href}`}
            >
                {getLetters(page.pageName).map(letter => (
                    <SpanLetter key={letter.key} id={`${page.href}_${letter.key}`} className={`lettersWrapper_inner ${letter.key}`}>{letter.letter}</SpanLetter>
                ))}
            </MainMenuButton>
        ))
    )
}

