import XSaladaIimage from './assets/X-Salada.png'
import ProductCard from './Components/ProductCard/ProductCard'
import './App.css'

const App = () => {
  return (
    <>
      <div>
        <ProductCard
          image={XSaladaIimage}
          description="Esse é um delicioso X-Salada"
          whereToGo="Adicionar"
          cardTitle="X-Salada"
        />
      </div>
    </>
  )
}

export default App
