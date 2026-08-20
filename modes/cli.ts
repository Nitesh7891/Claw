import chalk from "chalk"
import {select, isCancel} from "@clack/prompts";
import { runAgentMode } from "./agent/orchestrator";


export async function runCliMode(){
    while(true){
        const mode= await select({
            message:"Choose mode:",
            options:[
               {value:"agent", label:"Agent"},
               {value:"plan", label:"Plan"},
               {value:"ask", label:"Ask"},
               {value:"back", label:"Back"},
            ]
        });

        if(isCancel(mode) || mode==='back'){
            return;
        }

        //Agent mode
        if(mode==='agent'){
          await runAgentMode();
        } 
        if(mode==='ask'){
          runAskMode();
        }
        if(mode=="plan"){
          runPlanMode();
        }

        if(mode!=='agent' && mode!=='ask' && mode!=='plan') console.log(chalk.yellow("This mode is not implemented yet"));


    }
}