import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'
import './App.css'

const App = () => {
  return (
    <>
      <div>
        <ProductCard
          image="https://assets.unileversolutions.com/recipes-v2/106684.jpg"
          description="Esse é um delicioso X-Salada"
          whereToGo="Adicionar"
          cardTitle="X-Salada"
        />
      </div>
    </>
  )
}

export default App
