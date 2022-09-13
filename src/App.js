import React from "react"
import Nav from "./components/nav/Nav";
import Drowpdown from "./components/nav/Drowpdown";
import Network from "./components/nav/Network";
import Community from "./components/nav/Community";
import Header from "./components/header/Header"
import Transaction from "./components/transactions/Transaction";


function App() {

  const [drop, setDrop] = React.useState(false)
  const [network, setNetwork] = React.useState(false)
  const [community, setCommunity] = React.useState(false)

  const onClick = () => {
    setDrop(prev => !prev)
    setNetwork(prev => false)
    setCommunity(prev => false)
  }
  
  const onClickNet = () => {
    setNetwork(prev => !prev)
    setDrop(prev => false)
    setCommunity(prev => false)
  }

  const onClickCom = () => {
    setCommunity(prev => !prev)
    setDrop(prev => false)
    setNetwork(prev => false)
  }
  

  

  return (
    <div className="App" >
      <Nav click={onClick} clickNet={onClickNet} clickCom={onClickCom} />
      {
        drop && <Drowpdown />
      }
      {
        network && <Network />
      }
      {
        community && <Community />
      }
      <Header />
      <Transaction/>
      
    </div>
  );
}

export default App;
