import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  return (
    <main className="px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome back, {session.user?.name}! 👋
      </h1>
      <p className="text-gray-500 mt-2">
        This is your protected dashboard.
      </p>
    </main>
  )
}