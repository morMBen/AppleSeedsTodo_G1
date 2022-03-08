import {Constants} from "../redux/constants"
import Data from "../Api/axios"
import {TypesProject, Types ,I_Project, I_Task} from "../Types/taskType"
import { ThunkAction} from 'redux-thunk';
import { AnyAction} from 'redux'

export const fetchProjects =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.get("/get-all-projects-meta'");
    console.log("fetch all projects", asyncResp.data)
    dispatch(fetchProjects())
    } catch (error) {
      console.log("error")
    }
  }
  export const fetchOneProject =
  (project_id : String): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.get(`/${project_id}`);
      //tell liran to change /get-tasks-by-project/:" 
    console.log("fetch only one projects", asyncResp.data)
    dispatch(fetchOneProject(project_id))
    } catch (error) {
      console.log("error")
    }
  }
  export const setProject  =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.post("/update-project/:projectId");
    console.log("update one project", asyncResp.data)
    dispatch(setProject())
    } catch (error) {
      console.log("error")
    }
  }
  export const addTask  =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.post("/create-new-task/:projectId");
    console.log("add new task to project", asyncResp.data)
    dispatch(addTask())
    } catch (error) {
      console.log("error")
    }
  }
  export const getTasks  =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.get("'/get-tasks-by-project/:projectId");
    console.log("get tasks by project", asyncResp.data)
    dispatch(getTasks())
    } catch (error) {
      console.log("error")
    }
  }



