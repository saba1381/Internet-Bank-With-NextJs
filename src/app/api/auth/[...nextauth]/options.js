import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = {
                    id: "45",
                    name: "saba",
                    email: "saba@gmail.com",
                    password: "12345"
                };

                const { email, password } = credentials;
                if (email === user.email && password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl; 
        }
    }
};