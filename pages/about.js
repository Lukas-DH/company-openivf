import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/about")}>
      Click me
    </button>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths(context) {
  return {
    Paths: {}, // will be passed to the page component as props
  };
}
