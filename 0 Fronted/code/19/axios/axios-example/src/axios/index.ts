// export default from "./http";

import HttpRequest from '../axios/http';
import type { App } from 'vue';

export const httpInstance = new HttpRequest({
  baseURL: import.meta.env.VUE_APP_BASE_URL || "/api"
});

export default {
  install(app: App) {
    app.config.globalProperties.$http = httpInstance;
    app.provide('http', httpInstance);
  }
};