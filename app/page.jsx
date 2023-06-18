import NamaUndangan from "./components/NamaUndangan"

export default function Home() {
  return (
    <main className="landing-container text-light-300 text-center lg:mb-4 mb-3">
      <p className="lg:heading-medium-h1 heading-medium-h2 lg:font-charlotte font-charlotte">
        Luqman & Sinta
      </p>
      <p className="body-bold-l">Kepada Bapak/Ibu/Saudara/i</p>
      <NamaUndangan />
      <p className="body-medium-md">
        Mohon maaf bila ada kesalahan pada penulisan nama/gelar
      </p>
      <div>
        <button className="body-bold-l bg-primary-300 hover:bg-light-300 text-light-300 hover:text-primary-400 font-bold lg:mt-10 mt-6 py-4 px-3 rounded-full inline-flex justify-center w-[240px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span>Buka Undangan</span>
        </button>
      </div>
    </main>
  )
}
