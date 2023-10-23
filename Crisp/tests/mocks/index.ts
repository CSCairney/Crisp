import { RootState } from "../../src/store";
import { teamMockState } from "./teamState";
import { userMockState } from "./userState";
import { mapMockState } from "./mapState";

export const mockStoreData: RootState = {
    teamState: teamMockState,
    userState: userMockState,
    mapState: mapMockState
};
