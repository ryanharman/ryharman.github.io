function Dots() {
  return (
    <div className="rounded-full bg-opacity-10 bg-rose-500 w-1 h-1 my-1" />
  );
}

const amount = new Array(540).fill(0);

export default function DotsRectangle() {
  return (
    <div className="grid grid-cols-12 w-40 rotate-90">
      {amount.map((_, idx) => (
        <Dots key={idx} />
      ))}
    </div>
  );
}
