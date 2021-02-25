import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks=['jafor','shakib','bappi','shuvo']
 const  products=[
   {name:'Photoshop', price:'$90.99'},
   {name:'Illustrator', price:'$60.99'},
   {name:'PDF Reader', price:'$50.99'},
   {name:'Premium ', price:'$20.99'},
  
 ]
  return (
    <div className="App">
      <header className="App-header">
       <Counter></Counter>
       <Users></Users>
        <ul>{
          nayoks.map(nayok=> <li>{nayok}</li> )
        }
        {
          products.map(product=> <li>{product.name}</li> )
        }
        </ul>
         {
           products.map(product => <Product product={product}></Product> )
         }
        {/* <Product Product={products[0]}></Product>
        <Product Product={products[1]}></Product> */}
        {/* <Person name="manna" job="manager"></Person>
        <Person name="rubel" job="manager"></Person>
        <Person name="dipjol" job="manager"></Person> */}
      </header>
    </div>
  );
}
 
function Counter() {
  const [count , setCount]=useState(10);
  const handleIncrease = () =>{ setCount(count+1);
    // const newCount=count + 1;
    // setCount(newCount);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
  
}
function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  },[])
  return(
    <div>
    <h3>Dynmic users</h3>
    <ul>
      {
      users.map(user => <li>{user.name}</li> )
      }
    </ul>
    </div>
  )
  }
  

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',

  }
  const {name, price} = props.product;
 // console.log(name,price)
  return(
    <div style={productStyle}>
     <h5>{name}</h5>
     <h3>{price}</h3>
     <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border:"2px solid yellow",
    margin:"10px",
    width:"400px",
  }
  return (
  <div style={personStyle}>
     <h1>Name:{props.name}</h1>
     <h3>job:{props.job}</h3>
  </div>)
}

export default App;
