import { message } from "antd";
import {
  setCountries,setSources
} from "./appActionSync";
import api from "../../../services/api";


export const loadContries = () => async (dispatch) => {
  try {
    const resp = await api.Country.ListCountries();
    dispatch(setCountries(resp.data));
  } catch (error) {
    message.error(error.message);
  }
};


export const loadSources = () => async (dispatch) => {
  try {
    const resp = await api.Source.ListSources();
    dispatch(setSources(resp.data));
  } catch (error) {
    message.error(error.message);
  }
};





