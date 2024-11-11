import { useState, useEffect } from "react";

const Timer = ({SubmitAction}) => {
    const [TimeLeft, SetTimeLeft] = useState(120)
    const [timeEmoji, setTimeEmoji] = useState("⏳");
    const [fontColor,setFontColor]= useState("black")

    useEffect(() => {
        const timerLoop = setInterval(() => {

            SetTimeLeft((e) => {
                if(e<=30 && e>1)
                    setFontColor("red")
                if (e === 0) {
                    SubmitAction()
                    clearInterval(timerLoop); 
                    return 0
                }
                return e - 1;
            });
            setTimeEmoji((e) => e === "⏳" ? "⌛" : "⏳")

        }, 1000)
        return () => clearInterval(timerLoop);
    }
        , []);

    return (
        <>
            <span style={{color: fontColor}}>{TimeLeft}s</span>
            <span>{timeEmoji} </span>
        </>
    )
}

export default Timer