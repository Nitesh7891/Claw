import type {ActionLog , ActionStatus} from './types'
import { isMutationType } from './types'

export class ACtionTracker{
    private actions:ActionLog[]=[];
  log()(
    entry:Omit<ActionLog,'id' | 'timestamp'> & {
        id?:string;
        timestamp?:Date;   
     },
    ):ActionLog{
        const action:ActionLog={
            id:
        }
    }


  getActions(){}

  getPendingMutations(){}

  updateStatus(){}
}