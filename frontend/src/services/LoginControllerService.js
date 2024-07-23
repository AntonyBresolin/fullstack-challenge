export class LoginControllerService {
  static async loginUser(data) {
    try {
      const response = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('role', data.role);
        localStorage.setItem('user', data.accessToken);
        return response.status;
      } else if (response.status === 401) {
        return 401;
      } else {
        return 500;
      }
    } catch (error) {
      console.error('Error:', error);
      return 500;
    }
  }

  static async logoutUser() {
    localStorage.clear();
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  }
}
