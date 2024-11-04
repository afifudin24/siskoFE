import { baseUrl } from '../BaseUrl';
import axios from 'axios';
const CategoryApiMethod = {
  getCategory: async () => {
    try {
      const response = await axios.get(`${baseUrl}/public/demo/cat`);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default CategoryApiMethod;
