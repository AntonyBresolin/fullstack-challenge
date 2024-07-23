export class UserService {
  static async registerUser(data) {
    try {
      const response = await fetch('http://localhost:8080/api/v1/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.status === 200) {
          return response.status;
        } else if (response.status === 404) {
          return 404;
        } else if (response.status === 422) {
          return 422;
        } else {
          return 500
        }
      })
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}