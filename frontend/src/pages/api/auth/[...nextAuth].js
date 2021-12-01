import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options = {
    providers: [
        CredentialsProvider({
            name: "BSEG",
            credentials: {
                email: { label: "email", type: "text", placeholder: "john@doe.com" },
                password: { label: "password", type: "password", placeholder: "********" }
            },
            async authorize(credentials) {
                const url = ("http://localhost:5000/login/")
                const response = await axios.post(url, credentials);
                if (response) {
                    console.log(response.data)
                    return response.data;
                } else {
                    return null;
                }

            }

        })
    ],
    session: {
        jwt: true,
    }
}

export default (req, res) => NextAuth(req, res, options);