import { useEffect, useRef, useState } from "react";
import { LinkShortStyle } from "../styles/LinkShortStyle";

interface Props {
  linkFull:string
  linkShortener:string
}

function LinkShort(props:Props){
    const [value,setValue] = useState<string>("Copy")
    const [isCopied,setIscopied] = useState<boolean>(false);

    const handleClick = async () => {
       setValue("Copied!")
       setIscopied(true)
       navigator.clipboard.writeText(props.linkShortener)
    }

    return(
        <LinkShortStyle copied={isCopied}>
            <h5 className="link-full">{props.linkFull}</h5>
            <h5 className="link-shortener">{props.linkShortener}</h5>
            <button onClick={handleClick}>{value}</button>
        </LinkShortStyle>
    )
}

export default LinkShort;