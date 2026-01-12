"use client";

export default function ErrorPage({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "2rem", color: "red" }}>
      <h2>Coś poszło nie tak</h2>
      <p>{error.message}</p>

      <button onClick={reset}>
        Spróbuj ponownie
      </button>
    </div>
  );
}
