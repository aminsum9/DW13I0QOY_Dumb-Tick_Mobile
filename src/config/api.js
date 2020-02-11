import axios from 'axios';
import {AsyncStorage} from 'react-native';

export const login = user => {
  return axios
    .post('http://192.168.1.9:5000/api/eo/login', {
      email: user.email,
      password: user.password,
    })
    .then(response => {
      // console.log(response.data.token);
      storeData(response.data.token);
      const data = response.data;

      return data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const category = () => {
  return axios
    .get(`http://192.168.1.9:5000/api/eo/categories`)
    .then(res => {
      const data = res.data;
      return data;
    })
    .catch(error => {
      console.log('Api call error');
      alert(error.message);
    });
};

export const categoryPage = categoryId => {
  return axios
    .get(`http://192.168.1.9:5000/api/eo/category/${categoryId}/events`)
    .then(res => {
      const events = res.data;
      return events;
    });
};

export const allevent = () => {
  return axios
    .get(`http://192.168.1.9:5000/api/eo/allevents`)
    .then(res => {
      const data = res.data;
      return data;
    })
    .catch(error => {
      console.log('Api call error');
      alert(error.message);
    });
};

export const eventByTitle = title => {
  return axios
    .get(`http://192.168.1.9:5000/api/eo/events?title=${title}`)
    .then(response => {
      const data = response.data;
      return data;
    });
};

export const order = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return axios
        .get(`http://192.168.1.9:5000/api/eo/order?status=pending`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then(response => {
          const data = response.data;
          return data;
        });
    }
  } catch (error) {
    console.log(error);
  }
};

export const profile = async () => {
  // alert('tes');
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return axios
        .get(`http://192.168.1.9:5000/api/eo/profile`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then(response => {
          const data = response.data;
          return data;
        });
    }
  } catch (error) {
    console.log(error);
  }
};

storeData = async data => {
  try {
    await AsyncStorage.setItem('token', data);
  } catch (error) {
    console.log(error);
  }
};
