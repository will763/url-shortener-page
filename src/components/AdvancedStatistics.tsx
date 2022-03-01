import { AdvancedStatisticsStyle } from "../styles/AdvancedStatisticsStyle";
import BrandRecognition from "./BrandRecognition";
import DetailedRecords from "./DetailedRecords";
import FullyCustomizable from "./FullyCustomizable";
import LineOne from "./LineOne";
import LineTwo from "./LineTwo";


function AdvancedStatistics(){
    return(
        <AdvancedStatisticsStyle>
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="container">
            <BrandRecognition />
            <LineOne />
            <DetailedRecords />
            <LineTwo />
            <FullyCustomizable />
            </div>
        </AdvancedStatisticsStyle>
    )

}

export default AdvancedStatistics;