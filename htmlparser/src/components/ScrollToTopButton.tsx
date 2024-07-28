import React, { useState, useEffect } from 'react'

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed flex items-center justify-center bottom-5 right-5 w-12 h-12 bg-blue-500 font-bold text-2xl text-white rounded-full cursor-pointer hover:bg-blue-400 transition-colors duration-300"
                >
                    ↑
                </button>
            )}
        </>
    )
}

export default ScrollToTopButton
