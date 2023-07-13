const BASE_URL = "https://api.pavel.nomoredomains.monster";

const checkResponseStatus = async (response) => {
  if (response.ok) {
    return response.json();
  }

  let errorData = {};
  try {
    errorData = await response.json();
  } catch(e) {
    console.error('Error occurred while parsing error response:', e);
  }

  if (errorData.message) {
    throw new Error(errorData.message);
  } else {
    throw new Error(`Error: ${response.status}`);
  }
};

export const signUp = async (data) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return checkResponseStatus(res);
};

export const signIn = async (data) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return checkResponseStatus(res);
};

const AuthApi = {
    signIn,
    signUp
}

export default AuthApi