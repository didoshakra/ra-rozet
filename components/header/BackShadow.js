//Тінь на весь екран  bg-black/30

export default function BackShadow({ setDrawerOpen }) {
  return (
    <div
      className="bg-bodyeclipseBg fixed inset-0"
      aria-hidden="true "
      onClick={(e) => setDrawerOpen(false)}
    ></div>
  );
}
