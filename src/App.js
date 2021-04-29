// import logo from './logo.svg';
import './App.css';
import Card from './card';
import { useState } from 'react';

function App() {
  let products = [
    {
      id: 1,
      name: "Product 1",
      price: 24,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3
    },
    {
      id: 2,
      name: "Product 2",
      price: 345,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3
    },
    {
      id: 3,
      name: "Product 3",
      price: 184,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3
    },
    {
      id: 4,
      name: "Product 4",
      price: 984,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3
    },
    {
      id: 5,
      name: "Product 5",
      price: 255,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3
    },
    {
      id: 6,
      name: "Product 6",
      price: 899,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      ratting: 3
    }
  ]

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  let addToCart = (product) => {
    setCart([...cart, product])
    setTotal(total + product.price)
  }

  let removeCart = (item) => {
    
    setCart(cart.filter(obj => obj.id !== item.id))

    setTotal(total - item.price)
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-lg-3">
            <h1 class="my-4">Shop Name</h1>
            <div class="list-group">
              {
                cart.map((item) => {
                  return <div class="list-group-item">
                    {item.name} - ${item.price}
                    <span>
                      <button className="btn btn-sm btn-danger" onClick={() => {
                        removeCart(item)
                      }}>X</button>
                    </span>
                  </div>
                })
              }
            </div>
            <h3>Total - ${total}</h3>
          </div>
  
          <div className="col-lg-9">
              <div class="carousel slide my-4" id="carouselExampleIndicators" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li class="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"><img class="d-block img-fluid" src="https://via.placeholder.com/900x350" alt="First slide"/></div>
                            <div class="carousel-item"><img class="d-block img-fluid" src="https://via.placeholder.com/900x350" alt="Second slide"/></div>
                            <div class="carousel-item"><img class="d-block img-fluid" src="https://via.placeholder.com/900x350" alt="Third slide"/></div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
              </div>
            <div class="row">
              {
                products.map((product) => {
                  return <Card productData={product} handleCart={addToCart}></Card>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
