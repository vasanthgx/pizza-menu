import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
    return <div className='container'>
            {/* <h1>Hello React</h1> */}
            <Header/>
            <Menu/>
            <Footer/>
        
        </div>
}

function Header() {
  // const style = {color : "red" , fontSize : "48px" , textTransform : "uppercase"}
  const style = {}
  // return <h1 style={{color : "red" , fontSize : "48px" , textTransform : "uppercase"}}>Fast React Pizza Co.</h1>
  return(
    <header className='header'>
      <h1 style={style} >Fast React Pizza Co.</h1>

    </header>
      ) 

} 

function Menu() {

  // return (
  // <main className='menu'>
  //       <h2>Our Menu</h2>

  //       <ul className='pizzas'>
  //         {/* Rendering Pizza components from the pizzaData [] array */}
  //         {pizzaData.map(pizza=>(<Pizza pizzaObj={pizza} key={pizza.name } />))}
  //           {/* the above line translates to-- for each iteration of the pizzaData[] array we are  creating a Pizza component  and passing the element of the array as the props for that component */}
  //       </ul>
  //       {/* passing the props to the Pizza component
  //       <Pizza price={10} name='Pizza Spinaci' ingredients = 'Tomato, mozarella, spinach, and ricotta cheese' photoName = 'pizzas/spinaci.jpg'/>

  //       <Pizza name="Pizza Funghi" ingredients= "Tomato,mushrooms" price = {12} photoName ="pizzas/funghi.jpg"/> */}
     
  // </main>)
  const pizzas = pizzaData;
  // const pizzas = [ ]
  const numPizzas = pizzas.length;
  
  return (
  <main className='menu'>
        <h2>Our Menu</h2>
        {/* conditional rendering throuh "&&" operator */}
    {/* {numPizzas > 0  && (
        <ul className='pizzas'>
          
          {pizzas.map(pizza=>(<Pizza pizzaObj={pizza} key={pizza.name } />))}
            
        </ul>
    )
    } */}
    {/* Conditional rendering through ternary operator */}
    {numPizzas > 0 ?  (
      <>
        <p> 
          Authentic Italian Cuisine. 6 creative disher to chooose from. All from our stone oven, all organic, all delicious

        </p>
        <ul className='pizzas'>
          
          {pizzas.map(pizza=>(<Pizza pizzaObj={pizza} key={pizza.name } />))}
            
        </ul>
      
      </>
    ) : <p>We're still working on our menu. Please come back later</p>
    }
     
  </main>)
}

//creating a Pizza component
function Pizza({pizzaObj}){
  console.log(pizzaObj)

  // if(pizzaObj.soldOut) return null

    // return <li className='pizza'>
    return <li className={`pizza ${pizzaObj.soldOut ? "sold-out":"" }`}>
     {/* return <li className={ !pizzaObj.soldOut ? "pizza" : "pizza sold-out" }> */}
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
           <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{ pizzaObj.price}</span>
            {/* <span>{ props.pizzaObj.soldOut}</span> */}

           </div>
        </li>
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  // isOpen ? alert("We're currently open") : alert("Sorry we're closed.")

  // if(hour >= hour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed.")
  // console.log(hour)



   //we are using createElement instead of JSX - to test it out
  //  return React.createElement('footer', null, "We're currently open")

  
  //back to JSX
  // return <footer className='footer'>{new Date().toLocaleTimeString() }  We're currently open</footer>
  return <footer className='footer'>{isOpen ? (<Order closeHour = {closeHour} openHour = {openHour}/>)
    
    // <div className='order'>

    //     <p>
    //       we're open until {closeHour}:00. Come visit us or order online.
          
    //     </p>

    //       <button className='btn'>Order</button>
    // </div>
    : (<p>we are happy to welcome betweeen {openHour}:00 and {closeHour}:00</p>)

  }
  
  </footer>
}

 function Order({openHour, closeHour}){
    return <div className='order'>

        <p>
          we're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
          
        </p>

          <button className='btn'>Order</button>
    </div>
  }
////functions can be declarative like above or experssions like below
//const Test = function(){}
////Arrow function expression
// const Test = ()=> {}

// //creating a Pizza component
// function Pizza(){
//     return <div>
//             <img src='pizzas/spinaci.jpg' alt="Pizza spinaci"/>
//             {/* webpack which is the module bundler for this project
//             will always look for the assets in the public folder.
//             Hence we need not specify the absolute path for the images
//             in the 'src' attribute */}
//             <h3>Pizza Spinaci</h3>
//             <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//         </div>
// }
        

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<React.StrictMode><App/></React.StrictMode>)