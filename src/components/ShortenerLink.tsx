import { ChangeEventHandler, SyntheticEvent, useEffect, useState } from "react"
import { ShortenerLinkStyle } from "../styles/ShortenerLinkStyle"
import fetch from "../utils/fetchData"
import { warning } from "../utils/warning"
import ListLinks from "./ListLinks"


interface DataObjets  {
  linkFull : string
  linkShortener : string
}

function ShortenerLink(){

    const [value,setValue] = useState<string>("");
    const [data,setData] = useState<DataObjets[]>([])

    useEffect(()=>{
      const Input = document.querySelector<HTMLInputElement>(".input-for-shortener")
      const Span = document.querySelector<HTMLSpanElement>(".warning")
      if(Input && Span)
      warning(Input,Span)

    },[value])

    const handleFocus: ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
       setValue(e.target.value)
    }

    const handleSubmit = async (e:SyntheticEvent) => {
      e.preventDefault(); 
      const response = await fetch(value);
      setData([...data,{linkFull:value,linkShortener:response}])
      setValue("");
  }

    return(
    <>
    <ShortenerLinkStyle>
        <div className="shortener-input">
            <div className="input-container">
           <input className="input-for-shortener" type="text" placeholder="Shorten a link here..." value={value} onChange={handleFocus} />
           <span className="warning">Please add a link</span>
            </div>
           <button onClick={handleSubmit} >Shorten It!</button>
        </div>
    </ShortenerLinkStyle>
    <ListLinks data={data} />
    </>
   )
}

export default ShortenerLink