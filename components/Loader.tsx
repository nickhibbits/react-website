import loaderStyles from "$/styles/components/Loader.module.scss";

function Loader() {
  return (
    <div className={loaderStyles.loader_component}>
      <span className={loaderStyles.loader}></span>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
