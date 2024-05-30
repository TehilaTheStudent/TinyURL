export interface IError{
    status:number,
    error?:string,
    message:string,
    details?:string,
    failedAction?:string
}