export type TeamInfo = {
    contact: {
        mobile: string,
        landline: string
    },
    team: number
}

export type TeamState = {
    isLoading: boolean,
    errorMessage: string,
    info: TeamInfo;
}