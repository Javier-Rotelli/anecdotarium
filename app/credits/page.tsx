import Image from "next/image";

export default async function Page() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Made with:</h1>
          <ul className="py-6 list-none">
            <li>
              <a className="link link-hover" href="https://nextjs.org/">
                NextJS
              </a>
            </li>
            <li>
              <a className="link link-hover" href="https://appwrite.io/">
                Appwrite.io
              </a>
            </li>
            <li>
              <a
                className="link link-hover"
                href="https://www.flaticon.com/free-icons/post-it"
                title="post-it icons"
              >
                Post-it icons created by juicy_fish - Flaticon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
