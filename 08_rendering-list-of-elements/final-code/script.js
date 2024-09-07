import { createRoot } from 'react-dom/client'
import './style.css'

function Card(key, title, image, brand, price) {
  console.log(key)
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')
fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="cont">
        {data.products.map((product) => ( // The arrow function implicitly returns the Card component, making the code more concise and readable.
          <Card 
            key={product.id}        // Adding the key={product.id} helps React with efficient reconciliation when updating the list.
            title={product.title}
            image={product.thumbnail}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </div>
    );
  });
