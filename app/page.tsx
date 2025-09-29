export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        <div className="loader-wrapper">
          <span className="loader-letter">A</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">i</span>
          <span className="loader-letter">m</span>
          <span className="loader-letter">a</span>
          <span className="loader-letter">t</span>
          <span className="loader-letter">i</span>
          <span className="loader-letter">o</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">🤯</span>

          <div className="loader"></div>
        </div>
      </h1>
      <p className="text-lg text-white mb-6">
        Click this button to see what I'm working on rn!
      </p>
      <button className="" >
        <a
          href="https://vocaview.com"
        >
          Click Me!
        </a>
      </button>
    </main>
  );
}