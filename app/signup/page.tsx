import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export default function SignupPage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-stone-900">Create an account</h1>
      <p className="mt-2 text-stone-600">
        Accounts will be added later. This page is a placeholder.
      </p>

      <form className="mt-8 max-w-md space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-teal-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-teal-700"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-stone-800">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-teal-700"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-lg bg-teal-700 px-5 py-2.5 font-medium text-white hover:bg-teal-800"
        >
          Sign up
        </button>
        <p className="text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-teal-800 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </PageContainer>
  );
}
