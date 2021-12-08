import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Razzak','jasim','Alomgir','Salman','Bappi','Sovo','Sakib','Manna']
//   const products=[
//     {name:'PhotoShop',price:'$90.89'},
//     {name:'Illustrator',price:'$60.99'},
//     {name:'PDF Reader', price:'$6.99'},
//     {name:'AdobPhotoshop', price:'$123.45'},    
// ] 
const friends=[
  {name:'Mamun',age:'23',job:'src'},
  {name:'Niloy',age:'22',job:'Army'},
  {name:'Emran',age:'21',job:'Student'},
  {name:'Shakil',age:'24',job:'Forener'}
]
//  const productName=products.map(product=> product.name)
//  console.log(productName);
//  const nayokName=nayoks.map(nayok=>nayok)
//  console.log(nayokName);

   return (
    <div className="App">
      <header className="App-header">
       
        <p>my first react paragraph</p>

        {
          friends.map(friend=> <h3>Name: {friend.name}</h3>)
        }
        {
          friends.map(friend=> <Product friend={friend}></Product>)
        }
{/* 
        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          {
            products.map(product=> <li>price:{product.price}</li>)
          }
        </ul>
        {
          products.map(product=> <Product product={product}></Product>)
        } */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightGray',
    height:'300px',width:'200px',
    color:'#000',
    margin:'30px'
  }
  // const {name,price} =props.product;
  const {name,age,job}= props.friend

  return (
    <div style={productStyle}>
      <h5>Name: {name} </h5>
      <h4>Age: {age} </h4>
      <h3>Job: {job}</h3>
      <button>Buy Now</button>
    </div>
  )
}
 


export default App;
