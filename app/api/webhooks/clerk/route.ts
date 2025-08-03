import prisma from "@/lib/prisma";
import { verifyWebhook, WebhookEvent } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt: WebhookEvent = await verifyWebhook(req);

    if (evt.type === "user.created" || evt.type === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      const primaryEmail = email_addresses[0].email_address;
      if (!primaryEmail) {
        return new NextResponse("No primary email found", { status: 400 });
      }

      await prisma.user.upsert({
        where: { id: id },
        update: {
          name: `${first_name || ""} ${last_name || ""}`.trim(),
          email: primaryEmail,
          imageUrl: image_url,
        },
        create: {
          id: id,
          name: `${first_name || ""} ${last_name || ""}`.trim(),
          email: primaryEmail,
          imageUrl: image_url,
        },
      });
    }

    if (evt.type === "user.deleted") {
      if (evt.data.id) {
        await prisma.user.deleteMany({
          where: {
            id: evt.data.id,
          },
        });
        console.log(`User ${evt.data.id} was successfully deleted.`);
      }
    }
    return new NextResponse("Webhook processed successfully", {
      status: 200,
    });
  } catch (err: any) {
    console.error("Error verifying webhook:", err.message);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }
}
