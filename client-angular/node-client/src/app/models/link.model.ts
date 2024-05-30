import { ClickModel } from "./click.model";
import { SourceModel } from "./source.model";

export class LinkModel{
    constructor(
        public  id:string,
        public originalUrl:string,
        public newUrl:string,
        public userId:string,
        public clicks:ClickModel[],
        public sourceParamKey:string,
        public sources:SourceModel[]
    ){}
}