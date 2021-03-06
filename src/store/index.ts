import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import swal from 'sweetalert';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export default createStore({
  state: {
    user: null
  },
  getters: {},
  mutations: {

    SET_USER(state, user) {
      state.user = user
    },

    CLEAR_USER(state) {
      state.user = null
    }

  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        switch (error.code) {
          case 'auth/user-not-found':
            swal("User not found", "", "warning");
            break
          case 'auth/wrong-password':
            swal("Wrong password", "", "warning");
            break
          default:
            swal("Something went wrong!", "", "error");
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async register({ commit }, details) {
      const _ = [commit, details]; // linter-hack
      throw new Error('Not implemented');

      //  const { email, password } = details
      //
      //  try {
      //    await createUserWithEmailAndPassword(auth, email, password)
      //  } catch (error: any) {
      //    switch (error.code) {
      //      case 'auth/email-already-in-use':
      //        alert("Email already in use")
      //        break
      //      case 'auth/invalid-email':
      //        alert("Invalid email")
      //        break
      //      case 'auth/operation-not-allowed':
      //        alert("Operation not allowed")
      //        break
      //      case 'auth/weak-password':
      //        alert("Weak password")
      //        break
      //      default:
      //        alert("Something went wrong")
      //    }
      //
      //    return
      //  }
      //
      //  commit('SET_USER', auth.currentUser)
      //
      //  router.push('/')
    },

    async logout({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  },
  modules: {},
})
