import {Constants} from "../redux/constants"
import Data from "../Api/axios"
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
  export const fetchOneProjects =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.get("/get-tasks-by-project/:projectId");
    console.log("fetch only one projects", asyncResp.data)
    dispatch(fetchProjects())
    } catch (error) {
      console.log("error")
    }
  }
  export const setProject  =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async dispatch => {
    try {
      const asyncResp = await Data.get("/update-project/:projectId");
    console.log("fetch all projects", asyncResp.data)
    dispatch(setProject())
    } catch (error) {
      console.log("error")
    }
  }



