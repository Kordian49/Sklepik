import Product from './ProductCard.js'
function App() {
  return (
    <div class="App Main-container d-flex flex-wrap justify-content-center align-content-md-around gap-4 p-3 text-white">
        <Product name="MullerMilch" price={4.50}/>
        <Product name="Tymbark 2l" price={5.50}/>
        <Product name="Tymbark 1l" price={3.50}/>
        <Product name="Pizza" price={9.50}/>
        <Product name="Hot-dog" price={5.00}/>
    </div>

  );
}

export default App;
