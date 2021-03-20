import { createLocalStorageStateHook } from "use-local-storage-state";

export const useUrl = createLocalStorageStateHook("urls", []);
