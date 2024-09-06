/* eslint-disable no-unused-vars */

import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);

  const options = Object.keys(CurrencyInfo);

  // multiplying amount with converted Amount

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  // swapping var, usd <-> inr

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://i.imghippo.com/files/uTIkg1723266905.png")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 p-5 backdrop-blur-sm bg-transparent rounded-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="px-2 py-0.5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm text-[#252525] overflow-hidden border-none bg-white duration-500 hover:bg-[#DCC9BC]"
                onClick={swap}
              >
                <span className="relative z-10">Swap</span>
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border-none bg-white px-4 text-[#252525] shadow-2xl duration-500 hover:bg-[#DCC9BC] rounded-sm"
            >
              <span className="relative z-10">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </span>
            </button>
          </form>
        </div>
        <div className="text-[#DCC9BC] mt-10 text-center opacity-20 italic hover:text-white hover:opacity-90 select-none duration-300 text-lg">
          {/* In the event of a error, please reload the site. */} Error?
          Reload.
        </div>
      </div>
    </div>
  );
}

export default App;
