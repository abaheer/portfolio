export default function Project(props) {
  return (
    <div className="transition ease-in-out delay-200 hover:-translate-y-2 hover:scale-110 hover:bg-slate-950 duration-300 w-[500px]  bg-slate-700 aspect-square p-10 m-5 shadow-lg rounded-2xl center-text ">
      <a href={props.link} target="_blank">
        <h1 className="font-bold text-3xl text-center">{props.name}</h1>
        <div className="flex justify-center text-4xl p-5 gap-5">
          {props.logos.map((logo, index) => (
            <div key={index}>{logo}</div>
          ))}
        </div>
        <h2 className="mt-2 text-gray-200">{props.desc}</h2>
      </a>
    </div>
  );
}
