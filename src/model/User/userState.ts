
export type UserState = {
    message: string;
    accessToken: string;
    memberData: {
        
    };
    //refreshToken: string;
    loading: {
        signup: boolean;
        login: boolean;
        getMember: boolean;
    }
}

export const initalState = {
    message: '',
    accessToken: '',
    //refeshToken: '',
    memberData: {
        
    },
    loading: {
        signup: false,
        login: false,
        getMember: false
    }
};