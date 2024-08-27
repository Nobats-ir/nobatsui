import {LayoutTypes} from "@/@types/layout";

export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
  enableMock: boolean
  locale: string
  layoutType: LayoutTypes,
}

const appConfig: AppConfig = {
  // layoutType: LayoutTypes.SimpleSideBar,
  // layoutType: LayoutTypes.CollapsedSideBar,
  layoutType: LayoutTypes.DeckedSideBar,
  apiPrefix: 'https://nobats.ir/api/',
  // apiPrefix: '',
  authenticatedEntryPath: '/dashboard',
  unAuthenticatedEntryPath: '/sign-in',
  enableMock: false,
  locale: 'fa',
}

export default appConfig
