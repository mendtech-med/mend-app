import logger from "@/server/infrastructure/logging/logger";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: Response) {
    const headers = new Headers(req.headers);
    logger.info('Webhook received : ' + JSON.stringify(headers.get('test')));
    return Response.json({ message: 'Webhook received' });
};
