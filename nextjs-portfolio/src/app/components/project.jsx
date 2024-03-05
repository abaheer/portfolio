export default function Project(props) {
  return (
    <div className="p-5 m-5 shadow-lg bg-sky-900 rounded-2xl center-text">
      <a href="https://github.com/abaheer/yt-to-drive" target="_blank">
        <h1 className="font-medium text-2xl text-center">{props.name}</h1>
        <h2 className="mt-3">{props.desc}</h2>
        <div className="flex justify-center text-2xl p-5 gap-5">
          {props.logos.map((logo, index) => (
            <div key={index}>{logo}</div>
          ))}
        </div>
      </a>
    </div>
  );
}
