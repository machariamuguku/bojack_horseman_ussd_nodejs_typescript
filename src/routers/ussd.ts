import { Router } from "express";

// controller methods
import { ussdCallback, ussdNotification } from "../controllers/ussd";

const ussdRouter = Router();

// router methods

// ussd callback
ussdRouter.post("/dXNzZGNhbGxiYWNr", ussdCallback);

// ussd notification callback
ussdRouter.post("/dXNzZE5vdGlmaWNhdGlvbg", ussdNotification);

// export as a module
export { ussdRouter };
