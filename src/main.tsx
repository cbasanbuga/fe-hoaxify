import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import SingUp from "@/pages/SingUp";
import { Toaster } from "sonner";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster richColors/>
        <SingUp/>
    </StrictMode>,
)
