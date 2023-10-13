import React from 'react';
const LoginContainer = React.lazy(() => import('../modules/Login/LoginContainer'));
const DashboardContainer = React.lazy(() => import('../modules/Dashboard/DashboardContainer'));
const SettingContainer = React.lazy(() => import('../modules/Setting/SettingContainer'));
const ProjectContainer = React.lazy(() => import('../modules/Projects/ProjectContainer'));
const ProjectDocumentsContainer = React.lazy(() =>
  import('../modules/ProjectDocuments/ProjectDocumentsContainer')
);
const DocumentContainer = React.lazy(() => import('../modules/Document/DocumentContainer'));
const DocumentHistoryList = React.lazy(() => import('../modules/Document/DocumentHistoryList'));
const NotificationContainer = React.lazy(() =>
  import('../modules/Notification/NotificationContainer')
);

const AuthContainer = React.lazy(() => import('../modules/Auth/AuthContainer'));
// const LandingContainer = React.lazy(() => import('../modules/LandingPage/LandingContainer'));
const DocumentReviewContainer = React.lazy(() =>
  import('../modules/DocumentReview/DocumentReviewContainer')
);
const DocumentSignContainer = React.lazy(() =>
  import('../modules/DocumentSign/DocumentSignContainer')
);
const DocumentHistory = React.lazy(() => import('../modules/DocumentHistory/DocumentHistory'));
const DownloadContainer = React.lazy(() => import('../modules/Download/DownloadContainer'));
const DocumentHistoryDetailContainer = React.lazy(() =>
  import('../modules/DocumentHistoryDetail/DocumentHistoryDetailContainer')
);
const DocumentForSignContainer = React.lazy(() =>
  import('../modules/DocumentForSign/DocumentForSignContainer')
);

const SignPdfContainer = React.lazy(() => import('../modules/SignPdf/SignPdfContainer'));
const ProfileContainer = React.lazy(() => import('../modules/Profile/ProfileContainer'));
export const PublicRoutesList = [
  {
    name: 'login',
    title: 'Login',
    path: '/login',
    Component: LoginContainer
  },
  {
    name: 'authentication',
    title: 'Authentication',
    path: '/auth',
    Component: AuthContainer
  },
  {
    name: 'Landing',
    title: 'Landing',
    path: '/',
    Component: LoginContainer
  }
];

// Private Routes

export const PrivateRoutesList = [
  {
    name: 'dashboard',
    title: 'Dashboard',
    path: 'dashboard',
    component: DashboardContainer
  },
  {
    name: 'setting',
    title: 'Setting',
    path: 'setting',
    component: SettingContainer
  },
  {
    name: 'projects',
    title: 'Projects',
    path: 'projects',
    component: ProjectContainer
  },
  {
    name: 'project-documents',
    title: 'Project Documents',
    path: '/project-documents/:id',
    component: ProjectDocumentsContainer
  },
  {
    name: 'documents',
    title: 'Documents',
    path: '/documents/:id',
    component: DocumentContainer
  },
  {
    name: 'documents',
    title: 'Documents',
    path: '/document-info',
    component: DocumentHistoryList
  },
  {
    name: 'notification',
    title: 'Notification',
    path: '/notification',
    component: NotificationContainer
  },
  {
    name: 'document-review',
    title: 'Document Review',
    path: '/document-review/:id',
    component: DocumentReviewContainer
  },
  {
    name: 'document-history-detail',
    title: 'Document History Details',
    path: '/document-history-detail/:id/:driveItemID',
    component: DocumentHistoryDetailContainer
  },
  {
    name: 'document-history',
    title: 'Document History',
    path: '/document-history',
    component: DocumentHistory
  },
  {
    name: 'document-sign',
    title: 'Document Sign',
    component: DocumentSignContainer
  },
  {
    name: 'download',
    title: 'Download',
    path: '/download',
    component: DownloadContainer
  },
  {
    name: 'document For Sign',
    title: 'Document For Sign',
    path: '/docForSign/:id',
    component: DocumentForSignContainer
  },
  {
    name: 'document For Sign',
    title: 'Document For Sign',
    path: '/sign-pdf/:id',
    component: SignPdfContainer
  },
  {
    name: 'profile',
    title: 'Profile',
    path: '/profile',
    component: ProfileContainer
  }
];
