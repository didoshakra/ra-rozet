//SF-stroke колір обводки/fill-колір заповнення)

export default function Icon(props) {
  const colorStroke = props.colorStroke || "black";
  const colorFill = props.colorFill || "none";
  const width = props.width || "24";
  const height = props.height || "24";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={colorStroke}
      viewBox="0 0 48 48"
    >
      <path
        fill={colorFill}
        d="M16.5 5C10.159 5 5 10.159 5 16.5v15C5 37.841 10.159 43 16.5 43h15C37.841 43 43 37.841 43 31.5v-15C43 10.159 37.841 5 31.5 5h-15zM34 12a2 2 0 11.001 3.999A2 2 0 0134 12zm-10 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3a7 7 0 100 14 7 7 0 100-14z"
      ></path>
    </svg>
  );
}
