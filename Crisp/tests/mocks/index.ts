import { RootState } from "../../src/store";
import { teamMockState } from "./teamState";
import { userMockState } from "./userState";
import { mapMockState } from "./mapState";
import { overlayMockState } from "./overlayState";
import { dataMockState } from "./dataState";
import { blogMockState } from "./blogState";

export const mockStoreData: RootState = {
    teamState: teamMockState,
    userState: userMockState,
    mapState: mapMockState,
    overlayState: overlayMockState,
    dataState: dataMockState,
    blogState: blogMockState
};
