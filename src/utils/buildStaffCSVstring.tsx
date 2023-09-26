import { StaffCSVObj } from "../typeScriptDataTypes"

export const staffStringBuilder = (staff:StaffCSVObj) => {
    return `${staff.username},${staff.password}`
}