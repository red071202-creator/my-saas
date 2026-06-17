"use server"

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

export async function createProject(formData: FormData) {
  const session = await getServerSession()

  if (!session?.user?.email) {
    throw new Error("Not authenticated")
  }

  const name = formData.get("name") as string
  const description = formData.get("description") as string

  const user = await prisma.user.upsert({
    where: { email: session.user.email },
    update: {},
    create: {
      email: session.user.email,
      name: session.user.name,
      image: session.user.image,
    },
  })

  await prisma.project.create({
    data: {
      name,
      description,
      ownerId: user.id,
    },
  })

  revalidatePath("/dashboard")
}