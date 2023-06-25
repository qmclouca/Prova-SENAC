import XSaladaImage from './assets/X-Salada.png'
import XBaconImage from './assets/X-Bacon.jpg'
import ProductCard from './Components/ProductCard/ProductCard'
import './App.css'

const App = () => {
  return (
    <>
      <div className='products-display'>
      <ProductCard
        image={XSaladaImage}
        description="Esse é um delicioso X-Salada"
        whereToGo="Adicionar"
        cardTitle="X-Salada"
      />
      <ProductCard
        image={XBaconImage}
        description="Esse é um delicioso X-Bacon"
        whereToGo="Adicionar"
        cardTitle="X-Bacon"
      />
    </div>
    </>
  )
}

export default App
