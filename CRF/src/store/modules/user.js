// import jwtDecode from 'jwt-decode';
import api from '../../api';

const state = {
  email: '',
  token: '',
  logged: false,
};

const getters = {
  getEmail: state.email,
  getToken: state.token,
  isLogged: state.logged,
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
  registerUser(context, { email, password, passwordConfirmation }) {
    if (password === passwordConfirmation) {
      return api.post('register/user', { email, password });
    }
  },
  registerCompany(context, { name, user }) {
    return api.post('register/company', { name, user });
  },
};

const mutations = {
  setUser(state, { email, company, admin, superAdmin, token }) {
    state.email = email;
    state.logged = true;
    state.company = company;
    state.admin = admin;
    state.superAdmin = superAdmin;
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
