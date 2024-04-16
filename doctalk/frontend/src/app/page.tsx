import GeneratedImage from "@/components/UserChat";

export default function Home() {
  return (
    <main className="container flex-height">
      <div className="hero">
        <h1>
          Searching Docs is Easy!
        </h1>
      </div>
      <GeneratedImage />
      <div>
        <p className="credit">
          This demo is utilizing documentation from{" "}
          <a href="https://www.braze.com/docs" target="_blank">
            Braze
          </a>{" "}
          
        </p>
        <p className="disclaimer">
          Please evaluate model response quality independently before using
          these for production use cases.
        </p>
      </div>
    </main>
  );
}
