import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  var [length, setLength] = useState(8);
  var [numberAllowed, setNumberAllowed] = useState(false);
  var [charAllowed, setCharAllowed] = useState(false);
  var [password, setPassword] = useState("");

  var passwordRef = useRef(null)

  var passwordGenerator = useCallback(() => {
    var pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=`~{}[]|<>?/:;'";
    for (let i = 1; i <= length; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  var copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(passwordGenerator, [
    length,
    numberAllowed,
    charAllowed,
    setPassword,
  ]);

  return (
    <>
      <div className=" w-full h-screen bg-black flex items-center justify-center">
        <div className=" w-96 h-36 bg-zinc-500 rounded-lg text-yellow-600 text-sm">
          <input
            className=" w-72 h-10  rounded-lg mr-2 mt-2 ml-2 pl-2 outline-none"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassword}
          className=" px-5 py-2 bg-blue-700 rounded-md">Copy</button>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className=" ml-2 mt-2 mr-2 cursor-pointer"
          />
          <label htmlFor="" className="mr-2">
            Range : {length}{" "}
          </label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className=" cursor-pointer mr-2">
            Number
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput" className=" cursor-pointer">
            Character
          </label>
        </div>
      </div>
    </>
  );
};
export default App;
