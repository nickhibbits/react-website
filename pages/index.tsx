import MainPage from "$/components/MainPage";

function Home() {
  // keep page content in separate component, so _app.tsx and index.tsx can render on the server
  return <MainPage />;
}

export default Home;
