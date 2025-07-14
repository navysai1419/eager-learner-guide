// apiServices.js
const BASE_URL = 'http://192.168.0.108:8000';

// Utility function to get headers with optional token
const getHeaders = (includeToken = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (includeToken) {
    const token = localStorage.getItem('access_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return headers;
};

export async function registerGuest(userData) {
  try {
    const response = await fetch(`${BASE_URL}/guest/register`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering guest:', error);
    throw error;
  }
}

export async function ContactUs(userData) {
  try {
    const response = await fetch(`${BASE_URL}/enrollments/submit`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function login(userData) {
  try {
    const response = await fetch(`${BASE_URL}/guest/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function Getquizes(quizTitle) {
  try {
    const response = await fetch(`${BASE_URL}/guest/quiz/${encodeURIComponent(quizTitle)}`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Quiz API error:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quiz:', error);
    throw error;
  }
}

export async function PunchIn(data = {}) {
  try {
    const response = await fetch(`${BASE_URL}/guest/attendance/check-in`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Punch In API error:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    console.error('Error punching in:', error);
    throw error;
  }
}

export async function PunchOut(data = {}) {
  try {
    const response = await fetch(`${BASE_URL}/guest/attendance/check-out`, {
      method: 'PUT',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Punch Out API error:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    console.error('Error punching out:', error);
    throw error;
  }
}

export async function Getattendance() {
  try {
    const response = await fetch(`${BASE_URL}/guest/attendance/my-attendance`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Attendance API error:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching attendance:', error);
    throw error;
  }
}