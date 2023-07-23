import Forms from "./Forms";

export default async function Page() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <article className="py-6 prose">
            <p>
              This is a place to share and preserve memories. From heartfelt
              letters to thrilling adventures, this vault safeguards the legacy
              of the group, serving as a testament to your shared journey.
            </p>
          </article>
        </div>
        <Forms />
      </div>
    </div>
  );
}
