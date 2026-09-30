import PageContainer from "@/components/PageContainer";

export default function NewReportPage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-stone-900">Report an issue</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Tell us what you have seen. Submitting reports will be added later —
        this form is a layout preview.
      </p>

      <form className="mt-8 max-w-xl space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium text-stone-800">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Overflowing bin on High Street"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-teal-700"
          />
        </div>

        <div>
          <label htmlFor="location" className="mb-1 block text-sm font-medium text-stone-800">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Street name or nearby landmark"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-teal-700"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-stone-800">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="What is the problem, and how long has it been there?"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-teal-700"
          />
        </div>

        <div>
          <label htmlFor="photo" className="mb-1 block text-sm font-medium text-stone-800">
            Photo
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            className="w-full text-sm text-stone-600 file:mr-3 file:rounded-md file:border-0 file:bg-teal-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-teal-800"
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-teal-700 px-5 py-2.5 font-medium text-white hover:bg-teal-800"
        >
          Submit report
        </button>
      </form>
    </PageContainer>
  );
}
