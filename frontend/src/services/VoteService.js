export class VoteService {
  static async createVote(data) {
    try {
      const response = await fetch('http://localhost:8080/api/v1/vote/new', {
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

  static async getVotes() {
    try {
      const response = await fetch('http://localhost:8080/api/v1/vote/list', {
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
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  static async getVotesByScheduleId(scheduleId) {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/vote/list/${scheduleId}`, {
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
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
}