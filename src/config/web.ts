import { loadEnv } from "./utils";

export const webConfig = {
    facebook: {
        pageId: loadEnv("NEXT_PUBLIC_FACEBOOK_PAGE_ID", ""),
    }
}