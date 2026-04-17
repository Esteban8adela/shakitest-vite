// Creating a helper for rendering components and user Events
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactElement } from "react";   

type RenderOptions = Parameters<typeof render>[1];
export function setUpUserEvent(ui: ReactElement, options?: RenderOptions) {
    return{
        ...render(ui, options),
        user: userEvent.setup(),
    }

}