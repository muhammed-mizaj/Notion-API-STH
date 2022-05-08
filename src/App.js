import { useEffect } from 'react';
import Card from './pages/Card';
import Title from './pages/Title';
function App() {
  // useEffect(()=>{
  //   (async()=>{
  //     try{
  //     const response = await fetch(
  //       "https://notion-api.splitbee.io/v1/table/d43b388f099c44d48c332f8c033dee81",
  //       {
  //           method: "GET",
  //           headers: { "Content-Type": "application/json","Access-Control-Allow-Origin":"*"},
  //       }

  //     );
  //     console.log(response);
  //     const resp = await response.json();
  //     console.log(resp)
  //     }catch(E){
  //       console.log(E)
  //     }
  //   })();
  // },[]);
  return (
    <div className="App bg-gray-900 h-screen p-2">
      <Title/>
      <Card/>
    </div>
  );
}

export default App;