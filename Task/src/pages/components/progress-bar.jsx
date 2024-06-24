import "../../styles/ProgressBar.css";

function ProgressBar({
  current,
  total,
  color = "darkblue",
  backgroundColor = "lightblue",
}) {
  const radius = 50;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (current / total) * circumference;

  return (
    <div className="progress-bar">
      <svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          className="progress-bar__bg"
          stroke={backgroundColor}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-bar__progress"
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="progress-text">
        {current}/{total}
      </div>
    </div>
  );
}

export default ProgressBar;
