import React, { useState, useEffect } from "react"
import styles from "./Slider.module.scss"
import APIService from "../../utils/APIService"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const { response, isLoading } = APIService({
    apiRoute: "banners",
    method: "GET",
  })

  const plusSlides = (n) => {
    if (slideIndex === 5 && n === 1) {
      setSlideIndex(1)
      return
    }
    if (slideIndex === 1 && n === -1) {
      setSlideIndex(5)
      return
    }
    setSlideIndex((prevIndex) => prevIndex + n)
  }

  const currentSlide = (n) => {
    setSlideIndex(n)
  }

  useEffect(() => {
    let counter = 1
    const refresh = setInterval(function () {
      setSlideIndex(counter)
      counter++
      if (counter === 6) {
        counter = 1
      }
    }, 3000)
    return () => {
      clearInterval(refresh)
    }
  }, [])

  return (
    <section>
      <div className={styles.slider}>
        <button className={styles.prevBtn} onClick={() => plusSlides(-1)}>
          PREV
        </button>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <figure>
            {response
              .sort((a, b) => a.order - b.order)
              .map((res) => {
                return (
                  res.isActive && (
                    <img
                      key={res.id}
                      src={res.bannerImageUrl}
                      alt={res.bannerImageAlt}
                      style={
                        slideIndex === res.order
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  )
                )
              })}
          </figure>
        )}
        <button className={styles.nextBtn} onClick={() => plusSlides(1)}>
          NEXT
        </button>
        <div className={styles.circles}>
          {response
            .sort((a, b) => a.order - b.order)
            .map((res) => {
              return (
                res.isActive && (
                  <span
                    key={res.id}
                    className={styles.dot}
                    onClick={() => currentSlide(res.order)}
                    style={
                      slideIndex === res.order
                        ? { background: "#000" }
                        : { background: "#666" }
                    }
                  ></span>
                )
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Slider
