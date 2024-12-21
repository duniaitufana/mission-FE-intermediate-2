export default function ButtonUser({ idInput, children, ...porps }) {
  return (
    <>
      <label id={idInput}>{children}</label>
      <input {...porps}></input>
    </>
  );
}
