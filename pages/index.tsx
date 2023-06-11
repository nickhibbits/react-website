import MainPage from "$/components/MainPage";

function Home() {
  // keep total page content in separate component, so that _app.tsx and index.tsx can render on the server
  return <MainPage />;
}

export default Home;
