import { TeamState } from "../types/team";

export function createInitialTeamState(): TeamState {
    return {
        isLoading: false,
        errorMessage: "",
        info: {
            contact: {
                mobile: "07375368313",
                landline: "07925906671"
            },
            team: 0
            }
}
}