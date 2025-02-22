import { useState, useEffect } from 'react'
import { motion } from "motion/react"

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
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    type='button'
                    onClick={scrollToTop}
                    className='fixed flex items-center justify-center bottom-5 right-5 w-12 h-12 bg-blue-500 font-bold text-2xl text-white rounded-full cursor-pointer hover:bg-blue-400 transition-colors duration-300'
                >
                    ↑
                </motion.button>
            )}
        </>
    )
}

export default ScrollToTopButton
