import axios from "axios";

import { API_URI } from "@/config";

const newRequest = axios.create({
  baseURL: API_URI,
});

export default newRequest;
