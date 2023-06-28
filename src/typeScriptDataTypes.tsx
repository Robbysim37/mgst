export type NewStudentInfo = {
    firstName:string,
    lastName:string,
    cohort:number
}

export type Schedule = [

]

export type Student = {
    firstName: string,
    lastName: string,
    cohort: number,
    grade: number,
    username: string,
    schedule: Schedule
}