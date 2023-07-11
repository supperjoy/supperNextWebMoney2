export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256`;
export const ISSUE_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256`;
export const UPDATE_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256`;
export const FETCH_COMMIT_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256`;
export const FETCH_TAG_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256`;
export const RUNTIME_CONFIG_DOM = "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256";
export const DEFAULT_API_HOST = "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=F_LFnND9IZ3hWIN6afhsMXsGhKx9nkZC&authKey=VX9eDIyAsOyLeDNDnyZrx%2FtKWwKkiZZ5Z0ZFLWRIWWInqztEYxeaqDnGApFgjvLN&noverify=0&group_code=776413256";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
  Login = "/login",
  Register = "/register",
  Commodity = "/commodity",
  Paying = "/paying",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
};
