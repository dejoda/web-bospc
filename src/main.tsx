import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/router"

const root = document.getElementById("root") as HTMLElement

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
