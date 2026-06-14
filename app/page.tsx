export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <span className="text-xl font-bold text-blue-600">TaskFlow</span>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Manage your work, effortlessly.
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-xl">
          TaskFlow helps teams organize tasks, track progress, and ship faster.
        </p>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg text-lg font-medium hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything you need to ship faster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Management</h3>
            <p className="text-gray-500">Create, assign, and track tasks with ease. Never lose track of what needs to be done.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
            <p className="text-gray-500">Invite your team, assign tasks, and work together in real time.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
            <p className="text-gray-500">Visualize your workflow with Kanban boards and track progress at a glance.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-gray-200 text-center text-gray-400 text-sm">
        © 2024 TaskFlow. All rights reserved.
      </footer>
    </main>
  )
}