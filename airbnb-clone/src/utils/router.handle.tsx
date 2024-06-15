import { Suspense } from 'react';
import { ExtendRouteObjectProps } from '../router';

const RouteWithSubRoutes = (route: ExtendRouteObjectProps) => {
  return (
    <>
      {route.IsPublic ? (
        <>
          <Suspense fallback={<>Loading...</>}></Suspense>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RouteWithSubRoutes;
