import envConfig from "../../../config/env";
import { Webhook } from 'svix'
import {
    WebhookEvent
} from "@clerk/clerk-sdk-node"

import { CreateUserUseCase } from "../../use-cases/user/create.case";
import { GetUserUseCase } from "../../use-cases/user/get.case";
import { CreateUserDto } from "../../dto/user/create.dto";
import { GetUserDto } from "../../dto/user/get.dto";
import { UpdateUserUseCase } from "../../use-cases/user/update.case";
import { UpdateUserDto } from "../../dto/user/update.dto";
import { DeleteUserUseCase } from "../../use-cases/user/delete.case";
import { DeleteUserDto } from "../../dto/user/delete.dto";
import logger from "../../../infrastructure/logging/logger";


export class ClerkWebhookController {

    constructor(private getUserUseCase: GetUserUseCase,
        private createUserUseCase: CreateUserUseCase,
        private updateUserUseCase: UpdateUserUseCase,
        private deleteUserUseCase: DeleteUserUseCase
    ) { }

    async handleWebhook(req: Request, res: Response) {
        console.log('Webhook received');
        console.log(req.body);
        // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
        const WEBHOOK_SECRET = envConfig.clerk.webhookSecret
        if (!WEBHOOK_SECRET) {
            throw new Error('You need a WEBHOOK_SECRET in your .env')
        }

        // Get the headers and body
        const headers = new Headers(req.headers)
        const payload = await req.text()

        logger.info('Webhook body : ' + payload);

        // Get the Svix headers for verification
        const svix_id = headers.get('svix-id') as string
        const svix_timestamp = headers.get('svix-timestamp') as string
        const svix_signature = headers.get('svix-signature') as string

        // If there are no Svix headers, error out
        if (!svix_id || !svix_timestamp || !svix_signature) {
            return new Response('Error occured -- no svix headers', {
                status: 400,
            })
        }

        // Create a new Svix instance with your secret.
        const wh = new Webhook(WEBHOOK_SECRET)

        let evt: WebhookEvent

        // Attempt to verify the incoming webhook
        // If successful, the payload will be available from 'evt'
        // If the verification fails, error out and  return error code
        try {
            evt = wh.verify(payload, {
                'svix-id': svix_id,
                'svix-timestamp': svix_timestamp,
                'svix-signature': svix_signature,
            }) as WebhookEvent
        } catch (err: any) {
            console.log('Error verifying webhook:', err.message)
            return new Response(JSON.stringify({
                success: false,
                message: err.message,
            }), {
                status: 400,
            })
        }

        // Handle the events
        switch (evt.type) {
            case 'user.created':
                logger.info('User created : ' + evt.data.id);
                const createUserDto: CreateUserDto = {
                    emails: evt.data.email_addresses.map((email) => email.email_address),
                    firstName: evt.data.first_name ?? undefined,
                    lastName: evt.data.last_name ?? undefined,
                    phoneNumbers: evt.data.phone_numbers.map((phone) => phone.phone_number),
                    clerkId: evt.data.id
                }

                try {
                    const user = await this.createUserUseCase.execute(createUserDto);
                    return Response.json({ success: true, message: 'User created : ' + user.id });
                } catch (error: any) {
                    logger.error(error);
                    return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), {
                        status: 400
                    })
                }

            case 'user.updated':
                logger.info('User updated : ' + evt.data.id);
                const updateUserDto: UpdateUserDto = {
                    id: evt.data.id,
                    emails: evt.data.email_addresses.map((email) => email.email_address),
                    firstName: evt.data.first_name ?? undefined,
                    lastName: evt.data.last_name ?? undefined,
                    phoneNumbers: evt.data.phone_numbers.map((phone) => phone.phone_number),
                    clerkId: evt.data.id
                }

                try {
                    const user = await this.updateUserUseCase.execute(updateUserDto);
                    return Response.json({ success: true, message: 'User updated : ' + user.id });
                } catch (error: any) {
                    logger.error(error);
                    return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), {
                        status: 400
                    })
                }
        }

        return Response.json(JSON.stringify({
            success: true,
            message: 'Webhook received',
        }))
    }

}