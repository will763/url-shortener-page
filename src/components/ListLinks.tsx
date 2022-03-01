import { ListLinksStyle } from "../styles/ListLinksStyle";
import LinkShort from "./LinkShort";

interface DataObjets   {
   linkFull : string
   linkShortener : string
 }

function ListLinks(props:{data:Array<DataObjets> | undefined}){

   return(
      <ListLinksStyle>
         {props.data?.map((data,index)=> {
            return (<LinkShort key={index} linkFull={data.linkFull} linkShortener={data.linkShortener} />)
         })}
      </ListLinksStyle>
   )
}

export default ListLinks;