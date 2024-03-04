import { useState } from "react";
import InputBox from "./components/InputBox"
import useCurrecyInfo from "./hooks/useCurrencyInfo"
function App() {
var [amount, setAmount] = useState(0)
var [from, setFrom] = useState("")
var [to, setTo] = useState("")
var [convertedAmount,setConvertedAmount] = useState(0)

var currencyInfo = useCurrecyInfo()

var option = Object.keys(currencyInfo)

var swap = ()=> {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

var convert = ()=>{
  setConvertedAmount(amount * currencyInfo[to].value)
}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${"https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGN1cnJlbmN5JTIwZXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D"}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" 
              amount={amount}
              currencyOptions={option}
              onCurrencyChange={(currency)=> setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount)=> setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
             onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"
              amount={convertedAmount}
              currencyOptions={option}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
