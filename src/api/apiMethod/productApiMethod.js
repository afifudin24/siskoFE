import { baseUrl } from '../BaseUrl';
import axios from 'axios';
const ProductApiMethod = {
  //   getAllProduct: async ({
  //     page = 1,
  //     sorting = 'Latest',
  //     categories = 'all',
  //     search_name = 'none',
  //   } = {}) => {
  //     try {
  //       // Construct query parameters only if the values are provided
  //       const params = new URLSearchParams();

  //       if (page) params.append('page', page);
  //       if (sorting) params.append('sorting', sorting);
  //       if (categories !== 'all') params.append('categories', categories); // Only add if it's not 'all'
  //       if (search_name !== 'none') params.append('search_name', search_name); // Only add if it's not 'none'

  //       const response = await axios.get(
  //         `${baseUrl}/public/demo/product?${params.toString()}`,
  //       );
  //       return response;
  //     } catch (err) {
  //       return err.response;
  //     }
  //   },
  getProduct: async () => {
    const myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'laravel_session=eyJpdiI6InpGOVJrbUltXC9rNW5VVzNzY29mZEtRPT0iLCJ2YWx1ZSI6InFPZnpnQ2ZoUGJCVE1WNWxVU1wvRzA1Yk1MeVAyMXBGamN6SUJUbzNGK3E5dlArWDZFTllZY25FaGlDYnNCRlB2ekEwQjFiTWppYkRwUVwvcitqS1RHc2c9PSIsIm1hYyI6IjFjNjFhNDBjNzc3NDJjNDg3MjM2ZWQ1Y2ViM2I5MmEyNTE5MjZiYWNlN2U4NDc2NTExYjMxNWQ0MzUxY2VmNzgifQ%3D%3D',
    );

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        'https://sistemtoko.com/public/demo/product',
        requestOptions,
      );
      const result = await response.text();

      return result;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ProductApiMethod;
