import axios from "axios";
import { handleError } from "../../Helper/ErrorHandle";
import { PortfolioGet, PortfolioPost } from "../../Model/Portfolio";
import { toast } from "react-toastify";

const api = "http://localhost:7096/api/Portfolio";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    axios.defaults.headers.common["Authorization"] =
      "Bearer" + " " + localStorage.getItem("token");
    const data = await axios.post<PortfolioPost>(api + "/" + `${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    axios.defaults.headers.common["Authorization"] =
      "Bearer" + " " + localStorage.getItem("token");
    const data = await axios.delete<PortfolioPost>(api + "/" + `${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioGetAPI = async () => {
  try {
    axios.defaults.headers.common["Authorization"] =
      "Bearer" + " " + localStorage.getItem("token");
    const data = await axios.get<PortfolioGet[]>(api);
    return data;
  } catch (error) {
    toast.warning("can't get portfolio api");
    handleError(error);
  }
};
