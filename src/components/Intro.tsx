import { IntroStyle } from "../styles/IntroStyle";
import Button from "./BtnGT";

function Intro(){
    return(
        <IntroStyle>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get 
        detailed insights on how your links
        are performing.</p>
        <Button />
        </IntroStyle>
    )
}

export default Intro;