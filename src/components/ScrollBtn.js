import React, { useEffect, useState } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { Btn } from "./Btn"

const ScrollBtn = () => {
  const [stick, setStick] = useState(false)

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const handleScoll = () => {
    if (window.pageYOffset > 300) {
      console.log(window.pageYOffset)
      setStick(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScoll())

    return () => {
      window.removeEventListener("scroll", handleScoll())
    }
  }, [])

  return (
    <div>
      {stick ? (
        <Btn onClick={goToTop} isStick={stick}>
          <AiOutlineArrowUp className="icon" />
        </Btn>
      ) : (
        ""
      )}
    </div>
  )
}

export default ScrollBtn
