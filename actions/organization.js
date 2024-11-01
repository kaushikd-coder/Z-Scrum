"use server"

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server"

export async function getOrganization(slug) {

    const { userId } = auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    //Finding the User
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    })

    if (!user) {
        throw new Error("Unauthorized");
    }

    //Finding the Organization
    const organization = await clerkClient().organizations.getOrganization({ slug })

    if (!organization) {
        return null;
    }

    //Finding the Organization Membership_List
    const { data: membership } = await clerkClient().organizations.getOrganizationMembershipList({
        organizationId: organization.id,
    })

    const userMembership = membership.find((member) => member.publicUserData.userId === userId)

    if (!userMembership) {
        return null;
    }

    return organization
}