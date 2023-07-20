export default function Index() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: `/fips/intro`,
      permanent: false,
    },
  };
}
