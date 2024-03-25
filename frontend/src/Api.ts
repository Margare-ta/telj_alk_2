const API_URL = 'http://localhost:3000';

export const getfruit = async () => {
    const response = await fetch(`${API_URL}/GYUMOLCSOK`);
    return response.json();
  };


  export const addfruit = async (nev: string, ar: number, megjegyzés: string) => {
    const response = await fetch(`${API_URL}/GYUMOLCSOK`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nev, ar, megjegyzés }),
    });
    return response.json();
  };