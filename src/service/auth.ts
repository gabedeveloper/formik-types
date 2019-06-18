type TAuth = {
    email: string;
    password: string;
};

export default (data: TAuth) => Promise.resolve(data);