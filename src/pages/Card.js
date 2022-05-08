import React from 'react'
import { useEffect,useState } from 'react';
const Card = () => {
const [person,setPerson] = useState([]);
const [currentMonth,setcurrentMonth]=useState(-1);
useEffect(() => {
   
    async function getItems()
{
     const response = await fetch(
        "https://notion-api.splitbee.io/v1/table/d43b388f099c44d48c332f8c033dee81",
        {
            method: "GET",
            headers: {"Content-Type":"application/json", "Access-Control-Allow-Origin":"*"},
        }

      );
      const resp = await response.json();
      console.log(response,resp)
      setPerson(resp)
      
    
}
getItems();
  return () => {
    
  }
}, [])
const filteredDetails = person?.filter((item,index)=>{
  // let month = await new Date(item.Date).getMonth()+1
  // console.log(month);
  // console.log("state",currentMonth);
  // console.log("state",currentMonth);
  return currentMonth===-1?item:new Date(item.Date).getMonth()+1===currentMonth

})
console.log("filter",filteredDetails);

console.log(person,currentMonth)
let income_sum = 0;
let expense_sum = 0;
let ch=-1;
let month
switch(month)
{
  case 'january':
      currentMonth="january"
      break;      
}
  return (

    <div className='text-center '>
          <div className='p-2'>
      <select onChange={(e)=>{
        setcurrentMonth(parseInt(e.target.value))
        }}>
        <option value={-1}>All</option>
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
        <option value={9}>September</option>
        <option value={10}>October</option>
        <option value={11}>November</option>
        <option value={12}>December</option>
      </select>
    </div>
      <h1 className=' text-4xl bg-indigo-700 opacity-70 ml-2 mr-2'>Income</h1>
        {
            filteredDetails?.map((item,index)=>{
              if(item.Type=="Income")
              {
                income_sum+=parseInt(item.Price);
              } return (
                  <div key={index} className="bg-green-500 m-5 rounded-lg ">
                    
                    {item.Type=="Income"?(<div>
                      <p className=''>
                        
                        <p>₹
{item.Price}</p>
                        <p>{item.Name}</p>
                      </p>

                    </div>):(<div>
                      
                    </div>)
                    
                    }
                    
                    
                     </div>
                    
                );
            })
        }
        <h1 className='text-4xl bg-indigo-700 opacity-70 ml-2 mr-2'>Expense</h1>
        {
          
          filteredDetails?.map((item,index)=>{
            if(item.Type=="Expense")
              {
                expense_sum+=parseInt(item.Price);
              }
              
              return (
                <div key={index} className="bg-red-500 m-5 rounded-lg ">
                  
                  {item.Type=="Expense"?(<div>
                    <p className=''>
                      
                      <p>₹
 {item.Price}</p>
                      <p>{item.Name}</p>
                    </p>

                  </div>):(<div>
                   
                  </div>)
                  
                  }
                  
                  
                   </div>
                  
              );
          })
    
        }
            <p className='bg-black text-white t-8xl rounded-xl p-2 w-60 m-2 '>
              Total income is ₹
{income_sum}
              
            </p>
            <p className='bg-black text-white t-8xl rounded-xl p-2 w-60 m-2'>
            Total Expense is ₹
{expense_sum}
            </p>
    </div>
  )
 
}

export default Card