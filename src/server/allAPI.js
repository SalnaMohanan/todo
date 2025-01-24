import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// upload
export const saveTaskAPI = async(taskDetails) => {
        return await commonAPI("POST", `${serverURL}/uploadtask`, taskDetails)
    }
    // get
export const getAllTaskAPI = async() => {
    return await commonAPI("GET", `${serverURL}/uploadtask`, "")
}