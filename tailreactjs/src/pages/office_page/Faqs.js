import React, { useState } from 'react'
import data from '../../data/faqs'
import { AiOutlineDown } from 'react-icons/ai'

const Faqs = () => {
  const [items, setItems] = useState(data)

  return (
    <>
      <h2 className="mt-5 text-center font-bold text-3xl">Frequently asked questions</h2>
      <section className="p-5 mt-5">
        {items.map((item) => {
          const { id, question } = item
          return (
            <div className="ml-10 border-b p-5 flex justify-between" key={id}>
              <p>{question}</p>
              <p><AiOutlineDown /></p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Faqs
