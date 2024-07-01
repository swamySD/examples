
// import { Routes,Route } from 'react-router-dom'
// import Home from './components/pages/Home';
// import About from './components/pages/About';

// import NavbarTwo from './components/Navbar/NavbarTwo';
// import SingleProduct from './components/pages/SingleProduct';

const   App=()=> {


 
 
  const arr=[
    { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
  ]

//   let result=arr.filter((el)=>el.id !== 0 && Number.isFinite(el.id))
// console.log(result)

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

const words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  console.log(deleteWords)
  return word.length < 6;
});


  return (
    <>
    {/* <NavbarTwo/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
     
      <Route path="/products/:id" element={<SingleProduct/>} />
      <Route path="/about" element={<About/>} />
    </Routes> */}
    <h1>hello</h1>
    </>
  );
}

export default App;
