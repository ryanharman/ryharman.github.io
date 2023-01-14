import Dots from './Dots';

export default function DotsRectangle() {
  const amount = new Array(540).fill(0);
  return (
    <div className="grid grid-cols-12 w-40 rotate-90">
      {amount.map((_, idx) => (
        <Dots key={idx} />
      ))}
    </div>
  );
}
