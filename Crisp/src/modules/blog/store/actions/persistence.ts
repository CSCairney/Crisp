import { setBlogState } from "..";
import { ActionWithThunk } from "../../../common/types/store";
import { createBlogSettings } from "src/modules/common/localStorage/helpers/blogMerge";

export const getPersistedBlogSettings = (): ActionWithThunk => {
    const blogSettings = createBlogSettings();
    return (dispatch) => {
      dispatch(setBlogState(blogSettings));
    };
  };