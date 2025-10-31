import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import type { CustomJwtSessionClaims } from "@repo/types";
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  req.userId = userId;
  next();
};

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const auth = getAuth(req);
  if (!auth.isAuthenticated) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  const claims = auth.sessionClaims as CustomJwtSessionClaims;
  if (claims.metadata?.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }
  req.userId = auth.userId;
  next();
};
