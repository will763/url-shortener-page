import { StatistiscItemStyle } from "../styles/StatistiscItemStyle";

function DetailedRecords(){
    return(
        <StatistiscItemStyle>
            <div className="icon-detailed-records">
               <img src="/images/icon-detailed-records.svg" alt="icon-detailed-records.svg" />
            </div>
               <h2>Detailed Records</h2>
               <p>Gain insights into who is clicking your links.
               Knowing when and where people engage with your content 
               helps inform better decisions.</p>
        </StatistiscItemStyle>
    )

}

export default DetailedRecords;