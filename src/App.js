import React, { useEffect, useState } from 'react';
import './App.css';
import "https://api.countapi.xyz/hit/s.html/d57a66af-9147-4b32-9c25-274ee425e47f?callback=websiteVisits"
const App = () => {
 const [size1,setSize1]=useState(0)
 const [size2,setSize2]=useState(0)
 const [size3,setSize3]=useState(0)
 const [pol,setPol]=useState("")
 const [pop,setPop]=useState("")
 
  useEffect(() => {
    fetch('http://127.0.0.1:5500/s.html')
      .then(response => {
        response.text().then(text => {
          setSize1((text.length / 1024));
          if(size1>size2 && size1>size3){
            setPol("MY WEBSITE 1")
          }
          else if(size2>=size1 && size2>=size3){
            setPol("GOOGLE")
          }
          else{
            setPol("MY WEBSITE 2")
          }
          if(size1<size2 && size1<size3){
            setPop("MY WEBSITE 1")
          }
          else if(size2<size1 && size2<size3){
            setPop("GOOGLE")
          }
          else{
            setPop("MY WEBSITE 2")
          }
          
        });
      });
  }, []);
  useEffect(() => {
    fetch('google.com')
      .then(response => {
        response.text().then(text => {
          setSize2(text.length / 1024);
        });
      });
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:5500/ss.html')
      .then(response => {
        response.text().then(text => {
          setSize3(text.length / 1024);
        });
      });
  }, []);


  return (
    <div className='modal-icons'>
    <h1 className='h'>PEEKING THE EMISSION</h1>
    <div className='dashboard'>
        <div className='d1'>
          <h1>MOST SUSTAINABLE WEBSITE</h1>
          <h2>{pop}</h2>
    
        </div>
        <div className='d1'>
          <h1>MOST POLLUTED WEBSITE</h1>
          <h2>{pol}</h2>
        
        </div>
    </div>
      <table>
        <tr>
        <th>WEBSITE
        </th>
        <th>DATA TRANSFER
        </th>
        <th>CARBON EMISSION
        </th>
        

        </tr>
        <tr>
        <th>
            MY WEBSITE 1
        </th>
        <th>
         {size1.toFixed(2)}KB
        </th>
        <th>
        {(parseFloat(size1.toFixed(2))*11).toFixed(2)}g
        </th>
        

        </tr>
        <tr>
        <th>
            GOOGLE
        </th>
        <th>
         {size2.toFixed(2)}KB
        </th>
        <th>
        {(parseFloat(size2.toFixed(2))*11).toFixed(2)}g
        </th>
        

        </tr>
        <tr>
        <th>
            MY WEBSITE 2
        </th>
        <th>
         {size3.toFixed(2)}KB
        </th>
        <th>
        {(parseFloat(size3.toFixed(2))*11).toFixed(2)}g
        </th>
        

        </tr>
      </table>
      <h1>visit : {localStorage.getItem('Name')}</h1>
      
      
    </div>
    
  );
};

export default App;
