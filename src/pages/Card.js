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

console.log(person)
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
      <h1 className=' text-4xl bg-indigo-700 opacity-70 ml-2 mr-2'>Income</h1>
        {
            person?.map((item,index)=>{
              if(item.Type=="Income")
              {
                income_sum+=parseInt(item.Price);
              }
              else
              {
                expense_sum+=parseInt(item.Price);
              }
                return (
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
          
          person?.map((item,index)=>{
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