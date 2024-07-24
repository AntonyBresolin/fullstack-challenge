export class ScheduleService {
  static async createSchedule(data) {
    try {
      const response = await fetch('http://localhost:8080/api/v1/schedule/new', {
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

  static async getSchedulesPending() {
    try {
      const response = await fetch('http://localhost:8080/api/v1/schedule/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
      }).then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          return 404;
        } else if (response.status === 401) {
          return 401;
        }
          else {
          return 500
        }
      })
      return response;
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  static async getSchedulesCompleted() {
    try {
      const response = await fetch('http://localhost:8080/api/v1/schedule/listCompleted', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
      }).then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          return 404;
        } else {
          return 500
        }
      })
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  static async finalizeSchedule(scheduleId) {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/schedule/close?id=${scheduleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
      }).then(response => {
        if (response.status === 200) {
          return response.status;
        } else if (response.status === 404) {
          return 404;
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