//Тінь на весь екран  bg-black/30

export default function BackShadow({ setDrawerOpen }) {
  return (
    <div
      className="fixed inset-0 bg-black/30"
      ariaHidden="true "
      onClick={(e) => setDrawerOpen(false)}
    ></div>
  );
}
