import React, { useState } from 'react'
import data from '../data/section1'
import img from '../images/homepage/choose_your_ms_365.png'


const ChooseYourMs = () => {
  const [cards, setCards] = useState(data)

  return (
    <section className="md:grid grid-cols-2 xl:grid-cols-6 my-8 xl:mx-20">
      {cards.map((card) => {
        const { id, text, image } = card

        return (
          <article key={id} className="flex items-center px-6 py-2">
            <img src={img} alt="card" />
            <p className="mx-3 font-semibold cursor-pointer hover:underline">
              {text}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default ChooseYourMs
