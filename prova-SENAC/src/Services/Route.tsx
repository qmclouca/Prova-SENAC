import GitHubUser from "../Components/GitHubUsersProps/GitHubUser";
import PageCards from "../Components/PageCards/PageCards";

// routes.ts
interface RouteType {
    path: string;
    exact?: boolean;
    component: React.ComponentType<any>;
    name: string;
  }
  
  const routes: RouteType[] = [
    {
      path: '/',
      exact: true,
      component: PageCards,
      name: 'Home'
    },
    {
      path: '/github-user',
      component: GitHubUser,
      name: 'GitHub User'
    }
  ];
  
  export default routes;
  