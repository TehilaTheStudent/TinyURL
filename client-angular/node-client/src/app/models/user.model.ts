export class UserModel{
    constructor(
        public id:string,
        public email:string,
        public name:string,
        public password:string,
        public linksIds:string[]
    ){}
}