export default function sample() {
  return (
    <>
      <button
        onClick={() => {
          throw new Error("Customer error button clicked");
        }}
      >
        Click me
      </button>
    </>
  );
}
