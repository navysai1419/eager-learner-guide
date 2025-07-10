export async function registerGuest(userData) {
    try {
        const response = await fetch('http://192.168.0.106:8000/guest/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
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

export async function login(userData) {
    try {
        const response = await fetch('http://192.168.0.106:8000/guest/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
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