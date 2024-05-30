export class ClickModel {
    constructor(
        public id: string,
        public ipAddress: string,
        public clickedAt: Date,
        public sourceParamValue:string
    ) { }
}

