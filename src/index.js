import React from 'react';
import ReactDOM from 'react-dom';

function Apple(){
  return <h1>An Apple a day keeps the Doctor away</h1>;
}

function Orange(){
  return <h2>Orange is rich in Vitamin-C</h2>;
}

function Fruit(props){
  const deer=props.deer;

  if(deer){
    return<Apple/>
  }
  return<Orange/>
  }



const read=ReactDOM.createRoot(document.getElementById("root"));
 read.render(<Fruit deer={false}/>)