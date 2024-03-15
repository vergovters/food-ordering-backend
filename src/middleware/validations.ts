import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateUserReq = [
  body("name").isString().notEmpty().optional().withMessage("Name must be a string"),
  body("addressLine1").isString().notEmpty().optional().withMessage("AddressLine1 must be a string"),
  body("city").isString().notEmpty().optional().withMessage("City must be a string"),
  body("country").isString().notEmpty().optional().withMessage("Country must be a string"),
  handleValidationErrors,
];
