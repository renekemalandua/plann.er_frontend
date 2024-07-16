import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { CreateTrip } from "./pages/create-trip/page";
import { TripDetails } from "./pages/trip-details/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip/>,
  },
  {
    path: "/trip/:tripId",
    element: <TripDetails/>,
  },
]);

export function App() {
  
  return <RouterProvider router={router} />
}