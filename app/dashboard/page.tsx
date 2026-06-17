import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { createProject } from "./actions"
import { Project } from "@/app/generated/prisma"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email ?? "" },
    include: { projects: true },
  })

  const projects = user?.projects ?? []

  return (
    <main className="px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white dark:text-white mb-8">
        Welcome back, {session.user?.name}! 👋
      </h1>

      {/* Create Project Form */}
      <form action={createProject} className="mb-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">New Project</h2>
        <input
          type="text"
          name="name"
          placeholder="Project name"
          required
          className="w-full mb-3 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800"
        />
        <textarea
          name="description"
          placeholder="Description (optional)"
          className="w-full mb-3 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Create Project
        </button>
      </form>

      {/* Project List */}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No projects yet. Create your first one above.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project: Project) => (
            <div key={project.id} className="p-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}