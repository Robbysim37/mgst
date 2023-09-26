export type NewStudentInfo = {
    firstName:string,
    lastName:string,
    cohort:number,
    completedCourses?:string
}

export type StudentCSVObj = {
    firstName:string,
    lastName:string,
    username:string,
    password:string
}

export type StaffCSVObj = {
    username:string,
    password:string
}

export type BasicStudentInfo = {
    username:string,
    firstName:string,
    lastName:string,
    cohort:number
}

export type Course = {
    name: string,
    creditType: string,
    completed: boolean,
    notes: string,
    creditAmount: number
}

export type CourseIdentifier = {
    username: string | undefined,
    yearIndex: number,
    trimesterIndex: number,
    courseIndex: number
}

export type Trimester = Array<Course>

export type Year = Array<Trimester>

export type Schedule = Array<Year>

export type Student = {
    firstName: string,
    lastName: string,
    cohort: number,
    grade: number,
    username: string,
    schedule: Schedule
}

export type CourseIndexCode = {
    username: string,
    course1: string,
    course2: string,
}