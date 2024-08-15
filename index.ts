import inquirer from "inquirer";

import {differenceInSecond} from "date-fns"
import { log } from "console";

const await= inquirer.prompt({
    name: "userinput",
    type: "number",
    message: "please enter the amount of second"
    validate:(input)=>{
        if(NaN(input)){
            return "plz enter valid answer"
        }else if(input> 60){
            return "sencond must be in 60"
        }
        else{
            return "true";
        }
    }
});

let input=Res.userinput
function startTime(val:number){
    const intTime= new Date().setSeconds(new Date().getSeconds()+val)
    const intervalTime= new Date(intTime)
    setInterval((()=>{
        const currenTime= new Date()
        const timeDiff= differenceInSecond(intervalTime,currenTime);
        if(timeDiff<= 0){
            console.log("Timer has expire")
            process.exit()
        }
        const mint= Math.floor(timeDiff%(3600*24)/3600)
        const sec =Math.floor(timeDiff%60)
        console.log(`${mint.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)  
        
    }),1000)
}
startTime(input)