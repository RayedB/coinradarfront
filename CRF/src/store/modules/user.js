// import jwtDecode from 'jwt-decode';
import api from '../../api';

const state = {
  email: '',
  token: '',
  logged: false,
};

const getters = {
  getEmail: state => state.email,
  getToken: state => state.token,
  isLogged: state => state.logged,
};

const actions = {
  loginUser(context, { email, password }) {
    return api.post('login', { email, password })
      .then((res) => {
        const token = res.data.token;
        // const { company, admin, superAdmin } = jwtDecode(token);
        context.commit('setUser', { email, token });
      });
  },
  registerUser(context, { email, password }) {
    return api.post('register/', { email, password });

  //  return api.get('register/', { email, password });
  },
};

const mutations = {
  setUser(state, { email, company, admin, superAdmin, token }) {
    state.email = email;
    state.logged = true;
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
