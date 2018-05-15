import axios from 'axios'
export default {
    data () {
        return {
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
  methods: {
      handleLogin () {
          axios.post('http://localhost:8888/api/private/v1/login',this.loginForm)
            .then(res => {
                const 
            })
      }
  }
}