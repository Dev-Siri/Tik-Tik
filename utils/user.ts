import axios from 'axios';
import jwtDecode from 'jwt-decode';
import type { CredentialResponse } from '@react-oauth/google';
import type { SanityUser, GoogleUser } from '../types';
import { BASE_URL } from './';

const createOrGetUser = async (response: CredentialResponse, addUser: (user: SanityUser) => void) => {
    const decoded: GoogleUser = jwtDecode(response.credential as string);

    const { name, picture, sub } = decoded;

    const user = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture,
    }

    addUser(user);

    await axios.post(`${BASE_URL}/api/auth`, user);
};

export default createOrGetUser;