export class TeslaCar {
    public isInAutoPilotMode: boolean = false;
    public ObjectAheadDistance:number=0;
    private thisObjectPosition:number=0;
    public beep:boolean=false;
    TeslaCar(){
        this.beep=false;
        this.ObjectAheadDistance=0;
        this.thisObjectPosition=0;
    }
    public setAutoPilotOn(autoPilot: boolean) {
        this.isInAutoPilotMode = autoPilot;
        this.thisObjectPosition=5;
    }
    public setObjectDistance(dist:number){
        this.ObjectAheadDistance=dist;
    }
    public ScanAhead(){
        if (this.thisObjectPosition===this.ObjectAheadDistance){
            this.beep=true;
        }
    }
}
