import { RootState } from "../../src/store";
import { teamMockState } from "./teamState";
import { userMockState } from "./userState";

export const mockStoreData: RootState = {
    teamState: teamMockState,
    userState: userMockState,
};
