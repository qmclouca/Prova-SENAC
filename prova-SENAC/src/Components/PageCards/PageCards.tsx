import XSaladaImage from '../../assets/X-Salada.png'
import XBaconImage from '../../assets/X-Bacon.jpg'
import TFrios from '../../assets/tabua de frios.jpg'
import ProductCard from '../ProductCard/ProductCard'
import GitHubUser from '../GitHubUsersProps/GitHubUser'

const PageCards = () => {
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
         <ProductCard
          image={TFrios}
          description="Essa é para a turma toda"
          whereToGo="Adicionar"
          cardTitle="X-Salada"
        />
        <GitHubUser username="qmclouca" />
      </div>
      </>
    )
  }
  
  export default PageCards;
  