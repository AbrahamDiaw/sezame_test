import { useEffect, useState } from 'react';
import './App.css';
import FormsWidget from './components/FormsWidget';
import Reveal from './components/Reveal';

function App() {
  const [city, setCity] = useState("")
  const [housePrice, setHousePrice] = useState();
  const [deposit, setDeposit] = useState("");
  const [active, setActive] = useState(false);

  const [loyer, setLoyer] = useState(0)
  const [adi, setAdi] = useState(0)
  const [budget, setBudget] = useState(0)

  

  function calcule() {
    if(!city || !housePrice || !deposit) return;
    console.log({
      city: city,
      housePrice: housePrice,
      deposit: deposit
    })

    setLoyer(Math.round((housePrice * 0.05 / 12) * 100) / 100)
    setAdi(Math.round((0.10 * (housePrice - deposit) / 36) * 100) / 100)
    setActive(true)
  }

  useEffect(() => {setBudget(loyer + adi)},[adi])

  console.log(loyer, adi, budget)
  return (
    <div className="max-w-[1180px] flex justify-between items-center py-[64px] px-[130px] m-auto">
      <FormsWidget
        city={city}
        setCity={setCity}
        housePrice={housePrice}
        setHousePrice={setHousePrice}
        deposit={deposit}
        setDeposit={setDeposit}
        calcule={calcule}
      />
      <Reveal
        loyer={loyer}
        adi={adi}
        budget={budget}
        active={active}
      />
    </div>
  );
}

export default App;
