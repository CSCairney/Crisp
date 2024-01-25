import merge from "lodash/merge";

import { DeepPartial } from "../../../common/types/utils";
import { settingsPersistenceService } from "../../../common/localStorage/persistence";
import { blogState } from "../../../../modules/blog/types/blogs";

export function createDefaultBlogSettings(): blogState {
  return {
    isLoading: false,
    error: "",
    blogs: []
  }
}

export function createMergedBlogSettings(
  defaultBlogSettings: blogState,
  persistedBlogSettings?: DeepPartial<blogState>
): blogState {
  const mergedSettings: blogState = merge(
    defaultBlogSettings,
    persistedBlogSettings
  );

  return {
    ...mergedSettings,
  };
}

export function createBlogSettings(): blogState {
  const defaultBlogSettings: blogState =
    createDefaultBlogSettings();
  const persistedBlog =
    settingsPersistenceService.getBlogSettings();

  if (persistedBlog !== null) {
    return createMergedBlogSettings(
        defaultBlogSettings,
      persistedBlog
    );
  }
  return defaultBlogSettings;
}
