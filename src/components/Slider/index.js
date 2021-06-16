import React, { useState, useEffect } from "react"
import styles from "./Slider.module.scss"

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(1)
   const [images, setImages] = useState([])
   const [isLoading, setIsLoading] = useState(false)

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

   useEffect(() => {
      setIsLoading(true)
      fetch("http://localhost:5000/banners", { method: "GET" })
         .then((response) => response.json())
         .then((data) => setImages(data))
         .then(() => setIsLoading(false))
         .catch((err) => console.error(err))
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
                  {images
                     .sort((a, b) => a.order - b.order)
                     .map((image) => {
                        return (
                           image.isActive && (
                              <img
                                 key={image.id}
                                 src={image.bannerImageUrl}
                                 alt={image.bannerImageAlt}
                                 style={
                                    slideIndex === image.order
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
               {images
                  .sort((a, b) => a.order - b.order)
                  .map((image) => {
                     return (
                        image.isActive && (
                           <span
                              key={image.id}
                              className={styles.dot}
                              onClick={() => currentSlide(image.order)}
                              style={
                                 slideIndex === image.order
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
