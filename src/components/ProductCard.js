import './ProductCard.css'
function ProductCard({ name, price }) {
  return (
    
    <div className="card p-2 text-center">
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text">Cena: {price.toFixed(2)} zł</p>
        <a href="#" class="btn btn-danger container-fluid">Dodaj do koszyka</a>
      </div>
    </div>
    


  );
}
export default ProductCard;
